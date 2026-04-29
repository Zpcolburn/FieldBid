export default function ReceiptItem({ receipt }) {
  return (
    <li>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">{receipt.title}</div>
          <div className="text-sm text-gray-500">{receipt.amount}</div>
          <div className="text-sm text-gray-500">{receipt.status}</div>
        </div>
      </div>
    </li>
  )
}