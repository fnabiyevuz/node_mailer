import { trasport } from "./../configs/index"


export const sendEmail: (content: string, to: string) => Promise<void> = async (content: string, to: string) => {
    try {
        await trasport.sendMail({
            to,
            html: `<h1>${content}<h1>`
        })
    } catch (err) {
        throw err
    }
}