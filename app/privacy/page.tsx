export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto py-16 px-5 fade-up">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Legal</p>
        <h1 className="font-serif-display text-4xl md:text-5xl mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: July 2026</p>

        <section className="space-y-6 text-[15px] leading-relaxed">
          <p>
            This app (&quot;InstaWin&quot;) is owned and operated by <strong>Mahesh</strong>. The app uses the Instagram Graph API to help users manage
            their Instagram account, including posting reels, auto-replying to
            messages, and viewing analytics.
          </p>

          <div>
            <h2 className="font-serif-display text-2xl mb-3">Data We Collect</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
              <li>Instagram profile information (username, name, profile picture)</li>
              <li>Instagram content (media, captions, comments)</li>
              <li>Messages and conversations (for auto-reply features)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif-display text-2xl mb-3">How We Use Data</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
              <li>To post content to your Instagram account when you request it</li>
              <li>To send automated replies to messages and comments</li>
              <li>To display analytics about your account performance</li>
              <li>We do <strong className="text-foreground">not</strong> sell your data to third parties</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif-display text-2xl mb-3">Data Storage</h2>
            <p className="text-muted-foreground">
              Your Instagram access tokens and profile data are stored securely in
              our database (Supabase). You can disconnect your account at any time,
              which will remove the stored tokens.
            </p>
          </div>

          <div>
            <h2 className="font-serif-display text-2xl mb-3">Contact</h2>
            <p className="text-muted-foreground">
              For any questions, please reach out via the app dashboard.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
