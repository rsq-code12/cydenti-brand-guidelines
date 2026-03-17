import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { ArrowRight, Palette, Image, Type } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-teal px-10 py-20 text-white shadow-lg">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 h-16 w-16 text-white">
            <BrandLogo variant="icon" color="white" className="h-full w-full" />
          </div>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight">
            Brand Guidelines
          </h1>
          <p className="mb-8 text-xl font-medium opacity-90">
            The Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots
          </p>
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
              v1.0
            </span>
            <span className="text-sm opacity-70 font-mono tracking-widest uppercase">
              February 2026
            </span>
          </div>
        </div>
        
        {/* Abstract Pattern */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 right-20 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl"></div>
      </section>

      {/* Quick Access Grid */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-slate-900">Quick Access</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link 
            href="/logos" 
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-md"
          >
            <div>
              <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 text-brand-blue">
                <Image className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Logo System</h3>
              <p className="text-sm text-slate-500">
                Official logo assets, clear space rules, and usage guidelines.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
              View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>

          <Link 
            href="/colors" 
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-brand-teal/30 hover:shadow-md"
          >
            <div>
              <div className="mb-4 inline-flex rounded-lg bg-teal-50 p-3 text-brand-teal">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Color Palette</h3>
              <p className="text-sm text-slate-500">
                Primary and secondary colors, gradients, and accessibility standards.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-brand-teal opacity-0 transition-opacity group-hover:opacity-100">
              View Palette <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>

          <Link 
            href="/typography" 
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
          >
            <div>
              <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3 text-slate-700">
                <Type className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Typography</h3>
              <p className="text-sm text-slate-500">
                Geist Sans and Mono type scales, weights, and usage rules.
              </p>
            </div>
            <div className="mt-6 flex items-center text-sm font-semibold text-slate-700 opacity-0 transition-opacity group-hover:opacity-100">
              View Typography <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="rounded-2xl border border-slate-200 bg-white p-10">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">About Cydenti</h2>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="lead text-lg">
            Cydenti is the Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots.
          </p>
          <p>
            Our brand reflects our core mission: to provide clarity, security, and sovereignty in an increasingly complex digital landscape. 
            These guidelines are designed to ensure consistency across all our communications, from product interfaces to marketing materials.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-6">
                <h4 className="mb-2 font-bold text-slate-900">🎯 Identity-First</h4>
                <p className="text-sm">We protect identities — human, machine, and AI. We are not an IAM, SIEM, or governance tool.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-6">
                <h4 className="mb-2 font-bold text-slate-900">🛡️ Sovereign & Private</h4>
                <p className="text-sm">All AI runs in-house. No customer data leaves the platform boundary.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-6">
                <h4 className="mb-2 font-bold text-slate-900">⚡ Outcome-Driven</h4>
                <p className="text-sm">Every message leads with a clear benefit. We don't sell features, we solve problems.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
