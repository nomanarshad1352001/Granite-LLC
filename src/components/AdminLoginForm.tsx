"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Eye,
  EyeOff,
  LayoutDashboard,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DEMO_ADMIN } from "@/lib/admin-data";
import { IMAGES } from "@/lib/images";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_ADMIN.email);
  const [password, setPassword] = useState(DEMO_ADMIN.password);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<"email" | "password" | null>(null);

  const copyValue = async (type: "email" | "password", value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1400);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Unable to sign in.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("The demo session could not be started. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d1513]">
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-emerald-700/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[620px] w-[620px] rounded-full bg-gold-500/15 blur-[150px]" />

      <div className="relative grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <section className="hidden flex-col justify-between border-r border-white/10 p-10 lg:flex xl:p-14">
          <Link href="/" className="inline-flex w-fit items-center gap-3 text-white">
            <img src={IMAGES.logo} alt="House of Granite" className="h-12 w-12 rounded-xl shadow-2xl" />
            <div>
              <div className="font-semibold tracking-tight">House of Granite</div>
              <div className="text-xs text-white/45">Studio · Business OS</div>
            </div>
          </Link>

          <div className="max-w-xl py-16">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-gold-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <Sparkles size={14} /> Premium operations workspace
            </div>
            <h1 className="text-5xl font-semibold leading-[1.06] tracking-[-0.045em] text-white xl:text-6xl">
              Every lead, layout, and installation—in one calm workspace.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/55">
              A purpose-built sales and project command center for countertop fabricators, remodelers, and design-build teams.
            </p>

            <div className="mt-11 grid max-w-lg grid-cols-3 gap-3">
              {[
                ["$284k", "Open pipeline"],
                ["28", "Active jobs"],
                ["68%", "Win rate"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                  <div className="text-xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-[11px] text-white/40">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-white/35">
            <span>House of Granite Studio</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={13} /> Secure demo workspace</span>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[#f4f1e9] px-5 py-10 sm:px-10">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-[#16221f]">
                <img src={IMAGES.logo} alt="House of Granite" className="h-10 w-10 rounded-xl" />
                House of Granite
              </Link>
              <Link href="/" className="rounded-full border border-[#d8d2c5] p-2.5 text-[#56635f] hover:bg-white" aria-label="Back to website">
                <ArrowLeft size={16} />
              </Link>
            </div>

            <div className="rounded-[28px] border border-white bg-white/80 p-7 shadow-[0_24px_80px_-32px_rgba(20,34,30,.35)] backdrop-blur-xl sm:p-9">
              <div className="mb-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163f36] text-[#e8cb78] shadow-lg shadow-emerald-950/15">
                  <LayoutDashboard size={22} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b07e27]">Admin portal</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-[#14201d]">Welcome back</h2>
                <p className="mt-2 text-sm leading-6 text-[#6e7874]">Sign in to review leads, designs, projects, and website content.</p>
              </div>

              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label htmlFor="admin-email" className="mb-2 block text-xs font-semibold text-[#394642]">Email address</label>
                  <div className="relative">
                    <input
                      id="admin-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="h-12 w-full rounded-xl border border-[#d9dedb] bg-white px-4 pr-11 text-sm text-[#17231f] outline-none transition placeholder:text-[#a6afab] focus:border-[#3f806f] focus:ring-4 focus:ring-[#3f806f]/10"
                      autoComplete="email"
                      required
                    />
                    <button type="button" onClick={() => copyValue("email", email)} className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg text-[#8a9490] hover:bg-[#f2f4f3] hover:text-[#183f36]" aria-label="Copy email">
                      {copied === "email" ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="admin-password" className="text-xs font-semibold text-[#394642]">Password</label>
                    <span className="text-[11px] text-[#88928e]">Demo access</span>
                  </div>
                  <div className="relative">
                    <input
                      id="admin-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="h-12 w-full rounded-xl border border-[#d9dedb] bg-white px-4 pr-20 text-sm text-[#17231f] outline-none transition focus:border-[#3f806f] focus:ring-4 focus:ring-[#3f806f]/10"
                      autoComplete="current-password"
                      required
                    />
                    <div className="absolute right-2 top-2 flex">
                      <button type="button" onClick={() => copyValue("password", password)} className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8a9490] hover:bg-[#f2f4f3] hover:text-[#183f36]" aria-label="Copy password">
                        {copied === "password" ? <Check size={15} /> : <Copy size={15} />}
                      </button>
                      <button type="button" onClick={() => setShowPassword((value) => !value)} className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8a9490] hover:bg-[#f2f4f3] hover:text-[#183f36]" aria-label="Toggle password visibility">
                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#153f35] text-sm font-semibold text-white shadow-lg shadow-emerald-950/15 transition hover:bg-[#1d5548] disabled:cursor-not-allowed disabled:opacity-65"
                >
                  {loading ? (
                    <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Starting workspace…</>
                  ) : (
                    <>Open dashboard <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></>
                  )}
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-[#eadfbf] bg-[#fffaf0] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f4e6bd] text-[#92671f]"><LockKeyhole size={15} /></div>
                  <div>
                    <p className="text-xs font-semibold text-[#51452f]">Demo credentials are prefilled</p>
                    <p className="mt-1 text-[11px] leading-5 text-[#81765f]">This presentation uses mock data and does not require PostgreSQL or an external authentication provider.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/platform" className="text-xs font-medium text-[#5c6a66] hover:text-[#153f35]">View platform features &amp; technology →</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
