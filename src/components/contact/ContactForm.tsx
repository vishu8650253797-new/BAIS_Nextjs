"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { serviceCategories } from "@/data/services";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceNeed: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  serviceNeed: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim() || !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please share a few details about your situation (10+ characters).";
  }
  return errors;
}

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-body/40 transition-colors duration-200 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/10";

const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-cream p-10 text-center">
        <CheckCircle2 className="size-10 text-maroon" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-ink">Message Sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">
          Thank you for reaching out. Our team will get back to you shortly to
          schedule your consultation.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-maroon">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            value={values.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={inputClass}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1.5 text-xs font-medium text-accent">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-maroon">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            value={values.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={inputClass}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1.5 text-xs font-medium text-accent">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-maroon">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs font-medium text-accent">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-maroon">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs font-medium text-accent">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="serviceNeed" className={labelClass}>
          Service / Immigration Need
        </label>
        <select
          id="serviceNeed"
          value={values.serviceNeed}
          onChange={(e) => update("serviceNeed", e.target.value)}
          className={inputClass}
        >
          <option value="">Select an option</option>
          {serviceCategories.map((category) => (
            <option key={category.slug} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-maroon">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs font-medium text-accent">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && !Object.keys(errors).length && (
        <p className="text-sm font-medium text-accent">
          Something went wrong. Please try again, or reach us directly by phone or email.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
