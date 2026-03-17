"use client";

import { Check, X, Shield, MapPin, Bot, Zap, Terminal, Award, Copy } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

function AiPromptSection() {
    const [copied, setCopied] = useState(false);
    const promptText = `You are writing for Cydenti. Adopt the following Tone of Voice strictly:

**Core Identity:**
- We are educational, product-driven, and masters of cloud identity.
- We are proudly Made in France and hosted in Europe.
- Our voice is authoritative yet accessible, simplifying complex security concepts.

**Key Principles:**
1. **Mastering Identity:** Focus on the "why" and "how". Demonstrate deep expertise.
2. **European Sovereignty:** Emphasize data privacy, GDPR, and NIS2 compliance.
3. **Product-Driven AI:** AI is a precision tool, not magic. Explain how it solves problems.
4. **Educational:** Teach the user. Empower them with actionable insights.
5. **Technical Precision:** Use accurate terminology. Speak to engineers and security pros.

**Writing Style Rules:**
- **Do:** Use clear, direct sentences. Lead with outcomes. Say "Identity Security" (not just IAM). Mention AI agents and SaaS/cloud.
- **Don't:** Use fluff or buzzwords. Don't over-claim "magic AI". Avoid long, dense paragraphs. Don't sound sales-y.

**Example:**
"Cydenti detects risky permissions and shadow AI before they become incidents." (Direct, outcome-driven)
NOT: "Our revolutionary solution leverages cutting-edge ML to enhance security." (Fluff, vague)`;

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
                            <h2 className="text-2xl font-bold text-white mb-2">AI Tone of Voice Prompt</h2>
                            <p className="text-slate-400">Copy this prompt to any AI to instantly replicate the Cydenti writing style.</p>
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

function ToneCard({ 
    title, 
    items, 
    type 
}: { 
    title: string; 
    items: string[]; 
    type: "do" | "dont"; 
}) {
    const isDo = type === "do";
    const bgClass = isDo ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200";
    const titleClass = isDo ? "text-green-800" : "text-red-800";
    const iconClass = isDo ? "text-green-600" : "text-red-600";
    const Icon = isDo ? Check : X;

    return (
        <div className={`rounded-xl border p-6 ${bgClass}`}>
            <h3 className={`flex items-center gap-2 text-lg font-bold mb-4 ${titleClass}`}>
                <Icon className="h-5 w-5" /> {title}
            </h3>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${iconClass} bg-current`}></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ToneOfVoicePage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Tone of Voice</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          We are educational, product-driven, and masters of cloud identity. Our voice is authoritative yet accessible, simplifying complex security concepts for modern teams. We are proudly made in France and hosted all over Europe.
        </p>
      </div>

      {/* Brand Principles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Brand Principles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Mastering Identity</h3>
                <p className="text-sm text-slate-600">We don't just manage access; we master the entire identity lifecycle. We educate users on the "why" and "how" of identity security, not just the "what".</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">European Sovereignty</h3>
                <p className="text-sm text-slate-600">We are made in France and hosted all over Europe. Data sovereignty and privacy (GDPR, NIS2) are foundational to our product, not afterthoughts.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Bot className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Product-Driven AI</h3>
                <p className="text-sm text-slate-600">Our AI isn't magic; it's a precision tool. We explain how our product solves problems using advanced heuristics and machine learning, focusing on tangible outcomes.</p>
            </div>
             <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Educational & Actionable</h3>
                <p className="text-sm text-slate-600">Every piece of content should teach something new. We empower our users to become better security practitioners through clear, actionable insights.</p>
            </div>
             <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Terminal className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Technically Precise</h3>
                <p className="text-sm text-slate-600">We speak the language of engineers and security pros. Accurate terminology is key. We avoid marketing fluff in favor of technical depth and clarity.</p>
            </div>
             <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">Trust Through Expertise</h3>
                <p className="text-sm text-slate-600">We earn trust by demonstrating deep expertise. We are the authority on cloud identity, and our tone reflects that confidence without arrogance.</p>
            </div>
        </div>
      </section>

      {/* Writing Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Writing Examples</h2>
        <div className="grid gap-6 md:grid-cols-2">
            
            <div className="space-y-4">
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wide bg-green-100 px-2 py-1 rounded">✓ Do This</span>
                    <p className="mt-2 text-slate-900 font-medium">"See every identity blind spot across your SaaS and cloud stack — in minutes."</p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide bg-red-100 px-2 py-1 rounded">✗ Not This</span>
                    <p className="mt-2 text-slate-900 font-medium">"Our revolutionary AI-powered IAM governance solution leverages cutting-edge machine learning."</p>
                </div>
            </div>

            <div className="space-y-4">
                 <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wide bg-green-100 px-2 py-1 rounded">✓ Do This</span>
                    <p className="mt-2 text-slate-900 font-medium">"Cydenti detects risky permissions and shadow AI before they become incidents."</p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide bg-red-100 px-2 py-1 rounded">✗ Not This</span>
                    <p className="mt-2 text-slate-900 font-medium">"Cydenti is the world's best identity security platform with magical AI capabilities."</p>
                </div>
            </div>

        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Do's and Don'ts</h2>
        <div className="grid gap-6 md:grid-cols-2">
            <ToneCard 
                title="Do" 
                type="do" 
                items={[
                    "Use clear, direct sentences",
                    "Lead with the outcome or benefit",
                    "Say 'Identity Security' not 'IAM'",
                    "Mention AI agents and SaaS/cloud",
                    "Be confident and specific",
                    "Keep paragraphs short"
                ]} 
            />
             <ToneCard 
                title="Don't" 
                type="dont" 
                items={[
                    "Use jargon-heavy sentences",
                    "Over-claim 'magic AI'",
                    "Write long, dense paragraphs",
                    "Position as IAM or GRC tool",
                    "Use buzzwords without meaning",
                    "Sound sales-y or hype-driven"
                ]} 
            />
        </div>
      </section>

      {/* AI Prompt */}
      <AiPromptSection />
    </div>
  );
}
