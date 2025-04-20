import React from "react";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"
import { Search } from "lucide-react";

const UsersTable = () => {
  return (
    <>
      <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.2}}
      >
      <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-100">Users</h2>
      <div className="relative">
        <input type="text" placeholder="Search Users..." className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue:500"/>
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>
      </div>
      </motion.div>
    </>
  );
};

export default UsersTable;
