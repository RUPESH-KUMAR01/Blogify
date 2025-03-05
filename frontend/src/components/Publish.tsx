import { useState } from "react";
import { Appbar } from "./Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { CreatePostInput } from "blogify-common";
import { showToast } from "./Toast";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const navigate=useNavigate();
    const [BlogInput,setBlogInput]=useState<CreatePostInput>({
        title:"",
        content:""
    })

    async function handlePublish() {
        try {
          const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, BlogInput, {
            headers: { Authorization: localStorage.getItem("token") }
          });
          const id=response.data.id;
          showToast("Blog published successfully!", "success");
          setTimeout(() => {
            navigate(`/blog/${id}`);
          }, 500);
        } catch (e) {
          const errorMessage = e instanceof Error ? e.message : "Failed to publish blog";
          showToast(`Error: ${errorMessage}`, "error");
        }
      }
      

    return <div>
        <div>
            <Appbar />
        </div>
        <div className="max-w-3xl mx-auto mt-10 p-6 border border-black rounded-lg shadow-lg bg-white">
            <input
                type="text"
                placeholder="Enter blog title..."
                className="w-full text-2xl font-bold border-b border-black p-2 outline-none"
                value={BlogInput.title}
                onChange={(e) => setBlogInput((c)=>({...c,title:e.target.value}))}
            />

            <textarea
                placeholder="Write your content here..."
                className="w-full mt-4 p-3 h-60 text-lg border border-black rounded-lg outline-none resize-none"
                value={BlogInput.content}
                onChange={(e) => setBlogInput((c)=>({...c,content:e.target.value}))}
            />

            <button
                onClick={handlePublish}
                className="mt-5 w-full bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded shadow-md transition duration-300"
            >
                Publish Blog
            </button>
        </div>
    </div>
};
