export type Customer = {
  id: string; name: string; phone: string; plan: string; status: string; area: string; due: number; joined: string;
};

export const customers: Customer[] = [
  { id: "CUST-1001", name: "Rahul Mehta", phone: "+91 98765 11223", plan: "Ultra 300", status: "Active", area: "Andheri West", due: 0, joined: "12 Aug 2026" },
  { id: "CUST-1002", name: "Priya Shah", phone: "+91 98201 33445", plan: "Premium 150", status: "Pending", area: "Bandra", due: 799, joined: "02 Sep 2026" },
  { id: "CUST-1003", name: "Amit Kulkarni", phone: "+91 98198 77881", plan: "Basic 100", status: "Suspended", area: "Powai", due: 599, joined: "22 Jul 2026" },
  { id: "CUST-1004", name: "Neha Patil", phone: "+91 98920 45671", plan: "Ultra 300", status: "Active", area: "Thane West", due: 0, joined: "18 Jun 2026" },
  { id: "CUST-1005", name: "Vikram Joshi", phone: "+91 97692 12345", plan: "Premium 150", status: "Disconnected", area: "Dadar", due: 1598, joined: "05 May 2026" },
  { id: "CUST-1006", name: "Sneha Rao", phone: "+91 99001 88112", plan: "Basic 100", status: "Active", area: "Vile Parle", due: 599, joined: "28 Aug 2026" },
];

export const plans = [
  { name: "Basic 100", speed: "100 Mbps", price: 599, subscribers: 842, color: "from-slate-700 to-slate-500" },
  { name: "Premium 150", speed: "150 Mbps", price: 799, subscribers: 1264, color: "from-blue-700 to-cyan-500" },
  { name: "Ultra 300", speed: "300 Mbps", price: 999, subscribers: 978, color: "from-indigo-700 to-violet-500" },
  { name: "Enterprise", speed: "500 Mbps", price: 2499, subscribers: 86, color: "from-slate-900 to-indigo-700" },
];

export const payments = [
  { id: "TXN-90831", customer: "Rahul Mehta", invoice: "INV-2026-0812", amount: 999, method: "UPI", status: "Success", time: "Today, 10:42 AM" },
  { id: "TXN-90830", customer: "Neha Patil", invoice: "INV-2026-0811", amount: 999, method: "Card", status: "Success", time: "Today, 10:18 AM" },
  { id: "TXN-90829", customer: "Vikram Joshi", invoice: "INV-2026-0810", amount: 1598, method: "UPI", status: "Failed", time: "Today, 09:55 AM" },
  { id: "TXN-90828", customer: "Sneha Rao", invoice: "INV-2026-0809", amount: 599, method: "Net Banking", status: "Success", time: "Yesterday, 8:20 PM" },
];

export const tickets = [
  { id: "TKT-2041", customer: "Amit Kulkarni", issue: "No Internet", priority: "High", status: "In Progress", technician: "Suresh Pawar", sla: "01h 42m" },
  { id: "TKT-2040", customer: "Priya Shah", issue: "Billing", priority: "Medium", status: "Open", technician: "Unassigned", sla: "04h 18m" },
  { id: "TKT-2039", customer: "Neha Patil", issue: "Slow Speed", priority: "Low", status: "Resolved", technician: "Rakesh Singh", sla: "Closed" },
  { id: "TKT-2038", customer: "Rahul Mehta", issue: "Payment", priority: "Medium", status: "In Progress", technician: "Suresh Pawar", sla: "02h 08m" },
];

export const settlements = [
  { date: "04 Sep 2026", utr: "HDFC2609048912", gross: 486320, charges: 7295, net: 479025, status: "Settled" },
  { date: "03 Sep 2026", utr: "HDFC2609037621", gross: 512840, charges: 7693, net: 505147, status: "Settled" },
  { date: "02 Sep 2026", utr: "HDFC2609026642", gross: 474180, charges: 7113, net: 467067, status: "Settled" },
];

export const revenue = [
  { month: "Apr", revenue: 3.8, collections: 3.4 },
  { month: "May", revenue: 4.1, collections: 3.8 },
  { month: "Jun", revenue: 4.5, collections: 4.2 },
  { month: "Jul", revenue: 4.7, collections: 4.4 },
  { month: "Aug", revenue: 5.1, collections: 4.8 },
  { month: "Sep", revenue: 5.4, collections: 5.0 },
];
