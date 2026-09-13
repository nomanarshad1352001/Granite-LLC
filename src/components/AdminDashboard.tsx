"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Eye,
  FileText,
  FolderKanban,
  GalleryHorizontalEnd,
  Globe2,
  ImageIcon,
  LayoutDashboard,
  ListFilter,
  LogOut,
  Menu,
  MessageSquareText,
  MoreHorizontal,
  Palette,
  Pencil,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Upload,
  UserPlus,
  Users,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";
import {
  contentItems,
  dashboardStats,
  DEMO_ADMIN,
  galleryItems,
  kitchenPlans,
  leads,
  projects,
  recentActivity,
  revenueData,
  tasks as initialTasks,
  teamMembers,
  type LeadStatus,
  type ProjectStatus,
} from "@/lib/admin-data";
import { IMAGES } from "@/lib/images";

type View = "Overview" | "Leads" | "Estimates" | "Projects" | "Calendar" | "Kitchen plans" | "Content" | "Gallery" | "Team" | "Automations" | "Settings";
type Lead = (typeof leads)[number];

const navSections: { label: string; items: { label: View; icon: typeof LayoutDashboard; badge?: string }[] }[] = [
  {
    label: "Workspace",
    items: [
      { label: "Overview", icon: LayoutDashboard },
      { label: "Leads", icon: Users, badge: "9" },
      { label: "Estimates", icon: ClipboardCheck, badge: "14" },
      { label: "Projects", icon: FolderKanban, badge: "28" },
      { label: "Calendar", icon: CalendarDays },
      { label: "Kitchen plans", icon: UtensilsCrossed, badge: "4" },
    ],
  },
  {
    label: "Website",
    items: [
      { label: "Content", icon: FileText },
      { label: "Gallery", icon: GalleryHorizontalEnd },
    ],
  },
  {
    label: "Manage",
    items: [
      { label: "Team", icon: UserPlus },
      { label: "Automations", icon: Zap },
      { label: "Settings", icon: Settings },
    ],
  },
];

const statusStyle: Record<LeadStatus, string> = {
  New: "bg-blue-50 text-blue-700 ring-blue-600/15",
  Contacted: "bg-violet-50 text-violet-700 ring-violet-600/15",
  Qualified: "bg-amber-50 text-amber-700 ring-amber-600/15",
  "Site Visit": "bg-cyan-50 text-cyan-700 ring-cyan-600/15",
  Quoted: "bg-orange-50 text-orange-700 ring-orange-600/15",
  Won: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
};

const projectStyle: Record<ProjectStatus, string> = {
  Planning: "bg-violet-50 text-violet-700",
  Templating: "bg-blue-50 text-blue-700",
  Fabrication: "bg-amber-50 text-amber-700",
  Installation: "bg-orange-50 text-orange-700",
  Complete: "bg-emerald-50 text-emerald-700",
};

const imageForProject = (kind: string, index = 0) => {
  if (kind === "bathroom") return IMAGES.bathrooms[index % IMAGES.bathrooms.length];
  if (kind === "countertop") return IMAGES.countertops[index % IMAGES.countertops.length];
  return IMAGES.kitchens[index % IMAGES.kitchens.length];
};

