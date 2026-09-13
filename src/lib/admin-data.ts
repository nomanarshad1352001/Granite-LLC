export const DEMO_ADMIN = {
  email: "admin@houseofgranite.com",
  password: "Granite123!",
  name: "Olivia Stone",
  role: "Owner & Administrator",
};

export type LeadStatus = "New" | "Contacted" | "Qualified" | "Site Visit" | "Quoted" | "Won";
export type ProjectStatus = "Planning" | "Templating" | "Fabrication" | "Installation" | "Complete";

export const dashboardStats = [
  { label: "Pipeline value", value: "$284,750", change: "+18.2%", trend: "up", detail: "vs. last month" },
  { label: "New leads", value: "47", change: "+12.5%", trend: "up", detail: "9 need follow-up" },
  { label: "Active projects", value: "28", change: "+4", trend: "up", detail: "6 installing this week" },
  { label: "Win rate", value: "68.4%", change: "+5.1%", trend: "up", detail: "from 91 estimates" },
];

export const revenueData = [
  { month: "Jan", revenue: 68, target: 60 },
  { month: "Feb", revenue: 74, target: 64 },
  { month: "Mar", revenue: 65, target: 68 },
  { month: "Apr", revenue: 88, target: 72 },
  { month: "May", revenue: 82, target: 76 },
  { month: "Jun", revenue: 96, target: 80 },
  { month: "Jul", revenue: 91, target: 84 },
  { month: "Aug", revenue: 108, target: 88 },
  { month: "Sep", revenue: 102, target: 92 },
  { month: "Oct", revenue: 121, target: 96 },
  { month: "Nov", revenue: 116, target: 100 },
  { month: "Dec", revenue: 134, target: 106 },
];

export const leads = [
  { id: "LD-1048", name: "Emma Rodriguez", company: "Homeowner", email: "emma.r@example.com", phone: "(555) 218-4490", project: "Full Kitchen Remodel", value: 38500, status: "New" as LeadStatus, source: "Kitchen Planner", date: "Today, 9:42 AM", priority: "High", avatar: "ER" },
  { id: "LD-1047", name: "Marcus Lee", company: "Lee Custom Homes", email: "marcus@leecustom.example", phone: "(555) 310-9981", project: "Quartz Countertops · 4 units", value: 24200, status: "Qualified" as LeadStatus, source: "Contractor Portal", date: "Today, 8:15 AM", priority: "High", avatar: "ML" },
  { id: "LD-1046", name: "Sophia Bennett", company: "Homeowner", email: "sophia.b@example.com", phone: "(555) 882-0441", project: "Primary Bathroom", value: 21800, status: "Contacted" as LeadStatus, source: "Google", date: "Yesterday", priority: "Medium", avatar: "SB" },
  { id: "LD-1045", name: "Ethan Brooks", company: "Brooks Development", email: "ethan@brooksdev.example", phone: "(555) 602-7712", project: "Granite Fabrication · 12 units", value: 72000, status: "Site Visit" as LeadStatus, source: "Referral", date: "Yesterday", priority: "High", avatar: "EB" },
  { id: "LD-1044", name: "Ava Thompson", company: "Homeowner", email: "ava.t@example.com", phone: "(555) 445-3277", project: "Kitchen Countertops", value: 9200, status: "Quoted" as LeadStatus, source: "Instagram", date: "Mar 18", priority: "Medium", avatar: "AT" },
  { id: "LD-1043", name: "Noah Patel", company: "Axis Build Group", email: "noah@axisbuild.example", phone: "(555) 777-1290", project: "Commercial Reception Desk", value: 16800, status: "Won" as LeadStatus, source: "Repeat Client", date: "Mar 17", priority: "Low", avatar: "NP" },
  { id: "LD-1042", name: "Isabella Clark", company: "Homeowner", email: "isabella.c@example.com", phone: "(555) 908-6632", project: "Tub-to-Shower Conversion", value: 14600, status: "Qualified" as LeadStatus, source: "Website", date: "Mar 16", priority: "Medium", avatar: "IC" },
  { id: "LD-1041", name: "Liam Foster", company: "Foster Interiors", email: "liam@foster.example", phone: "(555) 456-7720", project: "Quartzite Island", value: 11800, status: "Quoted" as LeadStatus, source: "Designer", date: "Mar 15", priority: "Medium", avatar: "LF" },
];

