import React from "react";
import { Badge } from "./Badge";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export const StartupHeritageSection = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge color="blue">European Innovation & Startup Heritage</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
            Engineering Proven on the European Stage
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Before engineering hospitality systems in Corfu, our founder built and pitched deep-tech cleantech solutions recognized across the EU.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {/* Left Column: Story & Official Press Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                EIT Digital Venture Program
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                BlueInvest & Bluegrowth
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Computer Vision & AI
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                From Aquaculture Cleantech to High-Performance Hospitality
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                As founder of <strong>Eliminatore Ltd</strong>, Evangelos Lampos developed computer-vision monitoring and eco-friendly membrane systems to protect marine life and aquaculture nets in Corfu and the Mediterranean.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0 mt-0.5" />
                <span>
                  <strong>Official EU Backing:</strong> Backed and supported by the European Institute of Innovation & Technology (EIT Digital).
                </span>
              </div>
              <div className="flex items-start text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0 mt-0.5" />
                <span>
                  <strong>Applied AI Research:</strong> MSc in Digital Innovation & Computer Vision with YOLO/OpenCV object detection.
                </span>
              </div>
              <div className="flex items-start text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0 mt-0.5" />
                <span>
                  <strong>Enterprise Software Rigor:</strong> We bring the same mission-critical reliability to Corfu hotel booking engines and web applications.
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="https://www.eit.europa.eu/news-events/news/eit-digital-supports-next-generation-start-ups-east-balkan-region"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
              >
                Read Official EIT Digital Press Release <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded YouTube Pitch Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/Yh15QpzhmwY"
                  title="Eliminatore Startup Pitch Presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-slate-950/80">
                <div className="text-xs font-bold text-slate-200">Eliminatore Ltd — Startup Pitch Presentation</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Showcased at European innovation & accelerator forums</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
