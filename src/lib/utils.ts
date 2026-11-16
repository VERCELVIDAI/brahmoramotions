import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(data: {
  fullName?: string;
  brandName?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
  description?: string;
}) {
  const parts = [
    `*NEW PROJECT ENQUIRY — BRAHMORA MOTIONS*`,
    ``,
    `*Full Name:* ${data.fullName || "Not provided"}`,
    `*Brand / Business:* ${data.brandName || "Not provided"}`,
    `*Email:* ${data.email || "Not provided"}`,
    `*Phone:* ${data.phone || "Not provided"}`,
    `*Service Required:* ${data.service || "General Enquiry"}`,
    `*Project Budget:* ${data.budget || "Not Decided"}`,
  ];

  const detailText = data.message || data.description;
  if (detailText) {
    parts.push(``, `*Project Description:*`, detailText);
  }

  parts.push(``, `_Sent from brahmoramotions.com_`);

  return encodeURIComponent(parts.join("\n"));
}
