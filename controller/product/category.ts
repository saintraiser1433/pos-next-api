import { Request, Response, NextFunction } from "express";
import { getProductCategory } from "../../services/product/category";

export const fetchProductCategory = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const response = await getProductCategory();
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}