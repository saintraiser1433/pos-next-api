import { Request, Response, NextFunction } from "express";
import { Brand, Product, ProductCategory } from "@prisma/client";
import { parseId } from "@utils/parseId";
import { createProduct, getAllProduct, getProductById, modifyProduct, removeProduct } from "@services/product/product";




export const fetchProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const response = await getAllProduct();
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

export const fetchProductById = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ error: "Invalid Product ID." });
    }
    try {
        const response = await getProductById(id);
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}


export const insertProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body = req.body as Omit<Product, 'id' | "status" | "category" | "brand" | "productUnit" | "saleUnit" | "purchaseUnit" | "createdAt" | "updatedAt">;
    const file = req.file as Express.Multer.File;
    try {
        // const validation = validate(productBrandSchema, body);
        const response = await createProduct(body, file);
        return res.status(200).json({
            message: 'Successfully inserted',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body = req.body as Omit<Product, "createdAt" | "updatedAt">;
    const file = req.file as Express.Multer.File;
    try {
        const response = await modifyProduct(body, file);
        return res.status(200).json({
            message: 'Successfully updated',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ error: "Invalid Product ID." });
    }
    try {
        await removeProduct(id);
        return res.status(200).json({
            message: 'Successfully deleted',
        });
    } catch (err) {
        next(err);
    }
}
