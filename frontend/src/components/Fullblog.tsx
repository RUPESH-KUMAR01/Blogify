import { Blog } from "../hooks/blogs";
import { Avatar } from "./Blogcard";

export const Fullblog = ({ blog }: { blog: Blog }) => {
    const authorName = blog.author.name==null ? "Anonymous" : blog.author.name;
    const date = new Date(blog.publishedAt);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
    return (
        <div className="grid grid-cols-12 px-16 pt-12 gap-8">
            <div className="col-span-8">
                <h1 className="text-4xl font-extrabold text-black leading-tight">{blog.title}</h1>
                <p className="text-sm text-gray-500 pt-2">Posted on {formattedDate}</p>
                <div className="my-4"></div>
                <p className="text-lg text-black leading-relaxed">{blog.content}</p>
            </div>

            <div className="col-span-4 flex flex-col h-screen">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-black">Author</h2>
                    <div className="flex items-center pt-4">
                        <Avatar name={authorName} size="lg" />
                        <span className="pl-3 text-lg font-semibold">{authorName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return "th"; // Covers 11th, 12th, 13th
    const lastDigit = day % 10;
    return lastDigit === 1 ? "st" : lastDigit === 2 ? "nd" : lastDigit === 3 ? "rd" : "th";
}