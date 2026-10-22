# CarePulse

CarePulse is a healthcare appointment-management web app built with Next.js, React, TypeScript, and Appwrite. It provides a patient onboarding flow, patient registration, appointment requests and scheduling, and an admin view for reviewing appointments.

> **Status:** Portfolio project. Do not use it with real patient information or as a production clinical system without a security, privacy, and deployment review.

## What it includes

- Patient onboarding with name, email, and phone number.
- Patient registration flow, including identification-document upload.
- Appointment creation, scheduling, and cancellation flows.
- An admin page with appointment summaries.
- Appwrite-backed data storage, file storage, user management, and SMS messaging integration.
- Form validation with React Hook Form and Zod.
- Sentry configuration for error monitoring.

## Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Appwrite Node SDK
- Tailwind CSS
- React Hook Form and Zod
- Sentry

## Requirements

- Node.js compatible with Next.js 14
- npm
- An Appwrite project with the required database, collections, and storage bucket configured

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

3. Create a `.env.local` file in the project root and set the Appwrite values:

   ```dotenv
   NEXT_PUBLIC_ENDPOINT=
   PROJECT_ID=
   API_KEY=
   DATABASE_ID=
   PATIENT_COLLECTION_ID=
   DOCTOR_COLLECTION_ID=
   APPOINTMENT_COLLECTION_ID=
   NEXT_PUBLIC_BUCKET_ID=
   ```

   Use the endpoint, project ID, database and collection IDs, bucket ID, and server API key from your own Appwrite setup. The API key is a secret: do not commit `.env.local`, expose the key in client-side code, or share it publicly. The public endpoint and bucket ID are configured as public environment variables by the current application.

4. Configure the Appwrite database collections and storage bucket to match the fields used by the application actions and types. Enable only the permissions required by the app. SMS delivery also depends on the Appwrite messaging configuration.

5. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the configured Next.js lint command |

## Project structure

- `app/` — routes and page layouts
- `components/` — forms, UI components, and appointment views
- `constants/` — application constants
- `lib/actions/` — Appwrite operations for patients and appointments
- `lib/` — Appwrite configuration, validation, and utilities

## Security and limitations

This repository is a portfolio project, not a certified or production-ready medical-record system. Before any real-world use, review authorization for every server action and admin route, Appwrite collection and file permissions, handling of uploaded identity documents, secrets management, logging, data retention, and applicable privacy requirements. Never test with real patient data.

## License

No license file is currently included. Unless a license is added, reuse and redistribution are not automatically granted.
