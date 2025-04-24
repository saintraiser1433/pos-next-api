import { ProductCategory } from "@prisma/client";
import { prisma } from "@prisma/index";



export const getProductCategory = async () => {
    try {
        const response = await prisma.productCategory.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return response;

    } catch (err) {
        throw err;
    }
}

export const createProductCategory = async (data: Omit<ProductCategory, 'id' | "status" | "createdAt">) => {
    try {
        const response = await prisma.productCategory.create({data})
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProductCategory = async (data: ProductCategory, id: number) => {
    try {
        const response = await prisma.productCategory.update({
            data: {
                name: data.name,
                status: data.status
            },
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}


export const removeProductCategory = async (id: number) => {
    try {
        const response = await prisma.productCategory.delete({
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}

