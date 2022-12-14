/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react"
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaFacebook,
	FaInstagram,
} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { AiOutlinePhone } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"

import { Link } from "react-scroll"

export const NavBar = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#232527] text-gray-300 '>
			<div>
				<div className='TEXT text-3xl text-[#25F4EE] hover:scale-110 duration-300 cursor-pointer'>
					<Link to='home' smooth={true} duration={500}>
						K W
					</Link>
				</div>
			</div>

			{/* menu */}
			<div className='hidden md:flex'>
				<ul className='hidden md:flex'>
					<li className='hover:text-[#25F4EE]'>
						<Link to='home' smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className='hover:text-[#25F4EE]'>
						<Link to='about' smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className='hover:text-[#25F4EE]'>
						<Link to='skills' smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className='hover:text-[#25F4EE]'>
						<Link to='work' smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li className='hover:text-[#25F4EE]'>
						<Link to='contact' smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#232527] flex flex-col justify-center items-center"
				}>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/* Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://www.facebook.com/profile.php?id=100001835125763'
							target='_blank'
							rel='noreferrer'>
							Facebook <FaFacebook size={30} />
						</a>
					</li>
					<li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#009EDC]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='tel:690992000'>
							690 992 000
							<AiOutlinePhone size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BB001B]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='mailto:konrad.wcislo95@gmail.com'>
							Gmail <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://github.com/KonradWcislo/'
							target='_blank'
							rel='noreferrer'>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E4405F]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://www.instagram.com/kondzio_gym_freak/'
							target='_blank'
							rel='noreferrer'>
							Instgram <FaInstagram size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='/'>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
