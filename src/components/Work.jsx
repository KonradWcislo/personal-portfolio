/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"
import OddamZaDarmo from "../assets/projects/OddamZaDarmo.png"
import weatherApp from "../assets/projects/weatherApp.png"
import toDoApp from "../assets/projects/toDoApp.png"
import cryptoApp from "../assets/projects/cryptoApp.png"

const Work = () => {
	return (
		<div name='work' className='w-full md:h-screen text-gray-300 bg-[#232527]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FE2C55]'>
						Work
					</p>
					<p className='py-6'>// Check out some of my recent work</p>
				</div>

				{/* Container */}
				<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10'>
					{/* Grid Item */}
					<div
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
						style={{ backgroundImage: `url(${OddamZaDarmo})` }}>
						<div>
							{/* Hover Effects */}
							<div className='opacity-0 group-hover:opacity-100'>
								<span className='text-2xl font-bold tex-white tracking-wider'></span>
								<div className='pt-8 text-center'>
									<a  href='https://oddam-za-darmo.netlify.app/' target="_blank" rel="noreferrer">
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Demo
										</button>
									</a>
									<a href='https://github.com/KonradWcislo/oddam-za-darmo' target="_blank" rel="noreferrer">
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
						style={{ backgroundImage: `url(${weatherApp})` }}>
						<div>
							{/* Hover Effects */}
							<div className='opacity-0 group-hover:opacity-100'>
								<span className='text-2xl font-bold tex-white tracking-wider'></span>
								<div className='pt-8 text-center'>
									<a href='https://weather-app-konradwcislo-github.netlify.app/' target="_blank" rel="noreferrer">
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Demo
										</button>
									</a>{" "}
									<a href='https://github.com/KonradWcislo/weather-app' target="_blank" rel="noreferrer">
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
						style={{ backgroundImage: `url(${toDoApp})` }}>
						<div>
							{/* Hover Effects */}
							<div className='opacity-0 group-hover:opacity-100'>
								<span className='text-2xl font-bold tex-white tracking-wider'></span>
								<div className='pt-8 text-center'>
									<a href='/' target="_blank" rel="noreferrer">
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Demo
										</button>
									</a>{" "}
									<a href='https://github.com/KonradWcislo/to-do-app' target="_blank" rel="noreferrer">
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
						style={{ backgroundImage: `url(${cryptoApp})` }}>
						<div>
							{/* Hover Effects */}
							<div className='opacity-0 group-hover:opacity-100'>
								<span className='text-2xl font-bold tex-white tracking-wider'></span>
								<div className='pt-8 text-center'>
									<a href='https://cryptocurrency-website-k.netlify.app/' target="_blank" rel="noreferrer" >
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Demo
										</button>
									</a>{" "}
									<a href='https://github.com/KonradWcislo/cryptocurrency-search-engine' target="_blank" rel="noreferrer">
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
