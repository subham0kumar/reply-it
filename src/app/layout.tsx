import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reply-It",
  description: "Transform Your Instagram Engagement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="container flex h-16 items-center justify-between">
              <span className="text-xl font-bold gradient-text">Reply-It</span>
              <Navigation />
              <div className="flex items-center gap-4">
                <ModeToggle />
              </div>
            </div>
          </header>
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
