import { NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceNeed: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: Partial<ContactPayload>) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.firstName?.trim()) errors.firstName = "First name is required.";
  if (!payload.lastName?.trim()) errors.lastName = "Last name is required.";
  if (!payload.email?.trim() || !EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!payload.phone?.trim()) errors.phone = "Phone number is required.";
  if (!payload.message?.trim() || payload.message.trim().length < 10) {
    errors.message = "Please share a few details about your situation (10+ characters).";
  }

  return errors;
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "Invalid request." } }, { status: 400 });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: wire up a real email/CRM integration (e.g. Resend, SendGrid) once
  // credentials are available. For now, submissions are logged server-side.
  console.log("[contact form submission]", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
