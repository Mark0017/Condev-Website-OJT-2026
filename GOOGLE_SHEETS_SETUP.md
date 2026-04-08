# Google Sheets Setup

This project is ready to send contact inquiries and role applications to Google Sheets through a Google Apps Script webhook.

## 1. Create the sheet

Create a Google Sheet that will collect your submissions. You can use one spreadsheet for both forms.

Recommended tabs:

- `Contacts`
- `Role Applications`

## 2. Open Apps Script

In your Google Sheet:

1. Click `Extensions`
2. Click `Apps Script`

Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = payload.sheetName || "Contacts";
    var sheet = spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
    }

    var headers = [
      "Submitted At",
      "Submission Type",
      "Full Name",
      "Email",
      "Phone",
      "Role",
      "Portfolio URL",
      "Message",
      "Source"
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }

    sheet.appendRow([
      payload.submittedAt || "",
      payload.submissionType || "",
      payload.fullName || "",
      payload.email || "",
      payload.phone || "",
      payload.role || "",
      payload.portfolioUrl || "",
      payload.message || "",
      payload.source || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        ok: false,
        message: error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy the script

1. Click `Deploy`
2. Click `New deployment`
3. Choose `Web app`
4. Set `Execute as` to `Me`
5. Set `Who has access` to `Anyone`
6. Click `Deploy`
7. Copy the web app URL

If you already deployed it before, click `Manage deployments`, edit the web app deployment, then redeploy it with those exact settings.

## 4. Add your local environment variable

Create a `.env.local` file in the project root:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart your dev server after adding the variable.

## 5. What gets stored

The contact form writes to the `Contacts` tab.

The careers popup writes to the `Role Applications` tab.
