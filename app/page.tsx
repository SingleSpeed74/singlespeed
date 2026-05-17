"use client";

import { useState } from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
            <span className="text-xs font-bold tracking-tight">SS</span>
          </div>
          <span className="text-sm font-medium tracking-wide">SINGLESPEED</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#product" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Produit
          </a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Caractéristiques
          </a>
          <a href="#order" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Commander
          </a>
        </nav>

        <a
          href="#order"
          className="rounded-full border border-border bg-foreground px-5 py-2 text-sm font-medium text-background transition-all hover:bg-foreground/90"
        >
          Commander
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Abstract background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-neutral-800/40 via-neutral-900/20 to-transparent blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Precision Engineering
        </p>

        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
          Button Temperature Gauge Kit
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Gauge température pour Nissan S13 style OEM. Montage en lieu et place avec kit complet incluant gauge, câbles et écran de lecture.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#order"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-all hover:bg-foreground/90"
          >
            Commander maintenant
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <span className="text-3xl font-bold">110€</span>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Livraison mondiale
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Qualité OEM
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Kit complet
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-foreground" />
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Installation OEM",
      description: "Se monte en lieu et place du bouton d'origine, sans modification nécessaire.",
    },
    {
      number: "02",
      title: "Kit Complet",
      description: "Gauge de température, câbles de branchement et écran de lecture inclus.",
    },
    {
      number: "03",
      title: "Design Précis",
      description: "Conçu spécifiquement pour les passionnés d'automobiles et projets custom.",
    },
  ];

  return (
    <section id="features" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Nos avantages
            </p>
            <h2 className="max-w-xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Allier innovation, durabilité et efficacité
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-muted-foreground/50"
            >
              <span className="mb-6 block text-5xl font-light text-muted-foreground/50">
                {feature.number}
              </span>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderSection() {
  const [config, setConfig] = useState({
    unit: "celsius",
    design: "180sx",
    fluid: "water",
    notes: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    postal: "",
    city: "",
    country: "",
  });

  return (
    <section id="order" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="lg:sticky lg:top-32">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Commandez
            </p>
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Configurez votre gauge
            </h2>
            <p className="mb-8 max-w-md text-lg text-muted-foreground">
              Personnalisez votre kit selon vos besoins et recevez-le directement chez vous.
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold">110€</span>
              <span className="text-muted-foreground">TTC</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-border px-4 py-2 text-sm">
                Livraison mondiale
              </span>
              <span className="rounded-full border border-border px-4 py-2 text-sm">
                Garantie 1 an
              </span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <form className="space-y-8">
              {/* Configuration */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Configuration</h3>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Unité de température
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setConfig({ ...config, unit: "celsius" })}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        config.unit === "celsius"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      Celsius (°C)
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfig({ ...config, unit: "fahrenheit" })}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        config.unit === "fahrenheit"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      Fahrenheit (°F)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Design ouverture
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setConfig({ ...config, design: "180sx" })}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        config.design === "180sx"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      180SX
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfig({ ...config, design: "ps13" })}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        config.design === "ps13"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      PS13
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Type de fluide
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setConfig({ ...config, fluid: "water" })}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        config.fluid === "water"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      Eau
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfig({ ...config, fluid: "oil" })}
                      className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                        config.fluid === "oil"
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      Huile
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Notes de commande (optionnel)
                  </label>
                  <textarea
                    value={config.notes}
                    onChange={(e) => setConfig({ ...config, notes: e.target.value })}
                    className="min-h-[100px] w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                    placeholder="Ajoutez vos demandes spécifiques..."
                  />
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-6 border-t border-border pt-8">
                <h3 className="text-lg font-semibold">Informations de livraison</h3>

                <div className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    value={config.name}
                    onChange={(e) => setConfig({ ...config, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="email"
                      placeholder="Email"
                      value={config.email}
                      onChange={(e) => setConfig({ ...config, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone (optionnel)"
                      value={config.phone}
                      onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Adresse"
                    value={config.address}
                    onChange={(e) => setConfig({ ...config, address: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                  />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <input
                      type="text"
                      placeholder="Code postal"
                      value={config.postal}
                      onChange={(e) => setConfig({ ...config, postal: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                    />
                    <input
                      type="text"
                      placeholder="Ville"
                      value={config.city}
                      onChange={(e) => setConfig({ ...config, city: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                    />
                    <input
                      type="text"
                      placeholder="Pays"
                      value={config.country}
                      onChange={(e) => setConfig({ ...config, country: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-4 text-base font-semibold text-background transition-all hover:bg-foreground/90"
              >
                Demander votre kit
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
              <span className="text-xs font-bold tracking-tight">SS</span>
            </div>
            <span className="text-sm font-medium tracking-wide">SINGLESPEED</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 SingleSpeed. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function SingleSpeedStore() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}
