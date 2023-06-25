import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (req: any, res: Response) => {
  try {
    const { productName, quantity, price, remark, description } = req.body;
    const userId = req.user.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User not found");
    const product = await prisma.product.create({
      data: {
        productName,
        quantity,
        price,
        remark,
        description,
        seller: user.username,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    console.log(req);
    const products = await prisma.product.findMany();
    console.log(products);
    if (!products) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(products);
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "Failed to retrieve product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { productName, quantity, price, remark, description } = req.body;

    const product = await prisma.product.update({
      where: { id: Number(productId) },
      data: { productName, quantity, price, remark, description },
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    await prisma.product.delete({
      where: { id: Number(productId) },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
