import { NextResponse } from "next/server";
import { users } from "@/lib/db";
import { verifyPassword, generateToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) return NextResponse.json({ error: "请填写邮箱和密码" }, { status: 400 });
    const user = users.findByEmail(email);
    if (!user) return NextResponse.json({ error: "邮箱或密码错误" }, { status: 401 });
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) return NextResponse.json({ error: "邮箱或密码错误" }, { status: 401 });
    const token = generateToken({ userId: user.id, email: user.email, name: user.name || undefined });
    const response = NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email, plan: user.plan },
    });
    response.cookies.set("token", token, {
      httpOnly: true, secure: process.env.NODE_ENV === "production",
      sameSite: "lax", maxAge: 7 * 24 * 60 * 60, path: "/",
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "登录失败，请重试" }, { status: 500 });
  }
}
