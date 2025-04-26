import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";


const SalesOverviewChart = () => {
  return (
    <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 shadow-lg rounded-xl border border-gray-700 mb-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.2}}
    >
     <div className='flex items-center justify-between mb-6'>
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
    </div>
    </motion.div>
  )
}

export default SalesOverviewChart