export const projects = [
  { id: "PR-2401", name: "Rodriguez Kitchen", client: "Emma Rodriguez", type: "Kitchen Remodel", value: 38500, status: "Planning" as ProjectStatus, progress: 18, due: "Apr 28", manager: "Mia Chen", image: "kitchen", next: "Design review · Mar 24" },
  { id: "PR-2398", name: "Bennett Primary Bath", client: "Sophia Bennett", type: "Bathroom Remodel", value: 21800, status: "Templating" as ProjectStatus, progress: 42, due: "Apr 12", manager: "Daniel Reed", image: "bathroom", next: "Template visit · Tomorrow" },
  { id: "PR-2394", name: "Thompson Residence", client: "Ava Thompson", type: "Quartz Countertops", value: 9200, status: "Fabrication" as ProjectStatus, progress: 67, due: "Mar 29", manager: "Mia Chen", image: "countertop", next: "CNC cutting · Today" },
  { id: "PR-2390", name: "Axis Reception", client: "Axis Build Group", type: "Commercial Stone", value: 16800, status: "Installation" as ProjectStatus, progress: 88, due: "Mar 25", manager: "Luis Rivera", image: "countertop", next: "Installation · Mar 24" },
  { id: "PR-2387", name: "Clark Guest Bathroom", client: "Isabella Clark", type: "Shower Conversion", value: 14600, status: "Planning" as ProjectStatus, progress: 25, due: "May 3", manager: "Daniel Reed", image: "bathroom", next: "Material selection · Mar 26" },
  { id: "PR-2382", name: "Foster Quartzite Island", client: "Foster Interiors", type: "Island Fabrication", value: 11800, status: "Complete" as ProjectStatus, progress: 100, due: "Mar 18", manager: "Luis Rivera", image: "kitchen", next: "Request review" },
];

export const kitchenPlans = [
  { id: "KP-588", title: "Rodriguez Modern L", client: "Emma Rodriguez", shape: "L-Shaped", items: 14, walls: 3, submitted: "12 min ago", status: "New", budget: "$30k–$45k", preview: "kitchen" },
  { id: "KP-587", title: "Murphy Island Concept", client: "Grace Murphy", shape: "With Island", items: 18, walls: 4, submitted: "2 hours ago", status: "Reviewing", budget: "$45k–$60k", preview: "kitchen" },
  { id: "KP-586", title: "Lee Unit B Galley", client: "Marcus Lee", shape: "Galley", items: 11, walls: 2, submitted: "Yesterday", status: "Estimated", budget: "$15k–$25k", preview: "kitchen" },
  { id: "KP-585", title: "Thompson U Layout", client: "Ava Thompson", shape: "U-Shaped", items: 16, walls: 3, submitted: "Mar 19", status: "Converted", budget: "$25k–$35k", preview: "kitchen" },
];

export const tasks = [
  { id: 1, title: "Call Emma about planner submission", due: "Today · 10:30 AM", owner: "Olivia", priority: "High", done: false },
  { id: 2, title: "Approve Thompson slab layout", due: "Today · 1:00 PM", owner: "Luis", priority: "High", done: false },
  { id: 3, title: "Send Bennett change order", due: "Today · 3:00 PM", owner: "Mia", priority: "Medium", done: false },
  { id: 4, title: "Confirm Axis installation access", due: "Tomorrow · 8:00 AM", owner: "Daniel", priority: "Medium", done: false },
  { id: 5, title: "Publish spring quartz promotion", due: "Mar 26", owner: "Olivia", priority: "Low", done: true },
];

export const recentActivity = [
  { id: 1, person: "Mia Chen", action: "moved Thompson Residence to Fabrication", time: "8 minutes ago", type: "project", initials: "MC" },
  { id: 2, person: "Website", action: "received a new kitchen planner design from Emma Rodriguez", time: "12 minutes ago", type: "lead", initials: "W" },
  { id: 3, person: "Luis Rivera", action: "uploaded 6 installation photos to Axis Reception", time: "34 minutes ago", type: "media", initials: "LR" },
  { id: 4, person: "Olivia Stone", action: "sent estimate EST-1842 to Ava Thompson", time: "1 hour ago", type: "estimate", initials: "OS" },
  { id: 5, person: "Daniel Reed", action: "completed the Bennett template appointment", time: "2 hours ago", type: "project", initials: "DR" },
];

export const contentItems = [
  { id: 1, title: "Spring Quartz Event", type: "Promotion banner", status: "Published", updated: "20 min ago", views: "1,284", author: "Olivia Stone" },
  { id: 2, title: "How to Choose a Countertop", type: "Blog post", status: "Draft", updated: "Yesterday", views: "—", author: "Mia Chen" },
  { id: 3, title: "Kitchen Remodeling", type: "Service page", status: "Published", updated: "Mar 18", views: "3,892", author: "Olivia Stone" },
  { id: 4, title: "Taj Mahal Quartzite", type: "Material", status: "Published", updated: "Mar 15", views: "1,104", author: "Luis Rivera" },
  { id: 5, title: "Riverside Service Area", type: "Local SEO page", status: "Review", updated: "Mar 12", views: "768", author: "Mia Chen" },
];

