import React from 'react'
import Header from '../component/common/Header'
import OverviewCard from '../component/analytics/OverviewCard'

const Analytics = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics"}/>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
       <OverviewCard/>
      </main>
    </div>
  )
}

export default Analytics