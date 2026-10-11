import { Controller, Get } from "@nestjs/common";

const customers = [
  { id:"CUST-1001", name:"Rahul Mehta", plan:"Ultra 300", status:"Active", due:0 },
  { id:"CUST-1002", name:"Priya Shah", plan:"Premium 150", status:"Pending", due:799 },
  { id:"CUST-1003", name:"Amit Kulkarni", plan:"Basic 100", status:"Suspended", due:599 },
];

const plans = [
  { name:"Basic 100", speed:"100 Mbps", price:599, subscribers:842 },
  { name:"Premium 150", speed:"150 Mbps", price:799, subscribers:1264 },
  { name:"Ultra 300", speed:"300 Mbps", price:999, subscribers:978 },
  { name:"Enterprise", speed:"500 Mbps", price:2499, subscribers:86 },
];

@Controller("api")
export class AppController {
  @Get("health")
  health() { return { ok:true, service:"isp-operator-api", mode:"mock" }; }

  @Get("customers")
  getCustomers() { return customers; }

  @Get("plans")
  getPlans() { return plans; }

  @Get("dashboard")
  getDashboard() {
    return {
      customers: { total:3170, active:2921, pending:42, suspended:121 },
      revenue: { monthly:5420000, today:184000 },
      collections: { monthly:4980000, successRate:96.8 },
      overdue: 842000,
    };
  }
}
