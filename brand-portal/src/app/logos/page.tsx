import { BrandLogo } from "@/components/BrandLogo";
import { Download, FileIcon, XCircle, CheckCircle } from "lucide-react";

const ASSETS = [
  "Brandmark[black].svg",
  "Brandmark[new color].svg",
  "Brandmark[original].svg",
  "Brandmark[white].svg",
  "Cydenti primary logo [blue-primary].svg",
  "Cydenti primary logo [white]-1.svg",
  "Cydenti primary logo [white].svg",
  "Cydenti primary logo with slogan[Black].svg",
  "Cydenti primary logo with slogan[New Colors].svg",
  "Cydenti primary logo with slogan[Original].svg",
  "Cydenti primary logo with slogan[White].svg",
  "Cydenti primary logo.svg",
  "Cydenti_primary_logo_formatted.svg",
  "dark-mode-bg-black-neon.svg",
  "dark-mode-bg-black-white.svg"
];

function AssetCard({ filename }: { filename: string }) {
    const path = `/CYDENTI DASHBOARD P 2/${filename}`;
    const isDark = filename.toLowerCase().includes("white") || filename.includes("dark-mode");
    const bgClass = isDark ? "bg-slate-950" : "bg-white";

    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-brand-blue/20">
            <div className={`flex h-40 items-center justify-center p-6 ${bgClass} relative`}>
                <img 
                    src={path} 
                    alt={filename} 
                    className="h-full w-auto max-w-full object-contain"
                />
            </div>
            <div className="flex flex-1 flex-col p-4 border-t border-slate-100 bg-slate-50/50">
                <h3 className="text-xs font-mono text-slate-500 truncate mb-3" title={filename}>{filename}</h3>
                <a 
                    href={path} 
                    download={filename}
                    className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 py-2 text-xs font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm"
                >
                    <Download className="h-3 w-3" /> Download
                </a>
            </div>
        </div>
    );
}

