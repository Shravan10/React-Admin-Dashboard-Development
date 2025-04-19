import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import Header from '../component/common/Header';
import ProductTable from '../component/products/ProductTable';
import SalesTrendChart from '../component/products/SalesTrendChart';
import CategoryDistributionChart from '../overview/CateogoryDistributionChart';

const Users = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Users"/>
    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
       <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1}}>
          {/* <StateCard name="Total Product" icon={Package} value='$12,345' color='#6366F1'/>
          <StateCard name="New Users" icon={TrendingUp} value="567" color="#8B5CF6"/>
          <StateCard name="Total Selling" icon={AlertTriangle} value="1234" color="#EC4899"/>
          <StateCard name="Low Stock" icon={DollarSign} value="12.5%" color="#10B981"/> */}
       </motion.div>
       {/* Charts */}
       <ProductTable/>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SalesTrendChart/>
        <CategoryDistributionChart/>
      </div>
      </main>

  </div>
  )
}

export default Users