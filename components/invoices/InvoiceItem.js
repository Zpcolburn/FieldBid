export default function InvoiceItem({ invoice }) {
  return (
    <li>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">{invoice.title}</div>
          <div className="text-sm text-gray-500">{invoice.amount}</div>
          <div className="text-sm text-gray-500">{invoice.status}</div>
        </div>
      </div>
    </li>
  )
}