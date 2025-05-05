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

export const createProductBrand = async (data: Omit<Brand, 'id' | "status" | "brandImage" | "createdAt" | "updatedAt">, brandImage: any) => {
    try {
        const response = await prisma.brand.create({
            data: {
                name: data.name,
                description: data.description,
                brandImage
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProductBrand = async (data: Brand, imageName: any) => {
    const { id, brandImage, ...updateData } = data;
    try {
        const response = await prisma.brand.update({
            data: {
                name: updateData.name,
                brandImage: imageName,
                description: updateData.description,
                status: updateData.status
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

