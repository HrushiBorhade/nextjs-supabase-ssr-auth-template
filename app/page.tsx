import LoginButton from "@/components/LoginLogoutButton";
import UserGreetText from "@/components/UserGreetText";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookiesStore = await cookies();

  console.log("cookieStore", cookiesStore.getAll());
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const session = await supabase.auth.getSession()
  console.log("session", session)

  console.log("user", user);

  return (
    <div className="w-full h-[100dvh]">
      <div className="absolute top-3 right-3">
        <LoginButton />
      </div>
      <div className="container h-full mx-auto flex flex-col gap-4 items-center justify-center">
        <p className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight font-mono bg-gradient-to-b from-slate-500 to-slate-800 dark:from-neutral-100 dark:to-neutral-500 bg-clip-text text-transparent">
          nextjs-supabase-ssr-auth
        </p>
        <UserGreetText />
      </div>
    </div>
  );
}
