"use client"

import { ProductCard } from "@/components/product/product-card"
import type { CatalogProduct } from "@/lib/data/products"

interface ProductGridProps {
  title: string
  subtitle: string
  products: CatalogProduct[]
  showViewAll?: boolean
  onOpenCotizacion: (productName: string) => void
}

export function ProductGrid({
  title,
  subtitle,
  products,
  showViewAll = false,
  onOpenCotizacion,
}: ProductGridProps) {
  return (
    <section id="categorias" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-primary text-gradient title-xl mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          {showViewAll && (
            <button className="text-sm font-medium text-ofimundo-purple hover:underline hidden md:block">
              {"Ver todas \u2192"}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenCotizacion={onOpenCotizacion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
