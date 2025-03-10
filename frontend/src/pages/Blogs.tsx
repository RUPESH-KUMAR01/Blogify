import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/Blogcard";
import { useBlogs } from "../hooks/blogs";

export const Blogs = () => {
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            <div>
                <Appbar />
            </div>
            <div className="flex justify-center flex-col items-center">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    }
    return <div>
        <div>
            <Appbar />
        </div>
        <div className="flex justify-center">
            <div className="max-w-2xl w-full">
                {blogs.map((blog, index) => (
                    <Blogcard key={index}
                    authorName={blog.author.name==null ? "Anonymous" : blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    id={blog.id}
                    publishedDate={blog.publishedAt} />
                ))}
            </div>
        </div>
    </div>

};


function Skeleton() {
    return (
        <div className="max-w-2xl w-full p-4 border border- rounded-lg shadow-lg bg-white mb-4 animate-pulse">
            <div className="flex items-center">
                <div className="w-9 h-9 bg-gray-300 rounded-full border border-black"></div>
                <div className="pl-3 flex-1">
                    <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                </div>
            </div>

            <div className="mt-3 h-5 bg-gray-300 rounded w-3/4"></div>

            <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
            <div className="mt-1 h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="mt-1 h-4 bg-gray-300 rounded w-4/6"></div>

            <div className="mt-3 h-3 bg-gray-300 rounded w-20"></div>
        </div>
    );
}