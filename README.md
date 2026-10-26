# CarePulse

CarePulse is a patient intake and appointment-management web application built with Next.js and Appwrite. Patients can submit their details and request appointments; the admin view summarizes appointment status and lists recent appointments.

> **Project status:** This repository is a portfolio project, not a certified or production-ready clinical system. Do not use it with real patient information until authentication, authorization, data retention, privacy, and deployment security have been reviewed and tested.

## Features

- Patient intake form with contact, demographic, medical-history, insurance, and consent fields.
- Patient registration with optional identification-document upload.
- Appointment requests, scheduling, and cancellation workflows.
- Admin dashboard with scheduled, pending, and cancelled appointment counts.
- Appwrite-backed user, database, file-storage, and messaging operations.
- Sentry integration for application error monitoring.

## Stack

- Next.js 14 App Router and React 18
- TypeScript
- Appwrite Node SDK for users, databases, storage, and messaging
- React Hook Form and Zod for form handling and validation
- Tailwind CSS and shadcn/ui-style components
- Sentry for error reporting

## Requirements

- Node.js compatible with Next.js 14
- npm
- An Appwrite project with the required database, collections, and storage bucket

## Run locally

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/nooby6/carepulse.git
   cd carepulse
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Create a `.env.local` file in the project root and configure the variables below.

4. Configure Appwrite to match the collection IDs and document attributes used by the application. Set up the patient, doctor, and appointment collections, plus a storage bucket for uploaded identification documents.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The Appwrite client reads these variables from the server environment:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_ENDPOINT` | Appwrite endpoint used by the application |
| `PROJECT_ID` | Appwrite project ID |
| `API_KEY` | Appwrite server API key |
| `DATABASE_ID` | Appwrite database ID |
| `PATIENT_COLLECTION_ID` | Patient collection ID |
| `DOCTOR_COLLECTION_ID` | Doctor collection ID |
| `APPOINTMENT_COLLECTION_ID` | Appointment collection ID |
| `NEXT_PUBLIC_BUCKET_ID` | Storage bucket ID for uploaded files |

Example `.env.local` (replace every placeholder with your own value):

```dotenv
NEXT_PUBLIC_ENDPOINT=https://<your-appwrite-endpoint>/v1
PROJECT_ID=<your-appwrite-project-id>
API_KEY=<your-server-api-key>
DATABASE_ID=<your-database-id>
PATIENT_COLLECTION_ID=<your-patient-collection-id>
DOCTOR_COLLECTION_ID=<your-doctor-collection-id>
APPOINTMENT_COLLECTION_ID=<your-appointment-collection-id>
NEXT_PUBLIC_BUCKET_ID=<your-storage-bucket-id>
```

**Keep `API_KEY` secret.** Never prefix a server API key with `NEXT_PUBLIC_`, commit it to Git, or expose it to browser code. Use a dedicated key with only the permissions required by the server-side operations.

Sentry is configured in the repository as well. Configure the appropriate Sentry environment values for your own project before enabling source-map uploads or deployment monitoring.

## Available scripts

```bash
npm run dev    # Start the local development server
npm run build  # Build the production bundle
npm run start  # Serve a production build
npm run lint   # Run the configured Next.js lint command
```

## Repository layout

- `app/` — routes, layouts, and application-level UI
- `components/` — forms, tables, dialogs, and reusable UI components
- `lib/actions/` — server actions for patient and appointment operations
- `lib/appwrite.config.ts` — Appwrite client and environment configuration
- `lib/validation.ts` — Zod schemas for form validation
- `types/` — TypeScript types used by the application
- `public/` — static icons and images

## Security and limitations

This application collects information that can be sensitive, including medical history and identification documents. Before using it beyond local development, review at minimum:

- Authentication and role-based authorization for patient and admin routes.
- Appwrite collection and bucket permissions, including access to uploaded files.
- Server-side validation and authorization for every mutation.
- Secret management, logging, error reporting, and production environment configuration.
- Privacy, consent, retention, backup, and deletion requirements applicable to your deployment.

The current repository should be treated as a development/portfolio implementation until those controls have been independently verified.

## License

No license file is currently included. Unless a license is added, reuse and redistribution are not granted by default.
