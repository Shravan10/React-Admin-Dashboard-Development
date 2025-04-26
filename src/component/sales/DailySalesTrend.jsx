import React from 'react';
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

export const DailySalesTrend = () => {
  return (
    <div>
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              Daily Sales Trend
            </h2>
          </motion.div>
        </div>
  )
}
