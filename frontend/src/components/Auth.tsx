import { Link } from "react-router-dom"
import { ChangeEvent, useState } from "react";
import { SignupInput } from "blogify-common";

export const Auth=({type} : {type:"signup" | "signin"})=>{
    const [postInputs,setpostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    });

    return  <div className="h-screen flex justify-center">
    <div className="flex flex-col justify-center max-w-lg p-2 ">
        <div className="text-3xl font-extrabold mt-4">
            Create an Account
        </div>
        <div className="text-slate-400">
            Already have an account? 
            <Link className="pl-2 underline" to={"/signin" } >Login</Link>
        </div>
        <LabelledInput label="Name" placeholder="John Doe" onChange={(e)=>{
            setpostInputs(c=>({
                ...c,
                name:e.target.value
            }))
        }}></LabelledInput>
                <LabelledInput label="Email" placeholder="Johndoe@gmail.com" onChange={(e)=>{
            setpostInputs(c=>({
                ...c,
                email:e.target.value
            }))
        }}></LabelledInput>
                <LabelledInput label="Password" placeholder="JohnDoe" type="password" onChange={(e)=>{
            setpostInputs(c=>({
                ...c,
                password:e.target.value
            }))
        }}></LabelledInput>
    </div>
</div>
}

interface LabelledInputtype{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string
}

function LabelledInput({label,placeholder,onChange,type}: LabelledInputtype){
    return  <div className="mb-2">
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