/* =========================
   AUTH
========================= */

export const REGISTER_URL = "/auth/register"; // POST
export const LOGIN_URL = "/auth/login";       // POST
export const LOGOUT_URL = "/auth/logout";     // POST
export const ME_URL = "/auth/me" // GET

/* =========================
   GIGS
========================= */

export const GIGS_URL = "/gigs";         // GET, POST

/* =========================
   BIDS
========================= */

export const BIDS_URL = "/bids";          // POST
export const BIDS_BY_GIG = (gigId: string) =>
  `/bids/${gigId}`;                       // GET
export const HIRE_BID = (bidId: string) =>
  `/bids/${bidId}/hire`;                  // PATCH

