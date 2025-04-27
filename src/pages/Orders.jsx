import React from "react";
import Header from "../component/common/Header";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import StateCard from "../component/common/StateCard";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import DailyOrders from "../component/orders/DailyOrders";
import OrderDistributution from "../component/orders/OrderDistributation";


const Orders = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title={"Orders"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name="Total Orders" icon={ShoppingBag} value="1,455" color="#6366F1"/>
          <StateCard name="Pending Orders" icon={Clock} value="56" color="#F59E0B"/>
          <StateCard name="Completed Orders" icon={CheckCircle} value="1,234" color="#10B981"/>
          <StateCard name="Total Revenue" icon={DollarSign} value="$98,475" color="#EF4444"/>

        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders/>
          <OrderDistributution/>
        </div>
      </main>
    </div>
  );
};

export default Orders;
