
import { useState } from "react";
import { X } from "lucide-react";
import CertificationCard from "../components/CertificationCard";
import { portfolio } from "../data/portfolio";

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const certifications = portfolio.certifications;

  const providers = [
    "All",
    ...new Set(certifications.map((cert) => cert.provider)),
  ];

  const filteredCertifications =
    activeFilter === "All"
      ? certifications
      : certifications.filter(
          (cert) => cert.provider === activeFilter
        );

  return (
    <div className="page-reveal space-y-12">
      {/* Page Header */}
      <section className="pt-8">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          03 / Certifications
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Certifications
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-sm leading-8 text-accent">
          Professional certifications, digital badges,
          and completed learning programs.
        </p>

        <div className="mt-10 h-px bg-white/10" />
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {providers.map((provider) => (
          <button
            key={provider}
            type="button"
            onClick={() => setActiveFilter(provider)}
            aria-pressed={activeFilter === provider}
            className={`rounded-md border px-5 py-2.5 font-mono text-xs transition-colors ${
              activeFilter === provider
                ? "border-primary bg-primary text-background"
                : "border-white/15 text-accent hover:border-accent hover:text-primary"
            }`}
          >
            {provider}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCertifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            onPreview={setSelectedCertificate}
          />
        ))}
      </section>

      {/* Certificate Preview Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/15 bg-surface"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
              <h2 className="truncate text-sm font-medium text-primary">
                {selectedCertificate.title}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="rounded-md p-2 text-accent hover:bg-white/10 hover:text-primary"
              >
                <X size={20} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto p-4">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
