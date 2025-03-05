import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react";
import { SigninInput, SignupInput } from "blogify-common";
import { showToast } from "./Toast";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface AuthProps<T> {
    type: "signup" | "signin";
  }
  
export const Auth = <T extends SignupInput | SigninInput>({ type }: AuthProps<T>) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<T>(
      type === "signup"
        ? ({ name: "", email: "", password: "" } as T)
        : ({ email: "", password: "" } as T)
    );
  
    async function sendRequest() {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        if(type === "signin") showToast("Logged in Successfully", "success");
        else
        showToast("Account created Successfully", "success");
        setTimeout(() => {
            navigate("/blogs");
          }, 500); 
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Something went wrong";
        showToast(`Error: ${errorMessage}`, "error");
      }
    }
  
    return (
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold mt-4">
                {type === "signup" ? "Create an Account" : "Log In to Account"}
              </div>
              <div className="text-slate-400">
                {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>
                  {type === "signup" ? "Sign In" : "Sign Up"}
                </Link>
              </div>
            </div>
  
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="John Doe"
                onChange={(e) => setPostInputs((c) => ({ ...c, name: e.target.value } as T))}
              />
            )}
  
            <LabelledInput
              label="Email"
              placeholder="Johndoe@gmail.com"
              onChange={(e) => setPostInputs((c) => ({ ...c, email: e.target.value } as T))}
            />
  
            <LabelledInput
              label="Password"
              placeholder="JohnDoe"
              type="password"
              onChange={(e) => setPostInputs((c) => ({ ...c, password: e.target.value } as T))}
            />
  
            <button
              onClick={sendRequest}
              className="mt-5 w-full bg-white hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black rounded shadow-md transition duration-300"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    );
  };
  

interface LabelledInputtype{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string
}

function LabelledInput({label,placeholder,onChange,type}: LabelledInputtype){
    return  <div className="my-1">
        <label className="block mb-1 text-sm font-medium text-gray-900">{label}</label>
        <input 
            type={type||"text"}
            onChange={onChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder={placeholder} 
            required 
        />
    </div>
}