import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const monthly = [
  { month: "Jan", revenue: 12400, orders: 310 },
  { month: "Feb", revenue: 13800, orders: 342 },
  { month: "Mar", revenue: 15100, orders: 380 },
  { month: "Apr", revenue: 14600, orders: 365 },
  { month: "May", revenue: 17200, orders: 421 },
  { month: "Jun", revenue: 19050, orders: 468 },
];

const categories = [
  { name: "Electronics", sales: 5200 },
  { name: "Clothing", sales: 4100 },
  { name: "Home", sales: 3300 },
  { name: "Beauty", sales: 2400 },
];

type Metric = "revenue" | "orders";

const tooltipStyle = {
  background: "#131a31",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  color: "#e8ecf8",
};

export default function DemoDashboard() {
  const [metric, setMetric] = useState<Metric>("revenue");

  const total = monthly.reduce((sum, m) => sum + m[metric], 0);
  const average = Math.round(total / monthly.length);
  const best = monthly.reduce((a, b) => (b[metric] > a[metric] ? b : a));
  const fmt = (n: number) =>
    metric === "revenue" ? `$${n.toLocaleString()}` : n.toLocaleString();

  return (
    <section id="demo" className="about">
      <div className="container">
        <h2>See how we turn data into insight</h2>
        <p className="section-sub">
          An interactive demo using sample data. Switch the metric and watch the
          numbers update.
        </p>

        <div className="toggle">
          <button
            className={metric === "revenue" ? "active" : ""}
            onClick={() => setMetric("revenue")}
          >
            Revenue
          </button>
          <button
            className={metric === "orders" ? "active" : ""}
            onClick={() => setMetric("orders")}
          >
            Orders
          </button>
        </div>

        <div className="kpis">
          <div className="kpi">
            <small>Total (6 months)</small>
            <strong>{fmt(total)}</strong>
          </div>
          <div className="kpi">
            <small>Monthly average</small>
            <strong>{fmt(average)}</strong>
          </div>
          <div className="kpi">
            <small>Best month</small>
            <strong>{best.month}</strong>
          </div>
        </div>

        <div className="dash-grid">
          <div className="dash">
            <h3>Monthly trend</h3>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthly}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="month" stroke="#9aa5c4" />
                  <YAxis stroke="#9aa5c4" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line
                    type="monotone"
                    dataKey={metric}
                    stroke="#5b8cff"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="dash">
            <h3>Sales by category</h3>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categories}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="name" stroke="#9aa5c4" />
                  <YAxis stroke="#9aa5c4" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="sales" fill="#7c5cff" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
