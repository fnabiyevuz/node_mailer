import { Router, Request, Response } from "express";
import { sendEmail } from "../utils";


const app = Router()

interface ISendEmailPayload {
    message: string;
    to: string;
}

app.post('/send', async (req: Request, res: Response) => {
    try {
        const { message, to }: ISendEmailPayload = req.body

        const content: string = message || "No content."

        await sendEmail(content, to)

        res.status(200).send({
            message: `Email is sent to ${to}`
        })
    } catch (err: any) {
        res.status(500).send({
            message: err.message || "internal Server Error."
        })
    }
})

export default app