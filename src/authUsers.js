import { USERS } from "./data";

const EXTRA_USERS_KEY = "club_extra_users";

function normalizeEmail(value) {
  return (value || "").trim().toLowerCase();
}

function parseExtraUsers() {
  try {
    const raw = localStorage.getItem(EXTRA_USERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((entry) => normalizeEmail(entry?.email))
      .filter(Boolean)
      .map((email) => ({ email, role: "member" }));
  } catch {
    return [];
  }
}

export function getAuthorizedUsers() {
  const baseUsers = USERS.map((u) => ({ ...u, email: normalizeEmail(u.email) }));
  const extraUsers = parseExtraUsers();
  const dedup = new Map();

  [...baseUsers, ...extraUsers].forEach((user) => {
    dedup.set(user.email, user);
  });

  return Array.from(dedup.values());
}

export function addAuthorizedEmail(email) {
  const normalized = normalizeEmail(email);
  if (!normalized) return { ok: false, reason: "empty" };
  const users = getAuthorizedUsers();
  if (users.some((u) => u.email === normalized)) {
    return { ok: false, reason: "exists" };
  }

  const extraUsers = parseExtraUsers();
  const nextExtra = [...extraUsers, { email: normalized, role: "member" }];
  localStorage.setItem(EXTRA_USERS_KEY, JSON.stringify(nextExtra));
  return { ok: true };
}
