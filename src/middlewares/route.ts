import { Express } from "express";
import mainRoute from "./../routes/index"


export const route = (app: Express) => {
    app.use('/', mainRoute)
}