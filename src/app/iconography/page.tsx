import { Shield, Settings, User, Activity, Monitor } from "lucide-react";

export default function IconographyPage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Iconography & Imagery</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Icons should be simple, outlined, and consistent. Photography should feel clean, modern, and enterprise-grade.
        </p>
      </div>

      {/* Icon Style */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Icon Style</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center hover:border-brand-blue/30 hover:shadow-sm transition-all">
                <Shield className="h-8 w-8 text-brand-blue mb-3 stroke-[1.5]" />
                <p className="text-sm font-medium text-slate-600">Security</p>
            </div>
            <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center hover:border-brand-blue/30 hover:shadow-sm transition-all">
                <Settings className="h-8 w-8 text-brand-blue mb-3 stroke-[1.5]" />
                <p className="text-sm font-medium text-slate-600">Configuration</p>
            </div>
            <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center hover:border-brand-blue/30 hover:shadow-sm transition-all">
                <User className="h-8 w-8 text-brand-blue mb-3 stroke-[1.5]" />
                <p className="text-sm font-medium text-slate-600">Identity</p>
            </div>
            <div className="aspect-square rounded-xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center hover:border-brand-blue/30 hover:shadow-sm transition-all">
                <Activity className="h-8 w-8 text-brand-blue mb-3 stroke-[1.5]" />
                <p className="text-sm font-medium text-slate-600">Activity</p>
            </div>
        </div>
        <div className="rounded-lg bg-slate-50 p-4 border border-slate-200 text-sm text-slate-600">
            <strong>Rules:</strong> 1.5px stroke weight • Rounded line caps • 24×24 viewbox • Primary Blue or Slate 600 stroke • No fills unless essential.
        </div>
      </section>

      {/* Photography Direction */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Photography Direction</h2>
        <div className="grid gap-6 md:grid-cols-3">
            <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                        Abstract Tech
                    </div>
                </div>
                <div className="p-4 bg-white">
                    <h4 className="font-bold text-slate-900 mb-1">Clean Tech Environments</h4>
                    <p className="text-xs text-slate-500">Minimalist office spaces, servers, or abstract digital environments.</p>
                </div>
            </div>

             <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="aspect-video bg-slate-900 relative overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                        UI Dashboard
                    </div>
                </div>
                <div className="p-4 bg-white">
                    <h4 className="font-bold text-slate-900 mb-1">Dark-Themed Dashboards</h4>
                    <p className="text-xs text-slate-500">Screenshots of the product in dark mode, showing data and insights.</p>
                </div>
            </div>

             <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="aspect-video bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 relative overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center text-brand-blue/50 font-medium">
                        Identity Graph
                    </div>
                </div>
                <div className="p-4 bg-white">
                    <h4 className="font-bold text-slate-900 mb-1">Abstract Identity Graphs</h4>
                    <p className="text-xs text-slate-500">Visualizations of connections between users, apps, and data.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
