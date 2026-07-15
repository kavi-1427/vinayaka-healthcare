# Vinayaka Healthcare — Website

A home-care staffing website for Vinayaka Healthcare (Tamil Nadu), built with React, Vite, Tailwind CSS v4, and Firebase Firestore for the "Request a Caregiver" form.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder — that's what you upload/deploy.

## Deploy (recommended: Vercel or Netlify)

**Vercel:**
1. Push this folder to a GitHub repo.
2. Go to vercel.com -> New Project -> import the repo.
3. Framework preset: Vite. Leave build command as `npm run build`, output as `dist`.
4. Deploy.

**Netlify:**
1. Push to GitHub, or drag-and-drop the `dist/` folder after running `npm run build` into Netlify's deploy screen.
2. If using GitHub: build command `npm run build`, publish directory `dist`.

## Important: set up Firestore security rules

Right now your Firestore is likely in "test mode," which means anyone can read or write any data in your project, not just the request form. Before you go live, go to:

Firebase Console -> Firestore Database -> Rules, and replace the rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /caregiver_requests/{requestId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

This lets visitors submit the form, but only you (via the Firebase Console -> Firestore Database -> Data tab) can view or manage the submitted requests. Click "Publish" after pasting these in.

## Where form submissions go

Every "Request a Caregiver" submission is saved to a Firestore collection called `caregiver_requests`. To view them:

Firebase Console -> your project -> Firestore Database -> Data tab -> `caregiver_requests` collection.

Each entry includes: name, phone, email, city, patient age/condition, care type, care mode (live-in/hourly), preferred start date, notes, and a timestamp.

## Customizing content

- Caregiver profiles: `src/components/Caregivers.jsx` — currently placeholder names/photos; replace with real staff once you have profiles ready.
- Testimonials: `src/components/Testimonials.jsx` — currently placeholder reviews; replace with real ones as you collect them.
- Stats: `src/components/StatsBar.jsx` — update the numbers as they become accurate.
- Phone/WhatsApp: search for `9600512772` / `919600512772` across `src/components/` if this number ever changes.

## Tech stack

- React + Vite
- Tailwind CSS v4
- Firebase Firestore (form storage)
- lucide-react (icons)
