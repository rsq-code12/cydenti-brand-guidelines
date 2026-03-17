import { Copy, Check, MessageSquare } from "lucide-react";

export default function AIPromptsPage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">AI Prompt Guidelines</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Standardized prompts to ensure AI-generated content aligns with Cydenti's voice, tone, and technical accuracy.
        </p>
      </div>

      {/* Core Persona */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Core Brand Persona</h2>
        <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-8">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-blue rounded-lg text-white">
                    <MessageSquare className="h-6 w-6" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-blue mb-2">System Instruction</h3>
                    <p className="text-sm text-slate-700 mb-4">
                        Use this as the "System Prompt" or "Custom Instruction" when using ChatGPT, Claude, or other LLMs for Cydenti content.
                    </p>
                    <div className="relative bg-white rounded-lg border border-slate-200 p-4 font-mono text-sm text-slate-800 shadow-sm">
                        <p className="whitespace-pre-wrap">
                            You are Cydenti, the Sovereign Intelligence Layer for SaaS, Cloud, and Identity Blind Spots. 
                            
                            Your voice is:
                            1. Identity-First: You focus on securing human and machine identities, not just infrastructure.
                            2. Sovereign & Private: You emphasize that data never leaves the customer's boundary.
                            3. AI-Agent Aware: You understand the risks of autonomous agents and shadow AI.
                            4. Outcome-Driven: You lead with benefits, not features.
                            5. Modern & Technical: You are authoritative but accessible. Avoid marketing fluff like "game-changing" or "revolutionary".
                            
                            Never use the terms: "SIEM", "GRC tool", or "Magic AI".
                            Always emphasize: "Identity Security", "Blind Spots", and "Sovereignty".
                        </p>
                        <button className="absolute top-3 right-3 p-2 text-slate-400 hover:text-brand-blue hover:bg-slate-50 rounded-md transition-colors" title="Copy to clipboard">
                            <Copy className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Prompt Buckets */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900">Prompt Buckets</h2>
        <div className="grid gap-6 md:grid-cols-2">
            
            {/* Marketing */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Marketing</span>
                    <h3 className="text-lg font-bold text-slate-900">Blog Posts & Articles</h3>
                </div>
                <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="font-mono text-xs text-slate-500 mb-2">PROMPT TEMPLATE</p>
                        <p className="text-sm text-slate-800">
                            "Draft a blog post about [Topic]. The target audience is [Audience, e.g., CISOs]. 
                            Focus on the pain point of [Pain Point]. 
                            Structure it with a clear hook, 3 key insights, and a strong conclusion. 
                            Use Cydenti's confident, identity-first tone. Avoid fear-mongering."
                        </p>
                    </div>
                </div>
            </div>

            {/* Technical */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                    <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Technical</span>
                    <h3 className="text-lg font-bold text-slate-900">Documentation & Guides</h3>
                </div>
                <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="font-mono text-xs text-slate-500 mb-2">PROMPT TEMPLATE</p>
                        <p className="text-sm text-slate-800">
                            "Explain how to configure [Feature] in Cydenti. 
                            Write for a DevOps engineer. 
                            Use clear, numbered steps. 
                            Include a code block example for the configuration. 
                            Keep the tone neutral, precise, and helpful."
                        </p>
                    </div>
                </div>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Sales</span>
                    <h3 className="text-lg font-bold text-slate-900">Outbound Email</h3>
                </div>
                <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="font-mono text-xs text-slate-500 mb-2">PROMPT TEMPLATE</p>
                        <p className="text-sm text-slate-800">
                            "Write a cold email to a VP of Security about Identity Blind Spots. 
                            Keep it under 150 words. 
                            Subject line should be intriguing but not clickbaity. 
                            Focus on the value of 'seeing what others can't'. 
                            Call to action: '15-min chat'."
                        </p>
                    </div>
                </div>
            </div>

            {/* Social */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Social</span>
                    <h3 className="text-lg font-bold text-slate-900">LinkedIn Post</h3>
                </div>
                <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="font-mono text-xs text-slate-500 mb-2">PROMPT TEMPLATE</p>
                        <p className="text-sm text-slate-800">
                            "Write a LinkedIn post about [News/Trend]. 
                            Start with a contrarian take or a surprising stat. 
                            Use short, punchy sentences. 
                            Include 3-5 relevant hashtags (e.g., #IdentitySecurity, #Cydenti). 
                            No emojis in the first line."
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* Tone Modifiers */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Tone Modifiers</h2>
        <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Make it Executive</h4>
                <p className="text-sm text-slate-600">"Rewrite this to focus on business risk and ROI. Remove technical jargon. Keep it high-level."</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Make it Technical</h4>
                <p className="text-sm text-slate-600">"Rewrite this for a security architect. Include specific protocols (OIDC, SAML) and architecture details."</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Make it Urgent</h4>
                <p className="text-sm text-slate-600">"Rewrite this to emphasize the immediate threat of shadow AI. Use stronger verbs."</p>
            </div>
        </div>
      </section>
    </div>
  );
}
