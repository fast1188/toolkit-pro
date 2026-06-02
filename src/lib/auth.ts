import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { users, type UserPublic } from "./db";
import { v4 as uuidv4 } from "uuid";

const JWT_SECRET = process.env.JWT_SECRET || "toolkit-pro-secret-key-change-in-production";

export interface JWTPayload {
  userId: string;
  email: string;
  name?: string;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<UserPublic | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const payload = verifyToken(token);
  if (!payload) return null;
  const dbUser = users.findById(payload.userId);
  if (dbUser) {
    return { id: dbUser.id, email: dbUser.email, name: dbUser.name, plan: dbUser.plan, avatar: dbUser.avatar, created_at: dbUser.created_at };
  }
  return { id: payload.userId, email: payload.email, name: payload.name || null, plan: "free", avatar: null, created_at: new Date().toISOString() };
}

export async function requireAuth(): Promise<UserPublic> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export { uuidv4 };
