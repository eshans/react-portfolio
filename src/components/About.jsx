import React from "react"

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-gray-600">
							About
						</p>
					</div>
					<div>
						I believe learning and growing should be part of your daily routine.
						Teaching myself new technologies, finding new people to create and
						collaborate with, and just living life with a humorous touch.
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I am passionate about coding, designing, and making electronic
							music as well as TV and film :)
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
