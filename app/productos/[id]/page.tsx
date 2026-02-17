"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CotizacionModal } from "@/components/cotizacion/cotizacion-modal"
import { detailedProducts, products } from "@/lib/data/products"

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [modalOpen, setModalOpen] = useState(false)

  // Find product in detailed list or fallback to basic products
  const detailed = detailedProducts[id]
  const basic = products.find((p) => p.id === Number(id))
  const product = detailed || (basic
    ? {
        ...basic,
        model: "",
        longDescription: basic.description,
        specs: {} as Record<string, string>,
      }
    : null)

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-ofimundo-navy mb-4">
              Producto no encontrado
            </h1>
            <Link
              href="/"
              className="text-ofimundo-purple hover:underline font-medium"
            >
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ofimundo-purple transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catalogo
          </Link>
        </div>

        {/* Product Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl flex items-center justify-center aspect-square">
              <svg
                className="w-32 h-32 text-ofimundo-purple opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
              </svg>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-ofimundo-purple text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-ofimundo-navy mb-3 text-balance">
                  {product.name}
                </h1>
                {detailed?.model && (
                  <p className="text-muted-foreground mb-2">Modelo: {detailed.model}</p>
                )}
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {detailed?.longDescription || product.description}
                </p>
                <p className="text-3xl font-bold text-ofimundo-magenta mb-8">
                  {product.price}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex-1 px-8 py-4 bg-gradient-to-br from-ofimundo-purple to-ofimundo-magenta text-white rounded-lg text-lg font-semibold hover:from-[#241a78] hover:to-[#c62842] transition"
                >
                  Cotizar este producto
                </button>
                <Link
                  href="/"
                  className="flex-1 text-center px-8 py-4 border-2 border-border text-ofimundo-navy rounded-lg text-lg font-medium hover:bg-ofimundo-navy hover:text-white transition"
                >
                  Ver mas productos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specs */}
        {detailed?.specs && Object.keys(detailed.specs).length > 0 && (
          <section className="bg-muted py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-ofimundo-navy mb-8">
                Especificaciones Tecnicas
              </h2>
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                {Object.entries(detailed.specs).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between px-6 py-4 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <span className="font-medium text-ofimundo-navy">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-ofimundo-navy mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products
                .filter(
                  (p) =>
                    p.type === (detailed?.type || basic?.type) &&
                    p.id !== Number(id)
                )
                .slice(0, 3)
                .map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="card-hover bg-white border border-border rounded-xl overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-ofimundo-purple opacity-30"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-ofimundo-navy mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {relatedProduct.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-ofimundo-magenta">
                          {relatedProduct.price}
                        </span>
                        <Link
                          href={`/productos/${relatedProduct.id}`}
                          className="px-4 py-2 bg-ofimundo-navy text-white text-sm rounded-lg hover:opacity-90 transition"
                        >
                          Ver detalle
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CotizacionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={product.name}
      />
    </>
  )
}
