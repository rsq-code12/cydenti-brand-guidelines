export default function UIComponentsPage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">UI Components</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Reference patterns for buttons, badges, and form elements.
        </p>
      </div>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Buttons</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-8">
            <div className="flex flex-wrap gap-4 items-center">
                <button className="px-6 py-2.5 bg-slate-950 text-white rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors">
                    Primary Action
                </button>
                <button className="px-6 py-2.5 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-brand-blue/90 transition-colors">
                    Secondary
                </button>
                <button className="px-6 py-2.5 bg-white border border-brand-blue text-brand-blue rounded-lg text-sm font-medium hover:bg-brand-blue/5 transition-colors">
                    Outline Blue
                </button>
                <button className="px-6 py-2.5 bg-transparent border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">
                    Ghost
                </button>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-500">
                <p>Primary = Slate 950 bg • Secondary = Electric Blue bg • Ghost = transparent with border • Padding: 10px 24px • Radius: 8px • Font: 14px/500</p>
            </div>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Badges & Pills</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-8">
            <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                    Identity
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                    AI Agent
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    Cloud IAM
                </span>
                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
                    SSPM
                </span>
            </div>
        </div>
      </section>

      {/* Form Inputs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Form Inputs</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-8 max-w-xl">
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="you@company.com" 
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">Select Role</label>
                    <select 
                        id="role" 
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    >
                        <option>Security Engineer</option>
                        <option>DevOps</option>
                        <option>Manager</option>
                    </select>
                </div>
            </div>
             <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-500">
                <p>Border: Slate 300 • Focus ring: 3px Electric Blue (15% opacity) • Radius: 8px • Padding: 10px 14px</p>
            </div>
        </div>
      </section>
    </div>
  );
}
