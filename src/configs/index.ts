import { createTransport } from "nodemailer"
import { EMAIL, PASSWORD } from "./../secrets/index"
export const trasport = createTransport({
    service: "Gmail",
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
})