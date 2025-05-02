import { Variations } from "@prisma/client";
import { prisma } from "@prisma/index";



export const getProductVariant = async () => {
    try {
        const response = await prisma.variations.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return response;

    } catch (err) {
        throw err;
    }
}

export const createProductVariant = async (data: Omit<Variations, 'id' | "status" | "createdAt" | "updatedAt">) => {
    try {
        const response = await prisma.variations.create({ data })
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProductVariant = async (data: Variations) => {
    const { id, ...updateData } = data;
    try {
        const response = await prisma.variations.update({
            data: updateData,
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}


export const removeProductVariant = async (id: number) => {
    try {
        const response = await prisma.variations.delete({
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}

