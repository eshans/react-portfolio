import React from "react"

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-0">
			<form
				action="https://api.web3forms.com/submit"
				method="POST"
				className="flex flex-col max-w-[600px] w-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						// Submit the form below or shoot me an email -
					</p>
				</div>
				<input
					type="hidden"
					name="access_key"
					value="29164b70-589a-4bc5-8c16-c9911850bcfa"
				/>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
					required
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
					required
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Message"
					required></textarea>
				<input
					type="hidden"
					name="redirect"
					value="https://web3forms.com/success"></input>
				<button className="text-white border-2 hover:bg-gray-600 hover:border-white-600 px-4 py-3 my-8 mx-auto flex items-center">
					Let's collaborate
				</button>
			</form>
		</div>
	)
}

export default Contact
