"use client";

import { type FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-slate-800">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500/30 transition focus:border-indigo-500 focus:ring-4"
            placeholder="Alex Johnson"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-800">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500/30 transition focus:border-indigo-500 focus:ring-4"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-semibold text-slate-800">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500/30 transition focus:border-indigo-500 focus:ring-4"
          placeholder="Company or team name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-slate-800">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500/30 transition focus:border-indigo-500 focus:ring-4"
          placeholder="Share context, timelines, and success metrics."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden />
        Submit inquiry
      </button>

      {status === "sent" ? (
        <p className="text-sm font-medium text-emerald-600" role="status">
          Thank you—this demo form captured your message locally. Connect a backend action or
          provider to deliver submissions.
        </p>
      ) : null}
    </form>
  );
}
