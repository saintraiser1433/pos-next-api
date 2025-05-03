
import { BaseUnit } from "@prisma/client";
import { prisma } from "@prisma/index";



export const getProductBaseUnit = async () => {
    try {
        const response = await prisma.baseUnit.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return response;

    } catch (err) {
        throw err;
    }
}

export const createProductBaseUnit = async (data: Omit<BaseUnit, 'id' | "createdAt" | "updatedAt">) => {
    try {
        const response = await prisma.baseUnit.create({ data })
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProductBaseUnit = async (data: BaseUnit) => {
    const { id, ...updateData } = data;

    try {
        const response = await prisma.baseUnit.update({
            data: updateData,
            where: {
                id: id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}


export const removeProductBaseUnit = async (id: number) => {
    try {
        const response = await prisma.baseUnit.delete({
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}

