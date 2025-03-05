import { Link } from "react-router-dom";
import { Avatar } from "./Blogcard";

export const Appbar = () => {
    return (
        <div className="w-full border-b border-gray-200 flex justify-between items-center px-10 py-3 mb-5">
            <Link to={"/blogs"}>
                <div className="font-extrabold text-3xl cursor-pointer">
                    Blogify
                </div>
            </Link>
            <div className="flex items-center">
                <Link to={"/publish"}>
                    <button
                        className="px-3 py-1 text-sm bg-white hover:bg-black text-black font-semibold hover:text-white border border-black rounded shadow-sm transition duration-300"
                    >
                        New Blog
                    </button>
                </Link>
                <div className="ml-3">
                    <Avatar name="Anonymous" />
                </div>
            </div>
        </div>
    );
};
