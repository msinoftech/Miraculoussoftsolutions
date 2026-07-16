"use client";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill all required fields.");
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("");

      // Send email via API (includes lead saving on server side)
      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Check email API response
      if (!emailRes.ok) {
        try {
          const emailErrData = await emailRes.json();
          setStatus("error");
          setErrorMessage(emailErrData.error || `Email API error: ${emailRes.status}`);
        } catch {
          setStatus("error");
          setErrorMessage(`Email API error: ${emailRes.status}`);
        }
      } else {
        const emailData = await emailRes.json();
        if (!emailData.success) {
          setStatus("error");
          setErrorMessage(emailData.error || "Failed to send email.");
        } else {
          setStatus("success");
          setErrorMessage("");
          // Clear form fields after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        }
      }

    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please try again.");
    }
  };


  return (
    <>

    <form onSubmit={handleSubmit} className="space-y-4 relative" aria-live="polite">
      
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21a8 8 0 1 0-16 0" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </span>
        <input
          name="name"
          type="text"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full rounded-xl border border-zinc-300 bg-[var(--off)] py-3 pl-11 pr-4 placeholder:text-zinc-950/60 outline-none transition focus:border-red-500/70 focus:bg-[var(--off)] focus:ring-2 focus:ring-red-500/30"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.61 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.49 2.61.61A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full rounded-xl border border-zinc-300 bg-[var(--off)] py-3 pl-11 pr-4 placeholder:text-zinc-950/60 outline-none transition focus:border-red-500/70 focus:bg-[var(--off)] focus:ring-2 focus:ring-red-500/30"
          />
        </div>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-xl border border-zinc-300 bg-[var(--off)] py-3 pl-11 pr-4 placeholder:text-zinc-950/60 outline-none transition focus:border-red-500/70 focus:bg-[var(--off)] focus:ring-2 focus:ring-red-500/30"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 6h16" />
              <path d="M4 12h12" />
              <path d="M4 18h9" />
            </svg>
          </span>
          <select
            aria-label="Select Service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={`block w-full rounded-xl border py-3 pl-11 pr-4 outline-none transition ${
              formData.service ? "text-zinc-950" : "text-zinc-950/60"
            } border-zinc-300 bg-[var(--off)] focus:border-red-500/70 focus:ring-1 focus:ring-red-500/30`}
          >
            <option value="" disabled>Select Service</option>
            <option value="SaaS Development">SaaS Development</option>
            <option value="B2B Platform Engineering">B2B Platform Engineering</option>
            <option value="ERP & Automation">ERP & Automation</option>
            <option value="eCommerce Solutions">eCommerce Solutions</option>
            <option value="Web & Mobile Apps">Web & Mobile Apps</option>
            <option value="Digital Growth Strategy">Digital Growth Strategy</option>
            <option value="API-First Engineering">API-First Engineering</option>
            <option value="Cloud Infrastructure">Cloud Infrastructure</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-4 text-zinc-500">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="How can we help?"
          value={formData.message}
          onChange={handleChange}
          className="block w-full rounded-xl border border-zinc-300 bg-[var(--off)] py-3 pl-11 pr-4 placeholder:text-zinc-950/60 outline-none transition focus:border-red-500/70 focus:bg-[var(--off)] focus:ring-2 focus:ring-red-500/30"
        />
      </div>
      
      <div className="block sm:flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group w-fit flex items-center justify-between gap-2 rounded-[4px] z-2 relative bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
          aria-disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Request Quote"}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
      </div>

      {status === "success" && (
        <div className="mt-2 rounded-lg bg-emerald-600 p-3 text-sm text-white">✓ Email sent successfully! We&apos;ll get back to you shortly.</div>
      )}
      
      {status === "error" && (
        <div className="mt-2 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">✗ {errorMessage || "Oops — something went wrong. Please try again or contact us directly."}</div>
      )}
    </form>
    </>
  );
};

export default ContactForm;