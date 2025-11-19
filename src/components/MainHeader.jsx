import React from 'react'
import { BrowserRouter, Route, Routes , Link , NavLink} from "react-router-dom";

export default function MainHeader() {
  return (
    <div className='flex flex-row px-14 p-[1rem] justify-between w-full bg-neutral text-[white] items-center mb-4'>
        <h1 className='font-bold text-3xl'>LOGO</h1>
        <div className='flex flex-row list-none gap-5'>
            <Link to="/" className='p-1.5 cursor-pointer hover:text-[gray] focus:bg-blue-950 rounded-2xl'>Products</Link>
            <Link to="/Dashboard" className='p-1.5 cursor-pointer hover:text-[gray] focus:bg-blue-950 rounded-2xl'>Dashboard</Link>
            <Link to="/InstaApp" className= 'p-1.5 cursor-pointer hover:text-[gray] focus:bg-blue-950 rounded-2xl'>InstaApp</Link>
            <Link to="/blog" className='p-1.5 cursor-pointer hover:text-[gray] focus:bg-blue-950 rounded-2xl'>Blogs</Link>
        </div>
    </div>
  )
}
