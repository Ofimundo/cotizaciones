"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroChat } from "@/components/home/hero-chat"
import { ProductLinesCarousel } from "@/components/home/product-lines-carousel"
import { ProductGrid } from "@/components/home/product-grid"
import { PartnersCarousel } from "@/components/home/partners-carousel"
import { CotizacionModal } from "@/components/cotizacion/cotizacion-modal"
import { catalogProducts1, catalogProducts2 } from "@/lib/data/products"

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>()

  function handleOpenCotizacion(productName: string) {
    setSelectedProduct(productName)
    setModalOpen(true)
  }

  return (
    <>
      <Header />

      <main>
        <HeroChat />

        <ProductLinesCarousel />

        <ProductGrid
          title="Categoria de Productos / Los Productos Mas Buscados"
          subtitle="Explora nuestras categorias principales"
          products={catalogProducts1}
          showViewAll
          onOpenCotizacion={handleOpenCotizacion}
        />

        <PartnersCarousel />

        <ProductGrid
          title="Categoria de Productos"
          subtitle="Mas opciones para tu negocio"
          products={catalogProducts2}
          onOpenCotizacion={handleOpenCotizacion}
        />
      </main>

      <Footer />

      <CotizacionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
      />
    </>
  )
}
