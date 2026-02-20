import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/app/workspace/AppLayout"

export const metadata: Metadata = {
  title: "Brain Bin",
  description: `A developer first note taking app for organizing code snippets, debugging solutions,
               and technical knowledge with tagging, search, and syntax highlighting.`
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
