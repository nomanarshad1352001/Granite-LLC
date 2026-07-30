// All images are stored locally in /public/images/ for download
export const IMAGES = {
  logo: "/images/logo.png",
  hero: "/images/hero.jpg",
  
  kitchens: [
    "/images/kitchens/kitchen-1.jpg",
    "/images/kitchens/kitchen-2.jpg",
    "/images/kitchens/kitchen-3.jpg",
    "/images/kitchens/kitchen-4.jpg",
    "/images/kitchens/kitchen-5.jpg",
    "/images/kitchens/kitchen-6.jpg",
    "/images/kitchens/kitchen-7.jpg",
    "/images/kitchens/kitchen-8.jpg",
  ],
  
  bathrooms: [
    "/images/bathrooms/bathroom-1.jpg",
    "/images/bathrooms/bathroom-2.jpg",
    "/images/bathrooms/bathroom-3.jpg",
    "/images/bathrooms/bathroom-4.jpg",
    "/images/bathrooms/bathroom-5.jpg",
    "/images/bathrooms/bathroom-6.jpg",
  ],
  
  countertops: [
    "/images/countertops/countertop-1.jpg",
    "/images/countertops/countertop-2.jpg",
    "/images/countertops/countertop-3.jpg",
    "/images/countertops/countertop-4.jpg",
    "/images/countertops/countertop-5.jpg",
    "/images/countertops/countertop-6.jpg",
  ],
  
  homes: [
    "/images/homes/home-1.jpg",
    "/images/homes/home-2.jpg",
    "/images/homes/home-3.jpg",
    "/images/homes/home-4.jpg",
    "/images/homes/home-5.jpg",
    "/images/homes/home-6.jpg",
    "/images/homes/home-7.jpg",
    "/images/homes/home-8.jpg",
  ],
  
  backsplash: [
    "/images/backsplash/backsplash-1.jpg",
    "/images/backsplash/backsplash-2.jpg",
    "/images/backsplash/backsplash-3.jpg",
    "/images/backsplash/backsplash-4.jpg",
  ],
  
  outdoor: [
    "/images/outdoor/outdoor-1.jpg",
    "/images/outdoor/outdoor-2.jpg",
  ],
  
  fireplace: [
    "/images/fireplace/fireplace-1.jpg",
    "/images/fireplace/fireplace-2.jpg",
  ],
  
  work: [
    "/images/work/work-1.jpg",
    "/images/work/work-2.jpg",
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
  
  galleryProjects: [
    { id: 1, title: "Modern Minimalist Kitchen", category: "kitchens", description: "Complete kitchen remodel with white quartz countertops and custom cabinetry", featured: true },
    { id: 2, title: "Luxury Master Bathroom", category: "bathrooms", description: "Walk-in shower with frameless glass and marble vanity top", featured: true },
    { id: 3, title: "Granite Kitchen Island", category: "countertops", description: "Large kitchen island with Colonial White granite and waterfall edge", featured: true },
    { id: 4, title: "Coastal Kitchen Renovation", category: "kitchens", description: "Beach-inspired kitchen with blue quartz and shaker cabinets", featured: false },
    { id: 5, title: "Spa-Like Bathroom", category: "bathrooms", description: "Freestanding tub with marble surround and double vanity", featured: false },
    { id: 6, title: "Quartzite Countertops", category: "countertops", description: "Super White quartzite with mitered edge detail", featured: false },
    { id: 7, title: "Traditional Kitchen Update", category: "kitchens", description: "Classic kitchen with Baltic Brown granite and raised panel doors", featured: false },
    { id: 8, title: "Guest Bathroom Remodel", category: "bathrooms", description: "Modern guest bath with quartz vanity and walk-in shower", featured: false },
    { id: 9, title: "Double Vanity Installation", category: "vanities", description: "72\" double vanity with Calacatta quartz top", featured: true },
    { id: 10, title: "Outdoor Kitchen Setup", category: "outdoor", description: "Complete outdoor kitchen with granite counters and built-in grill", featured: true },
    { id: 11, title: "Fireplace Surround", category: "fireplace", description: "Floor-to-ceiling marble fireplace surround", featured: false },
    { id: 12, title: "Subway Tile Backsplash", category: "backsplash", description: "Classic white subway tile with dark grout accent", featured: false },
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
