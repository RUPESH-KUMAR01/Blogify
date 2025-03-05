import { useParams } from "react-router-dom";
import { Fullblog } from "../components/Fullblog";
import { useBlog } from "../hooks/blogs"
import { Appbar } from "../components/Appbar";

export const Blog=()=>{
    const {id}=useParams();
    const {loading,blog}=useBlog({id : id || ""});
    if(loading || !blog ){
        return <div> 
            <div>
                <Appbar />
            </div>
            <SkeletonFullblog />
        </div>
    }
    return <div>
        <div>
            <Appbar />
        </div>
        <Fullblog blog={blog}/>
    </div>
}

function SkeletonFullblog() {
    return (
        <div role="status" className="animate-pulse grid grid-cols-12 px-16 pt-12 gap-8">
            <div className="col-span-8">
                <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-6"></div>
                
                <div className="space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-full"></div>
                    <div className="h-6 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-6 bg-gray-300 rounded w-4/6"></div>
                    <div className="h-6 bg-gray-300 rounded w-full"></div>
                </div>
            </div>

            <div className="col-span-4 flex flex-col">
                <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
