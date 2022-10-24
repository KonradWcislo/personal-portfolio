import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
const Home = () => {
	return (
		<div name='home' className='w-full h-screen bg-[#232527]'>
			{/* Container */}

			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-[#ffffffd0]'>Hi, my name is </p>
				<h1 className='text-4xl sm:text-7xl font-bold text-[#25F4EE]'>
					<span className='hover:text-[#FE2C55] cursor-default'>K</span>
					<span className='hover:text-[#FE2C55] cursor-default'>o</span>
					<span className='hover:text-[#FE2C55] cursor-default'>n</span>
					<span className='hover:text-[#FE2C55] cursor-default'>r</span>
					<span className='hover:text-[#FE2C55] cursor-default'>a</span>
					<span className='hover:text-[#FE2C55] cursor-default'>d </span>
					<span className='hover:text-[#FE2C55] cursor-default'>W</span>
					<span className='hover:text-[#FE2C55] cursor-default'>c</span>
					<span className='hover:text-[#FE2C55] cursor-default'>i</span>
					<span className='hover:text-[#FE2C55] cursor-default'>s</span>
					<span className='hover:text-[#FE2C55] cursor-default'>ł</span>
					<span className='hover:text-[#FE2C55] cursor-default'>o</span>
				</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
					I'm Junior Developer.
				</h2>
				<p className='text-[#b3b3b4] py-4 max-w-[700px]'>
					I'm learning JavaScript, React, TailwindCss. Now i working by new
					projects to my portfolio in GitHub. If you want contact with me, send
					my a message.
				</p>
				<div>
					<Link to='work' smooth={true} duration={500}>
						<button className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#25F4EE] hover:border-[#25F4EE]'>
							View Work
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3' />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
