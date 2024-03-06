"use client"
import React from 'react'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
// import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';


export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  return (

    //login pagge
    <div className="flex w-full justify-center items-center h-screen border-700 bg-slate-300">
    <div className="flex flex-col justify-evenly rounded-xl w-[450px] h-[650px] text-center bg-gray-50 shadow-md">
     <div className='h-[100%] border-2 border-red-500 '>

        <div className='flex h-[100%] text-black justify-center items-center'>
            <div className='flex justify-center items-center h-[100%] flex-col gap-8'>
            <h1 className='text-4xl font-extrabold font-mono' >Welcome Bright</h1>
            <Image alt="" src="/next.svg" width={70} height={70} />
        </div>
        </div>
     </div>


     <div className=' h-[100%] border-2 border-green-500 '>
     <div className='flex flex-col justify-center items-center h-[100%] gap-5'>
        <TextField className="w-[270px]" id="standard-basic" label="Email" variant='standard'  />
        
        <TextField
        className='w-[270px]'
        id="standard-password-input"
        label="Password"
        autoComplete="current-password"
        variant='standard'
            type={showPassword ? 'text' : 'password'}
            // endAdornment={
            //   <InputAdornment position="end">
            //     <IconButton
            //       aria-label="toggle password visibility"
            //       onClick={handleClickShowPassword}
            //       onMouseDown={handleMouseDownPassword}
            //       edge="end"
            //     >
            //       {showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
            // label="Password"
        />
       
</div>
     </div>
     <div className='h-[100%] border-2 border-yellow-500 '>
        <h1>Login</h1>
     </div>
        

    </div>
</div>


  
  )
}
