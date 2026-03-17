"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

function AiPromptSection() {
    const [copied, setCopied] = useState(false);
    const promptText = `You are designing for Cydenti. Use the following typography system strictly:

**Font Families:**
- Headings & UI: Geist Sans (font-sans)
- Code & Technical: Geist Mono (font-mono)
- Social Media & PPT: Montserrat (font-montserrat)

**Type Scale:**
- Display: 60px / ExtraBold (Geist Sans)
- Heading 1: 60px / Bold (Geist Sans)
- Heading 2: 36px / Bold (Geist Sans)
- Heading 3: 24px / Bold (Geist Sans)
- Body: 18px / Regular (Geist Sans) - Color: Slate 700 (#334155)
- Small: 14px / Regular (Geist Sans) - Color: Slate 500 (#64748B)

**Style Rules:**
1. **Gradient Headlines:** Use solid black for the setup and the brand gradient (Primary Blue to Cyan) for the payoff or key concept.
   - Example: "Total Visibility. [Gradient]Intelligent Defense.[/Gradient]"
2. **Text Highlighting:** Use Cyan (#0CABC0) to highlight specific keywords within paragraph text for emphasis.
   - Example: "Hidden [Cyan]permissions[/Cyan] and [Cyan]service accounts[/Cyan]..."
3. **Body Text:** Always use Slate 700 (#334155) for standard paragraph text on light backgrounds.`;

    const handleCopy = () => {
        navigator.clipboard.writeText(promptText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="pt-12 mt-12 border-t border-slate-200">
            <div className="rounded-2xl bg-slate-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-brand-blue/20 blur-[100px] rounded-full"></div>
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">AI Typography Prompt</h2>
                            <p className="text-slate-400">Copy this prompt to any AI to instantly replicate the Cydenti typography system.</p>
                        </div>
                        <button
                            onClick={handleCopy}
                            className={clsx(
                                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all border",
                                copied
                                    ? "bg-green-500/20 text-green-400 border-green-500/50"
                                    : "bg-white/10 hover:bg-white/20 text-white border-white/10"
                            )}
                        >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            {copied ? "Copied" : "Copy Prompt"}
                        </button>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 border border-white/10 font-mono text-sm text-slate-300 leading-relaxed overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{promptText}</pre>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Typography</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Cydenti uses Geist Sans for all headings and display text, with a system font stack for body content. Geist Mono is reserved for code and technical content.
        </p>
      </div>

      {/* Font Families */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Font Families</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Sans */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Primary — Geist Sans</span>
                    <h3 className="mt-2 text-6xl font-heading font-bold text-slate-900">Cydenti</h3>
                    <code className="text-xs text-slate-400 mt-2 block">font-sans / font-heading</code>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                    <p>Used for headings, display text, and UI elements.</p>
                    <p>Weights: <span className="font-semibold">400 Regular</span>, <span className="font-semibold">500 Medium</span>, <span className="font-semibold">600 SemiBold</span>, <span className="font-semibold">700 Bold</span></p>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg font-sans text-lg text-slate-800">
                    The quick brown fox jumps over the lazy dog.
                </div>
            </div>

            {/* Mono */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Monospace — Geist Mono</span>
                    <h3 className="mt-2 text-5xl font-mono text-slate-900">0xC1D3</h3>
                    <code className="text-xs text-slate-400 mt-2 block">font-mono</code>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                    <p>Used for code snippets, technical identifiers, and data tokens.</p>
                    <p>Weights: <span className="font-semibold">400 Regular</span>, <span className="font-semibold">500 Medium</span></p>
                </div>
                <div className="mt-6 p-4 bg-slate-950 rounded-lg font-mono text-sm text-green-400">
                    $ npm install cydenti-sdk
                </div>
            </div>

            {/* Montserrat */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Social & PPT — Montserrat</span>
                    <h3 className="mt-2 text-5xl font-[family-name:var(--font-montserrat)] text-slate-900">Present</h3>
                    <code className="text-xs text-slate-400 mt-2 block">font-montserrat</code>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                    <p>Used regularly in PowerPoint presentations and social media posts.</p>
                    <p>Weights: <span className="font-semibold">400 Regular</span>, <span className="font-semibold">600 SemiBold</span>, <span className="font-semibold">700 Bold</span></p>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg font-[family-name:var(--font-montserrat)] text-lg text-slate-800">
                    Impactful presentations start here.
                </div>
            </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Type Scale</h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Element</th>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Size / Weight</th>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500 hidden md:table-cell">Preview</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-slate-900">Display</td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-500">
                            60px / ExtraBold
                        </td>
                        <td className="px-6 py-6 hidden md:table-cell">
                             <span className="text-4xl font-heading font-extrabold text-slate-900">Display Heading</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-slate-900">Heading 1</td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-500">
                            60px / Bold
                        </td>
                        <td className="px-6 py-6 hidden md:table-cell">
                             <span className="text-4xl font-heading font-bold text-slate-900">Heading 1</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-slate-900">Heading 2</td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-500">
                            36px / Bold
                        </td>
                        <td className="px-6 py-6 hidden md:table-cell">
                             <span className="text-3xl font-heading font-bold text-slate-900">Heading 2</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-slate-900">Heading 3</td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-500">
                            24px / Bold
                        </td>
                        <td className="px-6 py-6 hidden md:table-cell">
                             <span className="text-2xl font-heading font-bold text-slate-900">Heading 3</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-slate-900">Body</td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-500">
                            18px / Regular
                        </td>
                        <td className="px-6 py-6 hidden md:table-cell">
                             <span className="text-lg font-sans text-slate-700">The quick brown fox jumps over the lazy dog.</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-slate-900">Small</td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-slate-500">
                            14px / Regular
                        </td>
                        <td className="px-6 py-6 hidden md:table-cell">
                             <span className="text-sm font-sans text-slate-500">Caption and helper text.</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* Writing & Combining Rules */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900">Writing & Combining Rules</h2>
        
        <div className="grid gap-8 lg:grid-cols-1">
            
            {/* Gradient Headlines */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Gradient Headlines</span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">Combine Black & Gradient</h3>
                    <p className="mt-2 text-slate-500">Use solid black for the setup and the brand gradient for the payoff or key concept.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
                    <h1 className="text-5xl font-heading font-extrabold tracking-tight text-slate-900 text-center">
                        Total Visibility. <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cydenti-primary)] to-[var(--color-cydenti-secondary)]">Intelligent Defense.</span>
                    </h1>
                </div>
            </div>

            {/* Highlighting */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Text Highlighting</span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">Cyan Highlights</h3>
                    <p className="mt-2 text-slate-500">Use Cyan (Teal) to highlight specific keywords within paragraph text for emphasis.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-lg font-sans text-slate-900 font-medium max-w-3xl mx-auto text-center leading-relaxed">
                        In <span className="text-brand-teal font-bold">SaaS environments</span>, breaches start with <span className="text-brand-teal font-bold">identity</span>. Hidden <span className="text-brand-teal font-bold">permissions</span>, <span className="text-brand-teal font-bold">service accounts</span>, and <span className="text-brand-teal font-bold">AI workflows</span> silently expand risk across your <span className="text-brand-teal font-bold">stack</span>.
                    </p>
                </div>
            </div>

            {/* Body Text Color */}
            <div className="rounded-xl border border-slate-200 bg-white p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Paragraph Text</span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">Standard Body Color</h3>
                    <p className="mt-2 text-slate-500">Always use Slate 700 (#334155) for standard paragraph text to ensure optimal readability and contrast against white backgrounds.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="p-8 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-base font-sans text-slate-700 leading-relaxed">
                            Cydenti is the Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots. Our platform provides visibility where traditional tools fail, ensuring your digital assets remain secure.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-lg bg-slate-50">
                        <div className="w-16 h-16 rounded-lg bg-slate-700 shadow-sm"></div>
                        <div>
                            <div className="font-bold text-slate-900">Slate 700</div>
                            <code className="text-sm text-slate-500">#334155</code>
                            <div className="text-xs text-slate-400 mt-1">text-slate-700</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <AiPromptSection />
    </div>
  );
}
