import React from 'react'
import Header from '../component/common/Header'
import OverviewCard from '../component/analytics/OverviewCard'
import RevenueChart from '../component/analytics/RevenueChart'
import ChannelPerformance from '../component/analytics/ChannelPerformance'
import ProductPerformance from '../component/analytics/ProductPerformance'
import UserRetention from '../component/analytics/UserRetention'

const Analytics = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics"}/>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
       <OverviewCard/>
       <RevenueChart/>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        <ChannelPerformance/>
        <ProductPerformance/>
        <UserRetention/>
       </div>
      </main>
    </div>
  )
}

export default Analytics