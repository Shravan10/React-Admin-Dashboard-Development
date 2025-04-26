import React from 'react'
import Header from '../component/common/Header'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import StateCard from '../component/common/StateCard'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from '../component/sales/SalesOverviewChart';

const Sales = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
     <Header title="Sales Dashboard"/>
     <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      {/* Sales Stats */}
      <motion.div className='grid grid-cols-1 gap-5 sm:gird-cols-2 lg:grid-cols-4 mb-8'
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}
      >
       <StateCard name="Total Revenue" icon={DollarSign} value="$123,00" color="#6366F1"/>
       <StateCard name="Avg. Order Value" icon={ShoppingCart} value="$78.90" color="#10B981"/>
       <StateCard name="Conversion Rate" icon={TrendingUp} value="4.50%" color="#F59E0B"/>
       <StateCard name="Sales Growth" icon={CreditCard} value="10%" color="#EF4444"/>
      </motion.div>
      <SalesOverviewChart/>
    </main>
    </div>
  )
}

export default Sales