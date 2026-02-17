import type { ChatOption } from "@/lib/data/chat-flows"

interface QuickRepliesProps {
  options: ChatOption[]
  label?: string
  onSelect: (id: string, label: string) => void
}

export function QuickReplies({ options, label, onSelect }: QuickRepliesProps) {
  return (
    <div>
      {label && (
        <p className="text-xl text-muted-foreground mb-3 text-center">{label}</p>
      )}
      <div className="flex flex-wrap justify-center gap-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            className="quick-reply px-4 py-2 border-2 border-border rounded-full text-sm font-medium text-ofimundo-navy bg-white transition-all"
            onClick={() => onSelect(opt.id, opt.label)}
          >
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
