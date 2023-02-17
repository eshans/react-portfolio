import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/*Container*/}
			<div className="max-w-[1000px] mx-auto px-0 flex flex-col justify-center h-full">
				<p className="text-gray-200">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Eric Shans
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Front End Developer, Artist, and Music Producer.
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]"></p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-pink-600">
						View Work
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3 " />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
export default Home
