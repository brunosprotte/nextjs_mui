// import { auth } from "@clerk/nextjs"

import { NextApiRequest, NextApiResponse } from "next";
import getCurrentUser from "../actions/getCurrentUser";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "next-auth";


const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

// async function OPTIONS(req: Request, res: NextApiResponse) {
//     return res.setHeaders({headers: corsHeaders}) json({}, )
// }

async function POST (req, res) {
    try {
        console.log('POST /api/migrations/')
        
        // const body = await req.json();

        const session = await getServerSession(req, res, authOptions)

        // const {label, imageUrl} = body
        console.log('session: ', session)
        // if (!currentUser) {
        //     return res.status(401)
        // }

        // if (!label) {
        //     return new NextResponse("Label is required", {status: 400 })
        // }

        // if (!imageUrl) {
        //     return new NextResponse("Image URL is required", {status: 400 })
        // }

        // if (!params.storeId) {
        //     return new NextResponse("Store is required", {status: 400 })
        // }

        // const storeByUserId = await prismadb.store.findFirst({
        //     where: {
        //         id: params.storeId,
        //         userId
        //     }
        // })

        // if (!storeByUserId) {
        //     return new NextResponse("Unauthorized", {status: 403 })
        // }

        // const billboard = await prismadb.billboard.create({
        //     data:{
        //         label,
        //         imageUrl,
        //         storeId: params.storeId
        //     },
        // })

        return res.status(201).json()

    } catch (error) {
        console.log('[MIGRATIONS_POST]', error)
        return res.status(500).json("Internal error")
    }
}

async function GET(req: Request, res: NextApiResponse) {
    return res.status(200).json([
        { id: "22d52568-7b4c-40df-9803-aed74f5eb717", name: "Users", version: '1.0.0' },
        { id: "4dabdc8b-97da-426e-bba5-cf6e640529df", name: "Products", version: '1.7.4'},
        { id: "dbe1f00e-62bb-4fdb-854b-39b7fe2b4d05", name: "Integrator", version: '2.3.1'},
        
    ])
}

export default async function handler(req: Request, res: NextApiResponse) {
    try {

        switch(req.method){
            // case 'OPTIONS':
            //     return await OPTIONS();
            case 'POST':
                return await POST(req, res);
            case 'GET':
                return await GET(req, res);
            default:
                return res.status(404)
        }

    } catch (error) {
        console.log('[SERVICE_GET]', error)
        return res.status(500).json("Internal error")
    }
}
