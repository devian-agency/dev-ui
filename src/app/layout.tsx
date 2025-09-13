import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "dev.ui",
  description: "devian's official UI library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
