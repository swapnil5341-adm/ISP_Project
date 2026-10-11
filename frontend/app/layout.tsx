import "./globals.css";
import { DashboardShell } from "@/components/dashboard-shell";

export const metadata = {
  title: "NetFlow ISP — Operator Console",
  description: "ISP provider operations dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