export function AdminDashboard() {
  const router = useRouter();
  const [activeView, setActiveView] = useState<View>("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [taskList, setTaskList] = useState(initialTasks);
  const [toast, setToast] = useState("");
  const [loadingLogout, setLoadingLogout] = useState(false);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  const goTo = (view: View) => {
    setActiveView(view);
    setMobileOpen(false);
    setSearch("");
  };

  const logout = async () => {
    setLoadingLogout(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return leads;
    return leads.filter((lead) =>
      [lead.name, lead.company, lead.project, lead.status, lead.source, lead.email].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return projects;
    return projects.filter((project) =>
      [project.name, project.client, project.type, project.status, project.manager].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <div className="admin-theme min-h-screen bg-[#090b0a] text-[#d7d2c9]">
      {toast && (
        <div className="fixed right-5 top-5 z-[80] flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-medium text-[#d7d2c9] shadow-2xl animate-slide-down">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100"><Check size={14} /></span>
          {toast}
        </div>
      )}

      {mobileOpen && <button className="fixed inset-0 z-40 bg-[#0d100e]/50 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close menu" />}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col border-r border-white/10 bg-[#0d100e] text-white transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
          <Link href="/" className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="House of Granite" className="h-10 w-10 rounded-xl shadow-lg" />
            <div>
              <p className="text-sm font-semibold tracking-tight">House of Granite</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#d8bd80]">Studio</p>
            </div>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-white/50 hover:bg-white/10 hover:text-white lg:hidden" aria-label="Close navigation"><X size={18} /></button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {navSections.map((section) => (
            <div key={section.label} className="mb-6">
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">{section.label}</p>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => goTo(item.label)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${activeView === item.label ? "bg-[#c9ad70] font-semibold text-[#11120f] shadow-[0_12px_30px_-18px_rgba(201,173,112,.5)]" : "text-white/55 hover:bg-white/[0.06] hover:text-white"}`}
                  >
                    <item.icon size={17} strokeWidth={activeView === item.label ? 2.3 : 1.8} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${activeView === item.label ? "bg-[#0d100e] text-white" : "bg-white/10 text-white/65"}`}>{item.badge}</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="px-3 pb-3">
          <div className="mb-3 rounded-2xl border border-[#303831]/20 bg-gradient-to-br from-[#315547] to-[#0d100e] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#111512]/15 text-[#d8bd80]"><Sparkles size={17} /></div>
            <p className="text-xs font-semibold">Visual planner live</p>
            <p className="mt-1 text-[11px] leading-4 text-white/45">4 new customer kitchen plans are ready to review.</p>
            <button onClick={() => goTo("Kitchen plans")} className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#d8bd80] hover:text-[#d8bd80]">Review plans <ArrowRight size={12} /></button>
          </div>
          <button onClick={logout} disabled={loadingLogout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/50 transition hover:bg-red-400/10 hover:text-red-200">
            <LogOut size={17} /> {loadingLogout ? "Signing out…" : "Sign out"}
          </button>
        </div>
      </aside>

      <div className="lg:pl-[272px]">
        <header className="sticky top-0 z-30 flex h-[76px] items-center gap-3 border-b border-[#3a463f] bg-[#111512]/90 px-4 backdrop-blur-xl sm:px-6 xl:px-8">
          <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-[#3a463f] bg-white p-2.5 text-[#aaa49b] shadow-sm lg:hidden" aria-label="Open navigation"><Menu size={18} /></button>

          <div className="relative hidden max-w-md flex-1 md:block">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8e8a83]" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={`Search ${activeView.toLowerCase()}…`} className="h-10 w-full rounded-xl border border-[#303831] bg-[#0d100e]/90 pl-10 pr-4 text-sm text-[#f4f0e8] outline-none transition placeholder:text-[#66645f] focus:border-[#65583d] focus:ring-4 focus:ring-[#c9ad70]/5" />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Link href="/" target="_blank" className="hidden items-center gap-2 rounded-xl border border-[#3a463f] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#d7d2c9] shadow-sm transition hover:border-[#4e655c] hover:text-[#f4f0e8] sm:flex"><Globe2 size={15} /> View website <ArrowUpRight size={13} /></Link>

            <div className="relative">
              <button onClick={() => { setNotificationsOpen((value) => !value); setProfileOpen(false); }} className="relative rounded-xl border border-[#3a463f] bg-white p-2.5 text-[#aaa49b] shadow-sm transition hover:text-[#f4f0e8]" aria-label="Notifications">
                <Bell size={17} />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#111512] bg-[#c9ad70]" />
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 top-12 w-[340px] overflow-hidden rounded-2xl border border-[#3a463f] bg-white shadow-2xl animate-slide-down">
                  <div className="flex items-center justify-between border-b border-[#303831] px-4 py-3.5">
                    <div><p className="text-sm font-semibold">Notifications</p><p className="text-[11px] text-[#8e8a83]">3 items need attention</p></div>
                    <button onClick={() => { setNotificationsOpen(false); showToast("Notifications marked as read"); }} className="text-[11px] font-semibold text-[#d7d2c9]">Mark all read</button>
                  </div>
                  <div className="divide-y divide-[#303831]">
                    {[
                      ["New kitchen plan", "Emma Rodriguez submitted an L-shaped kitchen.", "12m"],
                      ["Installation tomorrow", "Axis Reception is scheduled for 8:00 AM.", "1h"],
                      ["Estimate viewed", "Ava Thompson opened estimate EST-1842.", "2h"],
                    ].map(([title, description, time]) => (
                      <button key={title} onClick={() => { setNotificationsOpen(false); showToast(`${title} opened`); }} className="flex w-full gap-3 px-4 py-3.5 text-left hover:bg-[#111512]">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#111512]" />
                        <span className="flex-1"><span className="block text-xs font-semibold text-[#f4f0e8]">{title}</span><span className="mt-0.5 block text-[11px] leading-4 text-[#8e8a83]">{description}</span></span>
                        <span className="text-[10px] text-[#77746e]">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => { setProfileOpen((value) => !value); setNotificationsOpen(false); }} className="flex items-center gap-2 rounded-xl p-1.5 pr-2 text-left hover:bg-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d100e] text-[11px] font-bold text-[#d8bd80]">OS</span>
                <span className="hidden lg:block"><span className="block text-xs font-semibold">Olivia Stone</span><span className="block text-[10px] text-[#8e8a83]">Administrator</span></span>
                <ChevronDown size={13} className="text-[#8e8a83]" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 w-56 rounded-2xl border border-[#3a463f] bg-white p-2 shadow-2xl animate-slide-down">
                  <button onClick={() => { goTo("Settings"); setProfileOpen(false); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs text-[#d7d2c9] hover:bg-[#111512]"><Settings size={14} /> Account settings</button>
                  <Link href="/platform" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-[#d7d2c9] hover:bg-[#111512]"><Sparkles size={14} /> Platform details</Link>
                  <button onClick={logout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs text-red-600 hover:bg-red-50"><LogOut size={14} /> Sign out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="group overflow-hidden border-b border-[#303831] bg-[#0d100e] text-[#d8bd80]">
          <div className="ticker-track flex w-max items-center py-2">
            {[...[
              "New lead · Emma Rodriguez · $38.5k opportunity",
              "Fabrication · Thompson quartz passed CNC review",
              "Tomorrow · Axis Reception installation at 8:00 AM",
              "Proposal viewed · EST-1842 · 24 minutes ago",
              "Kitchen planner · 4 new layouts ready to review",
              "Revenue · 21.4% above the prior-year period",
            ], ...[
              "New lead · Emma Rodriguez · $38.5k opportunity",
              "Fabrication · Thompson quartz passed CNC review",
              "Tomorrow · Axis Reception installation at 8:00 AM",
              "Proposal viewed · EST-1842 · 24 minutes ago",
              "Kitchen planner · 4 new layouts ready to review",
              "Revenue · 21.4% above the prior-year period",
            ]].map((item, index) => <span key={`${item}-${index}`} className="mx-7 flex items-center gap-2 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.14em]"><i className="h-1.5 w-1.5 rounded-full bg-[#c9ad70]" />{item}</span>)}
          </div>
        </div>

        <main className="admin-shell p-4 sm:p-6 xl:p-8">
          <div className="mx-auto max-w-[1500px]">
            {activeView === "Overview" && <OverviewView goTo={goTo} setSelectedLead={setSelectedLead} taskList={taskList} setTaskList={setTaskList} showToast={showToast} />}
            {activeView === "Leads" && <LeadsView rows={filteredLeads} setSelectedLead={setSelectedLead} showToast={showToast} />}
            {activeView === "Estimates" && <EstimatesView showToast={showToast} />}
            {activeView === "Projects" && <ProjectsView rows={filteredProjects} showToast={showToast} />}
            {activeView === "Calendar" && <CalendarView showToast={showToast} />}
            {activeView === "Kitchen plans" && <PlansView showToast={showToast} />}
            {activeView === "Content" && <ContentView showToast={showToast} />}
            {activeView === "Gallery" && <GalleryView showToast={showToast} />}
            {activeView === "Team" && <TeamView showToast={showToast} />}
            {activeView === "Automations" && <AutomationsView showToast={showToast} />}
            {activeView === "Settings" && <SettingsView showToast={showToast} />}
          </div>
        </main>
      </div>

      {selectedLead && <LeadDialog lead={selectedLead} onClose={() => setSelectedLead(null)} showToast={showToast} />}
    </div>
  );
}

function PageHeading({ eyebrow, title, description, action, onAction }: { eyebrow: string; title: string; description: string; action: string; onAction: () => void }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bd80]">{eyebrow}</p>
        <h1 className="mt-1.5 text-2xl font-semibold tracking-[-0.035em] text-[#f4f0e8] sm:text-3xl">{title}</h1>
        <p className="mt-1.5 text-sm text-[#8e8a83]">{description}</p>
      </div>
      <button onClick={onAction} className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#c9ad70] px-4 text-xs font-semibold text-[#11120f] shadow-[0_14px_32px_-18px_rgba(201,173,112,.45)] transition hover:bg-[#dfc98d]"><Plus size={15} /> {action}</button>
    </div>
  );
}

function OverviewView({ goTo, setSelectedLead, taskList, setTaskList, showToast }: { goTo: (view: View) => void; setSelectedLead: (lead: Lead) => void; taskList: typeof initialTasks; setTaskList: React.Dispatch<React.SetStateAction<typeof initialTasks>>; showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="Monday, March 23" title="Good morning, Olivia" description="Here’s what needs your attention across the business today." action="New lead" onAction={() => showToast("New lead form opened in demo mode")} />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <button key={stat.label} onClick={() => goTo(index === 2 ? "Projects" : "Leads")} className="group rounded-2xl border border-[#3a463f] bg-white p-5 text-left shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)] transition hover:-translate-y-0.5 hover:border-[#4e655c] hover:shadow-lg">
            <div className="flex items-start justify-between">
              <span className="text-xs font-medium text-[#8e8a83]">{stat.label}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#111512] text-[#d7d2c9]">{index === 0 ? <CircleDollarSign size={16} /> : index === 1 ? <Users size={16} /> : index === 2 ? <FolderKanban size={16} /> : <Target size={16} />}</span>
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#f4f0e8]">{stat.value}</div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px]"><span className="flex items-center gap-1 font-semibold text-emerald-600"><TrendingUp size={12} /> {stat.change}</span><span className="text-[#77746e]">{stat.detail}</span></div>
          </button>
        ))}
      </div>

      <div className="mb-6 grid gap-6 xl:grid-cols-[1.55fr_.85fr]">
        <section className="rounded-2xl border border-[#3a463f] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)] sm:p-6">
          <div className="mb-7 flex items-start justify-between">
            <div><p className="text-sm font-semibold">Revenue performance</p><p className="mt-1 text-xs text-[#8e8a83]">Closed revenue vs. monthly target</p></div>
            <button onClick={() => showToast("Revenue period set to this year")} className="flex items-center gap-1.5 rounded-lg border border-[#3a463f] px-2.5 py-1.5 text-[11px] font-medium text-[#aaa49b]">This year <ChevronDown size={12} /></button>
          </div>
          <div className="mb-4 flex items-end gap-4"><span className="text-3xl font-semibold tracking-[-0.04em]">$1.15M</span><span className="mb-1 flex items-center gap-1 text-xs font-semibold text-emerald-600"><ArrowUpRight size={13} /> 21.4%</span></div>
          <div className="flex h-52 items-end gap-2 sm:gap-3">
            {revenueData.map((item) => (
              <div key={item.month} className="group flex h-full flex-1 flex-col justify-end">
                <div className="relative flex flex-1 items-end justify-center gap-0.5">
                  <div className="w-[42%] rounded-t-md bg-[#1b211c] transition group-hover:bg-[#1c392f]" style={{ height: `${item.target * 0.68}%` }} />
                  <div className="w-[42%] rounded-t-md bg-gradient-to-t from-[#0d100e] to-[#203a30] transition group-hover:from-[#0d100e]" style={{ height: `${item.revenue * 0.68}%` }} />
                  <div className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-lg bg-[#0d100e] px-2.5 py-1.5 text-[10px] text-white shadow-xl group-hover:block">${item.revenue}k · target ${item.target}k</div>
                </div>
                <span className="mt-2 text-center text-[9px] text-[#77746e] sm:text-[10px]">{item.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-5 border-t border-[#303831] pt-4 text-[10px] text-[#8e8a83]"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#293f36]" /> Revenue</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#1b211c]" /> Target</span></div>
        </section>

        <section className="rounded-2xl border border-[#3a463f] bg-[#0d100e] p-5 text-white shadow-xl shadow-emerald-950/10 sm:p-6">
          <div className="flex items-start justify-between"><div><p className="text-sm font-semibold">Sales pipeline</p><p className="mt-1 text-xs text-white/45">$284,750 open value</p></div><BarChart3 size={18} className="text-[#d8bd80]" /></div>
          <div className="mt-7 space-y-5">
            {[
              ["New", 47, 92, "$84.2k"],
              ["Qualified", 29, 72, "$68.5k"],
              ["Site visit", 18, 53, "$54.8k"],
              ["Quoted", 14, 40, "$77.2k"],
            ].map(([label, count, width, value]) => (
              <button key={String(label)} onClick={() => goTo("Leads")} className="block w-full text-left">
                <div className="mb-2 flex items-center justify-between text-xs"><span className="text-white/65">{label} <b className="ml-1 text-white">{count}</b></span><span className="font-semibold text-[#d8bd80]">{value}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#c9ad70] to-[#c9ad70]" style={{ width: `${width}%` }} /></div>
              </button>
            ))}
          </div>
          <button onClick={() => goTo("Leads")} className="mt-7 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-semibold transition hover:bg-white/10"><span>Open pipeline board</span><ArrowRight size={14} /></button>
        </section>
      </div>

      <div className="mb-6 grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
        <section className="overflow-hidden rounded-2xl border border-[#3a463f] bg-white shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="flex items-center justify-between border-b border-[#303831] px-5 py-4"><div><p className="text-sm font-semibold">Newest leads</p><p className="mt-0.5 text-[11px] text-[#8e8a83]">Recently captured opportunities</p></div><button onClick={() => goTo("Leads")} className="flex items-center gap-1 text-[11px] font-semibold text-[#d7d2c9]">View all <ArrowRight size={12} /></button></div>
          <div className="divide-y divide-[#303831]">
            {leads.slice(0, 5).map((lead) => (
              <button key={lead.id} onClick={() => setSelectedLead(lead)} className="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 text-left transition hover:bg-[#111512] sm:grid-cols-[1.1fr_1fr_auto_auto]">
                <div className="flex min-w-0 items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#111512] text-[10px] font-bold text-[#d7d2c9]">{lead.avatar}</span><span className="min-w-0"><span className="block truncate text-xs font-semibold">{lead.name}</span><span className="block truncate text-[10px] text-[#8e8a83]">{lead.company}</span></span></div>
                <div className="hidden min-w-0 sm:block"><span className="block truncate text-xs text-[#d7d2c9]">{lead.project}</span><span className="block text-[10px] text-[#77746e]">{lead.source}</span></div>
                <span className={`hidden rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset sm:inline-flex ${statusStyle[lead.status]}`}>{lead.status}</span>
                <span className="text-right"><span className="block text-xs font-semibold">${lead.value.toLocaleString()}</span><span className="block text-[10px] text-[#77746e]">{lead.date}</span></span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#3a463f] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Today’s tasks</p><p className="mt-0.5 text-[11px] text-[#8e8a83]">{taskList.filter((task) => !task.done).length} remaining</p></div><button onClick={() => showToast("Task creator opened in demo mode")} className="rounded-lg border border-[#3a463f] p-2 text-[#aaa49b] hover:bg-[#111512]"><Plus size={14} /></button></div>
          <div className="space-y-2">
            {taskList.map((task) => (
              <button key={task.id} onClick={() => setTaskList((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} className="flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition hover:bg-[#111512]">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${task.done ? "border-[#303831] bg-[#111512] text-white" : "border-[#3a463f] bg-white"}`}>{task.done && <Check size={12} />}</span>
                <span className="min-w-0 flex-1"><span className={`block text-xs font-medium ${task.done ? "text-[#77746e] line-through" : "text-[#f4f0e8]"}`}>{task.title}</span><span className="mt-1 block text-[10px] text-[#77746e]">{task.due} · {task.owner}</span></span>
                <span className={`mt-0.5 h-1.5 w-1.5 rounded-full ${task.priority === "High" ? "bg-red-400" : task.priority === "Medium" ? "bg-amber-400" : "bg-emerald-400"}`} />
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[#3a463f] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Active installations</p><p className="mt-0.5 text-[11px] text-[#8e8a83]">Project delivery snapshot</p></div><button onClick={() => goTo("Projects")} className="text-[11px] font-semibold text-[#d7d2c9]">All projects</button></div>
          <div className="space-y-3">
            {projects.slice(0, 4).map((project, index) => (
              <button key={project.id} onClick={() => { goTo("Projects"); showToast(`${project.name} opened`); }} className="flex w-full items-center gap-3 rounded-xl border border-[#303831] p-3 text-left transition hover:border-[#3a463f] hover:bg-[#111512]">
                <img src={imageForProject(project.image, index)} alt="" className="h-12 w-12 rounded-xl object-cover" />
                <span className="min-w-0 flex-1"><span className="block truncate text-xs font-semibold">{project.name}</span><span className="mt-1 block text-[10px] text-[#8e8a83]">{project.next}</span><span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-[#111512]"><i className="block h-full rounded-full bg-[#293f36]" style={{ width: `${project.progress}%` }} /></span></span>
                <span className="text-right"><span className="block text-xs font-semibold">{project.progress}%</span><span className="text-[10px] text-[#77746e]">{project.due}</span></span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#3a463f] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Recent activity</p><p className="mt-0.5 text-[11px] text-[#8e8a83]">Live workspace updates</p></div><Activity size={16} className="text-[#8e8a83]" /></div>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#111512] text-[9px] font-bold text-[#d7d2c9]">{item.initials}</span><div className="min-w-0 flex-1"><p className="text-xs leading-5 text-[#aaa49b]"><b className="font-semibold text-[#f4f0e8]">{item.person}</b> {item.action}</p><p className="text-[10px] text-[#77746e]">{item.time}</p></div></div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function LeadsView({ rows, setSelectedLead, showToast }: { rows: Lead[]; setSelectedLead: (lead: Lead) => void; showToast: (message: string) => void }) {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? rows : rows.filter((lead) => lead.status === filter);
  return (
    <>
      <PageHeading eyebrow="Sales workspace" title="Leads & opportunities" description="Qualify every inquiry and move it toward a signed project." action="Add lead" onAction={() => showToast("New lead form opened in demo mode")} />
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {["All", "New", "Contacted", "Qualified", "Site Visit", "Quoted", "Won"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${filter === item ? "bg-[#0d100e] text-white" : "border border-[#3a463f] bg-white text-[#aaa49b] hover:border-[#567168]"}`}>{item}</button>)}
        <button onClick={() => showToast("Advanced filters opened")} className="ml-auto flex items-center gap-2 rounded-xl border border-[#3a463f] bg-white px-3.5 py-2 text-xs font-semibold text-[#aaa49b]"><ListFilter size={14} /> More filters</button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#3a463f] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left">
            <thead className="bg-[#111512] text-[10px] uppercase tracking-[0.12em] text-[#8e8a83]"><tr><th className="px-5 py-3.5 font-semibold">Lead</th><th className="px-4 py-3.5 font-semibold">Project</th><th className="px-4 py-3.5 font-semibold">Source</th><th className="px-4 py-3.5 font-semibold">Status</th><th className="px-4 py-3.5 font-semibold">Value</th><th className="px-4 py-3.5 font-semibold">Received</th><th className="px-4 py-3.5" /></tr></thead>
            <tbody className="divide-y divide-[#303831]">
              {filtered.map((lead) => (
                <tr key={lead.id} onClick={() => setSelectedLead(lead)} className="cursor-pointer transition hover:bg-[#111512]">
                  <td className="px-5 py-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111512] text-[10px] font-bold text-[#d7d2c9]">{lead.avatar}</span><div><p className="text-xs font-semibold">{lead.name}</p><p className="mt-0.5 text-[10px] text-[#8e8a83]">{lead.company} · {lead.email}</p></div></div></td>
                  <td className="px-4 py-4"><p className="text-xs text-[#d7d2c9]">{lead.project}</p><p className="mt-0.5 text-[10px] text-[#77746e]">{lead.id}</p></td>
                  <td className="px-4 py-4 text-xs text-[#aaa49b]">{lead.source}</td>
                  <td className="px-4 py-4"><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[lead.status]}`}>{lead.status}</span></td>
                  <td className="px-4 py-4 text-xs font-semibold">${lead.value.toLocaleString()}</td>
                  <td className="px-4 py-4 text-xs text-[#8e8a83]">{lead.date}</td>
                  <td className="px-4 py-4"><button onClick={(event) => { event.stopPropagation(); showToast(`Actions opened for ${lead.name}`); }} className="rounded-lg p-2 text-[#77746e] hover:bg-[#111512] hover:text-[#d7d2c9]"><MoreHorizontal size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function ProjectsView({ rows, showToast }: { rows: typeof projects; showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="Operations" title="Project delivery" description="Coordinate every job from design approval through final installation." action="Create project" onAction={() => showToast("Project creator opened in demo mode")} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((project, index) => (
          <button key={project.id} onClick={() => showToast(`${project.name} workspace opened`)} className="group overflow-hidden rounded-2xl border border-[#3a463f] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-36 overflow-hidden"><img src={imageForProject(project.image, index)} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0d100e]/70 to-transparent" /><span className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold ${projectStyle[project.status]}`}>{project.status}</span><span className="absolute bottom-3 left-4 text-[10px] font-semibold text-white/70">{project.id}</span><span className="absolute bottom-3 right-4 text-sm font-semibold text-white">${project.value.toLocaleString()}</span></div>
            <div className="p-5"><h3 className="text-sm font-semibold">{project.name}</h3><p className="mt-1 text-xs text-[#8e8a83]">{project.client} · {project.type}</p><div className="mt-5 flex items-center justify-between text-[10px] text-[#8e8a83]"><span>Progress</span><span className="font-semibold text-[#f4f0e8]">{project.progress}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#111512]"><div className="h-full rounded-full bg-gradient-to-r from-[#315547] to-[#203a30]" style={{ width: `${project.progress}%` }} /></div><div className="mt-5 flex items-center justify-between border-t border-[#303831] pt-4"><span className="text-[10px] text-[#8e8a83]"><b className="text-[#d7d2c9]">{project.manager}</b> · Due {project.due}</span><ChevronRight size={15} className="text-[#77746e] transition group-hover:translate-x-1" /></div></div>
          </button>
        ))}
      </div>
    </>
  );
}

function PlansView({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="Customer experience" title="Kitchen planner submissions" description="Review customer-created layouts, dimensions, appliances, and project notes." action="Open planner" onAction={() => window.open("/kitchen-design-tool", "_blank")} />
      <div className="grid gap-5 lg:grid-cols-2">
        {kitchenPlans.map((plan, index) => (
          <div key={plan.id} className="overflow-hidden rounded-2xl border border-[#3a463f] bg-white shadow-sm">
            <div className="grid sm:grid-cols-[190px_1fr]">
              <div className="relative min-h-44 overflow-hidden bg-[#111512]"><img src={IMAGES.kitchens[index % IMAGES.kitchens.length]} alt="" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-[#0d100e]/55" /><div className="absolute inset-4 rounded-xl border border-dashed border-white/55"><div className="absolute left-4 top-4 h-14 w-20 border-b-4 border-l-4 border-[#303831]" /><div className="absolute bottom-5 right-4 h-8 w-16 rounded-sm border-2 border-white/75" /></div><span className="absolute bottom-3 left-3 rounded-full bg-[#f4f0e8]/90 px-2.5 py-1 text-[9px] font-bold text-[#11120f]">{plan.shape}</span></div>
              <div className="p-5"><div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold text-[#d8bd80]">{plan.id}</p><h3 className="mt-1 text-sm font-semibold">{plan.title}</h3><p className="mt-1 text-xs text-[#8e8a83]">by {plan.client}</p></div><span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">{plan.status}</span></div><div className="mt-5 grid grid-cols-3 gap-2"><div className="rounded-xl bg-[#111512] p-2.5"><p className="text-[9px] text-[#8e8a83]">Items</p><p className="mt-1 text-xs font-semibold">{plan.items}</p></div><div className="rounded-xl bg-[#111512] p-2.5"><p className="text-[9px] text-[#8e8a83]">Walls</p><p className="mt-1 text-xs font-semibold">{plan.walls}</p></div><div className="rounded-xl bg-[#111512] p-2.5"><p className="text-[9px] text-[#8e8a83]">Budget</p><p className="mt-1 text-xs font-semibold">{plan.budget}</p></div></div><div className="mt-5 flex items-center justify-between"><span className="text-[10px] text-[#77746e]">Submitted {plan.submitted}</span><div className="flex gap-2"><button onClick={() => showToast(`${plan.title} downloaded as PDF`)} className="rounded-lg border border-[#3a463f] p-2 text-[#aaa49b] hover:bg-[#111512]" title="Download"><FileText size={14} /></button><button onClick={() => showToast(`${plan.title} opened for review`)} className="flex items-center gap-1.5 rounded-lg bg-[#0d100e] px-3 py-2 text-[10px] font-semibold text-white"><Eye size={13} /> Review</button></div></div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ContentView({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="Website CMS" title="Content studio" description="Manage services, materials, local pages, promotions, and editorial content." action="Create content" onAction={() => showToast("Content composer opened in demo mode")} />
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {[["Published pages", "34", Globe2], ["Draft content", "6", Pencil], ["Page views", "18.4k", BarChart3]].map(([label, value, Icon]) => { const IconComponent = Icon as typeof Globe2; return <button key={String(label)} onClick={() => showToast(`${label} report opened`)} className="rounded-2xl border border-[#3a463f] bg-white p-5 text-left"><IconComponent size={17} className="text-[#aaa49b]" /><p className="mt-4 text-2xl font-semibold">{String(value)}</p><p className="mt-1 text-xs text-[#8e8a83]">{String(label)}</p></button>; })}
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#3a463f] bg-white">
        <div className="grid grid-cols-[1fr_auto] border-b border-[#303831] px-5 py-4"><p className="text-sm font-semibold">All content</p><button onClick={() => showToast("Content filters opened")} className="flex items-center gap-2 text-xs text-[#aaa49b]"><ListFilter size={14} /> Filter</button></div>
        <div className="divide-y divide-[#303831]">
          {contentItems.map((item) => (
            <button key={item.id} onClick={() => showToast(`${item.title} editor opened`)} className="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 text-left hover:bg-[#111512] sm:grid-cols-[1fr_160px_100px_100px_auto]">
              <div><p className="text-xs font-semibold">{item.title}</p><p className="mt-1 text-[10px] text-[#8e8a83]">{item.type} · by {item.author}</p></div><span className="hidden text-xs text-[#8e8a83] sm:block">Updated {item.updated}</span><span className={`hidden w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold sm:block ${item.status === "Published" ? "bg-emerald-50 text-emerald-700" : item.status === "Draft" ? "bg-slate-100 text-slate-600" : "bg-amber-50 text-amber-700"}`}>{item.status}</span><span className="hidden text-xs font-semibold sm:block">{item.views}</span><ChevronRight size={15} className="text-[#77746e]" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function GalleryView({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="Media manager" title="Project gallery" description="Curate case studies, project photography, and before-and-after collections." action="Upload project" onAction={() => showToast("Media uploader opened in demo mode")} />
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-dashed border-[#567168] bg-[#111512] p-5"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#aaa49b]"><Upload size={18} /></span><div><p className="text-xs font-semibold">Drop new project photos here</p><p className="mt-0.5 text-[10px] text-[#8e8a83]">JPG, PNG or WebP · organize after upload</p></div></div><button onClick={() => showToast("File browser opened in demo mode")} className="rounded-xl bg-[#0d100e] px-4 py-2.5 text-xs font-semibold text-white">Browse files</button></div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <button key={item.id} onClick={() => showToast(`${item.title} gallery opened`)} className="group overflow-hidden rounded-2xl border border-[#3a463f] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-44 overflow-hidden"><img src={index % 2 === 0 ? IMAGES.kitchens[index % IMAGES.kitchens.length] : IMAGES.bathrooms[index % IMAGES.bathrooms.length]} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0d100e]/75 to-transparent" />{item.featured && <span className="absolute left-3 top-3 rounded-full bg-[#111512] px-2.5 py-1 text-[9px] font-bold text-[#f4f0e8]">FEATURED</span>}<span className="absolute bottom-3 left-3 text-[10px] font-semibold text-white">{item.images} photos</span><ImageIcon size={16} className="absolute bottom-3 right-3 text-white" /></div>
            <div className="p-4"><div className="flex items-start justify-between"><div><h3 className="text-xs font-semibold">{item.title}</h3><p className="mt-1 text-[10px] text-[#8e8a83]">{item.category} · {item.updated}</p></div><span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${item.status === "Published" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{item.status}</span></div></div>
          </button>
        ))}
      </div>
    </>
  );
}

function EstimatesView({ showToast }: { showToast: (message: string) => void }) {
  const estimates = [
    { id: "EST-1842", client: "Ava Thompson", project: "Calacatta quartz countertops", total: "$9,240", status: "Viewed", sent: "Today, 8:42 AM", expires: "Apr 4" },
    { id: "EST-1841", client: "Grace Murphy", project: "Kitchen remodel with island", total: "$47,850", status: "Draft", sent: "Not sent", expires: "—" },
    { id: "EST-1840", client: "Sophia Bennett", project: "Primary bathroom remodel", total: "$21,780", status: "Approved", sent: "Yesterday", expires: "Apr 2" },
    { id: "EST-1839", client: "Marcus Lee", project: "Quartz surfaces · 4 units", total: "$24,200", status: "Sent", sent: "Mar 20", expires: "Apr 3" },
    { id: "EST-1838", client: "Liam Foster", project: "Taj Mahal waterfall island", total: "$11,800", status: "Deposit paid", sent: "Mar 18", expires: "Apr 1" },
  ];
  return (
    <>
      <PageHeading eyebrow="Sales documents" title="Estimates & proposals" description="Prepare, send, follow up, approve, and convert polished project proposals." action="New estimate" onAction={() => showToast("Estimate builder opened in demo mode")} />
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {[["Open estimate value", "$114,870"], ["Awaiting decision", "8 proposals"], ["Average approval time", "3.4 days"]].map(([label, value]) => <button key={label} onClick={() => showToast(`${label} report opened`)} className="rounded-2xl border border-[#3a463f] bg-white p-5 text-left shadow-sm"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#8e8a83]">{label}</p><p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#f4f0e8]">{value}</p></button>)}
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#3a463f] bg-white shadow-sm"><div className="flex items-center justify-between border-b border-[#303831] px-5 py-4"><div><p className="text-sm font-semibold">Recent proposals</p><p className="mt-0.5 text-[10px] text-[#8e8a83]">Demo documents and sales activity</p></div><button onClick={() => showToast("Proposal templates opened")} className="text-[11px] font-semibold text-[#d7d2c9]">Manage templates</button></div><div className="divide-y divide-[#303831]">{estimates.map((estimate) => <button key={estimate.id} onClick={() => showToast(`${estimate.id} proposal opened`)} className="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 text-left hover:bg-[#111512] sm:grid-cols-[100px_1.3fr_.8fr_100px_100px_auto]"><span className="hidden text-[10px] font-semibold text-[#d8bd80] sm:block">{estimate.id}</span><span><span className="block text-xs font-semibold">{estimate.client}</span><span className="mt-1 block text-[10px] text-[#8e8a83]">{estimate.project}</span></span><span className="hidden text-xs font-semibold sm:block">{estimate.total}</span><span className={`hidden w-fit rounded-full px-2.5 py-1 text-[9px] font-semibold sm:block ${estimate.status === "Approved" || estimate.status === "Deposit paid" ? "bg-emerald-50 text-emerald-700" : estimate.status === "Draft" ? "bg-slate-100 text-slate-600" : "bg-amber-50 text-amber-700"}`}>{estimate.status}</span><span className="hidden text-[10px] text-[#8e8a83] sm:block">{estimate.sent}</span><ChevronRight size={15} className="text-[#77746e]" /></button>)}</div></div>
    </>
  );
}

function CalendarView({ showToast }: { showToast: (message: string) => void }) {
  const schedule = [
    { time: "8:00", period: "AM", title: "Axis Reception installation", type: "Installation", owner: "Luis + crew", address: "88 Market Street" },
    { time: "10:30", period: "AM", title: "Rodriguez design consultation", type: "Consultation", owner: "Olivia", address: "Video call" },
    { time: "12:15", period: "PM", title: "Bennett digital template", type: "Templating", owner: "Daniel", address: "42 Willow Lane" },
    { time: "2:30", period: "PM", title: "Murphy material selection", type: "Showroom", owner: "Sofia", address: "House of Granite showroom" },
    { time: "4:00", period: "PM", title: "Lee unit field measure", type: "Measurement", owner: "Mia", address: "Northline Development" },
  ];
  return (
    <>
      <PageHeading eyebrow="Scheduling" title="Team calendar" description="Coordinate consultations, templates, showroom visits, fabrication, and installations." action="New appointment" onAction={() => showToast("Appointment scheduler opened in demo mode")} />
      <div className="grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
        <section className="rounded-2xl border border-[#3a463f] bg-white p-5 shadow-sm"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Monday, March 23</p><p className="mt-1 text-[10px] text-[#8e8a83]">5 appointments · 3 field crews</p></div><div className="flex gap-2"><button onClick={() => showToast("Previous date selected")} className="rounded-lg border border-[#3a463f] p-2"><ChevronRight size={14} className="rotate-180" /></button><button onClick={() => showToast("Next date selected")} className="rounded-lg border border-[#3a463f] p-2"><ChevronRight size={14} /></button></div></div><div className="space-y-3">{schedule.map((item) => <button key={item.title} onClick={() => showToast(`${item.title} opened`)} className="flex w-full items-center gap-4 rounded-2xl border border-[#303831] p-4 text-left transition hover:border-[#4e655c] hover:bg-[#111512]"><span className="w-12 shrink-0 text-center"><span className="block text-sm font-semibold">{item.time}</span><span className="text-[9px] text-[#8e8a83]">{item.period}</span></span><span className="h-11 w-1 rounded-full bg-[#111512]" /><span className="min-w-0 flex-1"><span className="block truncate text-xs font-semibold">{item.title}</span><span className="mt-1 block truncate text-[10px] text-[#8e8a83]">{item.address} · {item.owner}</span></span><span className="hidden rounded-full bg-[#111512] px-2.5 py-1 text-[9px] font-semibold text-[#d7d2c9] sm:block">{item.type}</span></button>)}</div></section>
        <section className="space-y-5"><div className="rounded-2xl bg-[#0d100e] p-6 text-white shadow-xl"><CalendarDays size={20} className="text-[#d8bd80]" /><p className="mt-5 text-3xl font-semibold">82%</p><p className="mt-1 text-xs text-white/55">Crew capacity this week</p><div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-[#111512]" /></div><p className="mt-3 text-[10px] text-white/40">Two installation windows remain available.</p></div><div className="rounded-2xl border border-[#3a463f] bg-white p-5"><p className="text-sm font-semibold">Upcoming milestones</p><div className="mt-4 space-y-4">{[["Tomorrow", "Axis installation complete"], ["Mar 25", "Thompson fabrication QC"], ["Mar 28", "Bennett tile delivery"], ["Apr 2", "Clark design approval"]].map(([date, event]) => <button key={event} onClick={() => showToast(`${event} opened`)} className="flex w-full items-center gap-3 text-left"><span className="flex h-8 w-12 items-center justify-center rounded-lg bg-[#111512] text-[9px] font-semibold text-[#d7d2c9]">{date}</span><span className="text-xs text-[#d7d2c9]">{event}</span></button>)}</div></div></section>
      </div>
    </>
  );
}

function AutomationsView({ showToast }: { showToast: (message: string) => void }) {
  const [flows, setFlows] = useState([
    { id: 1, title: "New estimate acknowledgement", trigger: "Estimate form submitted", action: "Send branded email + assign sales owner", active: true, runs: "47 runs" },
    { id: 2, title: "Kitchen plan concierge", trigger: "Kitchen plan submitted", action: "Notify designer + create follow-up task", active: true, runs: "18 runs" },
    { id: 3, title: "Quote follow-up", trigger: "Proposal viewed, no response for 2 days", action: "Send reminder + notify account owner", active: true, runs: "29 runs" },
    { id: 4, title: "Installation review request", trigger: "Project marked complete", action: "Wait 24 hours + request Google review", active: false, runs: "12 runs" },
    { id: 5, title: "Contractor priority routing", trigger: "Trade portal request submitted", action: "Apply priority tag + alert commercial desk", active: true, runs: "8 runs" },
  ]);
  return (
    <>
      <PageHeading eyebrow="Workflow intelligence" title="Automations" description="Turn repeat follow-up, routing, and client communication into dependable workflows." action="Create automation" onAction={() => showToast("Automation builder opened in demo mode")} />
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-[#0d100e] to-[#315547] p-6 text-white"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#d8bd80]"><Zap size={21} /></span><div><p className="text-sm font-semibold">116 manual actions saved this month</p><p className="mt-1 text-[11px] text-white/50">Approximately 9.4 hours returned to your team.</p></div></div><button onClick={() => showToast("Automation performance report opened")} className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold">View performance</button></div></div>
      <div className="space-y-3">{flows.map((flow) => <div key={flow.id} className="flex flex-col gap-4 rounded-2xl border border-[#3a463f] bg-white p-5 shadow-sm sm:flex-row sm:items-center"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111512] text-[#d7d2c9]"><Zap size={17} /></span><div className="min-w-0 flex-1"><p className="text-xs font-semibold">{flow.title}</p><div className="mt-2 flex flex-wrap items-center gap-2 text-[10px]"><span className="rounded-lg bg-[#111512] px-2 py-1 text-[#aaa49b]">When: {flow.trigger}</span><ArrowRight size={11} className="text-[#77746e]" /><span className="rounded-lg bg-[#111512] px-2 py-1 text-[#d7d2c9]">Then: {flow.action}</span></div></div><span className="text-[10px] text-[#8e8a83]">{flow.runs}</span><button onClick={() => { setFlows((current) => current.map((item) => item.id === flow.id ? { ...item, active: !item.active } : item)); showToast(`${flow.title} ${flow.active ? "paused" : "activated"}`); }} className={`relative h-6 w-11 shrink-0 rounded-full transition ${flow.active ? "bg-[#293f36]" : "bg-[#161c18]"}`}><span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${flow.active ? "left-[22px]" : "left-0.5"}`} /></button><button onClick={() => showToast(`${flow.title} editor opened`)} className="rounded-lg p-2 text-[#8e8a83] hover:bg-[#111512]"><MoreHorizontal size={16} /></button></div>)}</div>
    </>
  );
}

function TeamView({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="People & access" title="Team workspace" description="Manage staff access, ownership, roles, and active project workload." action="Invite member" onAction={() => showToast("Team invitation opened in demo mode")} />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <button key={member.id} onClick={() => showToast(`${member.name}'s profile opened`)} className="rounded-2xl border border-[#3a463f] bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d100e] to-[#293f36] text-xs font-bold text-[#d8bd80]">{member.initials}</span><span className={`flex items-center gap-1.5 text-[10px] font-medium ${member.status === "Online" ? "text-emerald-600" : member.status === "Away" ? "text-amber-600" : "text-[#77746e]"}`}><i className={`h-1.5 w-1.5 rounded-full ${member.status === "Online" ? "bg-emerald-500" : member.status === "Away" ? "bg-amber-500" : "bg-slate-400"}`} /> {member.status}</span></div><h3 className="mt-4 text-sm font-semibold">{member.name}</h3><p className="mt-1 text-xs text-[#8e8a83]">{member.role}</p><p className="mt-1 text-[10px] text-[#77746e]">{member.email}</p><div className="mt-5 flex items-center justify-between border-t border-[#303831] pt-4"><span className="text-[10px] text-[#8e8a83]">{member.projects} active projects</span><ChevronRight size={15} className="text-[#77746e]" /></div>
          </button>
        ))}
      </div>
    </>
  );
}

function SettingsView({ showToast }: { showToast: (message: string) => void }) {
  const [settings, setSettings] = useState({ emailAlerts: true, leadAlerts: true, weeklyReport: false, plannerAlerts: true });
  return (
    <>
      <PageHeading eyebrow="Configuration" title="Workspace settings" description="Control company details, alerts, integrations, branding, and demo preferences." action="Save changes" onAction={() => showToast("Settings saved for this demo session")} />
      <div className="grid gap-6 xl:grid-cols-[1fr_.75fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#3a463f] bg-white p-6"><div className="mb-6 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111512] text-[#aaa49b]"><Globe2 size={17} /></span><div><p className="text-sm font-semibold">Company profile</p><p className="text-[11px] text-[#8e8a83]">Public contact and business information</p></div></div><div className="grid gap-4 sm:grid-cols-2"><SettingInput label="Business name" value="House of Granite LLC" /><SettingInput label="Business phone" value="(555) 123-4567" /><SettingInput label="Email address" value="info@houseofgranite.com" /><SettingInput label="Service radius" value="45 miles" /><div className="sm:col-span-2"><SettingInput label="Business address" value="123 Stone Avenue, Springfield, ST 12345" /></div></div></section>
          <section className="rounded-2xl border border-[#3a463f] bg-white p-6"><div className="mb-6 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111512] text-[#aaa49b]"><Bell size={17} /></span><div><p className="text-sm font-semibold">Notifications</p><p className="text-[11px] text-[#8e8a83]">Choose what reaches your team</p></div></div><div className="divide-y divide-[#303831]">{([ ["emailAlerts", "Estimate requests", "Email the sales team for new website estimates"], ["leadAlerts", "Lead reminders", "Alert owners when a lead needs follow-up"], ["plannerAlerts", "Kitchen plan submissions", "Notify designers when a new layout arrives"], ["weeklyReport", "Weekly performance report", "Send a Monday revenue and operations summary"] ] as const).map(([key, title, description]) => <div key={key} className="flex items-center justify-between gap-4 py-4"><div><p className="text-xs font-semibold">{title}</p><p className="mt-1 text-[10px] text-[#8e8a83]">{description}</p></div><button onClick={() => setSettings((current) => ({ ...current, [key]: !current[key] }))} className={`relative h-6 w-11 rounded-full transition ${settings[key] ? "bg-[#293f36]" : "bg-[#161c18]"}`}><span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${settings[key] ? "left-[22px]" : "left-0.5"}`} /></button></div>)}</div></section>
        </div>
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#3a463f] bg-white p-6"><div className="mb-5 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111512] text-[#aaa49b]"><Palette size={17} /></span><div><p className="text-sm font-semibold">Brand appearance</p><p className="text-[11px] text-[#8e8a83]">Logo and interface colors</p></div></div><div className="rounded-2xl bg-[#0d100e] p-5"><div className="flex items-center gap-3"><img src={IMAGES.logo} alt="" className="h-12 w-12 rounded-xl" /><div><p className="text-sm font-semibold text-white">House of Granite</p><p className="text-[10px] text-[#d8bd80]">STUDIO</p></div></div></div><div className="mt-4 grid grid-cols-3 gap-3">{[["Obsidian", "#090b0a"], ["Forest", "#1c392f"], ["Antique Brass", "#c9ad70"]].map(([name, color]) => <button key={name} onClick={() => showToast(`${name} color selected`)} className="rounded-xl border border-[#3a463f] p-2 text-left"><span className="block h-8 rounded-lg" style={{ backgroundColor: color }} /><span className="mt-2 block text-[9px] font-medium text-[#aaa49b]">{name}</span></button>)}</div></section>
          <section className="rounded-2xl border border-[#3a463f] bg-white p-6"><div className="mb-5 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111512] text-[#aaa49b]"><Zap size={17} /></span><div><p className="text-sm font-semibold">Integrations</p><p className="text-[11px] text-[#8e8a83]">Future-ready connection points</p></div></div><div className="space-y-2">{["QuickBooks Online", "HubSpot CRM", "Google Analytics", "Mailchimp", "Calendly"].map((name, index) => <button key={name} onClick={() => showToast(`${name} connection flow opened`)} className="flex w-full items-center justify-between rounded-xl border border-[#303831] px-3.5 py-3 text-left hover:bg-[#111512]"><span className="text-xs font-medium">{name}</span><span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${index === 2 ? "bg-emerald-50 text-emerald-700" : "bg-[#111512] text-[#8e8a83]"}`}>{index === 2 ? "Connected" : "Connect"}</span></button>)}</div></section>
        </div>
      </div>
    </>
  );
}

function SettingInput({ label, value }: { label: string; value: string }) {
  return <label className="block"><span className="mb-1.5 block text-[10px] font-semibold text-[#aaa49b]">{label}</span><input defaultValue={value} className="h-10 w-full rounded-xl border border-[#3a463f] bg-[#111512] px-3 text-xs outline-none transition focus:border-[#68867a] focus:ring-4 focus:ring-[#303831]/8" /></label>;
}

function LeadDialog({ lead, onClose, showToast }: { lead: Lead; onClose: () => void; showToast: (message: string) => void }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0d100e]/55 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-in" onClick={(event) => event.stopPropagation()}>
        <div className="relative bg-[#0d100e] p-6 text-white"><div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#111512]/10 blur-3xl" /><button onClick={onClose} className="absolute right-4 top-4 rounded-xl bg-white/10 p-2 text-white/60 hover:bg-white/20 hover:text-white"><X size={17} /></button><div className="flex items-center gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111512] text-sm font-bold text-[#f4f0e8]">{lead.avatar}</span><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d8bd80]">{lead.id}</p><h2 className="mt-1 text-xl font-semibold">{lead.name}</h2><p className="mt-0.5 text-xs text-white/50">{lead.company}</p></div></div></div>
        <div className="p-6"><div className="grid gap-3 sm:grid-cols-2"><DialogField label="Project" value={lead.project} /><DialogField label="Potential value" value={`$${lead.value.toLocaleString()}`} /><DialogField label="Email" value={lead.email} /><DialogField label="Phone" value={lead.phone} /><DialogField label="Lead source" value={lead.source} /><DialogField label="Received" value={lead.date} /></div><div className="mt-5 rounded-2xl border border-[#38453d] bg-[#111512] p-4"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#8e8a83]">Current stage</span><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[lead.status]}`}>{lead.status}</span></div><p className="mt-3 text-xs leading-5 text-[#aaa49b]">Customer requested a consultation and preliminary pricing. Review scope, confirm measurements, and schedule the next sales action.</p></div><div className="mt-6 grid grid-cols-2 gap-3"><button onClick={() => { showToast(`Called ${lead.name}`); onClose(); }} className="rounded-xl border border-[#3a463f] px-4 py-3 text-xs font-semibold text-[#d7d2c9] hover:bg-[#111512]">Call customer</button><button onClick={() => { showToast(`${lead.name} moved to the next stage`); onClose(); }} className="flex items-center justify-center gap-2 rounded-xl bg-[#0d100e] px-4 py-3 text-xs font-semibold text-white">Advance lead <ArrowRight size={14} /></button></div></div>
      </div>
    </div>
  );
}

function DialogField({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl border border-[#38453d] p-3"><p className="text-[9px] font-semibold uppercase tracking-wider text-[#77746e]">{label}</p><p className="mt-1 text-xs font-medium text-[#f4f0e8]">{value}</p></div>;
}
