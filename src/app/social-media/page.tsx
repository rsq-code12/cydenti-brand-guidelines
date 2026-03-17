import { Check, X, Linkedin, Twitter } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export default function SocialMediaPage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Social Media</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Guidelines for maintaining our brand presence across social platforms. 
          Consistency builds trust and recognition.
        </p>
      </div>

      {/* Profiles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Profile Assets</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* LinkedIn */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <Linkedin className="h-6 w-6 text-[#0077B5]" />
              <h3 className="text-lg font-bold">LinkedIn</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Profile Picture</h4>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-slate-950 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                    <BrandLogo variant="icon" color="white" className="h-10 w-10" />
                  </div>
                  <div className="text-sm text-slate-500">
                    <p className="font-mono text-xs mb-1">400 x 400 px</p>
                    <p>Use the white icon on Slate 950 background.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Cover Image</h4>
                <div className="h-24 w-full rounded-lg bg-gradient-to-r from-brand-blue to-brand-teal relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                </div>
                <div className="mt-2 text-sm text-slate-500">
                    <p className="font-mono text-xs mb-1">1128 x 191 px</p>
                    <p>Use the brand gradient with subtle abstract patterns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Twitter / X */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <Twitter className="h-6 w-6 text-slate-900" />
              <h3 className="text-lg font-bold">X (Twitter)</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Profile Picture</h4>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-slate-950 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                    <BrandLogo variant="icon" color="white" className="h-10 w-10" />
                  </div>
                  <div className="text-sm text-slate-500">
                    <p className="font-mono text-xs mb-1">400 x 400 px</p>
                    <p>Use the white icon on Slate 950 background.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Header</h4>
                <div className="h-24 w-full rounded-lg bg-slate-900 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20"></div>
                </div>
                <div className="mt-2 text-sm text-slate-500">
                    <p className="font-mono text-xs mb-1">1500 x 500 px</p>
                    <p>Keep text centered and minimal to avoid cropping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Post Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <div className="flex items-center gap-2 text-green-700 font-bold mb-4">
                    <Check className="h-5 w-5" />
                    <h3>Do</h3>
                </div>
                <ul className="space-y-3 text-sm text-green-800">
                    <li className="flex gap-2"><span className="text-green-600">•</span> Use high-contrast text on dark backgrounds</li>
                    <li className="flex gap-2"><span className="text-green-600">•</span> Include the logo watermark in the bottom right</li>
                    <li className="flex gap-2"><span className="text-green-600">•</span> Use data visualizations for stats</li>
                    <li className="flex gap-2"><span className="text-green-600">•</span> Keep copy concise and outcome-focused</li>
                </ul>
            </div>
            
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-2 text-red-700 font-bold mb-4">
                    <X className="h-5 w-5" />
                    <h3>Don't</h3>
                </div>
                <ul className="space-y-3 text-sm text-red-800">
                    <li className="flex gap-2"><span className="text-red-600">•</span> Don't clutter images with too much text</li>
                    <li className="flex gap-2"><span className="text-red-600">•</span> Don't use stock photos of "hackers in hoodies"</li>
                    <li className="flex gap-2"><span className="text-red-600">•</span> Don't distort the logo or change its colors</li>
                    <li className="flex gap-2"><span className="text-red-600">•</span> Don't use unapproved gradients</li>
                </ul>
            </div>
        </div>
      </section>

      {/* Templates */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Templates</h2>
        <div className="grid gap-6 md:grid-cols-3">
            {/* Template 1: Quote */}
            <div className="group cursor-pointer">
                <div className="aspect-square rounded-xl bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden border border-slate-800 transition-all group-hover:shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue blur-[60px] opacity-40"></div>
                    <div className="relative z-10">
                        <p className="text-2xl font-bold text-white leading-tight">"Identity is the new perimeter."</p>
                    </div>
                    <div className="relative z-10 flex justify-between items-end">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                            <div className="text-xs text-slate-400">
                                <p className="font-bold text-white">Jane Doe</p>
                                <p>CISO, TechCorp</p>
                            </div>
                        </div>
                        <BrandLogo variant="icon" color="white" className="h-6 w-6 opacity-50" />
                    </div>
                </div>
                <p className="mt-3 text-sm font-medium text-slate-900">Quote Card</p>
                <p className="text-xs text-slate-500">1080 x 1080 px</p>
            </div>

            {/* Template 2: Stat */}
            <div className="group cursor-pointer">
                <div className="aspect-square rounded-xl bg-white p-8 flex flex-col justify-center items-center text-center relative overflow-hidden border border-slate-200 transition-all group-hover:shadow-lg">
                    <div className="text-6xl font-extrabold text-brand-blue mb-2">85%</div>
                    <p className="text-lg font-medium text-slate-900 mb-6">of breaches involve compromised credentials</p>
                    <div className="h-1 w-16 bg-brand-teal rounded-full"></div>
                    <div className="absolute bottom-6 right-6">
                        <BrandLogo variant="icon" color="blue" className="h-6 w-6" />
                    </div>
                </div>
                <p className="mt-3 text-sm font-medium text-slate-900">Stat Card</p>
                <p className="text-xs text-slate-500">1080 x 1080 px</p>
            </div>

             {/* Template 3: Announcement */}
             <div className="group cursor-pointer">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal p-8 flex flex-col justify-center items-start text-white relative overflow-hidden border border-transparent transition-all group-hover:shadow-lg">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">New Feature</div>
                    <h3 className="text-3xl font-bold mb-4">Shadow AI Detection</h3>
                    <p className="text-white/80 text-sm">Discover unauthorized LLM usage in real-time.</p>
                    <div className="absolute bottom-6 right-6">
                         <BrandLogo variant="icon" color="white" className="h-8 w-8" />
                    </div>
                </div>
                <p className="mt-3 text-sm font-medium text-slate-900">Feature Launch</p>
                <p className="text-xs text-slate-500">1080 x 1080 px</p>
            </div>
        </div>
      </section>
    </div>
  );
}
