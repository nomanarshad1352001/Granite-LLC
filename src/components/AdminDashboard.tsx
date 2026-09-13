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

type View = "Overview" | "Leads" | "Projects" | "Kitchen plans" | "Content" | "Gallery" | "Team" | "Settings";
type Lead = (typeof leads)[number];

const navSections: { label: string; items: { label: View; icon: typeof LayoutDashboard; badge?: string }[] }[] = [
  {
    label: "Workspace",
    items: [
      { label: "Overview", icon: LayoutDashboard },
      { label: "Leads", icon: Users, badge: "9" },
      { label: "Projects", icon: FolderKanban, badge: "28" },
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
    <div className="min-h-screen bg-[#f3f5f2] text-[#18221f]">
      {toast && (
        <div className="fixed right-5 top-5 z-[80] flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-medium text-[#1c4e42] shadow-2xl animate-slide-down">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100"><Check size={14} /></span>
          {toast}
        </div>
      )}

      {mobileOpen && <button className="fixed inset-0 z-40 bg-[#101c18]/50 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close menu" />}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col border-r border-white/10 bg-[#10231e] text-white transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
          <Link href="/" className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="House of Granite" className="h-10 w-10 rounded-xl shadow-lg" />
            <div>
              <p className="text-sm font-semibold tracking-tight">House of Granite</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#e8c96f]">Studio</p>
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
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${activeView === item.label ? "bg-[#e7c76c] font-semibold text-[#14231f] shadow-lg shadow-black/10" : "text-white/60 hover:bg-white/[0.07] hover:text-white"}`}
                  >
                    <item.icon size={17} strokeWidth={activeView === item.label ? 2.3 : 1.8} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${activeView === item.label ? "bg-[#153f35] text-white" : "bg-white/10 text-white/65"}`}>{item.badge}</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="px-3 pb-3">
          <div className="mb-3 rounded-2xl border border-[#e7c76c]/20 bg-gradient-to-br from-[#21483e] to-[#18372f] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#e7c76c]/15 text-[#e7c76c]"><Sparkles size={17} /></div>
            <p className="text-xs font-semibold">Visual planner live</p>
            <p className="mt-1 text-[11px] leading-4 text-white/45">4 new customer kitchen plans are ready to review.</p>
            <button onClick={() => goTo("Kitchen plans")} className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#e7c76c] hover:text-[#f5dfa0]">Review plans <ArrowRight size={12} /></button>
          </div>
          <button onClick={logout} disabled={loadingLogout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/50 transition hover:bg-red-400/10 hover:text-red-200">
            <LogOut size={17} /> {loadingLogout ? "Signing out…" : "Sign out"}
          </button>
        </div>
      </aside>

      <div className="lg:pl-[272px]">
        <header className="sticky top-0 z-30 flex h-[76px] items-center gap-3 border-b border-[#dde3df] bg-[#f8faf8]/90 px-4 backdrop-blur-xl sm:px-6 xl:px-8">
          <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-[#dfe5e1] bg-white p-2.5 text-[#5f6d68] shadow-sm lg:hidden" aria-label="Open navigation"><Menu size={18} /></button>

          <div className="relative hidden max-w-md flex-1 md:block">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b9792]" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={`Search ${activeView.toLowerCase()}…`} className="h-10 w-full rounded-xl border border-[#dfe5e1] bg-white/80 pl-10 pr-4 text-sm outline-none transition focus:border-[#5c8c7f] focus:ring-4 focus:ring-[#34705f]/8" />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Link href="/" target="_blank" className="hidden items-center gap-2 rounded-xl border border-[#dfe5e1] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#52615c] shadow-sm transition hover:border-[#bdc9c4] hover:text-[#193f35] sm:flex"><Globe2 size={15} /> View website <ArrowUpRight size={13} /></Link>

            <div className="relative">
              <button onClick={() => { setNotificationsOpen((value) => !value); setProfileOpen(false); }} className="relative rounded-xl border border-[#dfe5e1] bg-white p-2.5 text-[#63716c] shadow-sm transition hover:text-[#193f35]" aria-label="Notifications">
                <Bell size={17} />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#d69b37]" />
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 top-12 w-[340px] overflow-hidden rounded-2xl border border-[#dfe5e1] bg-white shadow-2xl animate-slide-down">
                  <div className="flex items-center justify-between border-b border-[#edf0ee] px-4 py-3.5">
                    <div><p className="text-sm font-semibold">Notifications</p><p className="text-[11px] text-[#8a9691]">3 items need attention</p></div>
                    <button onClick={() => { setNotificationsOpen(false); showToast("Notifications marked as read"); }} className="text-[11px] font-semibold text-[#2c6b5b]">Mark all read</button>
                  </div>
                  <div className="divide-y divide-[#edf0ee]">
                    {[
                      ["New kitchen plan", "Emma Rodriguez submitted an L-shaped kitchen.", "12m"],
                      ["Installation tomorrow", "Axis Reception is scheduled for 8:00 AM.", "1h"],
                      ["Estimate viewed", "Ava Thompson opened estimate EST-1842.", "2h"],
                    ].map(([title, description, time]) => (
                      <button key={title} onClick={() => { setNotificationsOpen(false); showToast(`${title} opened`); }} className="flex w-full gap-3 px-4 py-3.5 text-left hover:bg-[#f7f9f7]">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#d69b37]" />
                        <span className="flex-1"><span className="block text-xs font-semibold text-[#23302c]">{title}</span><span className="mt-0.5 block text-[11px] leading-4 text-[#7a8782]">{description}</span></span>
                        <span className="text-[10px] text-[#9aa49f]">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => { setProfileOpen((value) => !value); setNotificationsOpen(false); }} className="flex items-center gap-2 rounded-xl p-1.5 pr-2 text-left hover:bg-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#183f36] text-[11px] font-bold text-[#e8cb78]">OS</span>
                <span className="hidden lg:block"><span className="block text-xs font-semibold">Olivia Stone</span><span className="block text-[10px] text-[#88948f]">Administrator</span></span>
                <ChevronDown size={13} className="text-[#8a9691]" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 w-56 rounded-2xl border border-[#dfe5e1] bg-white p-2 shadow-2xl animate-slide-down">
                  <button onClick={() => { goTo("Settings"); setProfileOpen(false); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs text-[#55635e] hover:bg-[#f4f6f4]"><Settings size={14} /> Account settings</button>
                  <Link href="/platform" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-[#55635e] hover:bg-[#f4f6f4]"><Sparkles size={14} /> Platform details</Link>
                  <button onClick={logout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs text-red-600 hover:bg-red-50"><LogOut size={14} /> Sign out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 xl:p-8">
          <div className="mx-auto max-w-[1500px]">
            {activeView === "Overview" && <OverviewView goTo={goTo} setSelectedLead={setSelectedLead} taskList={taskList} setTaskList={setTaskList} showToast={showToast} />}
            {activeView === "Leads" && <LeadsView rows={filteredLeads} setSelectedLead={setSelectedLead} showToast={showToast} />}
            {activeView === "Projects" && <ProjectsView rows={filteredProjects} showToast={showToast} />}
            {activeView === "Kitchen plans" && <PlansView showToast={showToast} />}
            {activeView === "Content" && <ContentView showToast={showToast} />}
            {activeView === "Gallery" && <GalleryView showToast={showToast} />}
            {activeView === "Team" && <TeamView showToast={showToast} />}
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
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b27d28]">{eyebrow}</p>
        <h1 className="mt-1.5 text-2xl font-semibold tracking-[-0.035em] text-[#17231f] sm:text-3xl">{title}</h1>
        <p className="mt-1.5 text-sm text-[#77837e]">{description}</p>
      </div>
      <button onClick={onAction} className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#173f36] px-4 text-xs font-semibold text-white shadow-lg shadow-emerald-950/10 transition hover:bg-[#24594c]"><Plus size={15} /> {action}</button>
    </div>
  );
}

function OverviewView({ goTo, setSelectedLead, taskList, setTaskList, showToast }: { goTo: (view: View) => void; setSelectedLead: (lead: Lead) => void; taskList: typeof initialTasks; setTaskList: React.Dispatch<React.SetStateAction<typeof initialTasks>>; showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="Monday, March 23" title="Good morning, Olivia" description="Here’s what needs your attention across the business today." action="New lead" onAction={() => showToast("New lead form opened in demo mode")} />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat, index) => (
          <button key={stat.label} onClick={() => goTo(index === 2 ? "Projects" : "Leads")} className="group rounded-2xl border border-[#dde4df] bg-white p-5 text-left shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)] transition hover:-translate-y-0.5 hover:border-[#c8d5cf] hover:shadow-lg">
            <div className="flex items-start justify-between">
              <span className="text-xs font-medium text-[#7b8782]">{stat.label}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#edf5f1] text-[#316a5b]">{index === 0 ? <CircleDollarSign size={16} /> : index === 1 ? <Users size={16} /> : index === 2 ? <FolderKanban size={16} /> : <Target size={16} />}</span>
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#17231f]">{stat.value}</div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px]"><span className="flex items-center gap-1 font-semibold text-emerald-600"><TrendingUp size={12} /> {stat.change}</span><span className="text-[#98a29e]">{stat.detail}</span></div>
          </button>
        ))}
      </div>

      <div className="mb-6 grid gap-6 xl:grid-cols-[1.55fr_.85fr]">
        <section className="rounded-2xl border border-[#dde4df] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)] sm:p-6">
          <div className="mb-7 flex items-start justify-between">
            <div><p className="text-sm font-semibold">Revenue performance</p><p className="mt-1 text-xs text-[#8a9691]">Closed revenue vs. monthly target</p></div>
            <button onClick={() => showToast("Revenue period set to this year")} className="flex items-center gap-1.5 rounded-lg border border-[#e1e6e3] px-2.5 py-1.5 text-[11px] font-medium text-[#67736e]">This year <ChevronDown size={12} /></button>
          </div>
          <div className="mb-4 flex items-end gap-4"><span className="text-3xl font-semibold tracking-[-0.04em]">$1.15M</span><span className="mb-1 flex items-center gap-1 text-xs font-semibold text-emerald-600"><ArrowUpRight size={13} /> 21.4%</span></div>
          <div className="flex h-52 items-end gap-2 sm:gap-3">
            {revenueData.map((item) => (
              <div key={item.month} className="group flex h-full flex-1 flex-col justify-end">
                <div className="relative flex flex-1 items-end justify-center gap-0.5">
                  <div className="w-[42%] rounded-t-md bg-[#cdd8d3] transition group-hover:bg-[#afc2ba]" style={{ height: `${item.target * 0.68}%` }} />
                  <div className="w-[42%] rounded-t-md bg-gradient-to-t from-[#194d40] to-[#3a7968] transition group-hover:from-[#1f6452]" style={{ height: `${item.revenue * 0.68}%` }} />
                  <div className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-lg bg-[#14231e] px-2.5 py-1.5 text-[10px] text-white shadow-xl group-hover:block">${item.revenue}k · target ${item.target}k</div>
                </div>
                <span className="mt-2 text-center text-[9px] text-[#98a29e] sm:text-[10px]">{item.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-5 border-t border-[#edf0ee] pt-4 text-[10px] text-[#7f8b86]"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#2d6d5c]" /> Revenue</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#cdd8d3]" /> Target</span></div>
        </section>

        <section className="rounded-2xl border border-[#dde4df] bg-[#173f36] p-5 text-white shadow-xl shadow-emerald-950/10 sm:p-6">
          <div className="flex items-start justify-between"><div><p className="text-sm font-semibold">Sales pipeline</p><p className="mt-1 text-xs text-white/45">$284,750 open value</p></div><BarChart3 size={18} className="text-[#e8cb78]" /></div>
          <div className="mt-7 space-y-5">
            {[
              ["New", 47, 92, "$84.2k"],
              ["Qualified", 29, 72, "$68.5k"],
              ["Site visit", 18, 53, "$54.8k"],
              ["Quoted", 14, 40, "$77.2k"],
            ].map(([label, count, width, value]) => (
              <button key={String(label)} onClick={() => goTo("Leads")} className="block w-full text-left">
                <div className="mb-2 flex items-center justify-between text-xs"><span className="text-white/65">{label} <b className="ml-1 text-white">{count}</b></span><span className="font-semibold text-[#e8cb78]">{value}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#d9aa4d] to-[#f0d88d]" style={{ width: `${width}%` }} /></div>
              </button>
            ))}
          </div>
          <button onClick={() => goTo("Leads")} className="mt-7 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-semibold transition hover:bg-white/10"><span>Open pipeline board</span><ArrowRight size={14} /></button>
        </section>
      </div>

      <div className="mb-6 grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
        <section className="overflow-hidden rounded-2xl border border-[#dde4df] bg-white shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="flex items-center justify-between border-b border-[#edf0ee] px-5 py-4"><div><p className="text-sm font-semibold">Newest leads</p><p className="mt-0.5 text-[11px] text-[#8b9692]">Recently captured opportunities</p></div><button onClick={() => goTo("Leads")} className="flex items-center gap-1 text-[11px] font-semibold text-[#2f6c5c]">View all <ArrowRight size={12} /></button></div>
          <div className="divide-y divide-[#edf0ee]">
            {leads.slice(0, 5).map((lead) => (
              <button key={lead.id} onClick={() => setSelectedLead(lead)} className="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 text-left transition hover:bg-[#f8faf8] sm:grid-cols-[1.1fr_1fr_auto_auto]">
                <div className="flex min-w-0 items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e9f0ed] text-[10px] font-bold text-[#326556]">{lead.avatar}</span><span className="min-w-0"><span className="block truncate text-xs font-semibold">{lead.name}</span><span className="block truncate text-[10px] text-[#8a9691]">{lead.company}</span></span></div>
                <div className="hidden min-w-0 sm:block"><span className="block truncate text-xs text-[#46534f]">{lead.project}</span><span className="block text-[10px] text-[#9aa49f]">{lead.source}</span></div>
                <span className={`hidden rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset sm:inline-flex ${statusStyle[lead.status]}`}>{lead.status}</span>
                <span className="text-right"><span className="block text-xs font-semibold">${lead.value.toLocaleString()}</span><span className="block text-[10px] text-[#9aa49f]">{lead.date}</span></span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#dde4df] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Today’s tasks</p><p className="mt-0.5 text-[11px] text-[#8b9692]">{taskList.filter((task) => !task.done).length} remaining</p></div><button onClick={() => showToast("Task creator opened in demo mode")} className="rounded-lg border border-[#e1e6e3] p-2 text-[#66736e] hover:bg-[#f6f8f6]"><Plus size={14} /></button></div>
          <div className="space-y-2">
            {taskList.map((task) => (
              <button key={task.id} onClick={() => setTaskList((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} className="flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition hover:bg-[#f6f8f6]">
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${task.done ? "border-[#377665] bg-[#377665] text-white" : "border-[#cbd4d0] bg-white"}`}>{task.done && <Check size={12} />}</span>
                <span className="min-w-0 flex-1"><span className={`block text-xs font-medium ${task.done ? "text-[#a1aaa6] line-through" : "text-[#34413c]"}`}>{task.title}</span><span className="mt-1 block text-[10px] text-[#9aa49f]">{task.due} · {task.owner}</span></span>
                <span className={`mt-0.5 h-1.5 w-1.5 rounded-full ${task.priority === "High" ? "bg-red-400" : task.priority === "Medium" ? "bg-amber-400" : "bg-emerald-400"}`} />
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[#dde4df] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Active installations</p><p className="mt-0.5 text-[11px] text-[#8b9692]">Project delivery snapshot</p></div><button onClick={() => goTo("Projects")} className="text-[11px] font-semibold text-[#2f6c5c]">All projects</button></div>
          <div className="space-y-3">
            {projects.slice(0, 4).map((project, index) => (
              <button key={project.id} onClick={() => { goTo("Projects"); showToast(`${project.name} opened`); }} className="flex w-full items-center gap-3 rounded-xl border border-[#edf0ee] p-3 text-left transition hover:border-[#d4ded9] hover:bg-[#fafbfa]">
                <img src={imageForProject(project.image, index)} alt="" className="h-12 w-12 rounded-xl object-cover" />
                <span className="min-w-0 flex-1"><span className="block truncate text-xs font-semibold">{project.name}</span><span className="mt-1 block text-[10px] text-[#8d9893]">{project.next}</span><span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-[#ebefed]"><i className="block h-full rounded-full bg-[#397865]" style={{ width: `${project.progress}%` }} /></span></span>
                <span className="text-right"><span className="block text-xs font-semibold">{project.progress}%</span><span className="text-[10px] text-[#9aa49f]">{project.due}</span></span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#dde4df] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(20,45,38,.35)]">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Recent activity</p><p className="mt-0.5 text-[11px] text-[#8b9692]">Live workspace updates</p></div><Activity size={16} className="text-[#8b9692]" /></div>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf3f0] text-[9px] font-bold text-[#326556]">{item.initials}</span><div className="min-w-0 flex-1"><p className="text-xs leading-5 text-[#62706b]"><b className="font-semibold text-[#26332f]">{item.person}</b> {item.action}</p><p className="text-[10px] text-[#9ba5a1]">{item.time}</p></div></div>
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
        {["All", "New", "Contacted", "Qualified", "Site Visit", "Quoted", "Won"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${filter === item ? "bg-[#173f36] text-white" : "border border-[#dde4df] bg-white text-[#68756f] hover:border-[#b9c8c1]"}`}>{item}</button>)}
        <button onClick={() => showToast("Advanced filters opened")} className="ml-auto flex items-center gap-2 rounded-xl border border-[#dde4df] bg-white px-3.5 py-2 text-xs font-semibold text-[#68756f]"><ListFilter size={14} /> More filters</button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#dde4df] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left">
            <thead className="bg-[#f8faf8] text-[10px] uppercase tracking-[0.12em] text-[#8a9691]"><tr><th className="px-5 py-3.5 font-semibold">Lead</th><th className="px-4 py-3.5 font-semibold">Project</th><th className="px-4 py-3.5 font-semibold">Source</th><th className="px-4 py-3.5 font-semibold">Status</th><th className="px-4 py-3.5 font-semibold">Value</th><th className="px-4 py-3.5 font-semibold">Received</th><th className="px-4 py-3.5" /></tr></thead>
            <tbody className="divide-y divide-[#edf0ee]">
              {filtered.map((lead) => (
                <tr key={lead.id} onClick={() => setSelectedLead(lead)} className="cursor-pointer transition hover:bg-[#fafcfa]">
                  <td className="px-5 py-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e9f0ed] text-[10px] font-bold text-[#326556]">{lead.avatar}</span><div><p className="text-xs font-semibold">{lead.name}</p><p className="mt-0.5 text-[10px] text-[#8a9691]">{lead.company} · {lead.email}</p></div></div></td>
                  <td className="px-4 py-4"><p className="text-xs text-[#43504c]">{lead.project}</p><p className="mt-0.5 text-[10px] text-[#9aa49f]">{lead.id}</p></td>
                  <td className="px-4 py-4 text-xs text-[#67736e]">{lead.source}</td>
                  <td className="px-4 py-4"><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[lead.status]}`}>{lead.status}</span></td>
                  <td className="px-4 py-4 text-xs font-semibold">${lead.value.toLocaleString()}</td>
                  <td className="px-4 py-4 text-xs text-[#7c8883]">{lead.date}</td>
                  <td className="px-4 py-4"><button onClick={(event) => { event.stopPropagation(); showToast(`Actions opened for ${lead.name}`); }} className="rounded-lg p-2 text-[#9aa49f] hover:bg-[#f1f4f2] hover:text-[#46534f]"><MoreHorizontal size={16} /></button></td>
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
          <button key={project.id} onClick={() => showToast(`${project.name} workspace opened`)} className="group overflow-hidden rounded-2xl border border-[#dde4df] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-36 overflow-hidden"><img src={imageForProject(project.image, index)} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#12221d]/70 to-transparent" /><span className={`absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold ${projectStyle[project.status]}`}>{project.status}</span><span className="absolute bottom-3 left-4 text-[10px] font-semibold text-white/70">{project.id}</span><span className="absolute bottom-3 right-4 text-sm font-semibold text-white">${project.value.toLocaleString()}</span></div>
            <div className="p-5"><h3 className="text-sm font-semibold">{project.name}</h3><p className="mt-1 text-xs text-[#89948f]">{project.client} · {project.type}</p><div className="mt-5 flex items-center justify-between text-[10px] text-[#7c8883]"><span>Progress</span><span className="font-semibold text-[#33413c]">{project.progress}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#ebefed]"><div className="h-full rounded-full bg-gradient-to-r from-[#265e50] to-[#5a917f]" style={{ width: `${project.progress}%` }} /></div><div className="mt-5 flex items-center justify-between border-t border-[#edf0ee] pt-4"><span className="text-[10px] text-[#7f8b86]"><b className="text-[#42504b]">{project.manager}</b> · Due {project.due}</span><ChevronRight size={15} className="text-[#9aa49f] transition group-hover:translate-x-1" /></div></div>
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
          <div key={plan.id} className="overflow-hidden rounded-2xl border border-[#dde4df] bg-white shadow-sm">
            <div className="grid sm:grid-cols-[190px_1fr]">
              <div className="relative min-h-44 overflow-hidden bg-[#e8ece9]"><img src={IMAGES.kitchens[index % IMAGES.kitchens.length]} alt="" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-[#173f36]/55" /><div className="absolute inset-4 rounded-xl border border-dashed border-white/55"><div className="absolute left-4 top-4 h-14 w-20 border-b-4 border-l-4 border-[#efcf76]" /><div className="absolute bottom-5 right-4 h-8 w-16 rounded-sm border-2 border-white/75" /></div><span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold text-[#173f36]">{plan.shape}</span></div>
              <div className="p-5"><div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold text-[#ae7a26]">{plan.id}</p><h3 className="mt-1 text-sm font-semibold">{plan.title}</h3><p className="mt-1 text-xs text-[#88948f]">by {plan.client}</p></div><span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">{plan.status}</span></div><div className="mt-5 grid grid-cols-3 gap-2"><div className="rounded-xl bg-[#f4f7f5] p-2.5"><p className="text-[9px] text-[#8a9691]">Items</p><p className="mt-1 text-xs font-semibold">{plan.items}</p></div><div className="rounded-xl bg-[#f4f7f5] p-2.5"><p className="text-[9px] text-[#8a9691]">Walls</p><p className="mt-1 text-xs font-semibold">{plan.walls}</p></div><div className="rounded-xl bg-[#f4f7f5] p-2.5"><p className="text-[9px] text-[#8a9691]">Budget</p><p className="mt-1 text-xs font-semibold">{plan.budget}</p></div></div><div className="mt-5 flex items-center justify-between"><span className="text-[10px] text-[#9aa49f]">Submitted {plan.submitted}</span><div className="flex gap-2"><button onClick={() => showToast(`${plan.title} downloaded as PDF`)} className="rounded-lg border border-[#dde4df] p-2 text-[#63716c] hover:bg-[#f4f7f5]" title="Download"><FileText size={14} /></button><button onClick={() => showToast(`${plan.title} opened for review`)} className="flex items-center gap-1.5 rounded-lg bg-[#173f36] px-3 py-2 text-[10px] font-semibold text-white"><Eye size={13} /> Review</button></div></div></div>
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
        {[["Published pages", "34", Globe2], ["Draft content", "6", Pencil], ["Page views", "18.4k", BarChart3]].map(([label, value, Icon]) => { const IconComponent = Icon as typeof Globe2; return <button key={String(label)} onClick={() => showToast(`${label} report opened`)} className="rounded-2xl border border-[#dde4df] bg-white p-5 text-left"><IconComponent size={17} className="text-[#3a7464]" /><p className="mt-4 text-2xl font-semibold">{String(value)}</p><p className="mt-1 text-xs text-[#89948f]">{String(label)}</p></button>; })}
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#dde4df] bg-white">
        <div className="grid grid-cols-[1fr_auto] border-b border-[#edf0ee] px-5 py-4"><p className="text-sm font-semibold">All content</p><button onClick={() => showToast("Content filters opened")} className="flex items-center gap-2 text-xs text-[#68756f]"><ListFilter size={14} /> Filter</button></div>
        <div className="divide-y divide-[#edf0ee]">
          {contentItems.map((item) => (
            <button key={item.id} onClick={() => showToast(`${item.title} editor opened`)} className="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 text-left hover:bg-[#fafcfa] sm:grid-cols-[1fr_160px_100px_100px_auto]">
              <div><p className="text-xs font-semibold">{item.title}</p><p className="mt-1 text-[10px] text-[#8b9692]">{item.type} · by {item.author}</p></div><span className="hidden text-xs text-[#7a8782] sm:block">Updated {item.updated}</span><span className={`hidden w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold sm:block ${item.status === "Published" ? "bg-emerald-50 text-emerald-700" : item.status === "Draft" ? "bg-slate-100 text-slate-600" : "bg-amber-50 text-amber-700"}`}>{item.status}</span><span className="hidden text-xs font-semibold sm:block">{item.views}</span><ChevronRight size={15} className="text-[#9aa49f]" />
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
      <div className="mb-5 flex items-center justify-between rounded-2xl border border-dashed border-[#b8c8c1] bg-[#eaf2ee] p-5"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#397565]"><Upload size={18} /></span><div><p className="text-xs font-semibold">Drop new project photos here</p><p className="mt-0.5 text-[10px] text-[#76837e]">JPG, PNG or WebP · organize after upload</p></div></div><button onClick={() => showToast("File browser opened in demo mode")} className="rounded-xl bg-[#173f36] px-4 py-2.5 text-xs font-semibold text-white">Browse files</button></div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {galleryItems.map((item, index) => (
          <button key={item.id} onClick={() => showToast(`${item.title} gallery opened`)} className="group overflow-hidden rounded-2xl border border-[#dde4df] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-44 overflow-hidden"><img src={index % 2 === 0 ? IMAGES.kitchens[index % IMAGES.kitchens.length] : IMAGES.bathrooms[index % IMAGES.bathrooms.length]} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#13231e]/75 to-transparent" />{item.featured && <span className="absolute left-3 top-3 rounded-full bg-[#e6c76f] px-2.5 py-1 text-[9px] font-bold text-[#163c33]">FEATURED</span>}<span className="absolute bottom-3 left-3 text-[10px] font-semibold text-white">{item.images} photos</span><ImageIcon size={16} className="absolute bottom-3 right-3 text-white" /></div>
            <div className="p-4"><div className="flex items-start justify-between"><div><h3 className="text-xs font-semibold">{item.title}</h3><p className="mt-1 text-[10px] text-[#8a9691]">{item.category} · {item.updated}</p></div><span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${item.status === "Published" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{item.status}</span></div></div>
          </button>
        ))}
      </div>
    </>
  );
}

function TeamView({ showToast }: { showToast: (message: string) => void }) {
  return (
    <>
      <PageHeading eyebrow="People & access" title="Team workspace" description="Manage staff access, ownership, roles, and active project workload." action="Invite member" onAction={() => showToast("Team invitation opened in demo mode")} />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <button key={member.id} onClick={() => showToast(`${member.name}'s profile opened`)} className="rounded-2xl border border-[#dde4df] bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#173f36] to-[#397464] text-xs font-bold text-[#ecd17f]">{member.initials}</span><span className={`flex items-center gap-1.5 text-[10px] font-medium ${member.status === "Online" ? "text-emerald-600" : member.status === "Away" ? "text-amber-600" : "text-[#9aa49f]"}`}><i className={`h-1.5 w-1.5 rounded-full ${member.status === "Online" ? "bg-emerald-500" : member.status === "Away" ? "bg-amber-500" : "bg-slate-400"}`} /> {member.status}</span></div><h3 className="mt-4 text-sm font-semibold">{member.name}</h3><p className="mt-1 text-xs text-[#7d8984]">{member.role}</p><p className="mt-1 text-[10px] text-[#9aa49f]">{member.email}</p><div className="mt-5 flex items-center justify-between border-t border-[#edf0ee] pt-4"><span className="text-[10px] text-[#7e8a85]">{member.projects} active projects</span><ChevronRight size={15} className="text-[#9aa49f]" /></div>
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
          <section className="rounded-2xl border border-[#dde4df] bg-white p-6"><div className="mb-6 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf4f1] text-[#397363]"><Globe2 size={17} /></span><div><p className="text-sm font-semibold">Company profile</p><p className="text-[11px] text-[#8a9691]">Public contact and business information</p></div></div><div className="grid gap-4 sm:grid-cols-2"><SettingInput label="Business name" value="House of Granite LLC" /><SettingInput label="Business phone" value="(555) 123-4567" /><SettingInput label="Email address" value="info@houseofgranite.com" /><SettingInput label="Service radius" value="45 miles" /><div className="sm:col-span-2"><SettingInput label="Business address" value="123 Stone Avenue, Springfield, ST 12345" /></div></div></section>
          <section className="rounded-2xl border border-[#dde4df] bg-white p-6"><div className="mb-6 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf4f1] text-[#397363]"><Bell size={17} /></span><div><p className="text-sm font-semibold">Notifications</p><p className="text-[11px] text-[#8a9691]">Choose what reaches your team</p></div></div><div className="divide-y divide-[#edf0ee]">{([ ["emailAlerts", "Estimate requests", "Email the sales team for new website estimates"], ["leadAlerts", "Lead reminders", "Alert owners when a lead needs follow-up"], ["plannerAlerts", "Kitchen plan submissions", "Notify designers when a new layout arrives"], ["weeklyReport", "Weekly performance report", "Send a Monday revenue and operations summary"] ] as const).map(([key, title, description]) => <div key={key} className="flex items-center justify-between gap-4 py-4"><div><p className="text-xs font-semibold">{title}</p><p className="mt-1 text-[10px] text-[#8b9692]">{description}</p></div><button onClick={() => setSettings((current) => ({ ...current, [key]: !current[key] }))} className={`relative h-6 w-11 rounded-full transition ${settings[key] ? "bg-[#2f6e5d]" : "bg-[#dce2df]"}`}><span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${settings[key] ? "left-[22px]" : "left-0.5"}`} /></button></div>)}</div></section>
        </div>
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#dde4df] bg-white p-6"><div className="mb-5 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf4f1] text-[#397363]"><Palette size={17} /></span><div><p className="text-sm font-semibold">Brand appearance</p><p className="text-[11px] text-[#8a9691]">Logo and interface colors</p></div></div><div className="rounded-2xl bg-[#10231e] p-5"><div className="flex items-center gap-3"><img src={IMAGES.logo} alt="" className="h-12 w-12 rounded-xl" /><div><p className="text-sm font-semibold text-white">House of Granite</p><p className="text-[10px] text-[#e7c76c]">STUDIO</p></div></div></div><div className="mt-4 grid grid-cols-3 gap-3">{[["Forest", "#173f36"], ["Champagne", "#e7c76c"], ["Porcelain", "#f3f5f2"]].map(([name, color]) => <button key={name} onClick={() => showToast(`${name} color selected`)} className="rounded-xl border border-[#e1e6e3] p-2 text-left"><span className="block h-8 rounded-lg" style={{ backgroundColor: color }} /><span className="mt-2 block text-[9px] font-medium text-[#6e7a75]">{name}</span></button>)}</div></section>
          <section className="rounded-2xl border border-[#dde4df] bg-white p-6"><div className="mb-5 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf4f1] text-[#397363]"><Zap size={17} /></span><div><p className="text-sm font-semibold">Integrations</p><p className="text-[11px] text-[#8a9691]">Future-ready connection points</p></div></div><div className="space-y-2">{["QuickBooks Online", "HubSpot CRM", "Google Analytics", "Mailchimp", "Calendly"].map((name, index) => <button key={name} onClick={() => showToast(`${name} connection flow opened`)} className="flex w-full items-center justify-between rounded-xl border border-[#edf0ee] px-3.5 py-3 text-left hover:bg-[#fafcfa]"><span className="text-xs font-medium">{name}</span><span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${index === 2 ? "bg-emerald-50 text-emerald-700" : "bg-[#f1f3f2] text-[#83908b]"}`}>{index === 2 ? "Connected" : "Connect"}</span></button>)}</div></section>
        </div>
      </div>
    </>
  );
}

function SettingInput({ label, value }: { label: string; value: string }) {
  return <label className="block"><span className="mb-1.5 block text-[10px] font-semibold text-[#64716c]">{label}</span><input defaultValue={value} className="h-10 w-full rounded-xl border border-[#dfe5e1] bg-[#fbfcfb] px-3 text-xs outline-none transition focus:border-[#4b8273] focus:ring-4 focus:ring-[#34705f]/8" /></label>;
}

function LeadDialog({ lead, onClose, showToast }: { lead: Lead; onClose: () => void; showToast: (message: string) => void }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#10201b]/55 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-scale-in" onClick={(event) => event.stopPropagation()}>
        <div className="relative bg-[#153f35] p-6 text-white"><div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#e7c76c]/10 blur-3xl" /><button onClick={onClose} className="absolute right-4 top-4 rounded-xl bg-white/10 p-2 text-white/60 hover:bg-white/20 hover:text-white"><X size={17} /></button><div className="flex items-center gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7c76c] text-sm font-bold text-[#153f35]">{lead.avatar}</span><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e7c76c]">{lead.id}</p><h2 className="mt-1 text-xl font-semibold">{lead.name}</h2><p className="mt-0.5 text-xs text-white/50">{lead.company}</p></div></div></div>
        <div className="p-6"><div className="grid gap-3 sm:grid-cols-2"><DialogField label="Project" value={lead.project} /><DialogField label="Potential value" value={`$${lead.value.toLocaleString()}`} /><DialogField label="Email" value={lead.email} /><DialogField label="Phone" value={lead.phone} /><DialogField label="Lead source" value={lead.source} /><DialogField label="Received" value={lead.date} /></div><div className="mt-5 rounded-2xl border border-[#e4e8e5] bg-[#f7f9f7] p-4"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#8a9691]">Current stage</span><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[lead.status]}`}>{lead.status}</span></div><p className="mt-3 text-xs leading-5 text-[#66736e]">Customer requested a consultation and preliminary pricing. Review scope, confirm measurements, and schedule the next sales action.</p></div><div className="mt-6 grid grid-cols-2 gap-3"><button onClick={() => { showToast(`Called ${lead.name}`); onClose(); }} className="rounded-xl border border-[#dce3df] px-4 py-3 text-xs font-semibold text-[#50605a] hover:bg-[#f6f8f6]">Call customer</button><button onClick={() => { showToast(`${lead.name} moved to the next stage`); onClose(); }} className="flex items-center justify-center gap-2 rounded-xl bg-[#173f36] px-4 py-3 text-xs font-semibold text-white">Advance lead <ArrowRight size={14} /></button></div></div>
      </div>
    </div>
  );
}

function DialogField({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl border border-[#e7ebe8] p-3"><p className="text-[9px] font-semibold uppercase tracking-wider text-[#98a29e]">{label}</p><p className="mt-1 text-xs font-medium text-[#34413d]">{value}</p></div>;
}
