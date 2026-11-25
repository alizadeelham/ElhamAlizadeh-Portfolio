import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpLeft, Download, Linkedin, Mail, Copy, Check } from "lucide-react";

const BASE = "https://alizadeelham.github.io/alizadeelham-Resume";
const PHOTO = `${BASE}/elham-alizadeh.jpg`;
const RESUME = `${BASE}/elham-alizadeh-resume.pdf`;
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
      { property: "og:image", content: PHOTO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: PHOTO },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#about", label: "درباره" },
  { href: "#work", label: "دستاوردها" },
  { href: "#skills", label: "تخصص‌ها" },
  { href: "#contact", label: "تماس" },
];

const stats = [
  { v: "+۶", l: "سال تجربه" },
  { v: "+۱۶M", l: "کاربر" },
  { v: "+۳۲٪", l: "نرخ تکمیل فرایند" },
  { v: "+۱۳٪", l: "نرخ تبدیل" },
];

const work = [
  {
    tag: "فین‌تک و رشد",
    title: "پرداخت روزمره، ساده‌تر برای میلیون‌ها نفر",
    metric: "8M → 16M+",
    metricLabel: "رشد کاربران",
    body: "با کشف و عرضهٔ خدمات تازه، به رشد کاربران Ayan از ۸ به بیش از ۱۶ میلیون کمک کردم. اپ iOS را هم با تیمی کوچک از صفر راه انداختیم.",
    focus: "استراتژی محصول · کشف خدمات · تحویل",
  },
  {
    tag: "هوش مصنوعی و تجربهٔ کاربری",
    title: "کاربر کمتر رها می‌کند، بیشتر به نتیجه می‌رسد",
    metric: "+32%",
    metricLabel: "نرخ تکمیل فرایند",
    body: "با بهبودهای مبتنی بر هوش مصنوعی، نرخ پرش ۲۰٪ کم شد. کنار تیم فنی، دقت جست‌وجو را از ۴۵٪ به ۸۳٪ رساندیم تا کاربر سریع‌تر چیزی را که می‌خواهد پیدا کند.",
    focus: "تجربهٔ کاربری · آزمایش · همکاری فنی",
  },
  {
    tag: "داده و درآمدزایی",
    title: "تصمیم درآمدی بر پایهٔ داده، نه حدس",
    metric: "+13%",
    metricLabel: "نرخ تبدیل",
    body: "به‌جای انتخاب بر اساس حدس، ایده‌های درآمدزایی را با تست A/B کنار هم سنجیدیم. گزینهٔ برنده نرخ تبدیل را ۱۳٪ بالا برد.",
    focus: "KPI · تست A/B · تصمیم‌گیری داده‌محور",
  },
];

const skills = [
  { t: "استراتژی و کشف محصول", d: "تشخیص اینکه چه چیزی ارزش ساختن دارد و چرا؛ و روشن کردن مسیر برای تیم." },
  { t: "داده و آزمایش", d: "سنجیدن ایده‌ها با KPI و تست A/B پیش از سرمایه‌گذاری کامل." },
  { t: "هوش مصنوعی و تجربهٔ کاربری", d: "هوش مصنوعی فقط جایی که کار کاربر را کوتاه‌تر کند، نه برای نمایش." },
  { t: "تحویل محصول تیمی", d: "هم‌راستا کردن طراحی، فنی و کسب‌وکار، از ایده تا انتشار." },
  { t: "فین‌تک در مقیاس بزرگ", d: "ساختن هم برای میلیون‌ها کاربر (B2C) و هم برای بانک‌ها (B2B)." },
];

const experience = [
  { role: "مدیر محصول", org: "Ayan", d: "خدمات پرداخت و استعلام برای میلیون‌ها کاربر" },
  { role: "مالک محصول", org: "Rayan Pardaz Kavosh", d: "راهکارهای بانکداری سازمانی" },
  { role: "کارشناسی ارشد مهندسی صنایع", org: "تحصیلات", d: "رویکرد ساختاریافته به مسائل پیچیده" },
];

