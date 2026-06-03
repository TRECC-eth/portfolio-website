const TEAM_EMAIL = "trecclabs@gmail.com";
const SHEET_NAME = "Applications";

function doPost(event) {
  const data = JSON.parse(event.postData.contents || "{}");
  const sheet = getApplicationsSheet();
  const timestamp = new Date();

  sheet.appendRow([
    timestamp,
    data.role || "",
    data.name || "",
    data.email || "",
    data.telegram || "",
    data.timezone || "",
    data.experience || "",
    data.links || "",
    data.note || "",
  ]);

  GmailApp.sendEmail(
    data.email,
    "Application received - TRECC",
    getApplicantText(data),
    {
      name: "TRECC Careers",
      htmlBody: getApplicantHtml(data),
    }
  );

  GmailApp.sendEmail(
    TEAM_EMAIL,
    `New application - ${data.role || "TRECC Careers"}`,
    getTeamText(data),
    {
      name: "TRECC Careers",
      replyTo: data.email,
      htmlBody: getTeamHtml(data),
    }
  );

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getApplicationsSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Submitted At",
      "Role",
      "Name",
      "Email",
      "Telegram",
      "Location / Timezone",
      "Experience",
      "Links",
      "Note",
    ]);
  }

  return sheet;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getApplicantText(data) {
  return `Hi ${data.name || "there"},

Thanks for applying to TRECC for the ${data.role || "open"} role.

We have received your application. Our team is reviewing it and we will get back to you if there is a fit.

TRECC Team`;
}

function getTeamText(data) {
  return `New application

Role: ${data.role || ""}
Name: ${data.name || ""}
Email: ${data.email || ""}
Telegram: ${data.telegram || ""}
Location / Timezone: ${data.timezone || ""}
Links: ${data.links || ""}

Experience:
${data.experience || ""}

Note:
${data.note || ""}`;
}

function getApplicantHtml(data) {
  const name = escapeHtml(data.name || "there");
  const role = escapeHtml(data.role || "open");

  return `
    <div style="margin:0;padding:32px 16px;background:#0a0a0a;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#ffffff;">
      <div style="max-width:600px;margin:0 auto;background:#111111;border:1px solid #2a2a2a;border-radius:18px;overflow:hidden;">
        <div style="padding:32px 36px;border-bottom:1px solid #1f1f1f;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#606468;">TRECC Careers</p>
          <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.25;font-weight:700;">Application received</h1>
        </div>
        <div style="padding:32px 36px;">
          <p style="margin:0 0 18px;color:#8a8d93;font-size:15px;line-height:1.7;">Hi ${name},</p>
          <p style="margin:0 0 18px;color:#8a8d93;font-size:15px;line-height:1.7;">
            Thanks for applying to TRECC for the <strong style="color:#d7d7b6;">${role}</strong> role.
          </p>
          <p style="margin:0;color:#8a8d93;font-size:15px;line-height:1.7;">
            We have received your application. Our team is reviewing it and we will get back to you if there is a fit.
          </p>
          <p style="margin:28px 0 0;color:#d7d7b6;font-size:15px;line-height:1.7;">TRECC Team</p>
        </div>
        <div style="padding:18px 36px;background:#0d0d0d;border-top:1px solid #1a1a1a;">
          <p style="margin:0;color:#606468;font-size:12px;line-height:1.6;">TRECC Labs, Inc.</p>
        </div>
      </div>
    </div>
  `;
}

function getTeamHtml(data) {
  const rows = [
    ["Role", data.role],
    ["Name", data.name],
    ["Email", data.email],
    ["Telegram", data.telegram],
    ["Location / Timezone", data.timezone],
    ["Links", data.links],
    ["Experience", data.experience],
    ["Note", data.note],
  ];

  const rowHtml = rows.map(([label, value]) => `
    <tr>
      <td style="padding:14px 16px;border-bottom:1px solid #1f1f1f;color:#606468;font-size:12px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 16px;border-bottom:1px solid #1f1f1f;color:#d7d7b6;font-size:14px;line-height:1.6;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `).join("");

  return `
    <div style="margin:0;padding:32px 16px;background:#0a0a0a;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#ffffff;">
      <div style="max-width:640px;margin:0 auto;background:#111111;border:1px solid #2a2a2a;border-radius:18px;overflow:hidden;">
        <div style="padding:32px 36px;border-bottom:1px solid #1f1f1f;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#606468;">TRECC Careers</p>
          <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.25;font-weight:700;">New application</h1>
        </div>
        <div style="padding:28px 36px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #2a2a2a;border-radius:14px;overflow:hidden;">
            ${rowHtml}
          </table>
        </div>
      </div>
    </div>
  `;
}
