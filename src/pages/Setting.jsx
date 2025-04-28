import React from 'react'
import Header from '../component/common/Header'
import Profile from '../component/settings/Profile'

const Setting = () => {
  return (
   <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
    <Header title="Setting"/>
    <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
     <Profile/>
    </main>
   </div>
  )
}

export default Setting