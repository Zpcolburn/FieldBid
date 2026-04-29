export default function Receipts() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Receipts</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            <li>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">Receipt #001</div>
                  <div className="text-sm text-gray-500">$500.00</div>
                  <div className="text-sm text-gray-500">Paid</div>
                </div>
              </div>
            </li>
            {/* Add more receipt items here */}
          </ul>
        </div>
      </div>
    </div>
  )
}