import React from "react";
import { assets } from "../assets/assets";
import {motion} from 'framer-motion'

const Description = ()=>{
    return(
        <motion.div
        initial={{opacity:0.2,y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="flex flex-col items-center justify-center
                         my-24 p-6 md:px-28">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
            <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
                <img src={assets.sample_img_1} alt="" 
                className="w-80 xl:w-96 rounded-lg" />
                <div>
                    <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing AI-Powered Text to Image Generator</h2>
                        <p className="text-gray-600 mb-4">
                        Welcome to [Your Website Name], the AI-powered tool that transforms your words into breathtaking visuals. Whether you're a designer, creator, marketer, or just exploring your creativity — simply type a prompt, and let our advanced AI instantly generate high-quality images tailored to your vision.
                        No design skills required. Just type, imagine, and create.
                        </p>
                        <p className="text-gray-600 ">
                            Choose from multiple art styles, adjust details, and bring your ideas to life in seconds. Whether you're building content, crafting visuals for social media, or just having fun, Imagify makes image creation effortless and inspiring.
                        </p>
                        <p>
                        ✨ Free to use | 🎨 Unlimited creativity | ⚡ Fast & easy
                        </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description