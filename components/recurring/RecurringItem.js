export default function RecurringItem({ recurring }) {
  return (
    <li>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">{recurring.title}</div>
          <div className="text-sm text-gray-500">{recurring.amount}</div>
          <div className="text-sm text-gray-500">{recurring.status}</div>
        </div>
      </div>
    </li>
  )
}