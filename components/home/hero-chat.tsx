import { ChatContainer } from "@/components/chat/chat-container"

export function HeroChat() {
  return (
    <section id="inicio" className="hero-gradient py-8 md:py-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl text-primary text-gradient title-xl mb-4 leading-tight text-balance">
            Encuentra el producto ideal para tu negocio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Responde algunas preguntas simples y te recomendaremos las mejores opciones
          </p>
        </div>

        <ChatContainer />
      </div>
    </section>
  )
}
