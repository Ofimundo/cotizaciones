"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { RotateCcw } from "lucide-react"
import { ChatMessage, type Message } from "./chat-message"
import { TypingIndicator } from "./typing-indicator"
import { QuickReplies } from "./quick-replies"
import { ChatProductResults } from "./chat-product-results"
import { initialMessage, conversationFlows, type ChatOption } from "@/lib/data/chat-flows"
import { products } from "@/lib/data/products"

interface ChatState {
  step: number
  productType: string | null
  productLabel: string | null
  answers: { id: string; label: string }[]
}

const INITIAL_STATE: ChatState = {
  step: 0,
  productType: null,
  productLabel: null,
  answers: [],
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([])
  const [options, setOptions] = useState<ChatOption[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [chatState, setChatState] = useState<ChatState>(INITIAL_STATE)
  const [showRestart, setShowRestart] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [optionsLabel, setOptionsLabel] = useState("Selecciona una opcion:")
  const chatAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    if (chatAreaRef.current) {
      setTimeout(() => {
        chatAreaRef.current!.scrollTop = chatAreaRef.current!.scrollHeight
      }, 100)
    }
  }, [])

  const addAssistantMessage = useCallback(
    (text: string) => {
      setIsTyping(true)
      setOptions([])
      scrollToBottom()

      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, { role: "assistant", content: text }])
        scrollToBottom()
      }, 800)
    },
    [scrollToBottom]
  )

  // Init chat
  useEffect(() => {
    addAssistantMessage(initialMessage.message)
    setTimeout(() => {
      setOptions(initialMessage.options)
      setOptionsLabel("Selecciona una opcion:")
    }, 1200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const askNextQuestion = useCallback(
    (state: ChatState) => {
      if (!state.productType) return
      const flow = conversationFlows[state.productType]
      if (state.step < flow.length) {
        const question = flow[state.step]
        addAssistantMessage(question.message)
        setTimeout(() => {
          setOptions(question.options)
          setOptionsLabel("Selecciona una opcion:")
        }, 1200)
      } else {
        // Show results
        const filtered = products.filter((p) => p.type === state.productType)
        addAssistantMessage(
          "Perfecto! Basado en tus respuestas, he encontrado estas opciones ideales para ti:"
        )
        setTimeout(() => {
          setShowResults(true)
          scrollToBottom()
          // Show final options
          setTimeout(() => {
            addAssistantMessage("Te gustaria ver mas opciones o hacer una nueva busqueda?")
            setTimeout(() => {
              setOptions([
                { id: "restart", label: "Nueva busqueda" },
                { id: "catalog", label: "Ver catalogo completo" },
                { id: "advisor", label: "Hablar con un asesor" },
              ])
              setOptionsLabel("")
            }, 1200)
          }, 1000)
        }, 1200)
      }
    },
    [addAssistantMessage, scrollToBottom]
  )

  const handleProductTypeSelection = useCallback(
    (id: string, label: string) => {
      const newState: ChatState = {
        ...INITIAL_STATE,
        productType: id,
        productLabel: label,
        step: 0,
      }
      setChatState(newState)
      setMessages((prev) => [...prev, { role: "user", content: label }])
      setOptions([])
      setShowRestart(true)
      scrollToBottom()

      setTimeout(() => {
        askNextQuestion(newState)
      }, 500)
    },
    [askNextQuestion, scrollToBottom]
  )

  const handleAnswer = useCallback(
    (id: string, label: string) => {
      if (id === "restart") {
        restartChat()
        return
      }

      const newState: ChatState = {
        ...chatState,
        answers: [...chatState.answers, { id, label }],
        step: chatState.step + 1,
      }
      setChatState(newState)
      setMessages((prev) => [...prev, { role: "user", content: label }])
      setOptions([])
      scrollToBottom()

      setTimeout(() => {
        askNextQuestion(newState)
      }, 500)
    },
    [chatState, askNextQuestion, scrollToBottom]
  )

  const handleOptionSelect = useCallback(
    (id: string, label: string) => {
      if (!chatState.productType) {
        handleProductTypeSelection(id, label)
      } else {
        handleAnswer(id, label)
      }
    },
    [chatState.productType, handleProductTypeSelection, handleAnswer]
  )

  function restartChat() {
    setChatState(INITIAL_STATE)
    setMessages([])
    setOptions([])
    setShowRestart(false)
    setShowResults(false)
    setIsTyping(false)

    setTimeout(() => {
      addAssistantMessage(initialMessage.message)
      setTimeout(() => {
        setOptions(initialMessage.options)
        setOptionsLabel("Selecciona una opcion:")
      }, 1200)
    }, 100)
  }

  const filteredProducts = chatState.productType
    ? products.filter((p) => p.type === chatState.productType).slice(0, 3)
    : []

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-ofimundo-purple to-ofimundo-magenta px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center avatar-pulse">
            <svg
              className="w-6 h-6 text-ofimundo-purple"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Asistente Ofimundo</h3>
            <p className="text-xs text-white/70">{"En linea \u2022 Responde al instante"}</p>
          </div>
        </div>
        {showRestart && (
          <button
            className="text-white/70 hover:text-white transition p-2 rounded-full hover:bg-white/10"
            onClick={restartChat}
            aria-label="Reiniciar chat"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Chat Messages Area */}
      <div
        ref={chatAreaRef}
        className="chat-scroll h-[400px] overflow-y-auto p-6 space-y-4 bg-gray-50"
      >
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        {showResults && <ChatProductResults products={filteredProducts} />}
      </div>

      {/* Quick Replies Area */}
      <div className="border-t border-gray-100 p-4 bg-white">
        {options.length > 0 && (
          <QuickReplies
            options={options}
            label={optionsLabel}
            onSelect={handleOptionSelect}
          />
        )}
      </div>
    </div>
  )
}
