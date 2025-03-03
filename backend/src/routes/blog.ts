
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createPostInput,updatePostInput } from "blogify-common/dist";
export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    },Variables:{
        userId : string;
    }
}>();

blogRouter.use("/*",async (c,next)=>{
    try{
        const token=c.req.header("authorization") || "";
        const response=await verify(token,c.env.JWT_SECRET);
        if(response){
            c.set("userId",String(response.id));
            await next();
        }else{
            c.status(403);
            return c.json({
                message:"Unauthorized"
            })
        }
    }catch(e){
        c.status(403);
        return c.json({
            message:"Unauthorized"
        })
    }

})

blogRouter.post("/",async (c)=>{
    const body=await c.req.json();
    const {success}=createPostInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({
            message:"Invalid input"
        })
    }
    const userId=c.get("userId") || "";
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
    })

    return c.json({
        id:blog.id
    })
})

blogRouter.put("/",async (c)=>{
    const body=await c.req.json();
    const {success}=updatePostInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({
            message:"Invalid input"
        })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,
        }
    })

    return c.json({
        id:blog.id
    })
})
blogRouter.get("/bulk",async (c)=>{
    const prisma=new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs=await prisma.post.findMany();

    return c.json({
        blogs
    })
})

blogRouter.get("/:id",async (c)=>{
    const body=await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog=await prisma.post.findFirst({
            where:{
                id:c.req.param("id")
            }
        })
    
        return c.json({
            blog
        })
    }catch(e){
        c.status(411);
        return c.json({
            message:"Error while fetching blog"
        })
    }
})

