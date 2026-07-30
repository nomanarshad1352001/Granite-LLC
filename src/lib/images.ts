// All images use Unsplash free CDN — available anywhere, no local files needed
// Logo is SVG stored locally in /public/images/logo.svg

export const IMAGES = {
  // Local SVG logo - always works
  logo: "/images/logo.svg",
  
  // Hero image
  hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop&q=80",

  // Kitchen images (8)
  kitchens: [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  ],

  // Bathroom images (6)
  bathrooms: [
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  ],

  // Countertop images (6)
  countertops: [
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80",
    "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  ],

  // Home exterior images (8) for service areas
  homes: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  ],

  // Backsplash images (4)
  backsplash: [
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
  ],

  // Outdoor kitchen images (2)
  outdoor: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  ],

  // Fireplace images (2)
  fireplace: [
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
  ],

  // Work/contractor images (2)
  work: [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  ],
};

// Dummy data for the entire site
export const DUMMY_DATA = {
  stats: {
    yearsExperience: 15,
    projectsCompleted: 2500,
    happyClients: 1800,
    fiveStarReviews: 450,
  },

  reviews: [
    { id: 1, name: "Sarah Mitchell", location: "Springfield, IL", rating: 5, project: "Kitchen Countertops", text: "House of Granite did an incredible job on our kitchen countertops. The quartz turned out beautiful and the installation was flawless. The team was professional, clean, and finished on time. Highly recommend!", date: "2024-01-15", verified: true },
    { id: 2, name: "James & Karen Peterson", location: "Riverside, CA", rating: 5, project: "Full Kitchen Remodel", text: "We hired them for a full kitchen remodel — countertops, cabinets, backsplash. Everything was completed on time and looks amazing. Very professional team that kept us informed throughout the project.", date: "2024-01-10", verified: true },
    { id: 3, name: "Maria Lopez", location: "Oakwood, OH", rating: 5, project: "Bathroom Remodel", text: "The bathroom remodel exceeded our expectations. The walk-in shower with custom tile work is stunning. Great communication throughout the project. We'll definitely use them again.", date: "2024-01-05", verified: true },
    { id: 4, name: "David Richardson", location: "Lakewood, CO", rating: 5, project: "Granite Countertops", text: "Beautiful granite countertops installed in our kitchen. The team was punctual, efficient, and the quality is outstanding. Our kitchen looks like it belongs in a magazine!", date: "2023-12-28", verified: true },
    { id: 5, name: "Jennifer & Tom Harrison", location: "Fairfield, CT", rating: 5, project: "Kitchen & Bathroom", text: "We had both our kitchen and master bathroom done. The quartzite countertops are gorgeous, and the bathroom tile work is perfect. Professional from start to finish.", date: "2023-12-20", verified: true },
    { id: 6, name: "Michael Thompson", location: "Greenville, SC", rating: 5, project: "Commercial Project", text: "As a contractor, I've used House of Granite for multiple commercial projects. Their fabrication quality is consistently excellent, and they always meet our deadlines. Great partner.", date: "2023-12-15", verified: true },
    { id: 7, name: "Lisa Wang", location: "Maplewood, NJ", rating: 5, project: "Vanity & Countertops", text: "Replaced our bathroom vanity countertop with marble. The attention to detail was impressive. They handled everything from demolition to final cleanup. Beautiful work!", date: "2023-12-10", verified: true },
    { id: 8, name: "Robert & Susan Garcia", location: "Cedar Hills, UT", rating: 5, project: "Kitchen Remodel", text: "From design to installation, the entire experience was seamless. The kitchen island with waterfall edge is the centerpiece of our home. Thank you, House of Granite!", date: "2023-12-05", verified: true },
    { id: 9, name: "Amanda Stevens", location: "Springfield, MO", rating: 5, project: "Quartz Countertops", text: "Chose quartz for our busy family kitchen and couldn't be happier. Low maintenance, beautiful, and the installation was done in one day. The team cleaned up perfectly.", date: "2023-11-28", verified: true },
    { id: 10, name: "Christopher & Emily Brown", location: "Riverside, IL", rating: 5, project: "Master Bath Renovation", text: "Our master bathroom renovation is absolutely beautiful. Double vanity with quartz, walk-in shower with bench, everything is perfect. The team was respectful of our home.", date: "2023-11-20", verified: true },
    { id: 11, name: "Patricia Nguyen", location: "Oakwood, TX", rating: 5, project: "Kitchen Island", text: "We added a massive kitchen island with a granite countertop. It's become the heart of our home. The craftsmanship is exceptional and the price was fair.", date: "2023-11-15", verified: true },
    { id: 12, name: "William & Nancy Davis", location: "Lakewood, WA", rating: 5, project: "Outdoor Kitchen", text: "House of Granite installed our outdoor kitchen countertops. They look amazing and have held up perfectly through all weather conditions. Highly recommend for outdoor projects!", date: "2023-11-10", verified: true },
    { id: 13, name: "Jessica Martinez", location: "Fairfield, OH", rating: 5, project: "Cabinet Replacement", text: "New cabinets transformed our dated kitchen into a modern masterpiece. The soft-close drawers are a game changer. Professional installation with zero issues.", date: "2023-11-05", verified: true },
    { id: 14, name: "Daniel & Rebecca Wilson", location: "Greenville, NC", rating: 5, project: "Full Renovation", text: "Complete kitchen and two bathroom renovations. The project management was excellent — everything coordinated smoothly. Our home feels brand new!", date: "2023-10-28", verified: true },
    { id: 15, name: "Mark Anderson", location: "Maplewood, MN", rating: 5, project: "Fireplace Surround", text: "Beautiful marble fireplace surround installation. It's now the focal point of our living room. The team was professional and the quality exceeded expectations.", date: "2023-10-20", verified: true },
    { id: 16, name: "Stephanie & John Taylor", location: "Cedar Hills, OR", rating: 5, project: "Backsplash Installation", text: "The subway tile backsplash with accent strip looks incredible. Great attention to detail and the grout lines are perfectly even. Transformed our kitchen!", date: "2023-10-15", verified: true },
  ],

  serviceAreas: [
    { name: "Springfield", desc: "Our headquarters — full countertop and remodeling services", primary: true, projects: 450, img: 0 },
    { name: "Riverside", desc: "Kitchen remodeling, bathroom renovation, countertop installation", primary: true, projects: 320, img: 1 },
    { name: "Oakwood", desc: "Residential and commercial countertop services", primary: true, projects: 280, img: 2 },
    { name: "Lakewood", desc: "Complete remodeling and countertop fabrication", primary: true, projects: 245, img: 3 },
    { name: "Fairfield", desc: "Countertop fabrication, cabinets, and full remodeling", primary: false, projects: 190, img: 4 },
    { name: "Greenville", desc: "Kitchen remodeling and countertop installation", primary: false, projects: 175, img: 5 },
    { name: "Maplewood", desc: "Bathroom renovations and vanity countertops", primary: false, projects: 160, img: 6 },
    { name: "Cedar Hills", desc: "Countertops, backsplash, and cabinet services", primary: false, projects: 145, img: 7 },
    { name: "Woodland Park", desc: "Kitchen and bathroom remodeling services", primary: false, projects: 120, img: 0 },
    { name: "Summit Heights", desc: "Premium countertop installation services", primary: false, projects: 95, img: 1 },
    { name: "Valley View", desc: "Full remodeling and countertop services", primary: false, projects: 85, img: 2 },
    { name: "Brookfield", desc: "Residential countertop and cabinet services", primary: false, projects: 75, img: 3 },
  ],

  materials: [
    { name: "Absolute Black Granite", type: "Granite", origin: "India", price: "$$", popular: true },
    { name: "Colonial White Granite", type: "Granite", origin: "India", price: "$$", popular: true },
    { name: "Giallo Ornamental Granite", type: "Granite", origin: "Brazil", price: "$$", popular: true },
    { name: "Baltic Brown Granite", type: "Granite", origin: "Finland", price: "$$$", popular: false },
    { name: "Uba Tuba Granite", type: "Granite", origin: "Brazil", price: "$", popular: true },
    { name: "Santa Cecilia Granite", type: "Granite", origin: "Brazil", price: "$", popular: true },
    { name: "Calacatta Quartz", type: "Quartz", origin: "Engineered", price: "$$$", popular: true },
    { name: "Carrara Quartz", type: "Quartz", origin: "Engineered", price: "$$", popular: true },
    { name: "Pure White Quartz", type: "Quartz", origin: "Engineered", price: "$$", popular: true },
    { name: "Concrete Grey Quartz", type: "Quartz", origin: "Engineered", price: "$$", popular: false },
    { name: "Super White Quartzite", type: "Quartzite", origin: "Brazil", price: "$$$$", popular: true },
    { name: "Taj Mahal Quartzite", type: "Quartzite", origin: "Brazil", price: "$$$$", popular: true },
    { name: "Calacatta Marble", type: "Marble", origin: "Italy", price: "$$$$", popular: true },
    { name: "Carrara Marble", type: "Marble", origin: "Italy", price: "$$$", popular: true },
  ],

  brands: [
    "Cambria", "Silestone", "Caesarstone", "MSI", "Cosentino", "Daltile", "Arizona Tile", "Pental", "LG Viatera", "Hanstone"
  ],

  certifications: [
    "Licensed & Insured",
    "BBB A+ Rating",
    "EPA Lead-Safe Certified",
    "OSHA Compliant",
    "Manufacturer Certified Installer"
  ],
};
