export const Quote = () => {
    return (
        <div className="bg-slate-200 h-screen flex justify-center">
            <div className="flex flex-col justify-center max-w-lg">
                <blockquote className="text-3xl font-bold text-gray-800">
                    “Blogging is not about publishing as much as you can. It’s about publishing as smart as you can.”
                </blockquote>
                <div className="mt-4 text-xl font-semibold text-gray-600 mt-0.5">
                    — Jon Morrow
                </div>
            </div>
        </div>
    );
};
