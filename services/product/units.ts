
import { Unit } from "@prisma/client";
import { prisma } from "@prisma/index";



export const getProductUnit = async (baseUnitId?: number) => {

    try {
        const response = await prisma.unit.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                baseUnitId: baseUnitId ? baseUnitId : undefined
            }
        })

        return response;

    } catch (err) {
        throw err;
    }
}

export const createProductUnit = async (data: Omit<Unit, 'id' | "status" | "createdAt" | "updatedAt">) => {
    try {
        const response = await prisma.unit.create({ data })
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProductUnit = async (data: Unit) => {
    const { id, ...updateData } = data;

    try {
        const response = await prisma.unit.update({
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


export const removeProductUnit = async (id: number) => {
    try {
        const response = await prisma.unit.delete({
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}

