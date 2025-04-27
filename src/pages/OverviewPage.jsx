import React from 'react'
import Header from '../component/common/Header'
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import StateCard from '../component/common/StateCard';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import SalesOverviewChart from '../component/overview/SalesOverviewChart';
import SalesChannelChart from '../component/overview/SalesChannelChart';
import CategoryDistributionChart from '../component/overview/CateogoryDistributionChart';

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title={"Overview"}/>
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
         <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}}>
            <StateCard name="Total Sales" icon={Zap} value='$12,345' color='#6366F1'/>
            <StateCard name="New Users" icon={Users} value="567" color="#8B5CF6"/>
            <StateCard name="Total Product" icon={ShoppingBag} value="1234" color="#EC4899"/>
            <StateCard name="Conversion Rate" icon={BarChart2} value="12.5%" color="#10B981"/>
         </motion.div>
         {/* Charts */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SalesOverviewChart/>
              <CategoryDistributionChart/>
              <SalesChannelChart/>
        </div>
        </main>


    </div>
  )
}

export default OverviewPage