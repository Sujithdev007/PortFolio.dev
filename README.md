# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



import React from 'react'
import {TbBrandNextjs} from "react-icons/tb"
import { SiAdobe, SiAdobeaftereffects } from "react-icons/si";
import { PiFigmaLogoBold } from "react-icons/pi";
import { MdMovieEdit } from "react-icons/md";
import { FaSquareYoutube } from "react-icons/fa6";
import { motion } from "framer-motion"

const iconVarients = (duration)=>({
    initial:{y:-10},
    animate:[{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }]

})


const Techonolgies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Techonolgies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVarients(1.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiAdobe  className='text-7xl text-purple-600'/>     
            </motion.div>
            <motion.div 
            variants={iconVarients(1.1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiAdobeaftereffects  className='text-7xl text-blue-800'/>
            </motion.div>
            < motion.div 
            variants={iconVarients(1.1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <PiFigmaLogoBold  className='text-7xl text-blue-600'/>
            </motion.div>
            <motion.div
            variants={iconVarients(1.1)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
            <MdMovieEdit  className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div 
            variants={iconVarients(1.1)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            < FaSquareYoutube className='text-7xl text-red-800'/>


            </motion.div>
      </div>
    </div>
  )
}

export default Techonolgies
