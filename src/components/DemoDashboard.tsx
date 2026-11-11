import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";

type Metric = "revenue" | "orders";
type Range = 3 | 6 | 12;

const steps = [
  {
    title: "Collect",
    text: "Excel files, CSV exports, databases or system reports, in whatever form you have them.",
  },
  {
    title: "Clean",
    text: "We fix duplicates, missing values and inconsistent formats so the numbers can be trusted.",
  },
  {
    title: "Analyse",
    text: "Statistics and trends in R or Python, explained in plain language.",
  },
  {
    title: "Deliver",
    text: "A report, a dashboard, or a custom Python app your team can run itself.",
  },
];

const builds = [
  {
    title: "Analysis and reports",
    text: "One-off or recurring analysis with a clear written summary of what your data says and what to do about it.",
    tech: ["R", "Python", "Excel"],
  },
  {
    title: "Custom Python applications",
    text: "A tool built around your data: load a file, press run, and get the cleaned data, charts and report. It can run on your computer or on the web.",
    tech: ["Python"],
  },
  {
    title: "Dashboards",
    text: "Interactive views of the numbers you check most, like the demo above, built around the questions you ask every week.",
    tech: ["Python", "R", "Web"],
  },
];

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
  background: "#0A1523",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: 10,
  color: "#EAF0F8",
};

const ranges: Range[] = [3, 6, 12];

export default function DemoDashboard() {
  const [metric, setMetric] = useState<Metric>("revenue");
  const [range, setRange] = useState<Range>(6);

  const data = monthly.slice(-range);
  const first = data[0];
  const last = data[data.length - 1];
  const total = data.reduce((sum, m) => sum + m[metric], 0);
  const average = total / data.length;
  const best = data.reduce((a, b) => (b[metric] > a[metric] ? b : a));
  const change = ((last[metric] - first[metric]) / first[metric]) * 100;

  const categories = categoryShare
    .map((c) => ({ name: c.name, share: c.share, value: Math.round(total * c.share) }))
    .sort((a, b) => b.value - a.value);
  const top = categories[0];

  const label = metric === "revenue" ? "Revenue" : "Orders";
  const money = (n: number) =>
    metric === "revenue" ? `$${full.format(Math.round(n))}` : full.format(Math.round(n));
  const axis = (n: number) =>
    metric === "revenue" ? `$${compact.format(n)}` : compact.format(n);

  const aboveAverage = Math.round((best[metric] / average - 1) * 100);

  return (
    <section id="demo" className="section section-dark">
      <div className="container">
        {/* <div className="section-head">
          <h2 className="display">Your data, analysed with R and Python</h2>
          <p className="section-sub">
            We clean your data, analyse it in R or Python, and deliver the
            answers as a report, a dashboard or a custom Python application
            built for your business.
          </p>
        </div> */}

        <ol className="data-flow">
          {steps.map((s, i) => (
            <li className="flow-step" key={s.title}>
              <span className="flow-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="win">
          <div className="win-bar">
            <span className="win-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">AERO Analyzer: sales overview</span>
            <span className="win-chip">Sample data</span>
          </div>

          <div className="win-body">
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
                <div
                  className="chart-box"
                  role="img"
                  aria-label={`${label} by month, ${first.month} to ${last.month}`}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7FA2FF" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#7FA2FF" stopOpacity={0} />
                        </linearGradient>
                      </defs>
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
                      <Area
                        type="monotone"
                        dataKey={metric}
                        name={label}
                        stroke="#7FA2FF"
                        strokeWidth={3}
                        fill="url(#areaFill)"
                        dot={{ r: 4, fill: "#7FA2FF", strokeWidth: 0 }}
                        activeDot={{ r: 6 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="dash">
                <h3>{label} by category</h3>
                <div
                  className="chart-box"
                  role="img"
                  aria-label={`${label} by category, largest is ${top.name}`}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={categories}
                      layout="vertical"
                      margin={{ top: 8, right: 48, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid stroke="rgba(255,255,255,0.08)" horizontal={false} />
                      <XAxis
                        type="number"
                        stroke="#A3B3CA"
                        tick={{ fontSize: 12 }}
                        tickFormatter={(v) => axis(Number(v))}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        stroke="#A3B3CA"
                        tick={{ fontSize: 12 }}
                        width={84}
                      />
                      <Tooltip
                        contentStyle={tooltipStyle}
                        formatter={(v) => money(Number(v))}
                        cursor={{ fill: "rgba(255,255,255,0.06)" }}
                      />
                      <Bar dataKey="value" name={label} fill="#2FD1A6" radius={[0, 5, 5, 0]} barSize={26}>
                        <LabelList
                          dataKey="value"
                          position="right"
                          formatter={(v) => axis(Number(v))}
                          fill="#EAF0F8"
                          fontSize={12}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <p className="win-sub">Findings, written automatically from the data above</p>
            <div className="findings">
              <div className="finding">
                <small>Trend</small>
                <p>
                  {label} {change >= 0 ? "rose" : "fell"} {Math.abs(change).toFixed(1)}% between{" "}
                  {first.month} and {last.month}.
                </p>
              </div>
              <div className="finding">
                <small>Top category</small>
                <p>
                  {top.name} is the largest category, with {Math.round(top.share * 100)}% of{" "}
                  {label.toLowerCase()}.
                </p>
              </div>
              <div className="finding">
                <small>Best month</small>
                <p>
                  {best.month} was the strongest month at {money(best[metric])}, {aboveAverage}%
                  above the monthly average.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="build-grid">
          {builds.map((b) => (
            <article className="build-card" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              <div className="tech">
                {b.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="data-cta">
          <h3>Have data you would like to understand?</h3>
          <a href="#contact" className="btn btn-light">
            Talk to us about your data
          </a>
        </div>
      </div>
    </section>
  );
}