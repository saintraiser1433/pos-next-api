import { Request, Response, NextFunction } from "express";
import { BaseUnit, Unit } from "@prisma/client";
import { parseId } from "@utils/parseId";
import { validate } from "@utils/validation";

import { createProductBaseUnit, getProductBaseUnit, modifyProductBaseUnit, removeProductBaseUnit } from "@services/product/base-units";
import { productBaseUnit } from "schemas/schemas";



export const fetchProductBaseUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const response = await getProductBaseUnit();
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}


export const insertProductBaseUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body: BaseUnit = req.body;
    try {
        const validation = validate(productBaseUnit, body);
        const response = await createProductBaseUnit(validation);
        return res.status(200).json({
            message: 'Successfully inserted',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const updateProductBaseUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body: BaseUnit = req.body;
    try {
        const response = await modifyProductBaseUnit(body);
        return res.status(200).json({
            message: 'Successfully updated',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const deleteProductBaseUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ error: "Invalid BaseUnit ID." });
    }
    try {
        await removeProductBaseUnit(id);
        return res.status(200).json({
            message: 'Successfully deleted',
        });
    } catch (err) {
        next(err);
    }
}
