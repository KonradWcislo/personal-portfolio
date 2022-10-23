import React from "react"

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#232527] flex justify-center items-center p-4'>
			<form
				method='POST'
				action='https://getform.io/f/dcdce205-d981-457c-bbb1-4977ef3dc25b'
				className='flex flex-col max-w-[600px] w-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-[#FE2C55] text-gray-300'>
						Contact
					</p>
					<p className='text-gray-300 py-4'>
						/ / Submit the form below or shoot me an email -
						konrad.wcislo95@gmail.com
					</p>
				</div>
				<input
					className='p-2 bg-[#ccd6f6]'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className='my-4 p-2 bg-[#ccd6f6]'
					type='text'
					placeholder='Email'
					name='name'
				/>
				<textarea
					className='p-2 bg-[#ccd6f6]'
					name='message'
					rows='10'
					placeholder='Message'></textarea>
				<button className='text-white border-2 hover:bg-[#FE2C55] hover:border-[#FE2C55] px-4 py-3 my-8 mx-auto flex items-center'>
					Let's Collaborate
				</button>
			</form>
		</div>
	)
}

export default Contact
