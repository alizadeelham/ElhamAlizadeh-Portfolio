import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpLeft, ArrowUpRight, Download, Linkedin, Mail, Copy, Check } from "lucide-react";

// Same filenames, served from the repo root: local in the preview, and
// https://alizadeelham.github.io/ElhamAlizadeh-Portfolio/<file> once published there.
const PHOTO = "/photo_2026-09-07_11-36-05.jpg";
const RESUME = "/Elham_Alizadeh.pdf";
const GH_PAGES = "https://alizadeelham.github.io/ElhamAlizadeh-Portfolio";
// Social previews need an absolute URL, so derive it from wherever the page is served.
const SITE_ORIGIN =
  typeof window !== "undefined" ? window.location.origin : GH_PAGES;
const EMAIL = "Elhamalizadeh.tula@Gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/elham-alizadeh-a45ab913a";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الهام علیزاده — مدیر محصول فین‌تک و هوش مصنوعی" },
      { name: "description", content: "مدیر محصول با ۶+ سال تجربه در فین‌تک و بانکداری؛ کمک به رشد Ayan از ۸ به ۱۶+ میلیون کاربر." },
      { property: "og:title", content: "الهام علیزاده — مدیر محصول" },
      { property: "og:description", content: "مدیر محصول در فین‌تک و هوش مصنوعی؛ از شناخت مسئله تا سنجش نتیجه." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_ORIGIN}${PHOTO}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_ORIGIN}${PHOTO}` },
    ],
  }),
  component: Index,
});

type Lang = "fa" | "en";

const T = {
  fa: {
    name: "الهام علیزاده",
    resume: "رزومه",
    nav: [
      { href: "#about", label: "دربارهٔ من" },
      { href: "#work", label: "دستاوردها" },
      { href: "#skills", label: "تخصص‌ها" },
      { href: "#contact", label: "تماس" },
    ],
    badge: "مدیر محصول · فین‌تک · هوش مصنوعی",
    h1a: "از نیاز واقعی آدم‌ها،",
    h1b: "تا محصولی که رشد می‌کند.",
    intro: "من به‌عنوان مدیر محصول، بیش از ۶ سال در حوزه فین‌تک و بانکداری فعالیت کرده‌ام و در Ayan با تکیه بر تحلیل داده، آزمایش و به‌کارگیری هوش مصنوعی، به رشد محصول از ۸ به ۱۶ میلیون کاربر کمک کرده‌ام.",
    ctaWork: "دیدن نتایج",
    ctaTalk: "گفت‌وگو کنیم",
    stats: [
      { v: "+۶", l: "سال تجربه" },
      { v: "+۱۶M", l: "کاربر" },
      { v: "+۳۲٪", l: "نرخ تکمیل فرایند" },
      { v: "+۱۳٪", l: "نرخ تبدیل" },
    ],
    aboutTitle: "دربارهٔ من",
    about1: ["کارم را با بانکداری سازمانی در ", "Rayan Pardaz Kavosh", " شروع کردم و از همکار مالک محصول به مالک محصول رسیدم. امروز در ", "Ayan", " مدیر محصولم و خدمات پرداخت و استعلام را برای میلیون‌ها کاربر می‌سازم."],
    about2: "مهندسی صنایع به من یاد داد مسئلهٔ پیچیده را به قدم‌های روشن بشکنم. بیشترین انرژی‌ام را جایی می‌گذارم که هوش مصنوعی و تجربهٔ کاربری خوب، کار روزمرهٔ مردم را واقعاً ساده‌تر کند.",
    experience: [
      { role: "مدیر محصول", org: "Ayan", d: "خدمات پرداخت و استعلام برای میلیون‌ها کاربر" },
      { role: "مالک محصول", org: "Rayan Pardaz Kavosh", d: "راهکارهای بانکداری سازمانی" },
      { role: "کارشناسی ارشد مهندسی صنایع", org: "تحصیلات", d: "رویکرد ساختاریافته به مسائل پیچیده" },
    ],
    workTitle: "نتایج منتخب",
    work: [
      { tag: "فین‌تک و رشد", title: "پرداخت روزمره، ساده‌تر برای میلیون‌ها نفر", metric: "8M → 16M+", metricLabel: "رشد کاربران", body: "با کشف و عرضهٔ خدمات تازه، به رشد کاربران Ayan از ۸ به بیش از ۱۶ میلیون کمک کردم. اپ iOS را هم با تیمی کوچک از صفر راه انداختیم.", focus: "استراتژی محصول · کشف خدمات · تحویل" },
      { tag: "هوش مصنوعی و تجربهٔ کاربری", title: "کاربر کمتر رها می‌کند، بیشتر به نتیجه می‌رسد", metric: "+32%", metricLabel: "نرخ تکمیل فرایند", body: "با بهبودهای مبتنی بر هوش مصنوعی، نرخ پرش ۲۰٪ کم شد. کنار تیم فنی، دقت جست‌وجو را از ۴۵٪ به ۸۳٪ رساندیم تا کاربر سریع‌تر چیزی را که می‌خواهد پیدا کند.", focus: "تجربهٔ کاربری · آزمایش · همکاری فنی" },
      { tag: "داده و درآمدزایی", title: "تصمیم درآمدی بر پایهٔ داده، نه حدس", metric: "+13%", metricLabel: "نرخ تبدیل", body: "به‌جای انتخاب بر اساس حدس، ایده‌های درآمدزایی را با تست A/B کنار هم سنجیدیم. گزینهٔ برنده نرخ تبدیل را ۱۳٪ بالا برد.", focus: "KPI · تست A/B · تصمیم‌گیری داده‌محور" },
    ],
    skillsTitle: "تخصص‌ها",
    skills: [
      { t: "استراتژی و کشف محصول", d: "تشخیص اینکه چه چیزی ارزش ساختن دارد و چرا؛ و روشن کردن مسیر برای تیم." },
      { t: "داده و آزمایش", d: "سنجیدن ایده‌ها با KPI و تست A/B پیش از سرمایه‌گذاری کامل." },
      { t: "هوش مصنوعی و تجربهٔ کاربری", d: "هوش مصنوعی فقط جایی که کار کاربر را کوتاه‌تر کند، نه برای نمایش." },
      { t: "تحویل محصول تیمی", d: "هم‌راستا کردن طراحی، فنی و کسب‌وکار، از ایده تا انتشار." },
      { t: "فین‌تک در مقیاس بزرگ", d: "ساختن هم برای میلیون‌ها کاربر (B2C) و هم برای بانک‌ها (B2B)." },
    ],
    tags: ["فین‌تک", "B2B & B2C", "کشف محصول", "AI UX", "A/B Test", "KPI"],
    processTitle: "چطور کار می‌کنم",
    process: [
      ["گوش دادن", "اول می‌فهمم کاربر کجا گیر می‌کند."],
      ["اولویت دادن", "نیاز کاربر را به هدف کسب‌وکار وصل می‌کنم."],
      ["تعریف موفقیت", "از قبل مشخص می‌کنم چه عددی باید تغییر کند."],
      ["آزمودن", "با تست A/B یاد می‌گیرم و بهتر می‌کنم."],
      ["عرضه با تیم", "تیم را تا انتشار کنار هم نگه می‌دارم."],
    ],
    contactTitle: "دنبال مدیر محصولی برای تیم‌تان هستید؟",
    contactBody: "از محصولی که می‌سازید بگویید؛ خوشحال می‌شوم گفت‌وگو کنیم.",
    sendEmail: "ارسال ایمیل",
    copyEmail: "کپی ایمیل",
    copied: "کپی شد",
    linkedin: "لینکدین",
    copyright: "© ۲۰۲۶ الهام علیزاده",
    resumePdf: "دریافت رزومه PDF",
    switchTo: "EN",
  },
  en: {
    name: "Elham Alizadeh",
    resume: "Résumé",
    nav: [
      { href: "#about", label: "About me" },
      { href: "#work", label: "Work" },
      { href: "#skills", label: "Expertise" },
      { href: "#contact", label: "Contact" },
    ],
    badge: "Product Manager · Fintech · AI",
    h1a: "From real people's needs",
    h1b: "to products that grow.",
    intro: "I'm a product manager with 6+ years in fintech and banking. At Ayan, using data analysis, experimentation and AI, I helped grow the product from 8 to 16 million users.",
    ctaWork: "See results",
    ctaTalk: "Let's talk",
    stats: [
      { v: "6+", l: "Years of experience" },
      { v: "16M+", l: "Users" },
      { v: "+32%", l: "Completion rate" },
      { v: "+13%", l: "Conversion rate" },
    ],
    aboutTitle: "About me",
    about1: ["I started in enterprise banking at ", "Rayan Pardaz Kavosh", ", growing from associate product owner to product owner. Today I'm a product manager at ", "Ayan", ", building payment and inquiry services for millions of users."],
    about2: "Industrial engineering taught me to break complex problems into clear steps. I put most of my energy where AI and good UX genuinely make people's everyday tasks simpler.",
    experience: [
      { role: "Product Manager", org: "Ayan", d: "Payment and inquiry services for millions of users" },
      { role: "Product Owner", org: "Rayan Pardaz Kavosh", d: "Enterprise banking solutions" },
      { role: "M.Sc. Industrial Engineering", org: "Education", d: "A structured approach to complex problems" },
    ],
    workTitle: "Selected results",
    work: [
      { tag: "Fintech & growth", title: "Everyday payments, simpler for millions", metric: "8M → 16M+", metricLabel: "User growth", body: "By discovering and launching new services, I helped grow Ayan from 8 to over 16 million users. We also launched the iOS app from scratch with a small team.", focus: "Product strategy · Service discovery · Delivery" },
      { tag: "AI & user experience", title: "Fewer drop-offs, more people reaching their goal", metric: "+32%", metricLabel: "Completion rate", body: "AI-driven improvements cut bounce rate by 20%. Working with engineering, we raised search accuracy from 45% to 83% so users find what they need faster.", focus: "UX · Experimentation · Engineering collaboration" },
      { tag: "Data & monetization", title: "Revenue decisions based on data, not guesses", metric: "+13%", metricLabel: "Conversion rate", body: "Instead of guessing, we compared monetization ideas with A/B tests. The winning option lifted conversion by 13%.", focus: "KPIs · A/B testing · Data-driven decisions" },
    ],
    skillsTitle: "Expertise",
    skills: [
      { t: "Product strategy & discovery", d: "Knowing what's worth building and why — and making the path clear for the team." },
      { t: "Data & experimentation", d: "Validating ideas with KPIs and A/B tests before full investment." },
      { t: "AI & user experience", d: "AI only where it makes the user's job shorter, not for show." },
      { t: "Cross-functional delivery", d: "Aligning design, engineering and business from idea to launch." },
      { t: "Fintech at scale", d: "Building for millions of consumers (B2C) and for banks (B2B)." },
    ],
    tags: ["Fintech", "B2B & B2C", "Discovery", "AI UX", "A/B Test", "KPI"],
    processTitle: "How I work",
    process: [
      ["Listen", "First, I understand where users get stuck."],
      ["Prioritize", "I connect user needs to business goals."],
      ["Define success", "I decide upfront which number should move."],
      ["Test", "I learn and improve through A/B tests."],
      ["Ship together", "I keep the team aligned through launch."],
    ],
    contactTitle: "Looking for a product manager for your team?",
    contactBody: "Tell me about what you're building — I'd love to talk.",
    sendEmail: "Send email",
    copyEmail: "Copy email",
    copied: "Copied",
    linkedin: "LinkedIn",
    copyright: "© 2026 Elham Alizadeh",
    resumePdf: "Download résumé (PDF)",
    switchTo: "فا",
  },
} as const;

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b pb-4">
      <span className="font-mono text-xs text-primary">{n}</span>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("fa");
  const [copied, setCopied] = useState(false);
  const t = T[lang];
  const Arrow = lang === "fa" ? ArrowUpLeft : ArrowUpRight;

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en") setLang("en");
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen" dir={lang === "fa" ? "rtl" : "ltr"}>
      <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-bold tracking-tight">{t.name}<span className="text-primary">.</span></a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "fa" ? "en" : "fa")}
              aria-label={lang === "fa" ? "Switch to English" : "تغییر به فارسی"}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t.switchTo}
            </button>
            <a href={RESUME} className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary">
              {t.resume} <Download className="size-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <span className="size-1.5 rounded-full bg-primary" /> {t.badge}
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.3] tracking-tight md:text-6xl md:leading-[1.25]">
              {t.h1a}
              <br />
              <span className="text-primary">{t.h1b}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-muted-foreground">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                {t.ctaWork} <Arrow className="size-4" />
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary">
                {t.ctaTalk}
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent" />
            <img src={PHOTO} alt={t.name} className="aspect-[4/5] w-full rounded-3xl object-cover" />
          </div>
        </section>

        <section className="grid grid-cols-2 border-y md:grid-cols-4">
          {t.stats.map((s, i) => (
            <div key={s.l} className={`py-8 text-center ${i > 0 ? "md:border-s" : ""} ${i % 2 ? "border-s" : ""}`}>
              <div dir="ltr" className="text-3xl font-bold tracking-tight">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </section>

        <section id="about" className="scroll-mt-20 py-24">
          <SectionHead n="01" title={t.aboutTitle} />
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-5 text-base leading-9 text-muted-foreground">
              <p>
                {t.about1[0]}<span className="text-foreground">{t.about1[1]}</span>{t.about1[2]}<span className="text-foreground">{t.about1[3]}</span>{t.about1[4]}
              </p>
              <p>{t.about2}</p>
            </div>
            <ol className="space-y-6">
              {t.experience.map((e) => (
                <li key={e.role} className="border-s-2 border-primary/30 ps-4">
                  <div className="font-semibold">{e.role}</div>
                  <div className="text-sm text-primary">{e.org}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{e.d}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 py-12">
          <SectionHead n="02" title={t.workTitle} />
          <div className="space-y-5">
            {t.work.map((w, i) => (
              <article key={w.title} className="group grid gap-6 rounded-2xl border bg-card p-7 transition-colors hover:border-primary/40 md:grid-cols-[1fr_auto] md:p-9">
                <div>
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-mono">0{i + 1}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{w.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold md:text-2xl">{w.title}</h3>
                  <p className="mt-3 max-w-2xl leading-8 text-muted-foreground">{w.body}</p>
                  <p className="mt-4 text-sm text-foreground/80">{w.focus}</p>
                </div>
                <div className="flex flex-col justify-center rounded-xl bg-accent px-8 py-6 text-center md:w-60">
                  <div dir="ltr" className="text-3xl font-extrabold text-accent-foreground">{w.metric}</div>
                  <div className="mt-1 text-sm text-accent-foreground/80">{w.metricLabel}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 py-24">
          <SectionHead n="03" title={t.skillsTitle} />
          <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.map((s, i) => (
              <div key={s.t} className="bg-card p-7">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-3 font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
              </div>
            ))}
            <div className="flex flex-wrap content-center gap-2 bg-secondary p-7">
              {t.tags.map((x) => (
                <span key={x} className="rounded-full border bg-card px-3 py-1 text-xs">{x}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <SectionHead n="04" title={t.processTitle} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {t.process.map(([pt, d], i) => (
              <li key={pt}>
                <div className="mb-3 flex size-9 items-center justify-center rounded-full border text-sm font-semibold text-primary">{i + 1}</div>
                <h3 className="font-semibold">{pt}</h3>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="scroll-mt-20 py-24">
          <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
            <h2 className="text-3xl font-extrabold leading-snug md:text-4xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-8 opacity-80">{t.contactBody}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90">
                <Mail className="size-4" /> {t.sendEmail}
              </a>
              <button onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10">
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />} {copied ? t.copied : t.copyEmail}
              </button>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10">
                <Linkedin className="size-4" /> {t.linkedin}
              </a>
            </div>
            <p dir="ltr" className="mt-6 text-sm opacity-70">{EMAIL}</p>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground">
          <span>{t.copyright}</span>
          <a href={RESUME} className="hover:text-foreground">{t.resumePdf}</a>
        </div>
      </footer>
    </div>
  );
}
