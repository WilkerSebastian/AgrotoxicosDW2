import * as dotenv from 'dotenv'
dotenv.config()
import { App } from "./app"

const app = new App()

const __PORTA:number = parseInt(process.env.PORT as string) || 80;

app.server.listen(__PORTA , ()=> console.log("servidor de cria rodando na porta: " + __PORTA));