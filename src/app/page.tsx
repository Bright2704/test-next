"use client"
import { Login } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";



export default function Home() {

  const [cout, setCout] = useState(0)
  const increae = () => {
    setCout(cout + 1)
  }

  const decrease = () => {
    setCout(cout - 1)
  }



  const Name = "Bright-app"
  
  return (
    
    <div className="border-4 border-red-700 flex w-full justify-center items-center h-screen">  
     <div className="border-4 border-green-700 h-fit">
      <h1 className="text-red-300" >Home</h1>
      <Link href="/about">About</Link>
      <br />
      <Link href={`/dynamic/${Name}`}>Dynamic</Link>
      <br />
      <p>{cout}</p> 
      <button onClick={increae}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
      <br/>
      <Link href={`/flex`}>Flex</Link>
      <br/>
      <button onClick={Login}>Login</button>
     </div>
    </div>
  );
}
