"use client";
import { Activity, ArrowUpRight, CreditCard, IndianRupee, Users, Wifi, AlertCircle, CheckCircle2 } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { revenue, payments, tickets, customers } from "@/lib/data";
import { money, PageHeader, StatCard, Status } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  return <div>
    <PageHeader title="Good morning, Admin" description="Here's what's happening across your ISP operations today."
      action={<button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">+ Add Customer</button>} />

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Total Customers" value="3,170" change="+8.4%" icon={<Users size={19}/>}/>
      <StatCard label="Monthly Revenue" value="₹54.2L" change="+12.8%" icon={<IndianRupee size={19}/>}/>
      <StatCard label="Today's Collections" value="₹1.84L" change="+6.2%" icon={<CreditCard size={19}/>}/>
      <StatCard label="Active Connections" value="2,921" change="+3.1%" icon={<Wifi size={19}/>}/>
    </div>

    <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
      <div className="card p-5 md:p-6">
        <div className="flex items-center justify-between"><div><h2 className="font-bold text-slate-900">Revenue & Collections</h2><p className="mt-1 text-xs text-slate-400">Last 6 months · ₹ Lakhs</p></div><button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold">Last 6 months</button></div>
        <div className="mt-5 h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={revenue}><defs><linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopOpacity={0.22}/><stop offset="95%" stopOpacity={0}/></linearGradient></defs><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize:12,fill:"#94a3b8"}}/><Tooltip/><Area type="monotone" dataKey="revenue" stroke="#2563eb" fill="url(#fillRevenue)" strokeWidth={3}/><Area type="monotone" dataKey="collections" stroke="#94a3b8" fill="none" strokeWidth={2} strokeDasharray="5 5"/></AreaChart></ResponsiveContainer></div>
      </div>
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 p-5"><div><h2 className="font-bold">Quick Health</h2><p className="text-xs text-slate-400">Operational snapshot</p></div><Activity size={18} className="text-blue-500"/></div>
        <div className="divide-y divide-slate-100">
          <div className="flex items-center gap-3 p-5"><CheckCircle2 className="text-emerald-500"/><div className="flex-1"><div className="text-sm font-semibold">Network availability</div><div className="text-xs text-slate-400">99.97% uptime this month</div></div><span className="text-sm font-bold">Excellent</span></div>
          <div className="flex items-center gap-3 p-5"><AlertCircle className="text-amber-500"/><div className="flex-1"><div className="text-sm font-semibold">Overdue invoices</div><div className="text-xs text-slate-400">Needs collection follow-up</div></div><span className="font-bold text-amber-600">₹8.42L</span></div>
          <div className="flex items-center gap-3 p-5"><Wifi className="text-blue-500"/><div className="flex-1"><div className="text-sm font-semibold">Active connections</div><div className="text-xs text-slate-400">92.1% of total accounts</div></div><span className="font-bold">2,921</span></div>
        </div>
      </div>
    </div>

    <div className="mt-5 grid gap-5 lg:grid-cols-2">
      <div className="card">
        <div className="flex items-center justify-between border-b border-slate-100 p-5"><div><h2 className="font-bold">Recent Payments</h2><p className="text-xs text-slate-400">Latest transactions</p></div><Link href="/payments" className="flex items-center gap-1 text-xs font-bold text-blue-600">View all <ArrowUpRight size={14}/></Link></div>
        <div className="divide-y divide-slate-100">{payments.slice(0,4).map(p=><div key={p.id} className="flex items-center gap-4 p-4"><div className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">{p.customer.split(" ").map(x=>x[0]).join("")}</div><div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold">{p.customer}</div><div className="text-xs text-slate-400">{p.id} · {p.method}</div></div><div className="text-right"><div className="text-sm font-bold">{money(p.amount)}</div><Status value={p.status}/></div></div>)}</div>
      </div>
      <div className="card">
        <div className="flex items-center justify-between border-b border-slate-100 p-5"><div><h2 className="font-bold">Support Queue</h2><p className="text-xs text-slate-400">Tickets requiring attention</p></div><Link href="/support" className="flex items-center gap-1 text-xs font-bold text-blue-600">Open support <ArrowUpRight size={14}/></Link></div>
        <div className="divide-y divide-slate-100">{tickets.map(t=><div key={t.id} className="flex items-center gap-4 p-4"><div className="flex-1"><div className="text-sm font-semibold">{t.issue} · {t.customer}</div><div className="mt-1 text-xs text-slate-400">{t.id} · {t.technician}</div></div><div className="text-right"><Status value={t.status}/><div className="mt-1 text-[11px] font-semibold text-slate-400">SLA {t.sla}</div></div></div>)}</div>
      </div>
    </div>
  </div>;
}
