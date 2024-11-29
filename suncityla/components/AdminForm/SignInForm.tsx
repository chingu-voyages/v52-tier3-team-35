"use client"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"
import { useState } from "react";

//validation schema with Zod
const AdminSchema = z
    .object({
        username: z.string().min(1, "Username is required"),
        password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters long"),
    });

type AdminFormData = z.infer<typeof AdminSchema>;

export default function SignInForm() {
    const router = useRouter()
    const [authError, setAuthError] = useState<string | null>(null);
    
    const { register, handleSubmit, formState : {errors} } = useForm<AdminFormData>({
        resolver: zodResolver(AdminSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })

    const onSubmit = async (data: AdminFormData) => {
        setAuthError(null)
        const signInData = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
        })

        if(signInData?.error === "CredentialsSignin") {
            setAuthError("Invalid username or password")
        }else{
            router.push('/admin')
            router.refresh() //refresh the page after successful login
        }
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="regForm">
                <div>
                    <label htmlFor="username">Username</label>
                    <Input
                    {...register("username")}
                    id="username"
                    placeholder="Enter your username"
                    className="mt-1 bg-white"
                    />
                    {errors.username && <p className="text-red-600">{errors.username.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input
                    {...register("password")}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1 bg-white"
                    />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    {authError && <p className="text-red-600">{authError}</p>}
                </div>
                    <Button type="submit" variant="default">Sign In</Button>
            </form>
    )
}