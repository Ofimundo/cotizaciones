import Link from "next/link"
import type { Product } from "@/lib/data/products"

interface ChatProductResultsProps {
  products: Product[]
}

export function ChatProductResults({ products }: ChatProductResultsProps) {
  return (
    <div className="chat-bubble">
      <div className="grid grid-cols-1 gap-4 ml-11">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-chat-card bg-white border border-border rounded-2xl overflow-hidden"
          >
            <div className="flex">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center shrink-0">
                <svg
                  className="w-10 h-10 text-ofimundo-purple opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                </svg>
              </div>
              <div className="p-4 flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-bold text-ofimundo-navy text-sm">{product.name}</h4>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {product.match}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-ofimundo-magenta">{product.price}</span>
                  <Link
                    href={`/productos/${product.id}`}
                    className="px-3 py-1 bg-ofimundo-navy text-white text-xs rounded-lg hover:opacity-90 transition"
                  >
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
