"use client";
import { useState } from "react";
import { contactInfo } from "../lib/config";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const { phone  } = contactInfo;

  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

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

    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      
      <input
        name="name"
        type="text"
        required
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-red-500/70 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/30"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-red-500/70 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/30"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-red-500/70 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/30"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <select
          aria-label="Select Service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:border-red-500/70 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/30 appearance-none"
        >
          <option value="">--Select Service--</option>
          <option value="website-design">Website Design</option>
          <option value="website-development">Website Development</option>
          <option value="website-maintenance">Website Maintenance</option>
          <option value="website-hosting">Website Hosting</option>
          <option value="website-seo">Website SEO</option>
          <option value="website-marketing">Website Marketing</option>
          <option value="website-analytics">Website Analytics</option>
          <option value="website-security">Website Security</option>
        </select>
      </div>

      <textarea
        name="message"
        rows={4}
        required
        placeholder="How can we help?"
        value={formData.message}
        onChange={handleChange}
        className="block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-red-500/70 focus:bg-white/[0.07] focus:ring-2 focus:ring-red-500/30"
      />
      
      <div className="block sm:flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
          aria-disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Request Quote"}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
      </div>

      {status === "success" && (
        <div className="mt-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          ✓ Email sent successfully! We&apos;ll get back to you shortly.
        </div>
      )}
      
      {status === "error" && (
        <div className="mt-2 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">
          ✗ {errorMessage || "Oops — something went wrong. Please try again or contact us directly."}
        </div>
      )}
    </form>
    </>
  );
};

export default ContactForm;