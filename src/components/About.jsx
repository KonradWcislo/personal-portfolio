import React from "react"

const About = () => {
	return (
		<div name='about' className='w-full h-screen text-gray-300 bg-[#232527]'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-[#FE2C55]'>
							About me
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>Hi. I'm Konrad, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p className='p-1'>
							I have been passionate about computers and new technologies from
							an early age. I started programming over a year ago and I look
							forward to it. Every week I try to improve my code. Feel free to
							follow me on social media.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
