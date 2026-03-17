"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Palette, 
  Type, 
  MessageSquare, 
  Image, 
  Layout, 
  Component, 
  Share2, 
  MonitorPlay, 
  Cpu, 
  Download,
  Home,
  ShoppingBag,
  Languages
} from "lucide-react";
import { clsx } from "clsx";

const navItems = [
  { name: "Overview", href: "/", icon: Home },
  { name: "Logo System", href: "/logos", icon: Image },
  { name: "Color Palette", href: "/colors", icon: Palette },
  { name: "Typography", href: "/typography", icon: Type },
  { name: "Tone of Voice", href: "/tone-of-voice", icon: MessageSquare },
  { name: "Language Conversion", href: "/language-conversion", icon: Languages },
  { name: "Iconography", href: "/iconography", icon: Layout },
  { name: "UI Components", href: "/ui-components", icon: Component },
  { name: "Social Media", href: "/social-media", icon: Share2 },
  { name: "Presentation", href: "/presentation", icon: MonitorPlay },
  { name: "Merchandise", href: "/merchandise", icon: ShoppingBag },
  { name: "AI Prompts", href: "/ai-prompts", icon: Cpu },
  { name: "Downloads", href: "/downloads", icon: Download },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col border-r border-slate-200 bg-white">
      <div className="flex h-full flex-col px-4 py-6">
        <Link href="/" className="mb-10 flex items-center px-2">
            <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                    Cydenti
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                    Brand Guidelines
                </span>
            </div>
        </Link>
        <ul className="space-y-1 font-medium flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={clsx(
                    "group flex items-center rounded-lg px-3 py-2.5 transition-colors",
                    isActive 
                        ? "bg-brand-blue/5 text-brand-blue" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon
                    className={clsx(
                      "h-5 w-5 flex-shrink-0 transition-colors",
                      isActive 
                        ? "text-brand-blue" 
                        : "text-slate-400 group-hover:text-slate-600"
                    )}
                  />
                  <span className="ml-3 text-sm font-semibold">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto border-t border-slate-100 pt-6 px-2">
            <div className="text-xs text-slate-400 font-mono">
                <p>v1.0 • Feb 2026</p>
                <p className="mt-1">Internal Use Only</p>
            </div>
        </div>
      </div>
    </aside>
  );
}
