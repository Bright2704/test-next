"use client"
import React, { use } from 'react'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { useRouter } from 'next/navigation';


export default function Loginpage() {
    const [showPassword, setShowPassword] = React.useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()
   
    const Login = async () => {
      try {
        const responseLogin = await axios.post("https://4d65-2403-6200-8821-1051-413-3023-7a17-abba.ngrok-free.app/login/", 
        {
            username : email ,
            password : password
        })
        console.log(responseLogin)
        if(responseLogin.status === 200){
            router.push('/')
        }
      }

      catch (error) {
        console.log(error)
      }

    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  return (

    //login pagge
    <div className="flex w-full justify-center items-center h-screen border-700 bg-slate-300">
    <div className="flex flex-col justify-evenly rounded-xl w-[450px] h-[650px] text-center bg-gray-50 shadow-md">
     <div className='h-[100%]  '>

     
        <div className='flex h-[100%] text-black justify-center items-center'>
            <div className='flex justify-center items-center h-[100%] flex-col gap-8'>
            <h1 className='text-4xl font-extrabold font-mono' >Welcome Bright</h1>
            <Image alt="" src="/next.svg" width={70} height={70} />
        </div>
        </div>
     </div>


     <div className=' h-[100%]  '>
     <div className="h-[100%] flex flex-col gap-4 items-center">
                    <TextField className="w-[270px]" id="standard-basic" label="Email" variant="standard" 
                     value={email} onChange={(e) => setEmail(e.target.value)
                    
                    }
                    />
                    <FormControl className="w-[270px]" sx={{ m: 1, width: '25ch' }} variant="standard" >
                        <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password} 
                            onChange={(P) => setPassword(P.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                </div>

     <div className='h-[100%] flex flex-col items-center justify-center justify-between'>

        <button onClick={Login} className=' font-bold w-[270px] h-[40px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-400 to-sky-400 to-sky-400 hover:scale-95' >LOGIN</button>

        <p className='text-gray-500 '>{email}  </p>
        <p className='text-gray-500 '>{password}  </p>

        <div className='flex'>
        <p className='text-gray-500 mb-[5px]'>Don't have an account?</p>
        <Link href={"register"} className='text-gray-500 hover:text-blue-700 mb-[5px] ml-[5px]'>Sing up</Link>
        </div>
     </div>
        

    </div>
</div>


  
  )
}
