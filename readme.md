# Startup Benefits & Partnerships Platform

## Overview

This project is a full-stack **Startup Benefits Platform** designed to help early-stage startups, indie hackers, and small teams access **exclusive SaaS deals** that are otherwise expensive in the early phase.

The platform clearly differentiates between:
- **Public deals** (available to all users)
- **Locked deals** (available only to verified users)

The focus of this assignment is **product flow clarity, access control, and UI/UX quality**, not feature overload.

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations and transitions)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT-based authentication
- REST APIs

GraphQL, Firebase, Supabase, and serverless abstractions were intentionally avoided as per constraints.

---

## High-Level Architecture
Next.js Frontend → Express API → MongoDB
│ │
│ JWT Auth
│
User Interface Authorization Logic


- Frontend handles UI, animations, and navigation flow
- Backend enforces authentication and authorization
- MongoDB stores users, deals, and claims

---

## Core Entities & Data Modeling

### User
- name
- email (unique)
- password (hashed)
- isVerified (boolean)

### Deal
- title
- description
- partnerName
- category
- accessLevel (public | locked)
- eligibilityText
- isActive

### Claim
- userId (reference → User)
- dealId (reference → Deal)
- status (pending | approved)
- timestamps

**Why a separate Claim entity?**
- Clean many-to-many relationship
- Enables claim status tracking
- Scales well for future workflows

---

## Authentication & Authorization Strategy

### Authentication
- Users authenticate using JWT
- Token is issued on login
- Token is sent in `Authorization: Bearer <token>` header for protected routes

### Authorization
- Backend validates deal access
- Locked deals cannot be claimed unless `user.isVerified === true`
- Frontend disables restricted actions for UX clarity, but backend is the source of truth

---

## Application Flow

### 1. User Registration & Login
- User registers with email and password
- Password is hashed using bcrypt
- JWT token is issued on login

### 2. Browse Deals
- All active deals are visible
- Locked deals are visually restricted and clearly labeled

### 3. Deal Details
- Full deal description and partner info
- Eligibility conditions displayed
- Claim button reflects access state

### 4. Claim a Deal
- Backend validates authentication and authorization
- Claim is created with status `pending`

### 5. User Dashboard
- Displays claimed deals
- Shows claim status (pending / approved)

---

## UI & Animation Decisions

### Implemented
- Page transitions using Framer Motion
- Hover and button feedback
- Disabled states for locked actions
- Smooth layout transitions

### Rationale
Animations are used to:
- Guide user attention
- Improve perceived performance
- Clearly communicate state changes

Motion is used to enhance usability, not decoration.

---

## Running the Project Locally

### Backend
```bash
cd backend
npm install
npm run dev
Backend runs on:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:3000

Known Limitations

User verification is simulated via an isVerified flag

No admin panel for approving users

No refresh token or session rotation

No advanced role-based access control

These were intentionally left out to keep the scope focused.

Improvements for Production Readiness

Refresh tokens and token rotation

Admin dashboard for managing deals and verification

Rate limiting and request validation

Role-based access control

Better logging and observability

Server-side caching for deals

Design & Engineering Philosophy

Clear separation of concerns

Backend as the single source of truth

Simple, explainable architecture

Product-first thinking over raw CRUD

Final Notes

This project demonstrates:

Full-stack engineering fundamentals

Secure authentication and authorization

Thoughtful UI/UX and animation usage

Clear architectural decision-making

