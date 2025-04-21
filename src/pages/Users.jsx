import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import Header from '../component/common/Header';
import UsersTable from '../userss/UsersTable';
import SalesTrendChart from '../component/products/SalesTrendChart';
import CategoryDistributionChart from '../overview/CateogoryDistributionChart';
import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';
import StateCard from '../component/common/StateCard';
import UserGrowth from '../userss/UserGrowth';

const Users = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Users"/>
    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
       <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}}>
          <StateCard name="Total Users" icon={UserIcon} value='52,845' color='#6366F1'/>
          <StateCard name="Active Users" icon={UserCheck} value="243" color="#F59E0B"/>
          <StateCard name="New Users Today" icon={UserPlus} value="98520" color="#10B981"/>
          <StateCard name="Churn Rate" icon={UserX} value="2.4%" color="#EF4444"/>
       </motion.div>
       <UsersTable/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowth/>
      </div>
      </main>
    
  </div>
  )
}

export default Users