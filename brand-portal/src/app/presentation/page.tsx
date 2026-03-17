import { BrandLogo } from "@/components/BrandLogo";
import { MonitorPlay, Layout, Type } from "lucide-react";

export default function PresentationPage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Presentation Guidelines</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Creating clear, impactful decks for internal and external audiences.
        </p>
      </div>

      {/* Slide Layouts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Slide Templates (16:9)</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            
            {/* Cover Slide */}
            <div className="group space-y-3">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex flex-col justify-between border border-slate-700 relative overflow-hidden shadow-sm transition-all hover:shadow-md">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue blur-[80px] opacity-20"></div>
                    <div className="relative z-10">
                        <BrandLogo variant="icon" color="white" className="h-8 w-8 mb-6" />
                        <h3 className="text-3xl font-bold text-white leading-tight mb-2">Q1 Business Review</h3>
                        <p className="text-slate-400 text-sm">Confidential • Feb 2026</p>
                    </div>
                    <div className="relative z-10 flex items-center gap-3">
                         <div className="h-8 w-8 rounded-full bg-slate-700 border border-slate-600"></div>
                         <div className="text-xs text-slate-300">
                             <p className="font-semibold">Presented by</p>
                             <p>Executive Team</p>
                         </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-slate-900">Title Slide</h4>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">Layout 01</span>
                </div>
            </div>

            {/* Section Break */}
            <div className="group space-y-3">
                <div className="aspect-video w-full rounded-xl bg-brand-blue p-8 flex items-center justify-center text-center border border-brand-blue relative overflow-hidden shadow-sm transition-all hover:shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-teal opacity-90"></div>
                    <div className="relative z-10 text-white">
                        <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-4">Section 02</p>
                        <h3 className="text-4xl font-extrabold">Product Roadmap</h3>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-slate-900">Section Break</h4>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">Layout 02</span>
                </div>
            </div>

            {/* Content Slide: Bullets */}
            <div className="group space-y-3">
                <div className="aspect-video w-full rounded-xl bg-white p-8 flex flex-col border border-slate-200 relative overflow-hidden shadow-sm transition-all hover:shadow-md">
                    <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                        <h3 className="text-xl font-bold text-slate-900">Key Objectives</h3>
                        <div className="text-xs text-slate-400">03 / 12</div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-8">
                        <ul className="space-y-3 list-disc list-inside text-sm text-slate-700 marker:text-brand-blue">
                            <li>Launch Identity Threat Detection</li>
                            <li>Expand to European Market</li>
                            <li>Achieve SOC2 Compliance</li>
                        </ul>
                        <div className="bg-slate-50 rounded-lg p-4 flex items-center justify-center border border-slate-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-brand-blue mb-1">120%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wide">Growth YoY</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-end">
                        <BrandLogo variant="icon" color="blue" className="h-4 w-4 opacity-50" />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-slate-900">Content Slide</h4>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">Layout 03</span>
                </div>
            </div>

            {/* Content Slide: Big Number */}
            <div className="group space-y-3">
                <div className="aspect-video w-full rounded-xl bg-white p-8 flex flex-col border border-slate-200 relative overflow-hidden shadow-sm transition-all hover:shadow-md">
                     <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                        <h3 className="text-xl font-bold text-slate-900">Market Opportunity</h3>
                        <div className="text-xs text-slate-400">04 / 12</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                             <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal mb-2">$45B</div>
                             <p className="text-lg font-medium text-slate-600">Total Addressable Market by 2028</p>
                        </div>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-end">
                        <BrandLogo variant="icon" color="blue" className="h-4 w-4 opacity-50" />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-slate-900">Big Number</h4>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">Layout 04</span>
                </div>
            </div>

        </div>
      </section>

      {/* Typography for Slides */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Slide Typography</h2>
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4 font-semibold">Element</th>
                        <th className="px-6 py-4 font-semibold">Size (pt)</th>
                        <th className="px-6 py-4 font-semibold">Weight</th>
                        <th className="px-6 py-4 font-semibold">Usage</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Title Slide H1</td>
                        <td className="px-6 py-4 text-slate-600 font-mono">60 - 72</td>
                        <td className="px-6 py-4 text-slate-600">Bold</td>
                        <td className="px-6 py-4 text-slate-500">Main deck title</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Slide Title H2</td>
                        <td className="px-6 py-4 text-slate-600 font-mono">32 - 40</td>
                        <td className="px-6 py-4 text-slate-600">Bold</td>
                        <td className="px-6 py-4 text-slate-500">Top of each content slide</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Body Text</td>
                        <td className="px-6 py-4 text-slate-600 font-mono">18 - 24</td>
                        <td className="px-6 py-4 text-slate-600">Regular</td>
                        <td className="px-6 py-4 text-slate-500">Bullets and paragraphs. Never go below 18pt.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">Captions</td>
                        <td className="px-6 py-4 text-slate-600 font-mono">12 - 14</td>
                        <td className="px-6 py-4 text-slate-600">Medium</td>
                        <td className="px-6 py-4 text-slate-500">Charts, footnotes, slide numbers</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>
    </div>
  );
}
