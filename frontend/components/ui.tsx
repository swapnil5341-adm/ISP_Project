import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
    <div><h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{title}</h1>{description && <p className="mt-1 text-sm text-slate-500">{description}</p>}</div>
    {action}
  </div>;
}
export function Status({ value }: { value: string }) {
  const map: Record<string,string> = { Active:"bg-emerald-50 text-emerald-700", Success:"bg-emerald-50 text-emerald-700", Paid:"bg-emerald-50 text-emerald-700", Settled:"bg-emerald-50 text-emerald-700", Resolved:"bg-emerald-50 text-emerald-700", Pending:"bg-amber-50 text-amber-700", Open:"bg-blue-50 text-blue-700", "In Progress":"bg-violet-50 text-violet-700", Failed:"bg-red-50 text-red-700", Suspended:"bg-red-50 text-red-700", Disconnected:"bg-slate-100 text-slate-600", Overdue:"bg-red-50 text-red-700" };
  return <span className={`badge ${map[value] || "bg-slate-100 text-slate-600"}`}><span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current"/>{value}</span>;
}
export function StatCard({ label, value, change, icon, trend="up" }: {label:string;value:string;change:string;icon:React.ReactNode;trend?:"up"|"down"}) {
  return <div className="card p-5">
    <div className="flex items-start justify-between"><div className="text-sm font-medium text-slate-500">{label}</div><div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">{icon}</div></div>
    <div className="mt-4 flex items-end justify-between"><div className="text-2xl font-extrabold text-slate-900">{value}</div><div className={`flex items-center gap-1 text-xs font-bold ${trend==="up"?"text-emerald-600":"text-red-500"}`}>{trend==="up"?<ArrowUpRight size={14}/>:<ArrowDownRight size={14}/>} {change}</div></div>
  </div>;
}
export function TableActions() { return <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700"><MoreHorizontal size={18}/></button>; }
export const money = (n:number) => `₹${n.toLocaleString("en-IN")}`;
