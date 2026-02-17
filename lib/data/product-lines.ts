export interface ProductLine {
  id: string
  name: string
  description: string
  gradientFrom: string
  gradientTo: string
  iconColor: string
  svgPath: string
}

export const productLines: ProductLine[] = [
  {
    id: "multifuncionales",
    name: "Multifuncionales",
    description: "Imprime, copia y escanea",
    gradientFrom: "from-purple-100",
    gradientTo: "to-pink-100",
    iconColor: "text-purple-600",
    svgPath: '<rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2"/>',
  },
  {
    id: "automatizacion",
    name: "Automatizacion",
    description: "Soluciones inteligentes",
    gradientFrom: "from-green-100",
    gradientTo: "to-emerald-100",
    iconColor: "text-green-600",
    svgPath:
      '<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-width="2"/>',
  },
  {
    id: "termicas",
    name: "Impresoras Termicas",
    description: "Etiquetas y tickets",
    gradientFrom: "from-orange-100",
    gradientTo: "to-red-100",
    iconColor: "text-orange-600",
    svgPath:
      '<rect x="2" y="3" width="20" height="14" rx="2" stroke-width="2"/><path d="M8 21h8M12 17v4" stroke-width="2" stroke-linecap="round"/>',
  },
  {
    id: "notebooks",
    name: "Notebooks",
    description: "Equipos corporativos",
    gradientFrom: "from-pink-100",
    gradientTo: "to-rose-100",
    iconColor: "text-pink-600",
    svgPath:
      '<rect x="2" y="7" width="20" height="14" rx="2" stroke-width="2"/><path d="M16 3v4M8 3v4" stroke-width="2" stroke-linecap="round"/>',
  },
]
