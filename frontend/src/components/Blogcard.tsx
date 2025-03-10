import { Link } from "react-router-dom";
import { getOrdinalSuffix } from "./Fullblog";

interface BlogProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id :string
}

export const Blogcard = ({ authorName, title, content, publishedDate, id }: BlogProps) => {
    const date = new Date(publishedDate);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border border-black rounded-lg shadow-lg bg-white mb-4 cursor-pointer">
            <div className="flex items-center text-black">
                <Avatar name={authorName} size="sm" />
                <div className="pl-3">
                    <span className="font-medium">{authorName}</span>
                    <div className="text-xs text-gray-600">{formattedDate}</div>
                </div>
            </div>

            <div className="mt-3 text-xl font-bold text-black">{title}</div>

            <div className="mt-2 text-black leading-relaxed">
                {content.length > 120 ? content.slice(0, 120) + "..." : content}
            </div>

            <div className="mt-3 text-sm text-gray-700 italic">
                {Math.max(1, Math.ceil(content.length / 100))} min read
            </div>
        </div>
    </Link>
};


export function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' | 'lg' }) {
    const sizeClasses = {
        sm: 'w-7 h-7 text-xs',
        md: 'w-9 h-9 text-sm',
        lg: 'w-12 h-12 text-base'
    };
    if(name==null){
        name="Anonymous"
    }
    return (
        <div className={`flex items-center justify-center ${sizeClasses[size]} bg-black text-white rounded-full border border-black`}>
            <span className="font-semibold">{name[0]}</span>
        </div>
    );
}
