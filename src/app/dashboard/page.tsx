import { BarChart3, Users, ShoppingCart, DollarSign } from 'lucide-react'
import { Header } from "../../components/header"
import { Sidebar } from "../../components/sidebar"
import { StatsCard } from "../../components/stats-card"
import { ProductTable } from "../../components/product-table"
import { Card } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
          <div className="grid grid-cols-4 gap-6">
          <StatsCard
            icon={DollarSign}
            title="Funds Raised"
            value="$500k"
            change="+20%"
            className="bg-blue-50"
          />
          <StatsCard
            icon={BarChart3}
            title="Valuation"
            value="$5M"
            change="+10%"
            className="bg-teal-50"
          />
          <StatsCard
            icon={ShoppingCart}
            title="Burn Rate"
            value="$30k/month"
            change="-5%"
            className="bg-red-50"
          />
          <StatsCard
            icon={Users}
            title="Runway"
            value="12 months"
            change="Stable"
            className="bg-green-50"
          />
        </div>
            <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Media</h2>
  
  {/* Instagram-like post card */}
  <div className="flex flex-col bg-gray-100 rounded-lg shadow-md mb-4">
    <div className="flex items-center p-4">
      {/* Placeholder for user profile */}
      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-700">User Name</span>
        <span className="text-sm text-gray-500">Location</span>
      </div>
    </div>
    
    {/* Image placeholder */}
    <div className="h-64 bg-gray-300 rounded-t-lg mb-2"></div>
    
    {/* Like and comment actions */}
    <div className="flex justify-between items-center p-4">
      <div className="flex space-x-3">
        <div className="w-6 h-6 rounded-full bg-gray-300"></div> {/* Like icon placeholder */}
        <div className="w-6 h-6 rounded-full bg-gray-300"></div> {/* Comment icon placeholder */}
      </div>
      <div className="text-sm text-gray-500">2 hours ago</div>
    </div>
  </div>
</Card>
<Card className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
  <h3 className="text-2xl font-extrabold text-gray-800 mb-4">About EduTrack</h3>
  
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-gray-700">Problem Statement</h4>
    <p className="text-sm text-gray-600 mt-2">
      Difficulty in tracking student engagement in online courses. Many educators struggle to measure how well students are participating, leading to challenges in improving learning experiences and outcomes.
    </p>
  </div>
  
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-gray-700">Solution</h4>
    <p className="text-sm text-gray-600 mt-2">
      EduTrack provides an AI-powered solution to track student engagement and participation in real time. By leveraging data from student activities and behaviors, EduTrack offers actionable insights to improve engagement and boost learning outcomes.
    </p>
  </div>
  
  <div>
    <h4 className="text-lg font-semibold text-gray-700">Key Features</h4>
    <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
      <li>Real-time engagement analytics to track student participation levels.</li>
      <li>Gamification elements to encourage students and increase motivation.</li>
      <li>AI-driven recommendations to personalize learning experiences.</li>
      <li>Detailed reporting for educators to track individual student progress.</li>
      <li>Integration with existing learning management systems (LMS).</li>
    </ul>
  </div>
</Card>

            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Top Products</h3>
              <ProductTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

