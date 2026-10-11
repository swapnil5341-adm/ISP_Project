"use client";
import { ScrollText, Check, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/ui";

const items = ["Plan price updated", "Customer status changed", "Settlement report downloaded", "Staff permission changed"];

export default function Page() {
  return <><PageHeader title="Audit Logs" description="Track administrative actions, IP addresses and timestamps."/>
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <div className="card overflow-hidden">
        <div className="border-b border-slate-100 p-5"><h2 className="font-bold">Audit Logs workspace</h2><p className="mt-1 text-xs text-slate-400">Configure and manage this area from one place.</p></div>
        <div className="divide-y divide-slate-100">
          {items.map((x) => <div key={x} className="flex items-center gap-4 p-5 hover:bg-slate-50">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600"><ScrollText size={18}/></div>
            <div className="flex-1"><div className="text-sm font-bold">{x}</div><div className="mt-1 text-xs text-slate-400">Configured and ready for operator use</div></div>
            <ChevronRight size={17} className="text-slate-300"/>
          </div>)}
        </div>
      </div>
      <div className="card p-6"><h2 className="font-bold">Configuration status</h2><div className="mt-5 space-y-4">
        {["Core configuration","Payment gateway","Notifications","Access control"].map((x)=><div key={x} className="flex items-center gap-3"><div className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Check size={15}/></div><div className="flex-1 text-sm font-semibold">{x}</div><span className="text-xs font-bold text-emerald-600">Ready</span></div>)}
      </div></div>
    </div>
  </>;
}
