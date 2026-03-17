import { ShoppingBag, Shirt, Sticker, Coffee } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export default function MerchandisePage() {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900">Merchandise & Swag</h1>
        <p className="mt-4 text-xl text-slate-500 max-w-3xl">
          Guidelines for applying the Cydenti brand to physical products. Quality and subtlety are key.
        </p>
      </div>

      {/* Philosophy */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Design Philosophy</h2>
        <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Subtle Branding</h3>
                <p className="text-sm text-slate-600">Avoid giant logos. Use small, tasteful placements (e.g., sleeve, hem, notebook corner).</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">High Quality</h3>
                <p className="text-sm text-slate-600">Choose premium materials. We want people to actually use these items, not throw them away.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Functional</h3>
                <p className="text-sm text-slate-600">Prioritize utility. Tech organizers, high-quality notebooks, and durable drinkware.</p>
            </div>
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900">Mockups</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* T-Shirt */}
            <div className="group">
                <div className="aspect-[4/5] bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-200">
                    <div className="w-48 h-64 bg-slate-900 rounded-lg shadow-lg relative mask-image">
                         {/* Simple T-Shirt Shape representation */}
                         <div className="absolute top-4 left-1/2 -translate-x-1/2">
                             <BrandLogo variant="icon" color="white" className="h-6 w-6 opacity-90" />
                         </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                        Dark Tee
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <Shirt className="h-4 w-4 text-slate-500" /> Premium Tee
                    </h3>
                    <p className="text-sm text-slate-500">Small logo on left chest or nape of neck.</p>
                </div>
            </div>

            {/* Sticker Pack */}
            <div className="group">
                <div className="aspect-[4/5] bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-200 p-8">
                    <div className="relative w-full h-full">
                        <div className="absolute top-10 left-4 rotate-12 bg-white p-2 rounded-lg shadow-md border border-slate-100">
                            <BrandLogo variant="icon" color="blue" className="h-12 w-12" />
                        </div>
                        <div className="absolute bottom-12 right-8 -rotate-6 bg-slate-900 p-3 rounded-full shadow-md border border-slate-800">
                            <BrandLogo variant="icon" color="white" className="h-10 w-10" />
                        </div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-brand-blue to-brand-teal p-1 rounded shadow-md text-white text-[10px] font-bold px-3 py-1 rotate-3">
                            CYDENTI
                        </div>
                    </div>
                     <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                        Stickers
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <Sticker className="h-4 w-4 text-slate-500" /> Die-Cut Stickers
                    </h3>
                    <p className="text-sm text-slate-500">Matte finish vinyl. Laptop-safe adhesive.</p>
                </div>
            </div>

            {/* Notebook */}
            <div className="group">
                <div className="aspect-[4/5] bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-200">
                    <div className="w-40 h-56 bg-slate-800 rounded-r-lg rounded-l-sm shadow-xl relative border-l-4 border-slate-900">
                        <div className="absolute bottom-4 right-4 opacity-50">
                             <BrandLogo variant="icon" color="white" className="h-6 w-6" />
                        </div>
                    </div>
                     <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                        Notebook
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4 text-slate-500" /> Moleskine
                    </h3>
                    <p className="text-sm text-slate-500">Debossed logo on cover. Slate grey or black.</p>
                </div>
            </div>

             {/* Drinkware */}
            <div className="group">
                <div className="aspect-[4/5] bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-200">
                     <div className="w-24 h-40 bg-white rounded-lg shadow-lg relative border border-slate-100 flex items-center justify-center">
                         <BrandLogo variant="icon" color="blue" className="h-8 w-8" />
                     </div>
                      <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                        Tumbler
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <Coffee className="h-4 w-4 text-slate-500" /> Insulated Tumbler
                    </h3>
                    <p className="text-sm text-slate-500">Minimalist white or matte black.</p>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
}
