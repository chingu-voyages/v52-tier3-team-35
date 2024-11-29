import SignUpForm from "@/components/AdminForm/SignUpForm";
import Footer from "@/components/Footer";
// import getAdmins from "./action";

export const dynamic = "force-dynamic";

export default async function AdminsRegisterPage () {
  // const admins = await getAdmins();
  return (
    <>
      <div className=" flex flex-col justify-center items-center mt-6">
        <h1 className=" text-2xl font-semibold">Admin Registration</h1>
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
}
