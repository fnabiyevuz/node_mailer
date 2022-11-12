import { config } from "dotenv"

config()

export const PORT: string | number = process.env.PORT || 8080
export const EMAIL: string | undefined = process.env.EMAIL_USERNAME || undefined
export const PASSWORD: string | undefined = process.env.EMAIL_APP_PASSWORD || undefined