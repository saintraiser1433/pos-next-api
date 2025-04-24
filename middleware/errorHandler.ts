import { Request, Response, NextFunction } from "express";
import { appLogger } from "../utils/logger";
import { PrismaClientKnownRequestError, PrismaClientValidationError, PrismaClientInitializationError, PrismaClientRustPanicError } from '@prisma/client/runtime/library'
import { ValidationError } from "@utils/validation";


export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction): Response => {
    const error = err instanceof Error ? err : new Error("Unknown error");

    // appLogger.error("Error during request processing:", {
    //     message: error.message,
    //     stack: error.stack,
    //     body: req.body,
    //     params: req.params,
    //     route: req.originalUrl,
    //     method: req.method,
    // });

    if (err instanceof ValidationError) {
        return res.status(400).json({
            message: "Validation failed",
            errors: err.errors.map(error => ({
                field: error.field,
                message: error.message
            }))
        });
    }
    if (err instanceof PrismaClientKnownRequestError) {
        appLogger.error("Prisma error:", {
            code: err.code,
            message: err.message,
            meta: err.meta,
        });

        switch (err.code) {
            case "P2025":
                return res.status(404).json({ message: "Record not found" });
            case "P2002":
                return res.status(409).json({ message: "This record is already exist" });
            case "P2003":
                return res.status(400).json({ message: err.message });
            case "P2000":
                return res.status(400).json({ message: "The provided value for the column is too long for the column's type" });
            case "P2001":
                return res.status(404).json({ message: err.message });
            default:
                return res.status(500).json({ message: "An unexpected database error occurred", details: err.message });
        }
    } else if (err instanceof PrismaClientValidationError) {
        return res.status(400).json({ message: "Invalid data provided", details: err.message });
    } else if (err instanceof PrismaClientInitializationError) {
        return res.status(500).json({ message: "Failed to connect to the database", details: err.message });
    } else if (err instanceof PrismaClientRustPanicError) {
        return res.status(500).json({ message: "A critical database error occurred", details: err.message });
    }

    return res.status(500).json({ message: "An unexpected error occurred", details: error.message });
};