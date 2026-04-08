export type SubmissionPayload = {
  sheetName: string;
  submissionType: "contact" | "role-application";
  fullName: string;
  email: string;
  phone: string;
  message: string;
  role?: string;
  portfolioUrl?: string;
  source: "website";
  submittedAt: string;
};

export async function sendSubmissionToGoogleSheets(
  payload: SubmissionPayload,
) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error(
      "Google Sheets webhook is not configured yet. Add GOOGLE_SHEETS_WEBHOOK_URL to your .env.local file.",
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const rawText = await response.text();
  let parsed: { ok?: boolean; message?: string } | null = null;
  const contentType = response.headers.get("content-type") || "";

  if (rawText) {
    try {
      parsed = JSON.parse(rawText) as { ok?: boolean; message?: string };
    } catch {
      parsed = null;
    }
  }

  if (!response.ok || parsed?.ok === false) {
    if (
      response.status === 403 ||
      contentType.includes("text/html") ||
      /Access Denied|Kailangan mo ng access|Tinanggihan ang Pag-access/i.test(
        rawText,
      )
    ) {
      throw new Error(
        "Your Google Apps Script web app is blocking the request. Redeploy it with Execute as: Me and Who has access: Anyone.",
      );
    }

    throw new Error(
      parsed?.message || "We could not send your form to Google Sheets.",
    );
  }
}
