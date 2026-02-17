"use client"

import { useEffect, useCallback } from "react"
import { X } from "lucide-react"

interface CotizacionModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export function CotizacionModal({ isOpen, onClose, productName }: CotizacionModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Cotizar producto"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] chat-bubble"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-ofimundo-purple to-ofimundo-magenta px-8 py-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">Cotizar</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200">
                <h3 className="font-bold text-ofimundo-navy mb-3">Producto Seleccionado</h3>
                <p className="text-sm text-gray-700 font-medium">
                  {productName || "Impresora HP LaserJet Pro MFP M428fdw"}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-ofimundo-navy mb-4">
                  Solicitud de Servicios de Impresion
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cuotas mensuales:
                      </label>
                      <input
                        type="number"
                        defaultValue={36}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cantidad de equipos:
                      </label>
                      <input
                        type="number"
                        defaultValue={2}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Volumen de impresion mensual promedio:
                    </label>
                    <input
                      type="text"
                      defaultValue="2,000 a 3,000"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cobertura:
                    </label>
                    <input
                      type="text"
                      defaultValue="5% blanco y negro"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Direccion de despacho equipo:
                    </label>
                    <input
                      type="text"
                      placeholder="Ingrese direccion"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                    />
                  </div>

                  <button className="text-sm text-ofimundo-purple font-medium hover:underline">
                    + agregar otra direccion
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-ofimundo-navy mb-4">Datos de contacto</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre:</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono:
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa:
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ofimundo-purple focus:border-transparent text-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6 border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                  CONFIGURACION DE CARACTERISTICAS
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ajusta los parametros segun tus necesidades de impresion
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ofimundo-navy mb-4">Cotizacion</h3>

                <div className="space-y-6">
                  <div className="bg-white border-2 border-ofimundo-purple rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-ofimundo-purple text-white rounded-full flex items-center justify-center shrink-0 text-xl font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-ofimundo-navy mb-2">
                          Propuesta al mail automatizada (venta rapida)
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Entrega de propuesta en linea, y/o envio automatizado por email.
                        </p>
                        <p className="text-xs text-muted-foreground italic">
                          Contacto de refuerzo por whatsapp a las 2 hrs habiles de enviado mail con
                          propuesta
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-border rounded-xl p-6 hover:border-ofimundo-magenta transition">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-ofimundo-magenta text-white rounded-full flex items-center justify-center shrink-0 text-xl font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-ofimundo-navy mb-2">
                          Cotizacion a evaluar por ejecutivo
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Evaluacion y envio de cotizacion por mail y WhatsApp, refuerzo por
                          telefono
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-border px-8 py-6 bg-muted flex justify-end gap-4 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-border text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition"
          >
            Cancelar
          </button>
          <button className="px-8 py-3 bg-ofimundo-navy text-white rounded-lg font-semibold hover:opacity-90 transition">
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}
