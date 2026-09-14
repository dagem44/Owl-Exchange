# Owl Exchange — Proof of Concept

A minimal, working slice of the Owl Exchange architecture (Node.js/Express backend + REST API + static frontend). This is not the full project, it just shows that the chosen stack compiles, runs, and can serve a frontend that talks to a backend API. 

## What it demonstrates
- Express server serving a REST API (`GET /api/listings`, `POST /api/listings`, `DELETE /api/listings/:id`)
- A static HTML/JS frontend that fetches from that API and renders results
- End-to-end flow: create a listing in the browser → hits the backend → shows up in the list

## Requirements
- **Node.js**: v20 or later (built and tested on Node v22.22.2)
- **npm**: v10 or later

## How to run it
```bash
git clone <this-repo-url>
cd owl-exchange
npm install
node server.js
```
Then open `http://localhost:3000` in a browser.

## Next steps for the full project
- Replace in-memory storage with SQLite (or Postgres) for persistence
- Add user account and authentication
- Add image upload for listings
- Add search and category filtering on the frontend
- Add a messaging system between buyer and seller
