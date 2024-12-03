import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST (req: Request) {
    try
    {
        const { username, password } = await req.json();
        // verify if the user already exists
        const alreadyExists = await prisma.user.findUnique({
            where: {
                username: username
            }
        });
        if (alreadyExists)
        {
            return NextResponse.json({ admin: null, message: "User already exists" }, { status: 400 });
        }

        // hash the password
        const hashedPassword = await hash(password, 10);
        // create a new admin
        const admin = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        });

        // return the admin without the password
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: adminPassword, ...adminWithoutPassword } = admin;
        return NextResponse.json({ admin: adminWithoutPassword, message: "Admin created successfully" }, { status: 201 });

    } catch (error)
    {
        return NextResponse.json({ admin: null, message: error }, { status: 500 });
    }
}

