import { Download, FileText, Image } from "lucide-react";

export default function DownloadsPage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Downloads</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Get the official Cydenti brand assets, templates, and guides.
        </p>
      </div>

      {/* Logo Pack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Logo Pack</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-6 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <Image className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Official Logo Bundle</h3>
                    <p className="text-sm text-slate-500">Includes SVG, PNG, EPS formats (Light, Dark, Mono)</p>
                </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                <Download className="h-4 w-4" /> Download ZIP
            </button>
        </div>
      </section>

      {/* Presentation Templates */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Presentation Templates</h2>
        <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Google Slides Theme</h3>
                        <p className="text-sm text-slate-500">Master slides and layouts</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                    Open
                </button>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Keynote Template</h3>
                        <p className="text-sm text-slate-500">For Mac users</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                    Download
                </button>
            </div>
             <div className="rounded-xl border border-slate-200 bg-white p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-3 rounded-lg text-red-600">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">PowerPoint Template</h3>
                        <p className="text-sm text-slate-500">Standard .pptx file</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                    Download
                </button>
            </div>
        </div>
      </section>

      {/* Font Files */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Fonts</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-6 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                    <span className="text-xl font-bold">Aa</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Geist Font Family</h3>
                    <p className="text-sm text-slate-500">Sans and Mono weights (OTF/WOFF2)</p>
                </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                <Download className="h-4 w-4" /> Download ZIP
            </button>
        </div>
      </section>

       {/* Social Media Kit */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Social Media Kit</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-6 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-lg text-pink-600">
                    <Image className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Social Templates</h3>
                    <p className="text-sm text-slate-500">Figma file and exported PNGs</p>
                </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                <Download className="h-4 w-4" /> Download ZIP
            </button>
        </div>
      </section>
    </div>
  );
}
