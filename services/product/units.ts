
import { Unit } from "@prisma/client";
import { prisma } from "@prisma/index";



export const getProductUnit = async (baseUnitId?: number) => {

    try {
        const response = await prisma.unit.findMany({
            include: {
                baseUnit: true,
            },
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                baseUnitId: baseUnitId ? baseUnitId : undefined
            }
        });

        const transformData = response.map((unit) => ({
            id:unit.id,
            name:unit.name,
            shortName:unit.shortName,
            baseUnit: unit.baseUnit.name,
            operator: unit.operator,
            operatorValue: unit.operationValue,
        }));

        return transformData;

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

