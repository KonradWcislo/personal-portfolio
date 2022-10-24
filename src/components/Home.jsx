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
					<span className='hover:text-[#FE2C55]'>K</span>
					<span className='hover:text-[#FE2C55]'>o</span>
					<span className='hover:text-[#FE2C55]'>n</span>
					<span className='hover:text-[#FE2C55]'>r</span>
					<span className='hover:text-[#FE2C55]'>a</span>
					<span className='hover:text-[#FE2C55]'>d </span>
					<span className='hover:text-[#FE2C55]'>W</span>
					<span className='hover:text-[#FE2C55]'>c</span>
					<span className='hover:text-[#FE2C55]'>i</span>
					<span className='hover:text-[#FE2C55]'>s</span>
					<span className='hover:text-[#FE2C55]'>ł</span>
					<span className='hover:text-[#FE2C55]'>o</span>
				</h1>
				<h2 className='z-10 text-4xl sm:text-7xl font-bold text-[#8892b0]'>
					I'm Junior Developer.
				</h2>
				<p className='z-10 text-[#b3b3b4] py-4 max-w-[700px]'>
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
