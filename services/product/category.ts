// import prisma from "../../prisma";
import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();

export const getProductCategory = async() => {
    try{
        const response = await prisma.category.findMany();

        return response;

    }catch(err){
        throw err;
    }
}