"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="logo-safe-area">
            <Link href="/">
              <Image
                src="/images/logo-ofimundo.png"
                alt="Ofimundo"
                width={270}
                height={60}
                className="h-auto w-[270px]"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-medium text-ofimundo-navy hover:text-ofimundo-purple transition"
            >
              Inicio
            </Link>
            <Link
              href="/#productos"
              className="text-xl font-medium text-muted-foreground hover:text-ofimundo-purple transition"
            >
              Productos
            </Link>
            <Link
              href="/#categorias"
              className="text-xl font-medium text-muted-foreground hover:text-ofimundo-purple transition"
            >
              Categorias
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-ofimundo-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-medium text-ofimundo-navy hover:text-ofimundo-purple transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/#productos"
                className="text-lg font-medium text-muted-foreground hover:text-ofimundo-purple transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/#categorias"
                className="text-lg font-medium text-muted-foreground hover:text-ofimundo-purple transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categorias
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
