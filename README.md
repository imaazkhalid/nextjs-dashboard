# Next.js App Router Course: Full-Stack Dashboard Project

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19+-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

## Overview

This repository contains the code for a full-stack financial dashboard application built while following the official **Next.js App Router Course** available on the [Next.js Learn platform](https://nextjs.org/learn).

The project serves as a practical, hands-on exercise to understand and implement the core features and best practices of building web applications using the Next.js App Router.

## Project Origin

This project was bootstrapped using the starter template provided by the Next.js team for their App Router course. The goal is to progressively build upon this foundation by following the course curriculum.

**Source:** [Next.js App Router Course](https://nextjs.org/learn)

## Application Features

The completed dashboard application will include:

* **Public Home Page:** A landing page accessible to all visitors.
* **Login Page:** Secure authentication entry point.
* **Protected Dashboard Pages:** Pages accessible only after successful login.
* **Invoice Management:** Functionality for users to add, edit, and delete invoices.
* **Database Integration:** Connection to a database (set up during the course) to persist application data.

## Learning Objectives & Concepts Covered

Throughout this course and the development of this project, the following Next.js features and web development concepts are explored and implemented:

* **Styling:** Utilizing various methods for styling Next.js applications (e.g., CSS Modules, Tailwind CSS).
* **Optimizations:** Implementing performance improvements for images, links (routing), and fonts.
* **Routing:** Creating layouts and pages using the App Router's file-system based routing.
* **Data Fetching:** Setting up a PostgreSQL database (using Vercel Postgres), fetching data server-side, and implementing streaming for improved UX.
* **Search and Pagination:** Implementing server-side search and pagination logic using URL search parameters.
* **Mutating Data:** Using React Server Actions for data manipulation (create, update, delete) and revalidating the Next.js cache.
* **Error Handling:** Implementing strategies for handling errors gracefully, including 404 (Not Found) errors.
* **Form Validation & Accessibility:** Performing server-side form validation and adhering to accessibility best practices.
* **Authentication:** Adding user authentication using NextAuth.js and utilizing Next.js Middleware.
* **Metadata:** Using the Metadata API to manage page metadata for SEO and social sharing.

## Prerequisites

### Knowledge

* A basic understanding of **React** (components, props, state, hooks) and **JavaScript**.
* Familiarity with React Server Components and Suspense is helpful (covered in the [React Foundations course](https://nextjs.org/learn/react-foundations)).

### System Requirements

* **Node.js:** Version 18.18.0 or later ([Download](https://nodejs.org/)).
* **Operating System:** macOS, Windows (including WSL), or Linux.
* **Accounts:**
    * [GitHub Account](https://github.com/)
    * [Vercel Account](https://vercel.com/)

## Getting Started (Development)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/imaazkhalid/nextjs-dashboard.git
    cd nextjs-dashboard
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Set up environment variables:**
    * Create a `.env` file in the root directory.
    * Follow the course instructions to populate it with necessary variables (like database connection strings, authentication secrets, etc.) as you progress through the modules.
4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

*(Note: Database setup and population will be covered in later chapters of the Next.js course.)*

## More Information

For the complete learning experience and detailed explanations, please refer to the official [Next.js App Router Course](https://nextjs.org/learn).