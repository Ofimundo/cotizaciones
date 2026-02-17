export interface Product {
  id: number
  name: string
  type: "impresora" | "notebook" | "scanner" | "monitor"
  price: string
  description: string
  tags: string[]
  match?: number
  discount?: string
  specs?: Record<string, string>
}

export const products: Product[] = [
  {
    id: 1,
    name: "HP LaserJet Pro MFP M428",
    type: "impresora",
    price: "$489.990",
    description: "Multifuncion laser para oficinas medianas",
    tags: ["laser", "wifi", "duplex"],
    match: 95,
  },
  {
    id: 2,
    name: "Epson EcoTank L3250",
    type: "impresora",
    price: "$279.990",
    description: "Sistema de tinta continua economico",
    tags: ["tinta", "wifi", "economica"],
    match: 88,
  },
  {
    id: 3,
    name: "Canon PIXMA G6020",
    type: "impresora",
    price: "$349.990",
    description: "Calidad fotografica con tanque de tinta",
    tags: ["foto", "tinta", "color"],
    match: 82,
  },
  {
    id: 4,
    name: "Dell Latitude 5540",
    type: "notebook",
    price: "$899.990",
    description: "Notebook empresarial Intel i5 13th Gen",
    tags: ["empresarial", '15.6"', "i5"],
    match: 94,
  },
  {
    id: 5,
    name: "HP ProBook 450 G10",
    type: "notebook",
    price: "$1.099.990",
    description: "Potencia profesional con Intel Core i7",
    tags: ["profesional", "i7", "16GB"],
    match: 91,
  },
  {
    id: 6,
    name: "Lenovo ThinkPad E15",
    type: "notebook",
    price: "$849.990",
    description: "Durabilidad empresarial ThinkPad",
    tags: ["robusto", "empresarial"],
    match: 87,
  },
  {
    id: 7,
    name: "Fujitsu ScanSnap iX1600",
    type: "scanner",
    price: "$549.990",
    description: "Scanner documental de alta velocidad",
    tags: ["rapido", "wifi", "ADF"],
    match: 96,
  },
  {
    id: 8,
    name: "Epson WorkForce ES-580W",
    type: "scanner",
    price: "$429.990",
    description: "Escaneo duplex automatico",
    tags: ["duplex", "portatil"],
    match: 89,
  },
  {
    id: 9,
    name: "Samsung ViewFinity S8 27\"",
    type: "monitor",
    price: "$649.990",
    description: "Monitor 4K profesional USB-C",
    tags: ["4K", "USB-C", "IPS"],
    match: 93,
  },
  {
    id: 10,
    name: "LG UltraGear 27GP850",
    type: "monitor",
    price: "$549.990",
    description: "Monitor gaming 165Hz Nano IPS",
    tags: ["gaming", "165Hz", "1ms"],
    match: 90,
  },
  {
    id: 11,
    name: "Dell UltraSharp U2723QE",
    type: "monitor",
    price: "$799.990",
    description: "IPS Black para negros profundos",
    tags: ["4K", "diseno", "USB-C"],
    match: 88,
  },
]

// Catalog products for the grid sections
export interface CatalogProduct {
  id: number
  name: string
  description: string
  discount?: string
  gradient: string
  iconColor: string
  svgIcon: string
}

export const catalogProducts1: CatalogProduct[] = [
  {
    id: 101,
    name: "Impresora Multifuncion HP",
    description: "Impresora laser multifuncion ideal para oficinas pequenas y medianas",
    discount: "-25% OFF",
    gradient: "from-purple-100 to-pink-50",
    iconColor: "text-purple-500",
    svgIcon: "printer",
  },
  {
    id: 102,
    name: "Toner HP LaserJet Pro",
    description: "Toner original de alto rendimiento para impresoras HP LaserJet",
    gradient: "from-blue-100 to-cyan-50",
    iconColor: "text-blue-500",
    svgIcon: "toner",
  },
  {
    id: 103,
    name: "Notebook Dell Inspiron 15",
    description: "Notebook empresarial con procesador Intel Core i5 de ultima generacion",
    gradient: "from-rose-100 to-orange-50",
    iconColor: "text-rose-500",
    svgIcon: "notebook",
  },
]

export const catalogProducts2: CatalogProduct[] = [
  {
    id: 201,
    name: "Scanner Documental",
    description: "Alta velocidad de escaneo para documentos corporativos",
    gradient: "from-indigo-100 to-purple-50",
    iconColor: "text-indigo-500",
    svgIcon: "scanner",
  },
  {
    id: 202,
    name: "Tinta para Plotters",
    description: "Cartuchos de tinta de alta calidad para impresion gran formato",
    gradient: "from-teal-100 to-green-50",
    iconColor: "text-teal-500",
    svgIcon: "plotter",
  },
  {
    id: 203,
    name: "Papel Premium A4",
    description: "Resma de 500 hojas papel bond de alta calidad",
    gradient: "from-amber-100 to-yellow-50",
    iconColor: "text-amber-500",
    svgIcon: "paper",
  },
]

// Detailed product for the detail page
export const detailedProducts: Record<string, {
  id: number
  name: string
  model: string
  type: string
  price: string
  description: string
  longDescription: string
  specs: Record<string, string>
  tags: string[]
}> = {
  "1": {
    id: 1,
    name: "HP LaserJet Pro MFP M428fdw",
    model: "M428fdw",
    type: "impresora",
    price: "$489.990",
    description: "Multifuncion laser para oficinas medianas",
    longDescription: "La HP LaserJet Pro MFP M428fdw es una impresora multifuncion laser monocromatica disenada para oficinas que necesitan rendimiento profesional. Con velocidades de impresion de hasta 40 ppm y capacidad de impresion a doble cara automatica, esta impresora ofrece productividad excepcional.",
    specs: {
      "Velocidad de impresion": "Hasta 40 ppm",
      "Resolucion": "1200 x 1200 dpi",
      "Conectividad": "WiFi, Ethernet, USB 2.0",
      "Memoria": "512 MB",
      "Bandeja de papel": "250 hojas",
      "Impresion duplex": "Automatica",
      "Scanner": "ADF 50 hojas",
      "Peso": "11.6 kg",
    },
    tags: ["laser", "wifi", "duplex", "ADF"],
  },
}
