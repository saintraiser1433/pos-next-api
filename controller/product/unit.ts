import { Request, Response, NextFunction } from "express";
import { Unit } from "@prisma/client";
import { parseId } from "@utils/parseId";
import { validate } from "@utils/validation";
import { productUnit } from "schemas/schemas";
import { getProductUnit, createProductUnit, modifyProductUnit, removeProductUnit } from "@services/product/units";



export const fetchProductUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const baseUnitId = parseId(req.query.baseUnitId as string) ?? undefined;
    try {
        const response = await getProductUnit(baseUnitId);
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}


export const insertProductUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body = req.body;
    try {
        const validation = validate(productUnit, body);
        const response = await createProductUnit(validation);
        return res.status(200).json({
            message: 'Successfully inserted',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const updateProductUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const body: Unit = req.body;
    try {
        const response = await modifyProductUnit(body);
        return res.status(200).json({
            message: 'Successfully updated',
            data: response
        });
    } catch (err) {
        next(err);
    }
}

export const deleteProductUnit = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = parseId(req.params.id);
    if (!id) {
        return res.status(400).json({ error: "Invalid Unit ID." });
    }
    try {
        await removeProductUnit(id);
        return res.status(200).json({
            message: 'Successfully deleted',
        });
    } catch (err) {
        next(err);
    }
}
