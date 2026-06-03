# Google Sheets — Personnel Data Setup Guide

This document explains how to set up and maintain the Google Sheet that powers the Key Personnel section of the website.

---

## 1. Create the Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Rename the first sheet tab to something clear, e.g. `Personnel`.
3. Add the following column headers in **row 1**, exactly as written (case-sensitive):

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `name` | `image` | `consultationFee` | `bio` | `services` | `bank` | `accountNo` | `sortCode` | `LinkedIn` | `Youtube` | `Instagram` | `whatsapp` | `email` |

> The website reads these columns **by position** (A=1, B=2, etc.), not by name. The order must not change.

---

## 2. Fill In the Data

Each row below the header is one person. Here is what each column expects:

| Column | Example | Notes |
|---|---|---|
| `name` | `Dr. Jane Smith` | Required. Row is skipped if empty. |
| `image` | `https://example.com/photo.jpg` or `/images/jane-smith.jpg` | See the Images section below. Leave blank to show a default silhouette. |
| `consultationFee` | `£ 75` | Displayed as-is on the card. |
| `bio` | `Jane is a specialist in...` | Description shown in the expanded overlay. |
| `services` | `Career coaching, CV reviews, Interview prep` | Shown in the expanded overlay only. Leave blank to hide. |
| `bank` | `REVOLUT` | Shown in payment details on the expanded overlay. |
| `accountNo` | `1234 5678 9012 3456` | Shown in payment details. |
| `sortCode` | `12-34-56` | Shown in payment details. |
| `LinkedIn` | `https://linkedin.com/in/janesmith` | Leave blank to hide the button. |
| `Youtube` | `https://youtube.com/@janesmith` | Leave blank to hide the button. |
| `Instagram` | `https://instagram.com/janesmith` | Leave blank to hide the button. |
| `whatsapp` | `+447911123456` | Phone number only — the code converts it to a WhatsApp link automatically. Leave blank to hide the button. |
| `email` | `jane@aspires.co.uk` | Email address only — the code adds `mailto:` automatically. Leave blank to hide the button. |

---

## 🖼️ Images

There are two ways to provide a photo for each person.

### Option 1 — Local image (recommended)

Photos can be stored directly inside the project at `public/images/`. These load instantly and do not depend on any external service.

**Rules for local images:**
- Filename must be **lowercase with hyphens** and no spaces. Example: `jane-smith.jpg`
- Place the file in `public/images/`
- In the sheet `image` column, enter the path starting with `/images/`:
  ```
  /images/jane-smith.jpg
  ```

**Current local images available:**

| Person | Sheet value |
|---|---|
| Chidi Okorro | `/images/chidi-okorro.jpg` |
| Chidiebere Okeke | `/images/chidiebere-okeke.jpg` |
| Chinedum Ekpemiro | `/images/chinedum-ekpemiro.jpg` |
| Oluchi Okeke | `/images/oluchi-okeke.jpg` |
| Peace Akoja | `/images/peace-akoja.jpg` |
| Suzzy Ochonu | `/images/suzzy-ochonu.jpg` |

To add a new person's photo, copy the image file into `public/images/` (renaming it to kebab-case), then use `/images/their-name.jpg` in the sheet.

### Option 2 — External URL

If the photo is hosted online (e.g. a LinkedIn photo, Google Drive public link, or image CDN), paste the full URL directly into the `image` column:

```
https://example.com/path/to/photo.jpg
```

The URL must start with `https://`. Any value that does not start with `https://`, `http://`, or `/` will be rejected and the default silhouette will show instead.

### Default silhouette

If the `image` column is blank, or contains an invalid value, the card automatically shows a generic silhouette placeholder. No manual fallback is needed.

---

## ⚠️ Keynote — Write All Text as a Single Paragraph

The website reads the sheet as a CSV file. Even though line breaks inside cells are now handled gracefully (collapsed to a space), it is still best practice to write all text — especially `bio` and `services` — as a **single continuous paragraph with no line breaks**.

**Rules to follow:**
- Do not press `Enter` or `Ctrl+Enter` inside any cell.
- If you need to list multiple services, separate them with commas: `Career coaching, CV reviews, Interview prep`.
- Commas inside a cell are fine — Google Sheets wraps them in quotes automatically.

---

## 3. Publish the Sheet as CSV

The website fetches the sheet as a publicly accessible CSV file.

1. In the spreadsheet, go to **File → Share → Publish to web**.
2. In the first dropdown, select the specific sheet tab (e.g. `Personnel`).
3. In the second dropdown, select **Comma-separated values (.csv)**.
4. Click **Publish** and confirm.
5. Copy the URL that appears. It will look like:
   ```
   https://docs.google.com/spreadsheets/d/e/LONG_ID/pub?gid=SHEET_ID&single=true&output=csv
   ```

---

## 4. Add the URL to the Project

Open the `.env.local` file at the root of the project and set:

```
GOOGLE_SHEET_CSV_URL=<paste your URL here>
```

If this file does not exist, create it. Never commit `.env.local` to git.

---

## 5. How Updates Work

- The website caches the sheet data and **re-fetches it every hour** automatically.
- To force an immediate refresh during development, restart the dev server (`npm run dev`).
- In production, the cache will refresh on its own within an hour of any sheet change.

---

## 6. Troubleshooting

| Symptom | Likely cause |
|---|---|
| Person not showing up | `name` column is empty — every row must have a name |
| Default silhouette showing instead of photo | `image` value is blank, not a valid URL, or the file doesn't exist in `public/images/` |
| Wrong photo showing | Check the filename in `public/images/` matches the path in the sheet exactly (case-sensitive) |
| Columns appear shifted / wrong data in wrong place | Column order in the sheet has changed — it must match the header table in section 1 |
| No personnel shown at all | `GOOGLE_SHEET_CSV_URL` is not set, or the sheet is not published |
| WhatsApp button not working | Ensure the `whatsapp` column contains digits only (with optional `+` country code) — no spaces or dashes |
| Social/contact button missing | That column is blank for that row — this is expected behaviour |
