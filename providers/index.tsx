"use client";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ModeToggle from "@/components/theme/theme-toggle";
export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full min-h-[100dvh]">

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <div className="fixed bottom-3 right-3">
          <ModeToggle />
        </div>
      </ThemeProvider>
    </div>
  );
}
