"use server";

import { redirect } from "next/navigation";

export async function submitLead(formData: FormData) {
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!company || !email || !message) {
    redirect("/?kontak=gagal");
  }

  // TODO: hubungkan ke CRM, webhook internal, atau ticketing (mis. Linear, HubSpot).
  redirect("/?terkirim=1");
}