export const galleryItems = [
  { id: 1, title: "Westbrook Modern Kitchen", category: "Kitchens", status: "Published", images: 12, featured: true, updated: "Today" },
  { id: 2, title: "Bennett Marble Shower", category: "Bathrooms", status: "Published", images: 8, featured: true, updated: "Yesterday" },
  { id: 3, title: "Axis Commercial Lobby", category: "Commercial", status: "Draft", images: 6, featured: false, updated: "Mar 19" },
  { id: 4, title: "Clark Before & After", category: "Before & After", status: "Published", images: 4, featured: false, updated: "Mar 16" },
  { id: 5, title: "Foster Waterfall Island", category: "Countertops", status: "Published", images: 9, featured: true, updated: "Mar 14" },
];

export const teamMembers = [
  { id: 1, name: "Olivia Stone", role: "Owner & Administrator", email: "olivia@houseofgranite.com", initials: "OS", status: "Online", projects: 8 },
  { id: 2, name: "Mia Chen", role: "Project Manager", email: "mia@houseofgranite.com", initials: "MC", status: "Online", projects: 11 },
  { id: 3, name: "Daniel Reed", role: "Remodeling Manager", email: "daniel@houseofgranite.com", initials: "DR", status: "Away", projects: 7 },
  { id: 4, name: "Luis Rivera", role: "Fabrication Lead", email: "luis@houseofgranite.com", initials: "LR", status: "Online", projects: 9 },
  { id: 5, name: "Sofia James", role: "Design Consultant", email: "sofia@houseofgranite.com", initials: "SJ", status: "Offline", projects: 5 },
];

export const platformFeatures = [
  { title: "Visual kitchen planner", description: "Customers build layouts, position cabinets and appliances, enter measurements, and submit a complete design brief." },
  { title: "Lead & CRM pipeline", description: "Capture homeowners, contractors, builders, referrals, and walk-ins in one qualified sales workflow." },
  { title: "Estimate management", description: "Track new requests, project scope, materials, budget, appointment preference, and quote status." },
  { title: "Project operations", description: "Manage planning, templating, fabrication, installation, deadlines, owners, and job progress." },
  { title: "Content management", description: "Maintain services, materials, promotions, blog content, testimonials, service areas, and SEO pages." },
  { title: "Media library", description: "Organize project galleries, before-and-after sets, plans, job-site photos, and featured portfolio work." },
  { title: "Contractor portal", description: "Accept plans, cabinet layouts, deadlines, measurements, recurring pricing requests, and trade inquiries." },
  { title: "Analytics dashboard", description: "Monitor pipeline value, lead sources, conversion, revenue, project health, content views, and staff workload." },
];

export const idealBuyers = [
  "Countertop fabricators and stone yards",
  "Kitchen and bathroom remodeling companies",
  "Cabinet dealers and design studios",
  "General contractors and design-build firms",
  "Tile, backsplash, and surface installers",
  "Multi-location home-improvement franchises",
  "Interior designers managing renovation clients",
  "Builders serving custom-home and multi-unit projects",
];

export const qualities = [
  "Premium consumer-facing brand experience",
  "Mobile-first kitchen planning workflow",
  "Conversion-focused estimate capture",
  "Role-ready SaaS administration experience",
  "Clear operational pipeline from lead to installation",
  "Accessible navigation and readable interfaces",
  "Local SEO and service-area content foundation",
  "Extensible integration model for CRM, email, accounting, and scheduling",
];

export const techStack = [
  { layer: "Web framework", technology: "Next.js 16 App Router", purpose: "Routing, server rendering, API handlers, metadata, and deploy-ready production builds" },
  { layer: "Language", technology: "TypeScript", purpose: "Strict typing across UI, mock domain data, forms, and route handlers" },
  { layer: "Interface", technology: "React 19", purpose: "Interactive dashboard, planner, filtering, forms, modals, and responsive navigation" },
  { layer: "Styling", technology: "Tailwind CSS 4", purpose: "Responsive design system, glass surfaces, gradients, motion, and component styling" },
  { layer: "Icons", technology: "Lucide React", purpose: "Consistent accessible iconography across the marketing website and admin product" },
  { layer: "Images", technology: "Unsplash CDN + SVG brand asset", purpose: "Portable deployment imagery with a source-controlled business logo" },
  { layer: "Demo auth", technology: "HTTP-only cookie session", purpose: "Working admin sign-in without a user database for this demonstration" },
  { layer: "Data", technology: "Typed in-code mock data", purpose: "Rich demonstration content with zero database setup or persistence requirement" },
  { layer: "Deployment", technology: "Vercel-ready", purpose: "Edge-friendly hosting, SSL, CDN delivery, preview deployments, and environment configuration" },
];
