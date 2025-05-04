import React from 'react'
import {FaAppStore} from 'react-icons/fa'
import {motion} from 'motion/react'
import {useInView} from 'react-intersection-observer'

const Services = () => {

    const servicesData =  [
        {
            title:"Software Engineering",
            description : "Turning ideas into impactful software is my passion. I love experimenting with different tech stacks, coding dynamic interfaces, and finding elegant solutions to real-world challenges.",
        },
        {
            title:"Data Science & AI",
            description : "From crunching numbers to unraveling hidden insights, I’m intrigued by the potential of data-driven strategies and intelligent algorithms. Every dataset tells a story, I’m here to uncover it.",
        },
        {
            title:"Graphic Design",
            description : "Before a single line of code is written, I love crafting intuitive user interfaces through rapid prototyping. Balancing aesthetics and functionality is key to shaping delightful user experiences and I’ve turned this passion into a freelance pursuit, helping clients breathe life into their digital products.",
        },
    ];

    const {ref, inView} = useInView({
        triggerOnce:true,
        threshold:0.2
    })

  return (
    <div id="services" className='text-white py-16'>
      <motion.div 
      ref={ref} 
      initial={{opacity:0, y:50}}
      animate={inView ? {opacity:1, y:0} : {}}
      transition={{duration:0.5}}
      className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Where I’m At</h2>
        <p className='mb-12 text-gray-400'>
        Here’s a sneak peek into the stuff that keeps me up at night.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, index) => (
                <motion.div
                ref={ref} 
                initial={{opacity:0, scale:0.8}}
                animate={inView ? {opacity:1, scale:1} : {opacity:0, scale:0.8}}
                transition={{duration:0.5, delay:index * 0.2}}
                key={index}
                className='bg-[#1c1a2b] p-8 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300'>
                    <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
