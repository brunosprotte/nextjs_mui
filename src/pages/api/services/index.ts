// import { auth } from "@clerk/nextjs"
import { NextApiResponse } from "next";
import { NextResponse } from "next/server"

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

export async function OPTIONS() {
    return NextResponse.json({}, {headers: corsHeaders})
}

// export async function POST (req: Request, { params }: {params: {storeId: string}}) {
//     try {
//         const { userId } = auth()
//         const body = await req.json();

//         const {label, imageUrl} = body

//         if (!userId) {
//             return new NextResponse("Unauthenticated", {status: 401 })
//         }

//         if (!label) {
//             return new NextResponse("Label is required", {status: 400 })
//         }

//         if (!imageUrl) {
//             return new NextResponse("Image URL is required", {status: 400 })
//         }

//         if (!params.storeId) {
//             return new NextResponse("Store is required", {status: 400 })
//         }

//         const storeByUserId = await prismadb.store.findFirst({
//             where: {
//                 id: params.storeId,
//                 userId
//             }
//         })

//         if (!storeByUserId) {
//             return new NextResponse("Unauthorized", {status: 403 })
//         }

//         const billboard = await prismadb.billboard.create({
//             data:{
//                 label,
//                 imageUrl,
//                 storeId: params.storeId
//             },
//         })

//         return NextResponse.json(billboard)

//     } catch (error) {
//         console.log('[BILLBOARD_POST]', error)
//         return new NextResponse("Internal error", { status: 500 })
//     }
// }

export default async function handler(req: Request, res: NextApiResponse) {
    try {

        return res.status(200).json([
            { id: "22d52568-7b4c-40df-9803-aed74f5eb717", name: "Users", version: '1.0.0' },
            { id: "4dabdc8b-97da-426e-bba5-cf6e640529df", name: "Products", version: '1.7.4'},
            { id: "dbe1f00e-62bb-4fdb-854b-39b7fe2b4d05", name: "Integrator", version: '2.3.1'},
            
        ])

    } catch (error) {
        console.log('[SERVICE_GET]', error)
        return res.status(500).json("Internal error")
    }
}