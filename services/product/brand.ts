import { Brand, ProductCategory } from "@prisma/client";
import { prisma } from "@prisma/index";



export const getProductBrand = async () => {
    try {
        const response = await prisma.brand.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return response;

    } catch (err) {
        throw err;
    }
}

export const createProductBrand = async (data: Omit<Brand, 'id' | "status" | "createdAt" | "updatedAt">) => {
    try {
        const response = await prisma.brand.create({ data })
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProductBrand = async (data: Brand) => {
    const { id, ...updateData } = data;
    try {
        const response = await prisma.brand.update({
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


export const removeProductBrand = async (id: number) => {
    try {
        const response = await prisma.brand.delete({
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}

