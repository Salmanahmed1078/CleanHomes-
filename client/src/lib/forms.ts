const FORM_EMAIL =
  import.meta.env.VITE_FORM_EMAIL ?? "info@cleanhomes.com";

async function submitToFormService(
  subject: string,
  fields: Record<string, string | number | undefined>,
) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(FORM_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        ...fields,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Unable to submit form right now.");
  }

  const payload = (await response.json()) as { success?: string };
  if (payload.success !== "true") {
    throw new Error("Form submission failed.");
  }
}

export async function submitBooking(
  data: Record<string, string | number | undefined>,
) {
  return submitToFormService("New CleanHomes Booking Request", data);
}

export async function submitContact(
  data: Record<string, string | number | undefined>,
) {
  return submitToFormService("New CleanHomes Contact Message", data);
}
