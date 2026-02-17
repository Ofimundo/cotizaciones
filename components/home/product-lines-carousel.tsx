"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import { productLines } from "@/lib/data/product-lines"

export function ProductLinesCarousel() {
  // Double slides for infinite loop effect
  const allSlides = [...productLines, ...productLines]

  return (
    <section id="productos" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl text-primary text-gradient title-xl mb-2">
            Nuestras Lineas de Producto
          </h2>
          <p className="text-muted-foreground">
            Diferentes categorias para distintas necesidades
          </p>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={35}
          speed={3000}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          loop
        >
          {allSlides.map((line, index) => (
            <SwiperSlide key={`${line.id}-${index}`} style={{ width: "256px" }}>
              <div className="p-6 bg-white rounded-xl border border-border text-center hover:shadow-lg transition">
                <div
                  className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${line.gradientFrom} ${line.gradientTo} rounded-full flex items-center justify-center`}
                >
                  <svg
                    className={`w-10 h-10 ${line.iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    dangerouslySetInnerHTML={{ __html: line.svgPath }}
                  />
                </div>
                <h3 className="font-bold text-ofimundo-navy mb-1">{line.name}</h3>
                <p className="text-sm text-muted-foreground">{line.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
