import client from '../../../prisma/prismadb';
export default async function handle( req:any, res:any ) {
    if (req.method === "POST") {
        const { title, content } =
        typeof req.body == "string" ? JSON.parse(req.body) : req.body;
        try {
            const post = await client.post.create({
                data: {
                    title,
                    content
                },
            });
            res.status(200).json({ post });
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