const process = [
  ["گوش دادن", "اول می‌فهمم کاربر کجا گیر می‌کند."],
  ["اولویت دادن", "نیاز کاربر را به هدف کسب‌وکار وصل می‌کنم."],
  ["تعریف موفقیت", "از قبل مشخص می‌کنم چه عددی باید تغییر کند."],
  ["آزمودن", "با تست A/B یاد می‌گیرم و بهتر می‌کنم."],
  ["عرضه با تیم", "تیم را تا انتشار کنار هم نگه می‌دارم."],
];

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b pb-4">
      <span className="font-mono text-xs text-primary">{n}</span>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-bold tracking-tight">الهام علیزاده<span className="text-primary">.</span></a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <a href={RESUME} className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary">
            رزومه <Download className="size-3.5" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Intro */}
        <section className="grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <span className="size-1.5 rounded-full bg-primary" /> مدیر محصول · فین‌تک · هوش مصنوعی
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.3] tracking-tight md:text-6xl md:leading-[1.25]">
              از نیاز واقعی آدم‌ها،
              <br />
              <span className="text-primary">تا محصولی که رشد می‌کند.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-muted-foreground">
              من به‌عنوان مدیر محصول، بیش از ۶ سال در حوزه فین‌تک و بانکداری فعالیت کرده‌ام و در Ayan با تکیه بر تحلیل داده، آزمایش و به‌کارگیری هوش مصنوعی، به رشد محصول از ۸ به ۱۶ میلیون کاربر کمک کرده‌ام.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                دیدن نتایج <ArrowUpLeft className="size-4" />
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary">
                گفت‌وگو کنیم
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent" />
            <img src={PHOTO} alt="الهام علیزاده" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 border-y md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.l} className={`py-8 text-center ${i > 0 ? "md:border-r" : ""} ${i % 2 ? "border-r" : ""}`}>
              <div dir="ltr" className="text-3xl font-bold tracking-tight">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-24">
          <SectionHead n="01" title="مسیر من" />
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-5 text-base leading-9 text-muted-foreground">
              <p>
                کارم را با بانکداری سازمانی در <span className="text-foreground">Rayan Pardaz Kavosh</span> شروع کردم و از همکار مالک محصول به مالک محصول رسیدم. امروز در <span className="text-foreground">Ayan</span> مدیر محصولم و خدمات پرداخت و استعلام را برای میلیون‌ها کاربر می‌سازم.
              </p>
              <p>
                مهندسی صنایع به من یاد داد مسئلهٔ پیچیده را به قدم‌های روشن بشکنم. بیشترین انرژی‌ام را جایی می‌گذارم که هوش مصنوعی و تجربهٔ کاربری خوب، کار روزمرهٔ مردم را واقعاً ساده‌تر کند.
              </p>
            </div>
            <ol className="space-y-6">
              {experience.map((e) => (
                <li key={e.role} className="border-r-2 border-primary/30 pr-4">
                  <div className="font-semibold">{e.role}</div>
                  <div className="text-sm text-primary">{e.org}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{e.d}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 py-12">
          <SectionHead n="02" title="نتایج منتخب" />
          <div className="space-y-5">
            {work.map((w, i) => (
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

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 py-24">
          <SectionHead n="03" title="تخصص‌ها" />
          <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <div key={s.t} className="bg-card p-7">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-3 font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
              </div>
            ))}
            <div className="flex flex-wrap content-center gap-2 bg-secondary p-7">
              {["فین‌تک", "B2B & B2C", "کشف محصول", "AI UX", "A/B Test", "KPI"].map((t) => (
                <span key={t} className="rounded-full border bg-card px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12">
          <SectionHead n="04" title="چطور کار می‌کنم" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map(([t, d], i) => (
              <li key={t}>
                <div className="mb-3 flex size-9 items-center justify-center rounded-full border text-sm font-semibold text-primary">{i + 1}</div>
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-24">
          <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
            <h2 className="text-3xl font-extrabold leading-snug md:text-4xl">
              دنبال مدیر محصولی برای تیم‌تان هستید؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-8 opacity-80">
              از محصولی که می‌سازید بگویید؛ خوشحال می‌شوم گفت‌وگو کنیم.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90">
                <Mail className="size-4" /> ارسال ایمیل
              </a>
              <button onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10">
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />} {copied ? "کپی شد" : "کپی ایمیل"}
              </button>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10">
                <Linkedin className="size-4" /> لینکدین
              </a>
            </div>
            <p dir="ltr" className="mt-6 text-sm opacity-70">{EMAIL}</p>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground">
          <span>© ۲۰۲۶ الهام علیزاده</span>
          <a href={RESUME} className="hover:text-foreground">دریافت رزومه PDF</a>
        </div>
      </footer>
    </div>
  );
}
