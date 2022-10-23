import React from "react"

const About = () => {
	return (
		<div name='about' className='w-full h-screen bg-[#232527] text-gray-300'>
			
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-[#FE2C55]'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>Hi. I'm Konrad, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
