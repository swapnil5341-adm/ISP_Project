"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard, Users, Layers3, ReceiptIndianRupee, CreditCard,
  Landmark, Headphones, UserCog, Tv, BarChart3, Bell, ScrollText,
  Settings, Menu, X, Search, ChevronDown, Wifi, CircleHelp
} from "lucide-react";

const nav = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Customers", href: "/customers", icon: Users },
  { label: "Plans & Pricing", href: "/plans", icon: Layers3 },
  { label: "Billing", href: "/billing", icon: ReceiptIndianRupee },
  { label: "Payments", href: "/payments", icon: CreditCard },
  { label: "Settlements", href: "/settlements", icon: Landmark },
  { label: "Support", href: "/support", icon: Headphones },
  { label: "Staff & Access", href: "/staff", icon: UserCog },
  { label: "OTT & Services", href: "/ott", icon: Tv },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Audit Logs", href: "/audit", icon: ScrollText },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200"><Wifi size={21}/></div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-slate-900">NetFlow</div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">ISP Operator</div>
              </div>
            </Link>
            <button className="lg:hidden" onClick={() => setOpen(false)}><X size={20}/></button>
          </div>
          <div className="px-4 py-5">
            <div className="mb-3 px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Operations</div>
            <nav className="space-y-1">
              {nav.map(({label, href, icon: Icon}) => {
                const active = href === "/" ? path === "/" : path.startsWith(href);
                return <Link key={href} href={href} onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}>
                  <Icon size={18} strokeWidth={active ? 2.4 : 2}/>
                  <span>{label}</span>
                  {["/staff","/ott"].includes(href) && <span className="ml-auto rounded-full bg-violet-100 px-2 py-0.5 text-[9px] font-bold text-violet-700">PRO</span>}
                </Link>
              })}
            </nav>
          </div>
          <div className="mt-auto border-t border-slate-100 p-4">
            <div className="rounded-2xl bg-slate-900 p-4 text-white">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold"><CircleHelp size={15}/> Need help?</div>
              <p className="text-xs leading-5 text-slate-300">Contact your platform support team for assistance.</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-slate-200 bg-white/90 px-4 backdrop-blur md:px-8">
          <button className="lg:hidden" onClick={() => setOpen(true)}><Menu/></button>
          <div className="relative hidden max-w-md flex-1 md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-400 focus:bg-white" placeholder="Search customers, invoices, tickets..." />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-50"><Bell size={19}/><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"/></button>
            <div className="hidden h-8 w-px bg-slate-200 sm:block"/>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">AK</div>
              <div className="hidden sm:block"><div className="text-sm font-bold text-slate-800">Admin Kumar</div><div className="text-xs text-slate-400">Administrator</div></div>
              <ChevronDown size={16} className="text-slate-400"/>
            </div>
          </div>
        </header>
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
