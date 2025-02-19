import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign , verify} from 'hono/jwt';
const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();
app.post("/api/v1/user/signup",(c)=>{
  return c.text("Hello Hono")
})

app.post("/api/v1/user/signin",(c)=>{
  return c.text("Hello Hono")
})


app.post("api/v1/blog",(c)=>{
  return c.text("Hello Hono")
})


export default app;
