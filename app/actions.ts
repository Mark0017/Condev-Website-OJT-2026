"use server";

import type { FormState } from "@/lib/formState";
import { sendSubmissionToGoogleSheets } from "@/lib/googleSheets";

type FieldErrors = Partial<
  Record<
    | "fullName"
    | "email"
    | "phone"
    | "message"
    | "role"
    | "portfolioUrl",
    string
  >
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getValue(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function buildErrorState(message: string, fieldErrors: FieldErrors): FormState {
  return {
    status: "error",
    message,
    fieldErrors,
  };
}

export async function submitContactLead(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const fullName = getValue(formData, "fullName");
  const email = getValue(formData, "email");
  const phone = getValue(formData, "phone");
  const message = getValue(formData, "message");

  const fieldErrors: FieldErrors = {};

  if (!fullName) {
    fieldErrors.fullName = "Please enter your full name.";
  }

  if (!email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!emailPattern.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!phone) {
    fieldErrors.phone = "Please enter your phone number.";
  }

  if (!message) {
    fieldErrors.message = "Please add a short message.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return buildErrorState("Please fix the highlighted fields.", fieldErrors);
  }

  try {
    await sendSubmissionToGoogleSheets({
      sheetName: "Contacts",
      submissionType: "contact",
      fullName,
      email,
      phone,
      message,
      source: "website",
      submittedAt: new Date().toISOString(),
    });

    return {
      status: "success",
      message: "Your inquiry has been sent. We'll get back to you soon.",
      fieldErrors: {},
    };
  } catch (error) {
    return buildErrorState(
      error instanceof Error
        ? error.message
        : "We could not send your inquiry right now.",
      {},
    );
  }
}

export async function submitRoleApplication(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const fullName = getValue(formData, "fullName");
  const email = getValue(formData, "email");
  const phone = getValue(formData, "phone");
  const role = getValue(formData, "role");
  const portfolioUrl = getValue(formData, "portfolioUrl");
  const message = getValue(formData, "message");

  const fieldErrors: FieldErrors = {};

  if (!fullName) {
    fieldErrors.fullName = "Please enter your full name.";
  }

  if (!email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!emailPattern.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!phone) {
    fieldErrors.phone = "Please enter your phone number.";
  }

  if (!role) {
    fieldErrors.role = "Please choose the role you want.";
  }

  if (!message) {
    fieldErrors.message = "Please tell us a bit about your application.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return buildErrorState("Please fix the highlighted fields.", fieldErrors);
  }

  try {
    await sendSubmissionToGoogleSheets({
      sheetName: "Role Applications",
      submissionType: "role-application",
      fullName,
      email,
      phone,
      role,
      portfolioUrl,
      message,
      source: "website",
      submittedAt: new Date().toISOString(),
    });

    return {
      status: "success",
      message:
        "Your application has been sent. Thank you for your interest in Condev.",
      fieldErrors: {},
    };
  } catch (error) {
    return buildErrorState(
      error instanceof Error
        ? error.message
        : "We could not send your application right now.",
      {},
    );
  }
}
