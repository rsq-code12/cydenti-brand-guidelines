"use client";

import { Check, Copy, Globe, Search, MessageSquare, Sparkles, Award } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

function PromptBox({ children }: { children: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm text-slate-800 shadow-sm pr-12">
                {children}
            </div>
            <button
                onClick={handleCopy}
                className={clsx(
                    "absolute top-2 right-2 p-2 rounded-md transition-all",
                    copied
                        ? "text-green-600 bg-green-50"
                        : "text-slate-400 hover:text-brand-blue hover:bg-white opacity-0 group-hover:opacity-100"
                )}
                title="Copy to clipboard"
            >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
        </div>
    );
}

export default function LanguageConversionPage() {
    return (
        <div className="space-y-12">
            <div className="border-b border-slate-200 pb-8">
                <h1 className="text-4xl font-extrabold text-slate-900">Language Conversion & Content Generation</h1>
                <p className="mt-4 text-xl text-slate-500 max-w-3xl">
                    Our process for market research, text conversion, and localization to generate the perfect post.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
                <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex gap-4 group">
                        <div className="flex-none w-10 h-10 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">1</div>
                        <div className="flex-1 pt-1">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                Topic Selection
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                From the <span className="font-semibold text-slate-900">Cydenti Content Calendar</span>, pick this month's theme and a topic.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4 group">
                        <div className="flex-none w-10 h-10 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">2</div>
                        <div className="flex-1 pt-1 space-y-3">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                <Search className="w-5 h-5 text-slate-400" />
                                Market Research
                            </h3>
                            <p className="text-slate-600">Go to <span className="font-semibold text-slate-900">Perplexity</span> and use this prompt:</p>
                            <PromptBox>
                                "Research on latest news on [Theme], Gather all the posts that has happened on linkedin and twitter around last week"
                            </PromptBox>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4 group">
                        <div className="flex-none w-10 h-10 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">3</div>
                        <div className="flex-1 pt-1 space-y-3">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-slate-400" />
                                Content Generation
                            </h3>
                            <p className="text-slate-600">After the research is done, use this prompt:</p>
                            <PromptBox>
                                "Write a linkedin post on [Topic Title], See what others are writing the post. Select keywords they are using. Adapt to our Brand Guidelines and Tone of voice. The post should be conversational, educational and should look like Cydenti's Company page is talking to their audience and giving something informative"
                            </PromptBox>
                        </div>
                    </div>

                    {/* Step 4 (Optional) */}
                    <div className="flex gap-4 group">
                        <div className="flex-none w-10 h-10 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">4</div>
                        <div className="flex-1 pt-1">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                Length Adjustment <span className="text-xs font-normal bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Optional</span>
                            </h3>
                            <p className="text-slate-600">
                                Play with the length of the post content a little until it feels right.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex gap-4 group">
                        <div className="flex-none w-10 h-10 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">5</div>
                        <div className="flex-1 pt-1 space-y-3">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-slate-400" />
                                French Localization
                            </h3>
                            <p className="text-slate-600">Once satisfied with the English result, write:</p>
                            <PromptBox>
                                "Can you write this in conversational french. Imagine you are experienced expert on this field and you are talking with your audience on linkedin. It should feel human, professional and educational."
                            </PromptBox>
                        </div>
                    </div>

                     {/* Step 6 & 7 (Refinement) */}
                     <div className="flex gap-4 group">
                        <div className="flex-none w-10 h-10 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-bold text-lg group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">6</div>
                        <div className="flex-1 pt-1 space-y-3">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-slate-400" />
                                Final Polish <span className="text-xs font-normal bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Optional</span>
                            </h3>
                            <p className="text-slate-600">If not satisfied, use these refinement prompts:</p>
                            <ul className="grid gap-3 md:grid-cols-2">
                                <li>
                                    <PromptBox>
                                        "Isn't this too long?"
                                    </PromptBox>
                                </li>
                                <li>
                                    <PromptBox>
                                        "It does not feel human"
                                    </PromptBox>
                                </li>
                                <li className="md:col-span-2">
                                    <PromptBox>
                                        "I am not quite impressed by [Specify line], can we not rephrase it"
                                    </PromptBox>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pro Tips / Sidebar */}
                <div className="space-y-6">
                    <div className="rounded-xl bg-slate-50 p-6 border border-slate-200 sticky top-6">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-brand-blue" />
                            Pro Tips
                        </h4>
                        <ul className="space-y-4">
                            <li className="text-sm text-slate-600 flex gap-3">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Always check the French translation for "anglicisms". We are proudly French.</span>
                            </li>
                            <li className="text-sm text-slate-600 flex gap-3">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Verify facts from Perplexity before posting.</span>
                            </li>
                            <li className="text-sm text-slate-600 flex gap-3">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>The goal is to sound like a <strong>helpful expert</strong>, not a corporate bot.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
