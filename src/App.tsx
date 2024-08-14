import React from "react";
import {
  FaHome,
  FaTable,
  FaFileInvoiceDollar,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 flex flex-col justify-between">
        <div>
          <div className="text-xl font-bold mb-6">VISION UI FREE</div>
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded bg-blue-700"
            >
              <FaHome /> <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
            >
              <FaTable /> <span>Tables</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
            >
              <FaFileInvoiceDollar /> <span>Billing</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
            >
              <HiOutlineDocumentText /> <span>RTL</span>
            </a>
            <div className="text-gray-400 text-sm mt-4">ACCOUNT PAGES</div>
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
            >
              <FaUser /> <span>Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
            >
              <FaSignInAlt /> <span>Sign In</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
            >
              <FaUserPlus /> <span>Sign Up</span>
            </a>
          </nav>
        </div>
        <div className="space-y-4">
          <button className="flex items-center space-x-2 py-2 px-4 rounded bg-gray-700">
            <MdOutlineSupportAgent /> <span>Documentation</span>
          </button>
          <button className="py-2 px-4 rounded bg-blue-700">
            Upgrade to PRO
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Top navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type here..."
              className="py-2 px-4 rounded bg-gray-700 placeholder-gray-400"
            />
            <button className="py-2 px-4 rounded bg-gray-700 hover:bg-gray-600">
              Sign in
            </button>
          </div>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 bg-blue-800 p-4 rounded-lg">
            <div className="text-lg font-semibold">Today's Money</div>
            <div className="text-2xl font-bold">$53,000</div>
            <div className="text-green-400">+55%</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-lg font-semibold">Today's Users</div>
            <div className="text-2xl font-bold">2,300</div>
            <div className="text-green-400">+3%</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-lg font-semibold">New Clients</div>
            <div className="text-2xl font-bold">+3,462</div>
            <div className="text-red-400">-2%</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-lg font-semibold">Total Sales</div>
            <div className="text-2xl font-bold">$103,430</div>
            <div className="text-green-400">+5%</div>
          </div>
        </div>

        {/* More content */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-xl font-bold">Satisfaction Rate</div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-sm text-gray-400">Based on likes</div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-xl font-bold">Referral Tracking</div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-2xl font-bold">145 people</div>
                <div className="text-sm text-gray-400">Invited</div>
              </div>
              <div>
                <div className="text-2xl font-bold">9.3</div>
                <div className="text-sm text-gray-400">Safety</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
