import { Response } from "express";
import { appLogger } from "@utils/logger";
import { z, ZodSchema } from "zod";

export class ValidationError extends Error {
    constructor(public errors: { field: string; message: string }[]) {
        super("Validation failed");
        this.name = "ValidationError";
    }
}


export function validate<T>(schema: ZodSchema<T>, data: unknown): T {
    const result = schema.safeParse(data);
    if (!result.success) {
        const messages = result.error.issues.map(issue => ({
            field: issue.path.join("."),
            message: issue.message,
        }));
        throw new ValidationError(messages);
    }
    return result.data;
}

