import { Inter } from "next/font/google";
import { NextAuthProvider } from "./nextAuthProvider";
import { CssBaseline } from "@mui/material";
import { NextThemeProvider } from "./nextThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Data Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <NextThemeProvider>
            <CssBaseline />
            {children}
          </NextThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
