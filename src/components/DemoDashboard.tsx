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

type Metric = "revenue" | "orders";
type Range = 3 | 6 | 12;

// Sample data for the demo only.
const monthly = [
  { month: "Jan", revenue: 12400, orders: 310 },
  { month: "Feb", revenue: 13800, orders: 342 },
  { month: "Mar", revenue: 15100, orders: 380 },
  { month: "Apr", revenue: 14600, orders: 365 },
  { month: "May", revenue: 17200, orders: 421 },
  { month: "Jun", revenue: 19050, orders: 468 },
  { month: "Jul", revenue: 18400, orders: 452 },
  { month: "Aug", revenue: 20100, orders: 497 },
  { month: "Sep", revenue: 21500, orders: 530 },
  { month: "Oct", revenue: 20800, orders: 512 },
  { month: "Nov", revenue: 23900, orders: 584 },
  { month: "Dec", revenue: 26200, orders: 640 },
];

const categoryShare = [
  { name: "Electronics", share: 0.38 },
  { name: "Clothing", share: 0.27 },
  { name: "Home", share: 0.21 },
  { name: "Beauty", share: 0.14 },
];

const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});
const full = new Intl.NumberFormat("en");

const tooltipStyle = {
  background: "#18293F",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: 8,
  color: "#EAF0F8",
};

const ranges: Range[] = [3, 6, 12];

export default function DemoDashboard() {
  const [metric, setMetric] = useState<Metric>("revenue");
  const [range, setRange] = useState<Range>(6);

  const data = monthly.slice(-range);
  const total = data.reduce((sum, m) => sum + m[metric], 0);
  const average = total / data.length;
  const best = data.reduce((a, b) => (b[metric] > a[metric] ? b : a));
  const change =
    ((data[data.length - 1][metric] - data[0][metric]) / data[0][metric]) * 100;

  const categories = categoryShare.map((c) => ({
    name: c.name,
    value: Math.round(total * c.share),
  }));

  const money = (n: number) =>
    metric === "revenue" ? `$${full.format(Math.round(n))}` : full.format(Math.round(n));
  const axis = (n: number) =>
    metric === "revenue" ? `$${compact.format(n)}` : compact.format(n);
  const label = metric === "revenue" ? "Revenue" : "Orders";

  return (
    <section id="demo" className="section section-dark">
      <div className="container">
        <div className="section-head">
          <h2>What a finished report looks like</h2>
          <p className="section-sub">
            A demo built on sample data. Change the metric or the period and
            every number and chart updates. We build reports like this in
            Excel, R or on the web, using your own figures.
          </p>
        </div>

        <div className="controls">
          <div className="seg" role="group" aria-label="Metric">
            {(["revenue", "orders"] as Metric[]).map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={metric === m}
                className={metric === m ? "active" : ""}
                onClick={() => setMetric(m)}
              >
                {m === "revenue" ? "Revenue" : "Orders"}
              </button>
            ))}
          </div>
          <div className="seg" role="group" aria-label="Period">
            {ranges.map((r) => (
              <button
                key={r}
                type="button"
                aria-pressed={range === r}
                className={range === r ? "active" : ""}
                onClick={() => setRange(r)}
              >
                {r} months
              </button>
            ))}
          </div>
        </div>

        <div className="kpis">
          <div className="kpi">
            <small>Total, last {range} months</small>
            <strong>{money(total)}</strong>
          </div>
          <div className="kpi">
            <small>Monthly average</small>
            <strong>{money(average)}</strong>
          </div>
          <div className="kpi">
            <small>Best month</small>
            <strong>{best.month}</strong>
          </div>
          <div className="kpi">
            <small>Change over period</small>
            <strong>
              {change >= 0 ? "+" : ""}
              {change.toFixed(1)}%
            </strong>
          </div>
        </div>

        <div className="dash-grid">
          <div className="dash">
            <h3>{label} by month</h3>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="month" stroke="#A3B3CA" tick={{ fontSize: 12 }} />
                  <YAxis
                    stroke="#A3B3CA"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(v) => axis(Number(v))}
                    width={52}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v) => money(Number(v))}
                    cursor={{ stroke: "rgba(255,255,255,0.2)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey={metric}
                    name={label}
                    stroke="#7FA2FF"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#7FA2FF" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="dash">
            <h3>{label} by category</h3>
            <div className="chart-box">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categories} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="name" stroke="#A3B3CA" tick={{ fontSize: 12 }} />
                  <YAxis
                    stroke="#A3B3CA"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(v) => axis(Number(v))}
                    width={52}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v) => money(Number(v))}
                    cursor={{ fill: "rgba(255,255,255,0.06)" }}
                  />
                  <Bar dataKey="value" name={label} fill="#2FD1A6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}