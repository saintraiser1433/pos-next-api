import { Request, Response, NextFunction } from "express";
import { createProductCategory, getProductCategory, modifyProductCategory, removeProductCategory } from "@services/product/category";
import { ProductCategory } from "@prisma/client";
import { parseId } from "@utils/parseId";
import { validate } from "@utils/validation";
import { z } from "zod";
import { productCategorySchema } from "schemas/productCategory";

export const fetchProductCategory = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const response = await getProductCategory();
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}


export const insertProductCategory = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body = req.body;
    try {
        const validation = validate(productCategorySchema, body);
        const response = await createProductCategory(validation);
        return res.status(200).json({
            message: 'Successfully inserted',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const updateProductCategory = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body: ProductCategory = req.body;
    try {
        const response = await modifyProductCategory(body);
        return res.status(200).json({
            message: 'Successfully updated',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const deleteProductCategory = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ error: "Invalid Category ID." });
    }
    try {
        await removeProductCategory(id);
        return res.status(200).json({
            message: 'Successfully deleted',
        });
    } catch (err) {
        next(err);
    }
}
