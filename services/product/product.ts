import { Product, ProductCategory } from "@prisma/client";
import { prisma } from "@prisma/index";




export const getAllProduct = async () => {
    try {
        const response = await prisma.product.findMany({
            include: {
                brand: true,
                category: true,
                productUnit: true
            },
            where: {
                status: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        const transformData = response.map((item) => ({
            ...item,
            brand: item.brand.name,
            category: item.category.name,
            productUnit: item.productUnit.name
        }))




        return transformData;

    } catch (err) {
        throw err;
    }
}

export const getProductById = async (id: number) => {
    try {
        const response = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            where: {
                AND: [
                    {
                        status: true
                    },
                    {
                        id: id
                    }
                ]
            },
        })

        return response;

    } catch (err) {
        throw err;
    }
}

export const createProduct = async (data: Omit<Product, 'id' | "status" | "category" | "brand" | "productUnit" | "saleUnit" | "purchaseUnit" | "createdAt" | "updatedAt">, productImage: Express.Multer.File) => {
    try {
        const response = await prisma.product.create({
            data: {
                name: data.name,
                barcode: data.barcode,
                barcodeType: data.barcodeType,
                category: {
                    connect: {
                        id: Number(data.categoryId)
                    }
                },
                brand: {
                    connect: {
                        id: Number(data.brandId)
                    }
                },
                orderTax: Number(data.orderTax),
                taxType: data.taxType,
                productImage: productImage?.filename,
                productType: data.productType,
                productCost: Number(data.productCost),
                productPrice: Number(data.productPrice),
                productUnit: {
                    connect: {
                        id: Number(data.productUnitId)
                    }
                },
                saleUnit: {
                    connect: {
                        id: Number(data.saleUnitId)
                    }
                },
                purchaseUnit: {
                    connect: {
                        id: Number(data.purchaseUnitId)
                    }
                },
                stockAlert: Number(data.stockAlert),
                warrantyPeriod: Number(data.warrantyPeriod),
                warrantyPaymentType: data.warrantyPaymentType,
                warrantyTerms: data.warrantyTerms,
                isGuaranteed: data.isGuaranteed,

            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}


export const modifyProduct = async (data: Omit<Product, "category" | "brand" | "productUnit" | "saleUnit" | "purchaseUnit" | "createdAt" | "updatedAt">, productImage: Express.Multer.File) => {
    const { id, ...updateData } = data;
    try {
        const response = await prisma.product.update({
            data: { ...updateData, productImage: productImage?.filename || data.productImage, status: Boolean(data.status) },
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}


export const removeProduct = async (id: number) => {
    try {
        const response = await prisma.product.delete({
            where: {
                id
            }
        })
        return response;

    } catch (err) {
        throw err;
    }
}

