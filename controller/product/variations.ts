import { Request, Response, NextFunction } from "express";
import { parseId } from "@utils/parseId";
import { validate } from "@utils/validation";
import { productVariants } from "schemas/schemas";
import { Variations } from "@prisma/client";
import { createProductVariant, getProductVariant, modifyProductVariant, removeProductVariant } from "@services/product/variations";




export const fetchProductVariants = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const response = await getProductVariant();
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}


export const insertProductVariants = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body = req.body;
    try {
        const validation = validate(productVariants, body);
        const response = await createProductVariant(validation);
        return res.status(200).json({
            message: 'Successfully inserted',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const updateProductVariants = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body: Variations = req.body;
    try {
        const response = await modifyProductVariant(body);
        return res.status(200).json({
            message: 'Successfully updated',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const deleteProductVariants = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ error: "Invalid Variants ID." });
    }
    try {
        await removeProductVariant(id);
        return res.status(200).json({
            message: 'Successfully deleted',
        });
    } catch (err) {
        next(err);
    }
}
