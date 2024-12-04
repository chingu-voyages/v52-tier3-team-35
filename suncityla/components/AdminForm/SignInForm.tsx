"use client"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"
import { useState, useTransition } from "react";
import { Spinner } from '../ui/icon';
import { Github } from 'lucide-react';

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

export default function SignInForm () {
    const router = useRouter()
    const [authError, setAuthError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const { register, handleSubmit, formState: { errors } } = useForm<AdminFormData>({
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

        if (signInData?.error === "CredentialsSignin") {
            setAuthError("Invalid username or password")
        } else {
            startTransition(() => {
                router.push("/admin")
                router.refresh() // refresh page after transition
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4 bg-[#7f95d1] pt-5 pb-5 px-10 my-5 w-4/5 h-auto md:w-1/3 rounded-md">
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
            <Button type="submit" variant="default">Sign In {isPending && "..."}  </Button>
            <div className='mx-auto my-1 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                or
            </div>
            <Button onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/admin" })} variant="default">  <Github className="w-8 h-8 mr-2" />Sign In with GitHub</Button>
            {isPending && <Spinner />}
        </form>
    )
}