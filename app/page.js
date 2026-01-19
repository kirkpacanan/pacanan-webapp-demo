"use client";

import { useState } from "react";

// Data constants
const BENEFITS = [
  { title: "No Naming Fatigue", description: "Stop wasting time inventing class names like '.card-header-wrapper-container'. Use descriptive utilities that clearly communicate intent.", icon: "🧠" },
  { title: "Consistency by Default", description: "Tailwind's design system ensures spacing, colors, and typography are consistent across your entire project without effort.", icon: "🎯" },
  { title: "Easy to Learn", description: "The utility classes are intuitive and predictable. Once you learn the pattern, you can style anything without documentation.", icon: "📚" },
  { title: "Highly Customizable", description: "Extend the default theme with your brand colors, fonts, spacing, and more. Tailwind adapts to your design system.", icon: "⚙️" },
];

const TUTORIAL_STEPS = [
  {
    id: 1, title: "Layout & Spacing", subtitle: "Use flex, grid, padding, and margin utilities",
    description: "Tailwind provides utilities for flexbox, grid, and spacing. Combine them to create any layout structure.",
    code: `<!-- Flexbox layout with gap -->
<div class="flex items-center gap-4">
  <img class="h-12 w-12 rounded-full" />
  <div>
    <h3 class="font-bold">John Doe</h3>
    <p class="text-sm text-gray-500">Software Engineer</p>
  </div>
</div>`,
    tips: ["p-4 adds padding, m-4 adds margin (scale: 0.25rem per unit)", "Use gap-N for spacing between flex/grid items", "Responsive: sm:flex-col md:flex-row changes at breakpoints"],
  },
  {
    id: 2, title: "Colors & Backgrounds", subtitle: "Apply colors to text, backgrounds, and borders",
    description: "Tailwind includes a comprehensive color palette with shades from 50 (lightest) to 950 (darkest).",
    code: `<!-- Text & Background colors -->
<p class="text-blue-600">Primary text</p>
<div class="bg-gradient-to-r from-cyan-500 to-blue-500">Gradient</div>
<div class="bg-black/50">50% opacity black</div>`,
    tips: ["Color scale: 50 (lightest) → 500 (base) → 950 (darkest)", "Use /50 syntax for opacity: bg-blue-500/50"],
  },
  {
    id: 3, title: "Typography", subtitle: "Style text with size, weight, and spacing",
    description: "Control every aspect of typography with simple, predictable utilities.",
    code: `<p class="text-sm font-light">Small light text</p>
<p class="text-4xl font-bold leading-tight">Large bold heading</p>
<p class="text-center underline tracking-wide">Centered underlined</p>`,
    tips: ["text-base is 1rem (16px), text-xl is 1.25rem", "leading-{value} controls line height"],
  },
  {
    id: 4, title: "Responsive Design", subtitle: "Apply styles at different screen sizes",
    description: "Use responsive prefixes to build mobile-first, adaptive layouts without media queries.",
    code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 column mobile, 2 tablet, 3 desktop -->
</div>
<h1 class="text-2xl md:text-4xl lg:text-6xl">Responsive heading</h1>`,
    tips: ["Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)", "Mobile-first: base styles apply to all, larger screens override"],
  },
  {
    id: 5, title: "Hover, Focus & States", subtitle: "Add interactivity with state modifiers",
    description: "Create interactive elements with hover, focus, active, and other state utilities.",
    code: `<button class="bg-blue-500 hover:bg-blue-600 text-white">Hover me</button>
<input class="border focus:border-blue-500 focus:ring-2" />
<a class="text-blue-600 hover:underline active:text-blue-900">Link</a>`,
    tips: ["hover:, focus:, active: apply styles on interaction", "group-hover: applies when hovering parent with 'group' class"],
  },
  {
    id: 6, title: "Effects & Animations", subtitle: "Add shadows, rounded corners, and transitions",
    description: "Polish your UI with visual effects and smooth animations.",
    code: `<div class="rounded-lg shadow-lg">Card with shadow</div>
<button class="transition hover:scale-105">Smooth scale</button>
<div class="transition-all duration-300 hover:-translate-y-2">Multiple transitions</div>`,
    tips: ["transition adds smooth transitions to all properties", "duration-{ms} controls animation speed (default 150ms)"],
  },
];

const PRO_TIPS = [
  { icon: "⚡", title: "Extract Components", tip: "When utility patterns repeat, extract them into reusable React/Vue components instead of duplicating classes." },
  { icon: "🎨", title: "Customize Your Theme", tip: "Extend Tailwind's config with your brand colors, fonts, and spacing. Don't fight the defaults—make them yours." },
  { icon: "📦", title: "Optimize for Production", tip: "Tailwind automatically tree-shakes unused styles. Your production CSS will be tiny, usually under 10KB gzipped." },
  { icon: "🔍", title: "Use the @apply Directive", tip: "For complex components, use @apply in CSS to combine utilities while keeping your HTML clean." },
  { icon: "📱", title: "Think Mobile-First", tip: "Start with mobile styles, then use md:, lg:, xl: to enhance for larger screens. It's easier than desktop-first." },
  { icon: "🚀", title: "Learn the Patterns", tip: "Once you memorize common patterns (flex, justify-between, items-center), you'll build UIs incredibly fast." },
];

// Reusable button component for controls
const ControlButton = ({ active, onClick, children, color = "cyan" }) => {
  const colors = {
    cyan: active ? "bg-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]" : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40",
    fuchsia: active ? "bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(232,121,249,0.4)]" : "border border-white/10 bg-white/5 text-slate-300 hover:border-fuchsia-400/40",
    emerald: active ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]" : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40",
    indigo: active ? "bg-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]" : "border border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/40",
  };
  return (
    <button onClick={onClick} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${colors[color]}`}>
      {children}
    </button>
  );
};

