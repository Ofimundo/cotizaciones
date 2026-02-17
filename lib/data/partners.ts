export interface Partner {
  id: string
  name: string
  logo: string
  url: string
}

export const partners: Partner[] = [
  {
    id: "brother",
    name: "Brother",
    logo: "/images/brother.svg",
    url: "https://www.brother.cl/",
  },
  {
    id: "epson",
    name: "Epson",
    logo: "/images/epson.svg",
    url: "https://epson.cl/",
  },
  {
    id: "kyocera",
    name: "Kyocera",
    logo: "/images/kyocera.svg",
    url: "https://www.kyoceradocumentsolutions.cl/",
  },
]
