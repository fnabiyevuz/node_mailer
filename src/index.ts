import express, { Express } from "express"
import cors from "cors"
import { PORT } from "./secrets/index"
import { route } from "./middlewares/route"


const app: Express = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

route(app)

app.listen(PORT, () => console.log(`listening on port ${PORT}.`))