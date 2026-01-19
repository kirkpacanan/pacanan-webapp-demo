"use client";

import { useState } from "react";

export default function Home() {
  // Typography playground state
  const [typeSize, setTypeSize] = useState("base");
  const [typeLeading, setTypeLeading] = useState("relaxed");
  const [typeTracking, setTypeTracking] = useState("normal");
  
  // Button playground state
  const [buttonVariant, setButtonVariant] = useState("solid");
  const [buttonAccent, setButtonAccent] = useState("cyan");
  const [buttonRadius, setButtonRadius] = useState("md");
  const [buttonSize, setButtonSize] = useState("md");
  const [buttonShadow, setButtonShadow] = useState(true);
  
  // Grid playground state
  const [gridCols, setGridCols] = useState("3");
  const [gridGap, setGridGap] = useState("4");
  const [gridAlign, setGridAlign] = useState("center");
  
  // Form playground state
  const [formRadius, setFormRadius] = useState("md");
  const [formAccent, setFormAccent] = useState("cyan");
  const [formSize, setFormSize] = useState("md");

  // Expanded sections state
  const [expandedStep, setExpandedStep] = useState(null);

  // Typography classes
  const typeSizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }[typeSize];
  const typeLeadingClass = {
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
  }[typeLeading];
  const typeTrackingClass = {
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
  }[typeTracking];

  // Accent color mappings
  const accentMap = {
    cyan: {
      bg: "bg-cyan-500",
      text: "text-cyan-100",
      ring: "focus:ring-cyan-400/60",
      border: "border-cyan-400/40",
      hover: "hover:bg-cyan-400",
    },
    fuchsia: {
      bg: "bg-fuchsia-500",
      text: "text-fuchsia-100",
      ring: "focus:ring-fuchsia-400/60",
      border: "border-fuchsia-400/40",
      hover: "hover:bg-fuchsia-400",
    },
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-100",
      ring: "focus:ring-emerald-400/60",
      border: "border-emerald-400/40",
      hover: "hover:bg-emerald-400",
    },
  };

  // Button classes
  const buttonRadiusClass = {
    none: "rounded-none",
    md: "rounded-lg",
    full: "rounded-full",
  }[buttonRadius];
  const buttonSizeClass = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  }[buttonSize];
  const buttonShadowClass = buttonShadow
    ? "shadow-[0_0_18px_rgba(34,211,238,0.25)]"
    : "shadow-none";
  const buttonAccentStyles = accentMap[buttonAccent];
  const buttonVariantClass = {
    solid: `${buttonAccentStyles.bg} ${buttonAccentStyles.text} ${buttonAccentStyles.hover}`,
    outline: `border ${buttonAccentStyles.border} text-slate-100 hover:bg-white/10`,
    ghost: "bg-transparent text-slate-200 hover:bg-white/5",
  }[buttonVariant];

  // Grid classes
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[gridCols];
  const gridGapClass = {
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
  }[gridGap];
  const gridAlignClass = {
    start: "place-items-start",
    center: "place-items-center",
    end: "place-items-end",
  }[gridAlign];

  // Form classes
  const formRadiusClass = {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
  }[formRadius];
  const formSizeClass = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  }[formSize];
  const formAccentStyles = accentMap[formAccent];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Ambient background effects */}
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
            <span className="text-sm font-bold tracking-wider text-slate-200">
              Tailwind Tutorial
            </span>
            </div>
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-cyan-300" href="#what-is">
              What is it?
            </a>
            <a className="transition hover:text-cyan-300" href="#why-use">
              Why use it?
            </a>
            <a className="transition hover:text-cyan-300" href="#how-to">
              How to use
            </a>
            <a className="transition hover:text-cyan-300" href="#playground">
              Playground
            </a>
            <a className="transition hover:text-cyan-300" href="#next-steps">
              Next Steps
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6">
      {/* Hero Section */}
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
              <a
                href="#what-is"
                className="group rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(34,211,238,0.4)]"
              >
                Start Learning
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#playground"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                Try Playground
              </a>
            </div>
          </div>
        </section>

        {/* What is Tailwind CSS */}
        <section id="what-is" className="py-16">
          <div className="space-y-8">
              <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Introduction
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                What is Tailwind CSS?
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_32px_rgba(34,211,238,0.15)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 text-2xl">
                  ⚡
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Utility-First Framework
                </h3>
                <p className="text-slate-300">
                  Instead of writing custom CSS, you compose styles using pre-built utility classes like{" "}
                  <code className="rounded bg-slate-800 px-2 py-1 text-xs text-cyan-300">
                    flex
                  </code>
                  ,{" "}
                  <code className="rounded bg-slate-800 px-2 py-1 text-xs text-cyan-300">
                    p-4
                  </code>
                  , and{" "}
                  <code className="rounded bg-slate-800 px-2 py-1 text-xs text-cyan-300">
                    text-center
                  </code>
                  . Each class does one specific thing.
                </p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-[0_0_32px_rgba(232,121,249,0.15)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/10 text-2xl">
                  🎨
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Rapid Development
                </h3>
                <p className="text-slate-300">
                  Build complex interfaces directly in your markup without context switching. No need to jump between HTML and CSS files or invent class names.
                </p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_32px_rgba(16,185,129,0.15)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-2xl">
                  📱
              </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Mobile-First & Responsive
                </h3>
                <p className="text-slate-300">
                  Built-in responsive modifiers like{" "}
                  <code className="rounded bg-slate-800 px-2 py-1 text-xs text-emerald-300">
                    md:
                  </code>{" "}
                  and{" "}
                  <code className="rounded bg-slate-800 px-2 py-1 text-xs text-emerald-300">
                    lg:
                  </code>{" "}
                  make creating adaptive layouts effortless. Start mobile, scale up.
                </p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_0_32px_rgba(99,102,241,0.15)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 text-2xl">
                  🚀
              </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  Optimized for Production
                </h3>
                <p className="text-slate-300">
                  Tailwind automatically removes unused CSS in production, keeping your bundle size tiny. Only ship the styles you actually use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Tailwind */}
        <section id="why-use" className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
                Benefits
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Why Developers Love Tailwind
              </h2>
            </div>
            <div className="mx-auto max-w-5xl space-y-6">
              {[
                {
                  title: "No Naming Fatigue",
                  description:
                    "Stop wasting time inventing class names like '.card-header-wrapper-container'. Use descriptive utilities that clearly communicate intent.",
                  icon: "🧠",
                  color: "cyan",
                },
                {
                  title: "Consistency by Default",
                  description:
                    "Tailwind's design system ensures spacing, colors, and typography are consistent across your entire project without effort.",
                  icon: "🎯",
                  color: "fuchsia",
                },
                {
                  title: "Easy to Learn",
                  description:
                    "The utility classes are intuitive and predictable. Once you learn the pattern, you can style anything without documentation.",
                  icon: "📚",
                  color: "emerald",
                },
                {
                  title: "Highly Customizable",
                  description:
                    "Extend the default theme with your brand colors, fonts, spacing, and more. Tailwind adapts to your design system.",
                  icon: "⚙️",
                  color: "indigo",
                },
              ].map((benefit, idx) => (
                <div
                  key={benefit.title}
                  className={`group flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-${benefit.color}-400/40 hover:shadow-[0_0_32px_rgba(34,211,238,0.15)]`}
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-3xl">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use - Step by Step Guide */}
        <section id="how-to" className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Step-by-Step Guide
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                How to Use Tailwind CSS
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                Master the fundamentals with these core concepts. Click each step to expand and see code examples.
              </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-4">
              {[
                {
                  id: 1,
                  title: "Layout & Spacing",
                  subtitle: "Use flex, grid, padding, and margin utilities",
                  description:
                    "Tailwind provides utilities for flexbox, grid, and spacing. Combine them to create any layout structure.",
                  code: `<!-- Flexbox layout with gap -->
<div class="flex items-center gap-4">
  <img class="h-12 w-12 rounded-full" />
  <div>
    <h3 class="font-bold">John Doe</h3>
    <p class="text-sm text-gray-500">Software Engineer</p>
  </div>
</div>

<!-- Grid layout -->
<div class="grid grid-cols-3 gap-6">
  <div class="rounded-lg bg-white p-6 shadow">Card 1</div>
  <div class="rounded-lg bg-white p-6 shadow">Card 2</div>
  <div class="rounded-lg bg-white p-6 shadow">Card 3</div>
</div>

<!-- Padding & Margin -->
<div class="p-6 m-4">
  <!-- p-6 = padding: 1.5rem (all sides) -->
  <!-- m-4 = margin: 1rem (all sides) -->
</div>`,
                  tips: [
                    "p-4 adds padding, m-4 adds margin (scale: 0.25rem per unit)",
                    "Use gap-N for spacing between flex/grid items",
                    "Responsive: sm:flex-col md:flex-row changes at breakpoints",
                  ],
                },
                {
                  id: 2,
                  title: "Colors & Backgrounds",
                  subtitle: "Apply colors to text, backgrounds, and borders",
                  description:
                    "Tailwind includes a comprehensive color palette with shades from 50 (lightest) to 950 (darkest).",
                  code: `<!-- Text colors -->
<p class="text-blue-600">Primary text</p>
<p class="text-gray-500">Muted text</p>
<p class="text-red-600">Error text</p>

<!-- Background colors -->
<div class="bg-blue-500 text-white">Blue background</div>
<div class="bg-gradient-to-r from-cyan-500 to-blue-500">
  Gradient background
</div>

<!-- Border colors -->
<div class="border-2 border-gray-300">
  Gray border
</div>

<!-- Opacity modifiers -->
<div class="bg-black/50">50% opacity black</div>`,
                  tips: [
                    "Color scale: 50 (lightest) → 500 (base) → 950 (darkest)",
                    "Use /50 syntax for opacity: bg-blue-500/50",
                    "Gradients: from-{color} via-{color} to-{color}",
                  ],
                },
                {
                  id: 3,
                  title: "Typography",
                  subtitle: "Style text with size, weight, and spacing",
                  description:
                    "Control every aspect of typography with simple, predictable utilities.",
                  code: `<!-- Font sizes -->
<p class="text-sm">Small text</p>
<p class="text-base">Default text</p>
<p class="text-xl">Large text</p>
<p class="text-4xl">Extra large text</p>

<!-- Font weights -->
<p class="font-light">Light text</p>
<p class="font-normal">Normal text</p>
<p class="font-semibold">Semibold text</p>
<p class="font-bold">Bold text</p>

<!-- Line height & letter spacing -->
<p class="leading-tight tracking-tight">Tight spacing</p>
<p class="leading-relaxed tracking-wide">Loose spacing</p>

<!-- Text alignment & decoration -->
<p class="text-center underline">Centered underlined</p>`,
                  tips: [
                    "text-base is 1rem (16px), text-xl is 1.25rem",
                    "leading-{value} controls line height",
                    "tracking-{value} controls letter spacing",
                  ],
                },
                {
                  id: 4,
                  title: "Responsive Design",
                  subtitle: "Apply styles at different screen sizes",
                  description:
                    "Use responsive prefixes to build mobile-first, adaptive layouts without media queries.",
                  code: `<!-- Mobile-first responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
</div>

<!-- Responsive text sizes -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive heading
</h1>

<!-- Hide/show at breakpoints -->
<div class="hidden md:block">
  <!-- Hidden on mobile, visible on tablet+ -->
</div>

<!-- Responsive padding -->
<div class="p-4 md:p-8 lg:p-12">
  <!-- More padding on larger screens -->
</div>`,
                  tips: [
                    "Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)",
                    "Mobile-first: base styles apply to all, larger screens override",
                    "Stack modifiers: sm:text-sm md:text-base lg:text-lg",
                  ],
                },
                {
                  id: 5,
                  title: "Hover, Focus & States",
                  subtitle: "Add interactivity with state modifiers",
                  description:
                    "Create interactive elements with hover, focus, active, and other state utilities.",
                  code: `<!-- Hover effects -->
<button class="bg-blue-500 hover:bg-blue-600 text-white">
  Hover me
</button>

<!-- Focus styles -->
<input class="border focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

<!-- Multiple states -->
<a class="text-blue-600 hover:text-blue-800 hover:underline active:text-blue-900">
  Link with states
</a>

<!-- Group hover (parent-child) -->
<div class="group">
  <img class="group-hover:scale-110 transition" />
  <p class="group-hover:text-blue-500">Hover the parent</p>
</div>`,
                  tips: [
                    "hover:, focus:, active: apply styles on interaction",
                    "group-hover: applies when hovering parent with 'group' class",
                    "Combine with transition for smooth animations",
                  ],
                },
                {
                  id: 6,
                  title: "Effects & Animations",
                  subtitle: "Add shadows, rounded corners, and transitions",
                  description:
                    "Polish your UI with visual effects and smooth animations.",
                  code: `<!-- Rounded corners -->
<div class="rounded">Small radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-full">Fully rounded</div>

<!-- Shadows -->
<div class="shadow">Small shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-2xl">Extra large shadow</div>

<!-- Transitions -->
<button class="transition hover:scale-105">
  Smooth scale on hover
</button>

<div class="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
  Multiple transitions
</div>`,
                  tips: [
                    "transition adds smooth transitions to all properties",
                    "duration-{ms} controls animation speed (default 150ms)",
                    "ease-{type} controls animation timing curve",
                  ],
                },
              ].map((step) => (
                <details
                  key={step.id}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]"
                  open={expandedStep === step.id}
                  onToggle={(e) =>
                    setExpandedStep(e.target.open ? step.id : null)
                  }
                >
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-bold text-cyan-200">
                        {step.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="text-slate-400 transition group-open:rotate-180">
                        ▼
                      </div>
                    </div>
                  </summary>
                  <div className="mt-6 space-y-4">
                    <p className="text-slate-300">{step.description}</p>
                    <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                      <pre className="overflow-x-auto text-xs text-cyan-100">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                    {step.tips && (
                      <div className="space-y-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                        <p className="text-sm font-semibold text-emerald-300">
                          💡 Pro Tips:
                        </p>
                        <ul className="space-y-1 text-sm text-slate-300">
                          {step.tips.map((tip, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-emerald-400">•</span>
                              <span>{tip}</span>
                            </li>
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

        {/* Before/After Comparison */}
        <section className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
                Comparison
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Traditional CSS vs Tailwind
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                See how Tailwind simplifies your workflow and makes styling more maintainable.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  <h3 className="text-lg font-bold text-white">
                    Traditional CSS
                  </h3>
                </div>
                <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/80 p-4 text-xs text-slate-200">
                  <code>{`<!-- HTML -->
<div class="user-card">
  <img class="user-avatar" src="..." />
  <div class="user-info">
    <h3 class="user-name">Jane Smith</h3>
    <p class="user-role">Designer</p>
  </div>
</div>

/* CSS */
.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.user-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
}
.user-name {
  font-weight: 600;
  color: #1f2937;
}
.user-role {
  font-size: 0.875rem;
  color: #6b7280;
}`}</code>
                </pre>
                <div className="mt-3 flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-red-400">⚠️</span>
                  <span>
                    Requires separate CSS file, custom class names, and context switching
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-6 shadow-[0_0_32px_rgba(34,211,238,0.1)]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-lg font-bold text-white">
                    Tailwind CSS
                  </h3>
                </div>
                <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/80 p-4 text-xs text-cyan-100">
                  <code>{`<!-- HTML only - no separate CSS file! -->
<div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow">
  <img 
    class="h-12 w-12 rounded-full" 
    src="..." 
  />
  <div>
    <h3 class="font-semibold text-gray-900">Jane Smith</h3>
    <p class="text-sm text-gray-500">Designer</p>
  </div>
</div>`}</code>
                </pre>
                <div className="mt-3 flex items-start gap-2 text-sm text-cyan-300">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    Everything in one place. No naming, faster development, easier maintenance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Playgrounds */}
        <section id="playground" className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
                Try It Yourself
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Interactive Playgrounds
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                Play with Tailwind utilities and watch them come to life. Toggle controls to modify styles and see live updates in real-time.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              {/* Typography Playground */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  <h3 className="text-xl font-bold text-white">Typography</h3>
                </div>
                <p className="mb-4 text-sm text-slate-400">
                  Adjust text size, line height, and letter spacing
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["sm", "base", "lg", "xl"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setTypeSize(size)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            typeSize === size
                              ? "bg-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Line Height
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["tight", "snug", "normal", "relaxed"].map((lead) => (
                        <button
                          key={lead}
                          onClick={() => setTypeLeading(lead)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            typeLeading === lead
                              ? "bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(232,121,249,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-fuchsia-400/40"
                          }`}
                        >
                          {lead}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Letter Spacing
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["tight", "normal", "wide"].map((track) => (
                        <button
                          key={track}
                          onClick={() => setTypeTracking(track)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            typeTracking === track
                              ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40"
                          }`}
                        >
                          {track}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    <p
                      className={`text-slate-100 transition-all ${typeSizeClass} ${typeLeadingClass} ${typeTrackingClass}`}
                    >
                      Tailwind makes typography control simple and predictable. Adjust size, spacing, and more with intuitive utility classes.
                    </p>
                    <code className="mt-3 block text-xs text-cyan-300">
                      class="{typeSizeClass} {typeLeadingClass}{" "}
                      {typeTrackingClass}"
                    </code>
                  </div>
                </div>
              </div>

              {/* Button Playground */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎨</span>
                  <h3 className="text-xl font-bold text-white">Buttons</h3>
                </div>
                <p className="mb-4 text-sm text-slate-400">
                  Customize button variants, colors, and styles
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Variant
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["solid", "outline", "ghost"].map((variant) => (
                        <button
                          key={variant}
                          onClick={() => setButtonVariant(variant)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            buttonVariant === variant
                              ? "bg-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40"
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["cyan", "fuchsia", "emerald"].map((accent) => (
                        <button
                          key={accent}
                          onClick={() => setButtonAccent(accent)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            buttonAccent === accent
                              ? "bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(232,121,249,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-fuchsia-400/40"
                          }`}
                        >
                          {accent}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Size & Shape
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { val: "sm", label: "Small" },
                        { val: "md", label: "Medium" },
                        { val: "lg", label: "Large" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => setButtonSize(opt.val)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            buttonSize === opt.val
                              ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        { val: "none", label: "Square" },
                        { val: "md", label: "Rounded" },
                        { val: "full", label: "Pill" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => setButtonRadius(opt.val)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            buttonRadius === opt.val
                              ? "bg-indigo-500 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    {["Click Me", "Learn More", "Get Started"].map((label) => (
                      <button
                        key={label}
                        className={`font-semibold transition hover:-translate-y-0.5 hover:shadow-lg ${buttonRadiusClass} ${buttonSizeClass} ${buttonVariantClass} ${buttonShadowClass}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Playground */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">📐</span>
                  <h3 className="text-xl font-bold text-white">
                    Grid & Spacing
                  </h3>
                </div>
                <p className="mb-4 text-sm text-slate-400">
                  Experiment with columns, gaps, and alignment
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Columns
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["1", "2", "3", "4"].map((cols) => (
                        <button
                          key={cols}
                          onClick={() => setGridCols(cols)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            gridCols === cols
                              ? "bg-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40"
                          }`}
                        >
                          {cols} col
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Gap
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["2", "3", "4", "6", "8"].map((gap) => (
                        <button
                          key={gap}
                          onClick={() => setGridGap(gap)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            gridGap === gap
                              ? "bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(232,121,249,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-fuchsia-400/40"
                          }`}
                        >
                          gap-{gap}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Alignment
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["start", "center", "end"].map((align) => (
                        <button
                          key={align}
                          onClick={() => setGridAlign(align)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            gridAlign === align
                              ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40"
                          }`}
                        >
                          {align}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    <div
                      className={`grid ${gridColsClass} ${gridGapClass} ${gridAlignClass}`}
                    >
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-xs font-bold text-slate-200"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <code className="mt-4 block text-xs text-cyan-300">
                      grid {gridColsClass} {gridGapClass} {gridAlignClass}
                    </code>
                  </div>
                </div>
              </div>

              {/* Form Playground */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <h3 className="text-xl font-bold text-white">Forms</h3>
                </div>
                <p className="mb-4 text-sm text-slate-400">
                  Adjust form input styles and focus states
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["sm", "md", "lg"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setFormSize(size)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            formSize === size
                              ? "bg-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Rounded
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { val: "sm", label: "Small" },
                        { val: "md", label: "Medium" },
                        { val: "lg", label: "Large" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => setFormRadius(opt.val)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            formRadius === opt.val
                              ? "bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(232,121,249,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-fuchsia-400/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Focus Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["cyan", "fuchsia", "emerald"].map((accent) => (
                        <button
                          key={accent}
                          onClick={() => setFormAccent(accent)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            formAccent === accent
                              ? "bg-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                              : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40"
                          }`}
                        >
                          {accent}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-slate-900/60 p-6">
                    <input
                      type="text"
                      placeholder="Enter your email..."
                      className={`w-full border border-white/10 bg-slate-950/60 text-slate-100 placeholder-slate-500 outline-none transition focus:border-transparent focus:ring-2 ${formRadiusClass} ${formSizeClass} ${formAccentStyles.ring}`}
                    />
                    <div className="flex gap-3">
                      <button
                        className={`flex-1 border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 ${formRadiusClass} ${formSizeClass}`}
                      >
                        Submit
                      </button>
                      <button
                        className={`flex-1 border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 ${formRadiusClass} ${formSizeClass}`}
                      >
                        Cancel
                      </button>
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
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Best Practices
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Pro Tips & Best Practices
              </h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
              {[
                {
                  icon: "⚡",
                  title: "Extract Components",
                  tip: "When utility patterns repeat, extract them into reusable React/Vue components instead of duplicating classes.",
                  color: "cyan",
                },
                {
                  icon: "🎨",
                  title: "Customize Your Theme",
                  tip: "Extend Tailwind's config with your brand colors, fonts, and spacing. Don't fight the defaults—make them yours.",
                  color: "fuchsia",
                },
                {
                  icon: "📦",
                  title: "Optimize for Production",
                  tip: "Tailwind automatically tree-shakes unused styles. Your production CSS will be tiny, usually under 10KB gzipped.",
                  color: "emerald",
                },
                {
                  icon: "🔍",
                  title: "Use the @apply Directive",
                  tip: "For complex components, use @apply in CSS to combine utilities while keeping your HTML clean.",
                  color: "indigo",
                },
                {
                  icon: "📱",
                  title: "Think Mobile-First",
                  tip: "Start with mobile styles, then use md:, lg:, xl: to enhance for larger screens. It's easier than desktop-first.",
                  color: "pink",
                },
                {
                  icon: "🚀",
                  title: "Learn the Patterns",
                  tip: "Once you memorize common patterns (flex, justify-between, items-center), you'll build UIs incredibly fast.",
                  color: "violet",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.1)]"
                >
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps / CTA */}
        <section id="next-steps" className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="space-y-6 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10 p-12 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Next Steps
              </span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to Build with Tailwind?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-300">
                Now that you understand the fundamentals, it's time to start building. Install Tailwind in your project and experience the fastest way to style modern web applications.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-cyan-400/40 bg-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_24px_rgba(34,211,238,0.3)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                >
                  Install Tailwind
                  <span className="ml-2 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-slate-200 backdrop-blur transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                >
                  Read the Docs
                </a>
              </div>
              <div className="pt-6">
                <p className="text-sm text-slate-400">
                  💡 Pro tip: Use{" "}
                  <code className="rounded bg-slate-800/60 px-2 py-1 text-cyan-300">
                    npm install -D tailwindcss
                  </code>{" "}
                  to get started in seconds
                </p>
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
                <p className="font-semibold text-slate-200">
                  Tailwind CSS Tutorial
                </p>
                <p className="text-slate-500">
                  Learn utility-first CSS in minutes
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-300"
              >
                Official Docs
              </a>
              <a
                href="https://tailwindui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-300"
              >
                Tailwind UI
              </a>
              <a
                href="https://play.tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-300"
              >
                Playground
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/5 pt-6 text-center text-sm text-slate-500">
            <p>
              Built with Next.js & Tailwind CSS • 2026 • Made with passion for developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
