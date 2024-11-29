import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import NavbarToggle from "./NavbarToggle";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return <NavbarToggle session={session} />;
}
