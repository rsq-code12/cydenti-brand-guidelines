"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

function ColorCard({
    name,
    hex,
    description,
    className,
    textColor = "text-slate-900",
    bgClass
}: {
    name: string;
    hex: string;
    description?: string;
    className?: string;
    textColor?: string;
    bgClass?: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group flex flex-col gap-3">
            <div
                className={clsx(
                    "aspect-square w-full rounded-2xl shadow-sm border border-black/5 relative cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]",
                    className
                )}
                style={{ backgroundColor: bgClass ? undefined : hex }}
                onClick={handleCopy}
            >
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-2xl">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                        {copied ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
                        {copied ? "Copied" : "Copy"}
                    </span>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <h3 className={clsx("font-bold text-base", textColor)}>{name}</h3>
                </div>
                <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider">{hex}</p>
                {description && (
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{description}</p>
                )}
            </div>
        </div>
    );
}

function AiPromptSection() {
    const [copied, setCopied] = useState(false);
    const promptText = `You are designing for Cydenti. Use the following color palette system strictly:

**Primary Colors:**
- Primary Blue: #0B4CFF (Main brand color, CTAs, primary actions)
- Cyan: #0CABC0 (Secondary brand color, gradients, highlights)

**Highlights (Backgrounds & Accents):**
- Blue Light: #EFF6FF
- Blue Light (Dark BG): #152B56
- Blue Light Var 2: #E4F0FE
- Cyan Light: #DBFCFE
- Grey Light: #F8FAFC
- Cyan Light (Dark BG): #073642

**Typography:**
- Subtext Grey: #62748E (Secondary text)

**Functional Colors (Standard):**
- Purple: #6157FA
- Red: #F63742
- Orange: #FF7226
- Green: #12A395

**Functional Colors (Neon - Dark Mode Only, max 5% usage):**
- Purple Neon: #778CFF
- Red Neon: #EC003F
- Orange Neon: #FF8718
- Green Neon: #00D5A0

**Backgrounds:**
- Light Mode: #FFFFFF with subtle blue/cyan blurs.
- Dark Mode: #0B1120 with 5-10% opacity white grid overlay.`;

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
                            <h2 className="text-2xl font-bold text-white mb-2">AI Color Palette Prompt</h2>
                            <p className="text-slate-400">Copy this prompt to any AI to instantly replicate the Cydenti color system.</p>
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

export default function ColorsPage() {
  return (
    <div className="space-y-16 pb-20">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Color Palette</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          The Cydenti color system is designed for clarity, trust, and modern digital security.
        </p>
      </div>

      {/* Primary Colors */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            Primary Colors
            <div className="h-px bg-slate-200 flex-1 ml-4"></div>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <ColorCard
                name="Primary Blue"
                hex="#0B4CFF"
                description="Main brand color. Used for primary actions and brand presence."
            />
            <ColorCard
                name="Cyan"
                hex="#0CABC0"
                description="Secondary brand color. Used for gradients and highlights."
            />
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            Highlights
            <div className="h-px bg-slate-200 flex-1 ml-4"></div>
        </h2>
        <p className="text-slate-500 mb-8 text-sm">
            These colors are used above page backgrounds, around icons, and for tab backgrounds.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ColorCard name="Blue - Light" hex="#EFF6FF" />
            <ColorCard name="Blue - Light (Dark BG)" hex="#152B56" />
            <ColorCard name="Blue - Light Var 2" hex="#E4F0FE" />
            <ColorCard name="Cyan - Light" hex="#DBFCFE" />
            <ColorCard name="Grey - Light" hex="#F8FAFC" />
            <ColorCard name="Cyan - Light (Dark BG)" hex="#073642" />
        </div>
      </section>

      {/* Greys and Muted Colors */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            Greys & Muted Colors
            <div className="h-px bg-slate-200 flex-1 ml-4"></div>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <ColorCard
                name="Subtext Grey"
                hex="#62748E"
                description="Used for subtext and secondary information."
            />
        </div>
      </section>

      {/* Extra Colors */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            Functional & Status Colors
            <div className="h-px bg-slate-200 flex-1 ml-4"></div>
        </h2>
        
        <div className="space-y-12">
            <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Standard</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <ColorCard name="Purple" hex="#6157FA" />
                    <ColorCard name="Red" hex="#F63742" />
                    <ColorCard name="Orange" hex="#FF7226" />
                    <ColorCard name="Green" hex="#12A395" />
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Neon Variants</h3>
                <p className="text-xs text-slate-500 mb-6">Only to be used 5% of the time (For Dark Theme)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <ColorCard name="Purple Neon" hex="#778CFF" />
                    <ColorCard name="Red Neon" hex="#EC003F" />
                    <ColorCard name="Orange Neon" hex="#FF8718" />
                    <ColorCard name="Green Neon" hex="#00D5A0" />
                </div>
            </div>
        </div>
      </section>

      {/* Backgrounds */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            Page Backgrounds
            <div className="h-px bg-slate-200 flex-1 ml-4"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="h-48 bg-white relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B4CFF]/5 to-[#0CABC0]/5 blur-3xl"></div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-900">Page Background (Light)</h3>
                        <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">#FFFFFF</span>
                    </div>
                    <p className="text-sm text-slate-500">Use subtle bg blue and cyan in blur format.</p>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-800 overflow-hidden bg-[#0B1120]">
                <div className="h-48 bg-[#0B1120] relative">
                     <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
                </div>
                <div className="p-6 border-t border-white/10">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white">Page Background (Dark)</h3>
                        <span className="font-mono text-xs text-slate-400 bg-white/10 px-2 py-1 rounded">#0B1120</span>
                    </div>
                    <p className="text-sm text-slate-400">Use of white grid opacity 5-10%.</p>
                </div>
            </div>
        </div>
      </section>

      {/* AI Prompt */}
      <AiPromptSection />
    </div>
  );
}
