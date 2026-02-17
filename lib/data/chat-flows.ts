export interface ChatOption {
  id: string
  label: string
}

export interface ChatStep {
  message: string
  options: ChatOption[]
}

export const initialMessage = {
  message:
    "Hola! Soy tu asistente de Ofimundo. Estoy aqui para ayudarte a encontrar el producto perfecto para tu negocio. Que tipo de equipo estas buscando?",
  options: [
    { id: "impresora", label: "Impresora" },
    { id: "notebook", label: "Notebook" },
    { id: "scanner", label: "Scanner" },
    { id: "monitor", label: "Monitor" },
  ] as ChatOption[],
}

export const conversationFlows: Record<string, ChatStep[]> = {
  impresora: [
    {
      message:
        "Excelente eleccion! Las impresoras son fundamentales para cualquier oficina.\n\nQue tamano de papel utilizas principalmente?",
      options: [
        { id: "a4", label: "A4 (Estandar)" },
        { id: "oficio", label: "Oficio/Legal" },
        { id: "a3", label: "A3 (Grande)" },
        { id: "varios", label: "Varios tamanos" },
      ],
    },
    {
      message:
        "Perfecto, eso me ayuda a filtrar mejor.\n\nAproximadamente cuantas paginas imprimes al mes?",
      options: [
        { id: "bajo", label: "Menos de 500" },
        { id: "medio", label: "500 - 2,000" },
        { id: "alto", label: "2,000 - 5,000" },
        { id: "muy-alto", label: "Mas de 5,000" },
      ],
    },
    {
      message: "Una ultima pregunta: Necesitas funciones adicionales?",
      options: [
        { id: "solo-impresion", label: "Solo impresion" },
        { id: "multifuncion", label: "Multifuncion (copia/scan)" },
        { id: "wifi", label: "Conexion WiFi" },
        { id: "todas", label: "Todas las anteriores" },
      ],
    },
  ],
  notebook: [
    {
      message:
        "Los notebooks son esenciales para el trabajo moderno!\n\nCual sera el uso principal del equipo?",
      options: [
        { id: "oficina", label: "Trabajo de oficina" },
        { id: "diseno", label: "Diseno grafico" },
        { id: "programacion", label: "Programacion" },
        { id: "multimedia", label: "Edicion multimedia" },
      ],
    },
    {
      message:
        "Entendido. La portabilidad es importante.\n\nQue tamano de pantalla prefieres?",
      options: [
        { id: "13", label: '13-14" (Ultra portatil)' },
        { id: "15", label: '15.6" (Balance ideal)' },
        { id: "17", label: '17" (Maximo espacio)' },
        { id: "indif", label: "Sin preferencia" },
      ],
    },
    {
      message: "Que tan importante es la duracion de la bateria?",
      options: [
        { id: "muy", label: "Muy importante (+8hrs)" },
        { id: "moderado", label: "Moderado (5-8hrs)" },
        { id: "no-importa", label: "No importa mucho" },
        { id: "siempre-enchufado", label: "Siempre enchufado" },
      ],
    },
  ],
  scanner: [
    {
      message:
        "Los scanners son geniales para digitalizar tu oficina!\n\nQue tipo de documentos necesitas escanear principalmente?",
      options: [
        { id: "docs", label: "Documentos y contratos" },
        { id: "fotos", label: "Fotografias" },
        { id: "libros", label: "Libros y revistas" },
        { id: "mixto", label: "Un poco de todo" },
      ],
    },
    {
      message:
        "Interesante. El volumen de escaneo es importante.\n\nCuantos documentos escaneas tipicamente por sesion?",
      options: [
        { id: "pocos", label: "1-10 paginas" },
        { id: "moderado", label: "10-50 paginas" },
        { id: "muchos", label: "Mas de 50 paginas" },
        { id: "continuo", label: "Flujo continuo" },
      ],
    },
    {
      message: "Necesitas que el scanner sea portatil o sera de escritorio?",
      options: [
        { id: "portatil", label: "Portatil" },
        { id: "escritorio", label: "De escritorio" },
        { id: "ambos", label: "Me sirven ambos" },
      ],
    },
  ],
  monitor: [
    {
      message:
        "Un buen monitor hace toda la diferencia!\n\nQue resolucion necesitas?",
      options: [
        { id: "fhd", label: "Full HD (1080p)" },
        { id: "2k", label: "2K / QHD" },
        { id: "4k", label: "4K UHD" },
        { id: "ultrawide", label: "Ultra Wide" },
      ],
    },
    {
      message: "Perfecto. Cual sera el uso principal del monitor?",
      options: [
        { id: "oficina", label: "Trabajo de oficina" },
        { id: "gaming", label: "Gaming" },
        { id: "diseno", label: "Diseno y color" },
        { id: "video", label: "Edicion de video" },
      ],
    },
    {
      message: "Que tamano de pantalla te interesa?",
      options: [
        { id: "24", label: '24" (Compacto)' },
        { id: "27", label: '27" (Popular)' },
        { id: "32", label: '32" (Grande)' },
        { id: "34plus", label: '34"+ (Muy grande)' },
      ],
    },
  ],
}
