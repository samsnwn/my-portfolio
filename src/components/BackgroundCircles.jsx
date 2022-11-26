import { motion } from 'framer-motion'
import React from 'react'
import styles from '../style'

const BackgroundCircles = () => {
  return (
    <motion.div className='relative top-20 md:top-0 flex justify-center items-center' initial={{opacity:0 }} animate={{scale:[1,2,2,3,1], rotate:360,opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0]}} transition={{duration:2.5}}>
        <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] min-[600px]:h-[200px]  min-[600px]:w-[200px] mt-52 animate-ping "/>
        <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] min-[600px]:h-[300px]  min-[600px]:w-[300px] mt-52 "/>
        <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] min-[600px]:h-[500px]  min-[600px]:w-[500px] mt-52 "/>
        <div className="absolute border border-[var(--main-color)] rounded-full h-[325px] w-[325px] min-[600px]:h-[650px]  min-[600px]:w-[650px] mt-52 opacity-20 animate-pulse " />
        <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52 min-[600px]:h-[800px]  min-[600px]:w-[800px]"/>
    </motion.div>
  )
}

export default BackgroundCircles