function LogoShowcaseCard({ 
    title, 
    description, 
    variant, 
    color, 
    background = "light",
    withSlogan = false
}: { 
    title: string; 
    description: string; 
    variant: "full" | "icon"; 
    color: "blue" | "white" | "slate";
    background?: "light" | "dark" | "gradient" | "black";
    withSlogan?: boolean;
}) {
    let bgClass = "bg-white border-slate-100";
    if (background === "dark") bgClass = "bg-slate-900 border-slate-800";
    if (background === "black") bgClass = "bg-black border-slate-800";
    if (background === "gradient") bgClass = "bg-gradient-to-br from-brand-blue to-brand-teal border-transparent";

    return (
        <div className="flex flex-col gap-3">
            <div className={`aspect-[4/3] w-full rounded-2xl flex items-center justify-center p-10 ${bgClass} shadow-sm border`}>
                <BrandLogo variant={variant} color={color} withSlogan={withSlogan} className="w-full h-auto max-h-24" />
            </div>
            <div>
                <h3 className="text-base font-bold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
}

function LogoMisuseCard({
    title,
    description,
    children
}: {
    title: string;
    description: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-3">
             <div className="aspect-[4/3] w-full rounded-2xl flex items-center justify-center p-8 bg-slate-50 border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-4 right-4 text-red-500 bg-white rounded-full p-1 shadow-sm z-10">
                    <XCircle className="w-5 h-5" />
                </div>
                {children}
             </div>
             <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-red-600 font-bold">Don't</span> {title}
                </h3>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
}

export default function LogosPage() {
  return (
    <div className="space-y-16">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Logo System</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          The Cydenti logo consists of two elements: the brandmark (icon) and the full logo (icon + wordmark). 
          Always use the official assets provided below.
        </p>
      </div>

      {/* Full Logo Section */}
      <section>
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Full Logo</h2>
            <span className="text-sm font-medium text-slate-500">Primary Identifier</span>
        </div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            <LogoShowcaseCard 
                title="Primary Blue" 
                description="Use on light backgrounds (White, Slate 50-100)." 
                variant="full" 
                color="blue" 
            />
             <LogoShowcaseCard 
                title="White on Dark" 
                description="Use on dark backgrounds (Slate 800-950)." 
                variant="full" 
                color="white" 
                background="dark"
            />
             <LogoShowcaseCard 
                title="White on Brand Gradient" 
                description="Use on hero sections and high-impact areas." 
                variant="full" 
                color="white" 
                background="gradient"
            />
        </div>
      </section>

      {/* Brandmark Section */}
      <section>
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Brandmark (Icon)</h2>
            <span className="text-sm font-medium text-slate-500">Social & App Icons</span>
        </div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            <LogoShowcaseCard 
                title="Primary Icon" 
                description="Default application." 
                variant="icon" 
                color="blue" 
            />
             <LogoShowcaseCard 
                title="White Icon" 
                description="Dark mode & overlays." 
                variant="icon" 
                color="white" 
                background="dark"
            />
             <LogoShowcaseCard 
                title="Gradient Context" 
                description="Brand moments." 
                variant="icon" 
                color="white" 
                background="gradient"
            />
             <LogoShowcaseCard 
                title="Monochrome" 
                description="Print & single color." 
                variant="icon" 
                color="slate" 
            />
        </div>
      </section>

      {/* With Slogan Section */}
      <section>
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Logo with Slogan</h2>
            <span className="text-sm font-medium text-slate-500">"Sovereign Identity Security"</span>
        </div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
            <LogoShowcaseCard 
                title="Primary with Slogan" 
                description="For large format headers where brand context is needed." 
                variant="full" 
                color="blue" 
                withSlogan={true}
            />
             <LogoShowcaseCard 
                title="White with Slogan" 
                description="For dark footers or presentation title slides." 
                variant="full" 
                color="white" 
                background="dark"
                withSlogan={true}
            />
        </div>
      </section>

      {/* Clear Space */}
      <section className="rounded-3xl bg-slate-50 p-12 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Clear Space & Sizing</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
             <div className="text-center">
                 <div className="relative inline-block mb-6">
                     <div className="absolute inset-0 border border-dashed border-brand-blue/30 rounded-lg scale-150"></div>
                     <BrandLogo variant="icon" color="blue" className="h-20 w-auto relative z-10" />
                     <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-xs text-brand-blue font-mono font-bold">0.5x</div>
                 </div>
                 <p className="text-sm font-medium text-slate-900">Clear Space</p>
                 <p className="text-xs text-slate-500">½ height of brandmark</p>
             </div>
             
             <div className="h-px w-full md:w-px md:h-32 bg-slate-200"></div>

             <div className="text-center">
                 <div className="flex items-end gap-8 mb-6 h-20 pb-2">
                     <div className="flex flex-col items-center gap-2">
                        <BrandLogo variant="icon" color="blue" className="h-6 w-auto" />
                        <span className="text-[10px] font-mono text-slate-400">24px</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <BrandLogo variant="icon" color="blue" className="h-4 w-auto" />
                        <span className="text-[10px] font-mono text-slate-400">16px</span>
                     </div>
                 </div>
                 <p className="text-sm font-medium text-slate-900">Minimum Size</p>
                 <p className="text-xs text-slate-500">Digital: 24px / Print: 8mm</p>
             </div>
        </div>
      </section>

      {/* Logo Misuse Section */}
      <section>
        <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Logo Misuse</h2>
            <span className="text-sm font-medium text-slate-500">How not to use the logo</span>
        </div>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
             <LogoMisuseCard
                title="distort or stretch"
                description="Always maintain the aspect ratio when resizing."
             >
                <div className="flex items-center justify-center w-full h-full">
                    <BrandLogo variant="full" color="blue" className="w-[80%] !h-12 object-fill" />
                </div>
             </LogoMisuseCard>
             
             <LogoMisuseCard
                title="rotate"
                description="Keep the logo horizontal. Do not rotate it."
             >
                <BrandLogo variant="full" color="blue" className="w-3/4 rotate-12" />
             </LogoMisuseCard>

             <LogoMisuseCard
                title="change colors"
                description="Use only the approved brand colors."
             >
                <div className="relative">
                    <BrandLogo variant="full" color="blue" className="w-3/4 hue-rotate-90 saturate-200" />
                </div>
             </LogoMisuseCard>

             <LogoMisuseCard
                title="add effects"
                description="Do not add drop shadows, glows, or outlines."
             >
                <BrandLogo variant="full" color="blue" className="w-3/4 drop-shadow-xl blur-[1px]" />
             </LogoMisuseCard>

             <LogoMisuseCard
                title="place on busy backgrounds"
                description="Ensure sufficient contrast and readability."
             >
                <div className="absolute inset-0 bg-slate-900 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                     <BrandLogo variant="full" color="blue" className="w-3/4 relative z-10" />
                </div>
             </LogoMisuseCard>

             <LogoMisuseCard
                title="rearrange elements"
                description="Do not change the lockup or spacing."
             >
                <div className="flex flex-col items-center gap-2">
                     <BrandLogo variant="icon" color="blue" className="h-10 w-auto" />
                     <span className="font-bold text-xl text-[#0A4CFF] tracking-tighter">CYDENTI</span>
                </div>
             </LogoMisuseCard>
        </div>
      </section>

      {/* Full Asset Library */}
      <section id="asset-library" className="space-y-8 pt-8 border-t border-slate-200">
        <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-blue rounded-xl text-white shadow-lg shadow-brand-blue/20">
                <FileIcon className="h-6 w-6" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Asset Library</h2>
                <p className="text-slate-500 text-sm">Direct download for all source files.</p>
            </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ASSETS.map((filename) => (
                <AssetCard key={filename} filename={filename} />
            ))}
        </div>
      </section>
    </div>
  );
}