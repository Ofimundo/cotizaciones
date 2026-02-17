"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import Image from "next/image"
import { partners } from "@/lib/data/partners"

export function PartnersCarousel() {
  // Double for infinite loop
  const allPartners = [...partners, ...partners]

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-primary text-gradient title-xl mb-2">
            Nuestros Partners
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Trabajamos con las mejores marcas de tecnologia, para ofrecerte el mix de productos
            que se ajuste a tus necesidades.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={3}
          spaceBetween={35}
          speed={3000}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          loop
        >
          {allPartners.map((partner, index) => (
            <SwiperSlide key={`${partner.id}-${index}`}>
              <div className="flex items-center justify-center py-4">
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={60}
                    className="w-full max-w-[160px] h-auto opacity-70 hover:opacity-100 transition"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
