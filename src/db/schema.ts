import { pgTable, text, serial, timestamp, integer, boolean, jsonb } from "drizzle-orm/pg-core";

// Estimate requests
export const estimates = pgTable("estimates", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  projectAddress: text("project_address"),
  city: text("city"),
  zipCode: text("zip_code"),
  propertyType: text("property_type"),
  projectType: text("project_type"),
  timeline: text("timeline"),
  customerType: text("customer_type"),
  description: text("description"),
  measurements: text("measurements"),
  preferredMaterial: text("preferred_material"),
  contactMethod: text("contact_method"),
  appointmentDate: text("appointment_date"),
  services: jsonb("services").$type<string[]>(),
  fileUrls: jsonb("file_urls").$type<string[]>(),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Kitchen design submissions
export const kitchenDesigns = pgTable("kitchen_designs", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  propertyAddress: text("property_address"),
  contactMethod: text("contact_method"),
  kitchenShape: text("kitchen_shape"),
  designData: jsonb("design_data"),
  notes: text("notes"),
  fileUrls: jsonb("file_urls").$type<string[]>(),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contractor submissions
export const contractorSubmissions = pgTable("contractor_submissions", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  projectType: text("project_type"),
  description: text("description"),
  deadline: text("deadline"),
  fileUrls: jsonb("file_urls").$type<string[]>(),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Gallery projects
export const galleryProjects = pgTable("gallery_projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  isBefore: boolean("is_before").default(false),
  afterImageUrl: text("after_image_url"),
  featured: boolean("featured").default(false),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location"),
  rating: integer("rating").default(5),
  text: text("text").notNull(),
  projectType: text("project_type"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact messages
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
