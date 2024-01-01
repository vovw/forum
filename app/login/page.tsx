"use client";
import { Label } from "@/ui/label"
import { Input } from "@/ui/input"
import { Button } from "@/ui/button"
import axios from "axios";
import {useState} from "react";
type loginDataType={
  email:string,
}
export default function login() {
  let [email,setEmail]=useState<loginDataType>({
    email:""
  });
  let handleLoginData=async()=>{
    try{

    if(email.email.endsWith('.vjti.ac.in')){
    await axios.post('http://localhost:4000/login',email);  
    }
    else{
      console.log(false);
    }
  }
    catch(e){
      console.log(e.message);
    }
  }
  return (
    <main key="1" className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="mb-10">
        <LogInIcon  />
      </div>
      <div className="w-96 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#8b4513]">Login</h1>
          <div className="mb-4">
            <Label className="block text-sm text-gray-600 dark:text-gray-400" htmlFor="username">
              Email
            </Label>
            <Input
              onChange={(e)=>{setEmail({email:e.target.value})}}
              className="w-full mt-1 text-black"
              id="mail"
              placeholder="Enter your VJTI email"
              required
              type="text"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <input
                onClick={()=>{}}
                className="h-4 w-4 text-[#8b4513] focus:ring-[#8b4513] border-gray-300 rounded"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <label className="ml-2 text-sm text-gray-600 dark:text-gray-400" htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          <Button className="w-full py-2 bg-[#8b4513] text-white rounded mb-4" type="submit" onClick={handleLoginData}>
            Login
          </Button>
		  {/* add google login if ever needed */}
		  {/*
          <Button className="w-full py-2 bg-[#4285f4] text-white rounded" type="button">
            Login with Google
          </Button>
		  */}
        </div>
        </div>
      <footer className="mt-10">
        <p className="text-xs text-center text-gray-500">made by vjtians for vjtians</p>
      </footer>
    </main>
  )
}

function LogInIcon() {
  return (
    <img src="https://vjti.ac.in/wp-content/uploads/oldupload/cropped-New-VJTI-Logo_1-1-60x87.jpg" className="w-20 h-20 text-[#8b4513]"></img>
  )
}
