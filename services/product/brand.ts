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

export const createProductBrand = async (data: Omit<Brand, 'id' | "status" | "brandImage" | "createdAt" | "updatedAt">, brandImage: Express.Multer.File) => {
    try {
        const response = await prisma.brand.create({
            data: {
                name: data.name,
                description: data.description,
                brandImage: brandImage?.filename || ''
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProductBrand = async (data: Omit<Brand, | "createdAt" | "updatedAt">, imageName: Express.Multer.File) => {

    try {
        const response = await prisma.brand.update({
            data: {
                name: data.name,
                brandImage: imageName?.filename || data.brandImage,
                description: data.description,
                status: Boolean(data.status)
            },
            where: {
                id: Number(data.id)
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

