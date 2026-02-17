"use client"

import Link from "next/link"
import type { CatalogProduct } from "@/lib/data/products"

interface ProductCardProps {
  product: CatalogProduct
  onOpenCotizacion: (productName: string) => void
}

function ProductIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "printer":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        </svg>
      )
    case "toner":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      )
    case "notebook":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="2" />
          <path d="M16 3v4M8 3v4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "scanner":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
        </svg>
      )
    case "plotter":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
        </svg>
      )
    case "paper":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            strokeWidth="2"
          />
        </svg>
      )
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        </svg>
      )
  }
}

export function ProductCard({ product, onOpenCotizacion }: ProductCardProps) {
  return (
    <div className="card-hover relative bg-white border border-border rounded-xl overflow-hidden">
      <div
        className={`aspect-video bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
      >
        <ProductIcon
          type={product.svgIcon}
          className={`w-20 h-20 ${product.iconColor} opacity-40`}
        />
      </div>

      {product.discount && (
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-ofimundo-red text-white text-xs font-bold rounded-full">
            {product.discount}
          </span>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-bold text-ofimundo-navy mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenCotizacion(product.name)}
            className="flex-1 text-center px-4 py-3 bg-gradient-to-br from-ofimundo-purple to-ofimundo-magenta text-white rounded-lg text-sm font-semibold hover:from-[#241a78] hover:to-[#c62842] transition"
          >
            Abrir Cotizacion
          </button>

          <Link
            href={`/productos/1`}
            className="flex-1 text-center px-4 py-3 border border-border text-ofimundo-navy rounded-lg text-sm font-medium hover:bg-ofimundo-navy hover:text-white transition"
          >
            Ver mas
          </Link>
        </div>
      </div>
    </div>
  )
}
