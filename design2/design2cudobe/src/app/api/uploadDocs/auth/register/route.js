// This relative path goes up 5 levels to reach the root prisma folder
import { prisma } from "@prisma/client"; 
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { accountType, fullName, email, password } = body;

    // ... (rest of your validation and check existing user logic)

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        accountType,
        documents: "[]", // Required because 'documents' is in your table
      },
    });

    return Response.json(
      { message: "User registered successfully", userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("DATABASE ERROR:", error); // Check your VS Code terminal for this!
    return Response.json(
      { message: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}