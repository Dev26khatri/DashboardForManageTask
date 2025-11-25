# 🚀 DashboardForManageTask

A modern and responsive dashboard template for managing tasks, analytics, users, and settings — built using **Next.js App Router**, **TailwindCSS**, **TypeScript**, **ShadCN UI**, and **Recharts**.

This project is currently in active development and not yet fully functional.

---

## 📍 Project Status

> ❗ **Work in Progress** – Only *Analytics Page* ,*Tasks Page* ,*Notification Page* and *Account Page*  UI have been developed so far.  
More modules such as Users, Settings, Authentication, and APIs will be added soon.

---

## 🖥️ Tech Stack

| Tech | Use |
|------|-----|
| **Next.js (App Router)** | Core Framework |
| **Tailwind CSS** | Styling |
| **ShadCN UI** | UI Components |
| **Recharts** | Charts & Analytics |

---


---

## 📈 Example Bar Chart (Website Traffic)

```tsx
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { month: "Jan", visits: 4200 },
  { month: "Feb", visits: 6900 },
  { month: "Mar", visits: 5400 },
  { month: "Apr", visits: 8200 },
  { month: "May", visits: 9100 },
  { month: "Jun", visits: 10300 },
];

export default function AnalyticsPage() {
  return (
    <Card className="bg-[#0f172a] text-white p-4">
      <CardHeader>
        <CardTitle>Website Traffic (Monthly)</CardTitle>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" stroke="#94a3b8"/>
            <YAxis stroke="#94a3b8"/>
            <Tooltip />
            <Bar dataKey="visits" fill="#4f46e5"/>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
```
###🛠 Installation
```
git clone https://github.com/yourusername/DashboardForManageTask.git
cd DashboardForManageTask
npm install
npm run dev
```
Localhost:
```
http://localhost:3000

```

