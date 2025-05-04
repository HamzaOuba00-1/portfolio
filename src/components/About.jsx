import React from 'react'
import aboutImg from '../assets/aboutImg.png'
import {motion} from 'framer-motion' 
import { useInView } from 'react-intersection-observer'


const About = () => {

    const {ref, inView} = useInView({
        triggerOnce:true,
        threshold:0.2
    })

  return (
    <div id="about" className='text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
            <motion.h2
            ref={ref} 
            initial={{opacity:0, y:100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.3, duration:0.5}}
            className='text-3xl md:text-4xl font-bold mb-8 underline'>About Me</motion.h2>
            
            <motion.p 
                ref={ref} 
                initial={{opacity:0, y:100}}
                animate={inView ? {opacity:1, y:0} : {}}
                transition={{delay:0.5, duration:0.5}}
                className='mp-12 text-gray-400 text-center'
            >
            A bit about the brain behind the build. 
            </motion.p>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <motion.div 
                    ref={ref} 
                    initial={{opacity:0, x:-100}}
                    animate={inView ? {opacity:1, x:0} : {}}
                    transition={{delay:0.6, duration:0.5}}
                    className='mb-8 md:mb-0 md:mr-8 flex justify-center'
                >
                    <img
                    src={aboutImg}
                    className='w-2/3 sm:w-1/2 md:w-10/12'
                    />
                </motion.div>
                <motion.p 
                ref={ref} 
                initial={{opacity:0, x:100}}
                animate={inView ? {opacity:1, x:0} : {}}
                transition={{delay:0.6, duration:0.5}}
                className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>
                 Hey! I’m Hamza, a 21-year-old IT engineering student currently studying at CESI NICE, an innovative institution 
                 recognized for its forward-thinking and project-based learning. Data Science and Software Development spark my 
                 curiosity daily, pushing me to uncover hidden insights and build creative solutions. When I’m not diving into 
                 code or analyzing data, you’ll find me exploring the latest tech trends, brainstorming with peers, or reimagining 
                 how technology can shape our future.
                </motion.p>
            </div>

            <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
                <motion.div 
                ref={ref} 
                initial={{opacity:0}}
                animate={inView ? {opacity:1} : {}}
                transition={{delay:1.2, duration:0.3}}
                className='text-center'>
                    <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>4</h3>
                    <motion.p 
                    ref={ref} 
                    initial={{opacity:0, y:100}}
                    animate={inView ? {opacity:1, y:0} : {}}
                    transition={{delay:1.7, duration:0.5}}
                    className='text-sm sm:text-base text-gray-300'>4th-Year Engineering Student</motion.p>
                </motion.div>
            

                <motion.div 
                ref={ref} 
                initial={{opacity:0}}
                animate={inView ? {opacity:1} : {}}
                transition={{delay:1.4, duration:0.3}} 
                className='text-center'>
                    <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>5+</h3>
                    <motion.p 
                    ref={ref} 
                    initial={{opacity:0, y:100}}
                    animate={inView ? {opacity:1, y:0} : {}}
                    transition={{delay:1.8, duration:0.5}} 
                    className='text-sm sm:text-base text-gray-300'>Years of Freelance Experience</motion.p>
                </motion.div>
            

                <motion.div 
                ref={ref} 
                initial={{opacity:0}}
                animate={inView ? {opacity:1} : {}}
                transition={{delay:1.6, duration:0.3}}  
                className='text-center'>
                    <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>12+</h3>
                    <motion.p 
                    ref={ref} 
                    initial={{opacity:0, y:100}}
                    animate={inView ? {opacity:1, y:0} : {}}
                    transition={{delay:1.9, duration:0.5}}  
                    className='text-sm sm:text-base text-gray-300'>Projects Built This Year</motion.p>
                </motion.div>
            </div>

        </div>
    </div>
  )
}

export default About
