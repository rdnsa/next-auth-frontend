import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoAuth - Fullstack Go + Next.js",
  description: "Backend Go, Frontend Next.js 15 + shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <Toaster position="top-center" richColors closeButton />
        {children}
      </body>
    </html>
  );
}