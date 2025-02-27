import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

blogRouter.use("/*",async (c,next)=>{
    next();
})

blogRouter.post("/",async (c)=>{

})

blogRouter.put("/",(c)=>{
    return c.json({message:"Hello World"})
})

blogRouter.get("/",(c)=>{
    return c.json({message:"Hello World"})
})

blogRouter.get("/bulk",(c)=>{

    return c.json({message:"Hello World"})
})