export default function Home() {
  // State
  const [typeSize, setTypeSize] = useState("base");
  const [typeLeading, setTypeLeading] = useState("relaxed");
  const [typeTracking, setTypeTracking] = useState("normal");
  const [buttonVariant, setButtonVariant] = useState("solid");
  const [buttonAccent, setButtonAccent] = useState("cyan");
  const [buttonRadius, setButtonRadius] = useState("md");
  const [buttonSize, setButtonSize] = useState("md");
  const [gridCols, setGridCols] = useState("3");
  const [gridGap, setGridGap] = useState("4");
  const [gridAlign, setGridAlign] = useState("center");
  const [formRadius, setFormRadius] = useState("md");
  const [formAccent, setFormAccent] = useState("cyan");
  const [formSize, setFormSize] = useState("md");

  // Class mappings
  const accentMap = {
    cyan: { bg: "bg-cyan-500", text: "text-cyan-100", ring: "focus:ring-cyan-400/60", border: "border-cyan-400/40", hover: "hover:bg-cyan-400" },
    fuchsia: { bg: "bg-fuchsia-500", text: "text-fuchsia-100", ring: "focus:ring-fuchsia-400/60", border: "border-fuchsia-400/40", hover: "hover:bg-fuchsia-400" },
    emerald: { bg: "bg-emerald-500", text: "text-emerald-100", ring: "focus:ring-emerald-400/60", border: "border-emerald-400/40", hover: "hover:bg-emerald-400" },
  };

  const typeSizeClass = { sm: "text-sm", base: "text-base", lg: "text-lg", xl: "text-xl" }[typeSize];
  const typeLeadingClass = { tight: "leading-tight", snug: "leading-snug", normal: "leading-normal", relaxed: "leading-relaxed" }[typeLeading];
  const typeTrackingClass = { tight: "tracking-tight", normal: "tracking-normal", wide: "tracking-wide" }[typeTracking];
  const buttonRadiusClass = { none: "rounded-none", md: "rounded-lg", full: "rounded-full" }[buttonRadius];
  const buttonSizeClass = { sm: "px-3 py-1.5 text-xs", md: "px-4 py-2 text-sm", lg: "px-5 py-2.5 text-base" }[buttonSize];
  const buttonAccentStyles = accentMap[buttonAccent];
  const buttonVariantClass = {
    solid: `${buttonAccentStyles.bg} ${buttonAccentStyles.text} ${buttonAccentStyles.hover}`,
    outline: `border ${buttonAccentStyles.border} text-slate-100 hover:bg-white/10`,
    ghost: "bg-transparent text-slate-200 hover:bg-white/5",
  }[buttonVariant];
  const gridColsClass = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4" }[gridCols];
  const gridGapClass = { 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8" }[gridGap];
  const gridAlignClass = { start: "place-items-start", center: "place-items-center", end: "place-items-end" }[gridAlign];
  const formRadiusClass = { sm: "rounded-md", md: "rounded-lg", lg: "rounded-xl" }[formRadius];
  const formSizeClass = { sm: "px-3 py-2 text-xs", md: "px-4 py-2 text-sm", lg: "px-5 py-3 text-base" }[formSize];
  const formAccentStyles = accentMap[formAccent];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-emerald-500/8 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <span className="text-lg font-bold text-cyan-200">TW</span>
            </div>
            <span className="text-sm font-bold tracking-wider text-slate-200">Tailwind Tutorial</span>
            </div>
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            {["what-is", "why-use", "how-to", "playground", "next-steps"].map((link) => (
              <a key={link} className="transition hover:text-cyan-300" href={`#${link}`}>
                {link.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <section className="py-20 text-center">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              Interactive Tutorial
            </div>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                How to Use Tailwind CSS
              </span>
          </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
              Learn the utility-first CSS framework that's transforming how developers build modern web interfaces. From basics to advanced techniques.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a href="#what-is" className="group rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:-translate-y-1">
                Start Learning <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#playground" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:bg-white/10">
                Try Playground
              </a>
            </div>
        </div>
        </section>

        {/* What is Tailwind */}
        <section id="what-is" className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Introduction</span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">What is Tailwind CSS?</h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {[
                { icon: "⚡", title: "Utility-First Framework", desc: "Instead of writing custom CSS, you compose styles using pre-built utility classes like flex, p-4, and text-center. Each class does one specific thing.", color: "cyan" },
                { icon: "🎨", title: "Rapid Development", desc: "Build complex interfaces directly in your markup without context switching. No need to jump between HTML and CSS files or invent class names.", color: "fuchsia" },
                { icon: "📱", title: "Mobile-First & Responsive", desc: "Built-in responsive modifiers like md: and lg: make creating adaptive layouts effortless. Start mobile, scale up.", color: "emerald" },
                { icon: "🚀", title: "Optimized for Production", desc: "Tailwind automatically removes unused CSS in production, keeping your bundle size tiny. Only ship the styles you actually use.", color: "indigo" },
              ].map((item) => (
                <div key={item.title} className={`group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-${item.color}-400/40`}>
                  <div className="mb-4 text-2xl">{item.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Tailwind */}
        <section id="why-use" className="py-16">
          <div className="space-y-8">
              <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Benefits</span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Why Developers Love Tailwind</h2>
            </div>
            <div className="mx-auto max-w-5xl space-y-6">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="group flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-3xl">{benefit.icon}</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-white">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
              </div>
        </section>

        {/* How to Use */}
        <section id="how-to" className="py-16">
          <div className="space-y-8">
              <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Step-by-Step Guide</span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">How to Use Tailwind CSS</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">Master the fundamentals with these core concepts. Click each step to expand and see code examples.</p>
            </div>
            <div className="mx-auto max-w-4xl space-y-4">
              {TUTORIAL_STEPS.map((step) => (
                <details key={step.id} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30">
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-bold text-cyan-200">{step.id}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{step.subtitle}</p>
                      </div>
                      <div className="text-slate-400 transition group-open:rotate-180">▼</div>
                    </div>
                  </summary>
                  <div className="mt-6 space-y-4">
                    <p className="text-slate-300">{step.description}</p>
                    <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/80 p-4 text-xs text-cyan-100"><code>{step.code}</code></pre>
                    {step.tips && (
                      <div className="space-y-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                        <p className="text-sm font-semibold text-emerald-300">💡 Pro Tips:</p>
                        <ul className="space-y-1 text-sm text-slate-300">
                          {step.tips.map((tip, idx) => (
                            <li key={idx} className="flex gap-2"><span className="text-emerald-400">•</span><span>{tip}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
              </div>
        </section>

        {/* Before/After */}
        <section className="py-16">
          <div className="space-y-8">
              <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Comparison</span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Traditional CSS vs Tailwind</h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center gap-2"><span className="text-2xl">📝</span><h3 className="text-lg font-bold text-white">Traditional CSS</h3></div>
                <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/80 p-4 text-xs text-slate-200"><code>{`<div class="user-card">
  <img class="user-avatar" src="..." />
  <div class="user-info">
    <h3 class="user-name">Jane Smith</h3>
  </div>
              </div>

.user-card { display: flex; padding: 1.5rem; }`}</code></pre>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6">
                <div className="mb-4 flex items-center gap-2"><span className="text-2xl">✨</span><h3 className="text-lg font-bold text-white">Tailwind CSS</h3></div>
                <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/80 p-4 text-xs text-cyan-100"><code>{`<div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow">
  <img class="h-12 w-12 rounded-full" src="..." />
  <div>
    <h3 class="font-semibold text-gray-900">Jane Smith</h3>
              </div>
</div>`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Playgrounds */}
        <section id="playground" className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Try It Yourself</span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Interactive Playgrounds</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">Play with Tailwind utilities and watch them come to life. Toggle controls to modify styles and see live updates in real-time.</p>
          </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              {/* Typography */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center gap-3"><span className="text-2xl">📝</span><h3 className="text-xl font-bold text-white">Typography</h3></div>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {["sm", "base", "lg", "xl"].map((s) => <ControlButton key={s} active={typeSize === s} onClick={() => setTypeSize(s)}>{s}</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Line Height</label>
                    <div className="flex flex-wrap gap-2">
                      {["tight", "snug", "normal", "relaxed"].map((l) => <ControlButton key={l} active={typeLeading === l} onClick={() => setTypeLeading(l)} color="fuchsia">{l}</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Letter Spacing</label>
                    <div className="flex flex-wrap gap-2">
                      {["tight", "normal", "wide"].map((t) => <ControlButton key={t} active={typeTracking === t} onClick={() => setTypeTracking(t)} color="emerald">{t}</ControlButton>)}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    <p className={`text-slate-100 transition-all ${typeSizeClass} ${typeLeadingClass} ${typeTrackingClass}`}>
                      Tailwind makes typography control simple and predictable.
                    </p>
                    <code className="mt-3 block text-xs text-cyan-300">class="{typeSizeClass} {typeLeadingClass} {typeTrackingClass}"</code>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center gap-3"><span className="text-2xl">🎨</span><h3 className="text-xl font-bold text-white">Buttons</h3></div>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Variant</label>
                    <div className="flex flex-wrap gap-2">
                      {["solid", "outline", "ghost"].map((v) => <ControlButton key={v} active={buttonVariant === v} onClick={() => setButtonVariant(v)}>{v}</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Color</label>
                    <div className="flex flex-wrap gap-2">
                      {["cyan", "fuchsia", "emerald"].map((a) => <ControlButton key={a} active={buttonAccent === a} onClick={() => setButtonAccent(a)} color="fuchsia">{a}</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Size & Shape</label>
                    <div className="flex flex-wrap gap-2">
                      {[{v:"sm",l:"Small"},{v:"md",l:"Medium"},{v:"lg",l:"Large"}].map((o) => <ControlButton key={o.v} active={buttonSize === o.v} onClick={() => setButtonSize(o.v)} color="emerald">{o.l}</ControlButton>)}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[{v:"none",l:"Square"},{v:"md",l:"Rounded"},{v:"full",l:"Pill"}].map((o) => <ControlButton key={o.v} active={buttonRadius === o.v} onClick={() => setButtonRadius(o.v)} color="indigo">{o.l}</ControlButton>)}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    {["Click Me", "Learn More"].map((label) => (
                      <button key={label} className={`font-semibold transition hover:-translate-y-0.5 ${buttonRadiusClass} ${buttonSizeClass} ${buttonVariantClass}`}>{label}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center gap-3"><span className="text-2xl">📐</span><h3 className="text-xl font-bold text-white">Grid & Spacing</h3></div>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Columns</label>
                    <div className="flex flex-wrap gap-2">
                      {["1", "2", "3", "4"].map((c) => <ControlButton key={c} active={gridCols === c} onClick={() => setGridCols(c)}>{c} col</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Gap</label>
                    <div className="flex flex-wrap gap-2">
                      {["2", "3", "4", "6", "8"].map((g) => <ControlButton key={g} active={gridGap === g} onClick={() => setGridGap(g)} color="fuchsia">gap-{g}</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Alignment</label>
                    <div className="flex flex-wrap gap-2">
                      {["start", "center", "end"].map((a) => <ControlButton key={a} active={gridAlign === a} onClick={() => setGridAlign(a)} color="emerald">{a}</ControlButton>)}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    <div className={`grid ${gridColsClass} ${gridGapClass} ${gridAlignClass}`}>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-xs font-bold">{i + 1}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Forms */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center gap-3"><span className="text-2xl">📋</span><h3 className="text-xl font-bold text-white">Forms</h3></div>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {["sm", "md", "lg"].map((s) => <ControlButton key={s} active={formSize === s} onClick={() => setFormSize(s)}>{s}</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Rounded</label>
                    <div className="flex flex-wrap gap-2">
                      {[{v:"sm",l:"Small"},{v:"md",l:"Medium"},{v:"lg",l:"Large"}].map((o) => <ControlButton key={o.v} active={formRadius === o.v} onClick={() => setFormRadius(o.v)} color="fuchsia">{o.l}</ControlButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Focus Color</label>
                    <div className="flex flex-wrap gap-2">
                      {["cyan", "fuchsia", "emerald"].map((a) => <ControlButton key={a} active={formAccent === a} onClick={() => setFormAccent(a)} color="emerald">{a}</ControlButton>)}
                    </div>
                  </div>
                  <div className="space-y-3 rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    <input type="text" placeholder="Enter your email..." className={`w-full border border-white/10 bg-slate-950/60 text-slate-100 placeholder-slate-500 outline-none transition focus:border-transparent focus:ring-2 ${formRadiusClass} ${formSizeClass} ${formAccentStyles.ring}`} />
                    <div className="flex gap-3">
                      <button className={`flex-1 border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 ${formRadiusClass} ${formSizeClass}`}>Submit</button>
                      <button className={`flex-1 border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 ${formRadiusClass} ${formSizeClass}`}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Best Practices</span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Pro Tips & Best Practices</h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
              {PRO_TIPS.map((item) => (
                <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1">
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps" className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="space-y-6 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10 p-12 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Next Steps</span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Build with Tailwind?</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-300">Now that you understand the fundamentals, it's time to start building. Install Tailwind in your project and experience the fastest way to style modern web applications.</p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-cyan-400/40 bg-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_24px_rgba(34,211,238,0.3)] transition hover:-translate-y-1">
                  Install Tailwind <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
                </a>
                <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-slate-200 transition hover:-translate-y-1 hover:bg-white/10">Read the Docs</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20">
                <span className="text-lg font-bold text-cyan-200">TW</span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-slate-200">Tailwind CSS Tutorial</p>
                <p className="text-slate-500">Learn utility-first CSS in minutes</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              {[["Official Docs", "https://tailwindcss.com"], ["Tailwind UI", "https://tailwindui.com"], ["Playground", "https://play.tailwindcss.com"]].map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">{name}</a>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-white/5 pt-6 text-center text-sm text-slate-500">
            <p>Built with Next.js & Tailwind CSS • 2026 • Made with passion for developers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
