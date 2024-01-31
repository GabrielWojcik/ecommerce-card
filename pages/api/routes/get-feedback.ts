import client from '../../../prisma/prismadb';

export default async function getFeedback(req: any, res:any) {
    if (req.method === "GET") {
        try {
            const list = await client.post.findMany()
            res.status(200).json({ list })
        } catch (e) {
            res.status(500).json(e);
        }
    } 
}