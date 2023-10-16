"use client";
import { useAuth } from "@/hooks/use-auth";

export default function Home() {
  const { login, user } = useAuth();

  console.log(user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="text-2xl font-bold">Hello world</h3>
      <button onClick={login}>Login</button>
    </main>
  );
}
