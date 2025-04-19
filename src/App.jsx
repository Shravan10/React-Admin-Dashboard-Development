import { Routes,Route } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import Product from "./pages/Product"
import Sales from "./pages/Sales"
import Orders from "./pages/Orders"
import Analytics from "./pages/Analytics"
import Setting from "./pages/Setting"
import Users from "./pages/Users"
import Sidebar from "./component/common/Sidebar"
function App() {
return (
    <>
     <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
     <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>
     <Sidebar/>
     <Routes>
      <Route path="/" element={<OverviewPage/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/user" element={<Users/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/setting" element={<Setting/>}/>
     </Routes>
     </div>
    </>
  )
}

export default App
