import React from 'react';
import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { name: 'Total Revenue', value: '$24,560', icon: DollarSign, change: '+4.75%' },
    { name: 'Active Orders', value: '12', icon: ShoppingBag, change: '+2.02%' },
    { name: 'Table Occupancy', value: '85%', icon: TrendingUp, change: '+3.45%' },
    { name: 'Total Customers', value: '45', icon: Users, change: '+5.25%' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Orders */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Orders</h2>
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {[1, 2, 3].map((order) => (
                <li key={order}>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                          <ShoppingBag className="h-5 w-5 text-white" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            Order #{order} - Table 5
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime="2024-03-13">3 min ago</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Table Status */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Table Status</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((table) => (
              <div
                key={table}
                className={`p-4 rounded-lg ${
                  table % 2 === 0 ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                <p className="font-medium">Table {table}</p>
                <p className="text-sm text-gray-500">
                  {table % 2 === 0 ? 'Available' : 'Occupied'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}