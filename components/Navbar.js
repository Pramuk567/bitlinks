import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <div className="logo text-2xl font-bold">
               <Link href="/">   Bitlinks</Link>

            </div>

            <ul className=' flex justify-center gap-5 items-center'>
                <Link href="/" > <li>Home</li></Link>
                <Link href="/about" > <li>About</li></Link>
                <Link href="/shorten" > <li>Shorten</li></Link>
                <Link href="/contact" > <li>Contact</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
