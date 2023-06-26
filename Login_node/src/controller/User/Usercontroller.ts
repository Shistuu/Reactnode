import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, address, phone, gender, password } = req.body;
    const user = await prisma.user.create({
      data: {
        username,
        email,
        address,
        phone,
        gender,
        password,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Enter your email and password");

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found!");
    let passwordMatch = user.password === password;
    if (!passwordMatch) throw new Error("Incorrect Password");

    const payload = { id: user.id, email: user.email };
    const expiresIn = "365d";
    const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn });

    res.status(200).json({
      status: "Success",
      token,
    });
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { username, email, address, phone, gender } = req.body;

    const user = await prisma.user.update({
      where: { id: Number(userId) },
      data: { username, email, address, phone, gender },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    await prisma.user.delete({
      where: { id: Number(userId) },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
