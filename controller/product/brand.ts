import { Request, Response, NextFunction } from "express";
import { Brand, ProductCategory } from "@prisma/client";
import { parseId } from "@utils/parseId";
import { validate } from "@utils/validation";
import { createProductBrand, getProductBrand, modifyProductBrand, removeProductBrand } from "@services/product/brand";
import { productBrandSchema } from "schemas/schemas";



export const fetchProductBrand = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const response = await getProductBrand();
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}


export const insertProductBrand = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body = req.body as Omit<Brand, 'id' | "status" | "brandImage" | "createdAt" | "updatedAt">;
    const file = req.file as Express.Multer.File;
    try {
        // const validation = validate(productBrandSchema, body);
        const response = await createProductBrand(body, file);
        return res.status(200).json({
            message: 'Successfully inserted',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const updateProductBrand = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body = req.body as Omit<Brand,  "createdAt" | "updatedAt">;
    const file = req.file as Express.Multer.File;
    try {
        const response = await modifyProductBrand(body, file);
        return res.status(200).json({
            message: 'Successfully updated',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const deleteProductBrand = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ error: "Invalid Brand ID." });
    }
    try {
        await removeProductBrand(id);
        return res.status(200).json({
            message: 'Successfully deleted',
        });
    } catch (err) {
        next(err);
    }
}
