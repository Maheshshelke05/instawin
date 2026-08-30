"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Zap, MessageCircle, Sparkles, ArrowUpRight, Github, Star,
  Send, AtSign, Brain, Inbox, Lock, Terminal,
} from "lucide-react"
import { cn } from "@/lib/utils"

const TELEGRAM_URL = "https://t.me/instagramautomationp8"
const GITHUB_URL = "https://github.com/ayuuxh2/insta-p8"

export function LandingPage() {
  const [stars, setStars] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetch("https://api.github.com/repos/ayuuxh2/insta-p8")
      .then(r => r.json())
      .then(d => { if (typeof d.stargazers_count === "number") setStars(d.stargazers_count) })
      .catch(() => {})
  }, [])

  const handleLogin = () => {
    // Instagram Business Login (Instagram API with Instagram Login). client_id must be the
    // Instagram app ID from the Instagram product page, not the parent Meta app ID.
    window.location.href = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI}&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments`
  }

  const handleTestLogin = () => {
    localStorage.setItem("ig_user_id", "9999999999")
    localStorage.setItem("ig_username", "test_creator")
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-yellow selection:text-accent-yellow-foreground overflow-x-hidden antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 h-16 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-accent-blue text-accent-blue-foreground flex items-center justify-center rounded-[6px]">
            <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
          </div>
          <span className="font-serif-display italic text-lg tracking-tight">InstaWin</span>
          <span className="hidden sm:inline-block font-mono-ui text-[10px] text-muted-foreground border border-border rounded-full px-2 py-0.5">open source</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 font-mono-ui text-xs text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 rounded-full px-3.5 py-1.5 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Star</span>
            {stars !== null && <span className="text-accent-yellow-foreground dark:text-accent-yellow">{stars}</span>}
          </a>
          {process.env.NODE_ENV === "development" && (
            <button
              onClick={handleTestLogin}
              className="font-mono-ui text-xs font-bold text-accent-yellow-foreground dark:text-accent-yellow border border-accent-yellow/40 rounded-full px-4 py-1.5 hover:bg-accent-yellow/10 transition-colors"
            >
              Dev Login
            </button>
          )}
          <button
            onClick={handleLogin}
            className="font-mono-ui text-xs font-bold bg-foreground text-background rounded-full px-4 py-1.5 hover:bg-accent-yellow hover:text-accent-yellow-foreground transition-colors"
          >
            Log in
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="atmosphere px-5 md:px-10 pt-16 md:pt-28 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="fade-up" style={{ animationDelay: "0ms" }}>
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-white/70 dark:text-white/60 mb-6">
                Instagram automation // self-hosted // no monthly fees
              </p>
            </div>

            <h1 className="fade-up font-serif-display text-[15vw] md:text-[7.5rem] leading-[0.95] tracking-tight text-white" style={{ animationDelay: "80ms" }}>
              Your DMs,
              <br />
              <span className="italic">on autopilot.</span>
            </h1>

            <div className="fade-up mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16" style={{ animationDelay: "160ms" }}>
              <p className="text-white/85 dark:text-white/75 text-base md:text-lg max-w-md leading-relaxed">
                Comment-to-DM funnels, keyword triggers, story reactions, AI replies, a live inbox,
                and Reels scheduling. The open-source ManyChat alternative — your data stays in your own Supabase.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleLogin}
                  className="group flex items-center gap-2 bg-accent-yellow text-accent-yellow-foreground font-mono-ui text-sm font-bold px-7 py-4 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-lg shadow-black/10"
                >
                  Connect Instagram
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
                {process.env.NODE_ENV === "development" && (
                  <button
                    onClick={handleTestLogin}
                    className="group flex items-center gap-2 font-mono-ui text-sm font-bold text-white border border-white/40 px-7 py-4 rounded-full hover:bg-white/10 active:scale-[0.98] transition-all"
                  >
                    <Terminal className="w-4 h-4" />
                    Dev Login
                  </button>
                )}
                <a
                  href={TELEGRAM_URL} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 font-mono-ui text-sm text-white/90 border border-white/30 px-6 py-4 rounded-full hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Telegram support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="border-b border-border py-3 overflow-hidden bg-card">
          <div className="marquee-track flex whitespace-nowrap font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground gap-8 w-max">
            {Array.from({ length: 2 }).map((_, copy) => (
              <div key={copy} className="flex gap-8">
                {["comment → DM", "keyword triggers", "story reactions", "AI auto-reply", "live inbox", "ice breakers", "follow gate", "quick replies", "media attachments", "public + private replies"].map((t) => (
                  <span key={t} className="flex items-center gap-8">
                    {t} <span className="text-accent-yellow-foreground dark:text-accent-yellow">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <section className="px-5 md:px-10 py-20 max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-serif-display text-4xl md:text-5xl">Everything the paid tools do.</h2>
              <span className="hidden md:block font-mono-ui text-xs text-muted-foreground">$0/month</span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {[
              { icon: <MessageCircle className="w-4 h-4" />, title: "Comment → DM funnels", desc: "Keyword or reply-all triggers on any post. Choose DM only, public reply only, or both — with your own rotating public replies." },
              { icon: <Send className="w-4 h-4" />, title: "DM keyword automation", desc: "Auto-respond to DMs with text, media, or rich cards with buttons. Quick-reply chips guide people through your funnel." },
              { icon: <AtSign className="w-4 h-4" />, title: "Story triggers", desc: "React to story mentions, emoji reactions, and story replies. Filter by emoji or keyword." },
              { icon: <Brain className="w-4 h-4" />, title: "AI auto-reply", desc: "Feed it your account context — niche, products, tone — and let AI handle unmatched DMs like a human." },
              { icon: <Inbox className="w-4 h-4" />, title: "Live inbox", desc: "Every conversation in one dashboard. Jump in manually anytime, fire quick responses from your saved automations." },
              { icon: <Lock className="w-4 h-4" />, title: "Follow gate", desc: "Lock content behind a follow. Non-followers get a follow prompt; one tap later they unlock the goods." },
              { icon: <Sparkles className="w-4 h-4" />, title: "Human-like sending", desc: "Optional typing indicators and randomized delays so replies land natural, not botty." },
              { icon: <Terminal className="w-4 h-4" />, title: "Self-hosted & hackable", desc: "Next.js + Supabase. Deploy on free tiers. Read every line, fork it, own your data and your tokens." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <Feature icon={f.icon} title={f.title} desc={f.desc} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Community strip */}
        <section className="px-5 md:px-10 pb-24 max-w-6xl mx-auto">
          <Reveal>
            <div className="border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-gradient-to-br from-accent-blue/10 via-card to-card">
              <div>
                <h3 className="font-serif-display text-3xl md:text-4xl mb-2">Built in the open.</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  Stars, sponsors, and testers keep this project alive. Questions, bugs, feature requests —
                  the Telegram chat is where it all happens.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={TELEGRAM_URL} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 bg-[#2AABEE] text-white font-mono-ui text-xs font-bold px-5 py-3 rounded-full hover:brightness-110 transition-all"
                >
                  <Send className="w-3.5 h-3.5" /> Join Telegram
                </a>
                <a
                  href={GITHUB_URL} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 border border-border text-foreground font-mono-ui text-xs font-bold px-5 py-3 rounded-full hover:border-foreground/40 transition-colors"
                >
                  <Star className="w-3.5 h-3.5 text-accent-yellow-foreground dark:text-accent-yellow" /> Star on GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-5 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono-ui text-[11px] text-muted-foreground">
          InstaWin — open-source Instagram automation. MIT licensed.
        </span>
        <div className="flex items-center gap-5 font-mono-ui text-[11px] text-muted-foreground">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#2AABEE] transition-colors">Telegram support</a>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-background p-7 group hover:bg-accent/40 transition-colors h-full">
      <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent-yellow-foreground dark:group-hover:text-accent-yellow group-hover:border-accent-yellow/40 transition-colors mb-5">
        {icon}
      </div>
      <h3 className="font-mono-ui text-sm font-bold text-foreground mb-2">{title}</h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

/** Fades + slides a section in once it scrolls into view. */
function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}
