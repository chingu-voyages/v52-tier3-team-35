import SignInForm from "@/components/AdminForm/SignInForm";

export default function AdminsSignInPage () {
    return (
        <div className="flex flex-col justify-center items-center mt-6">
            <h1 className="text-2xl font-semibold">Admin Sign In</h1>
            <SignInForm />
        </div>
    )
}