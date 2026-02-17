export interface Message {
  role: "assistant" | "user"
  content: string
}

function AssistantAvatar() {
  return (
    <div className="w-8 h-8 bg-gradient-to-br from-ofimundo-purple to-ofimundo-magenta rounded-full flex items-center justify-center shrink-0">
      <svg
        className="w-4 h-4 text-white"
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
  )
}

export function ChatMessage({ message }: { message: Message }) {
  if (message.role === "assistant") {
    return (
      <div className="flex items-start gap-3 chat-bubble">
        <AssistantAvatar />
        <div className="assistant-bubble p-4 max-w-md">
          <p className="text-ofimundo-navy whitespace-pre-line">{message.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3 justify-end chat-bubble">
      <div className="user-bubble p-4 max-w-md">
        <p className="whitespace-pre-line">{message.content}</p>
      </div>
    </div>
  )
}
