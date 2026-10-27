import { ArrowRight, MessageSquare, Rocket, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// A placeholder start page. The kickoff questions replace it with the tool.
const steps = [
  { icon: MessageSquare, title: "Answer a few questions", text: "Claude asks who uses it, what it replaces and who owns it, then writes the brief." },
  { icon: Sparkles, title: "AI drafts it", text: "Built from shadcn/ui components, with checks that keep it typed and its dependencies safe." },
  { icon: Rocket, title: "Live in a minute", text: "Every push to main checks the project and publishes it to a live link." },
]

export default function App() {
  return (
    <div className="min-h-svh">
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="font-semibold">New internal tool</span>
          <Button variant="ghost" size="sm" asChild>
            <a href="kit/">How it's built</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section className="flex max-w-2xl flex-col items-start gap-6">
          <Badge variant="secondary">Placeholder</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            An internal tool, live in a minute
          </h1>
          <p className="text-lg text-muted-foreground">
            Answer a few questions and Claude replaces this page with a first working version of the tool.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="kit/">
                See how it's built <ArrowRight />
              </a>
            </Button>
          </div>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-muted">
                  <Icon className="size-4" />
                </div>
                <CardTitle>
                  {i + 1}. {title}
                </CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
