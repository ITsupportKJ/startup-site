export type MockKind = "app" | "site" | "dash" | "net" | "rack" | "tickets";

const bars = [14, 20, 17, 26, 30, 36];

// Small interface illustrations drawn with CSS and SVG, so the site needs no image files.
export default function Mock({ kind }: { kind: MockKind }) {
  return (
    <div className="mock" aria-hidden="true">
      {kind === "app" && (
        <div className="m-phone">
          <span className="m-pill" />
          <span className="m-h" />
          <span className="m-hero" />
          <span className="m-row" />
          <span className="m-row" />
          <span className="m-row" />
          <div className="m-tabs">
            <span />
            <span className="on" />
            <span />
            <span />
          </div>
        </div>
      )}

      {kind === "site" && (
        <div className="m-browser">
          <div className="m-chrome">
            <span />
            <span />
            <span />
          </div>
          <div className="m-page">
            <div className="m-copy">
              <span className="l1" />
              <span className="l2" />
              <span className="cta" />
            </div>
            <div className="m-cols">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}

      {kind === "dash" && (
        <div className="m-dash">
          <div className="m-k">
            <span />
            <span />
            <span />
          </div>
          <svg viewBox="0 0 100 40" preserveAspectRatio="none">
            {bars.map((h, i) => (
              <rect key={i} x={i * 16 + 4} y={40 - h} width="10" height={h} rx="1.5" fill="#2FD1A6" />
            ))}
            <polyline
              points="9,24 25,18 41,21 57,12 73,9 89,4"
              fill="none"
              stroke="#7FA2FF"
              strokeWidth="2.5"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      )}

      {kind === "net" && (
        <svg className="m-net" viewBox="0 0 100 62">
          <g stroke="#3B4F6E" strokeWidth="1.2">
            <line x1="50" y1="8" x2="50" y2="22" />
            <line x1="50" y1="22" x2="24" y2="40" />
            <line x1="50" y1="22" x2="76" y2="40" />
            <line x1="24" y1="40" x2="50" y2="54" />
            <line x1="76" y1="40" x2="50" y2="54" />
          </g>
          <rect x="40" y="3" width="20" height="9" rx="4.5" fill="#EAF0F8" />
          <rect x="43" y="15" width="14" height="14" rx="3.5" fill="#1F4FE0" />
          <path d="M47 22l2.5 2.5L54 19.5" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="17" y="33" width="14" height="14" rx="3.5" fill="#18293F" stroke="#7FA2FF" strokeWidth="0.8" />
          <rect x="69" y="33" width="14" height="14" rx="3.5" fill="#18293F" stroke="#7FA2FF" strokeWidth="0.8" />
          <rect x="43" y="47" width="14" height="14" rx="3.5" fill="#18293F" stroke="#2FD1A6" strokeWidth="0.8" />
        </svg>
      )}

      {kind === "rack" && (
        <div className="m-rack">
          {[0, 1, 2, 3].map((n) => (
            <div className="m-unit" key={n}>
              <i className={n === 2 ? "amber" : ""} />
              <i />
              <b />
            </div>
          ))}
        </div>
      )}

      {kind === "tickets" && (
        <div className="m-tickets">
          {["ok", "warn", "info"].map((t) => (
            <div className="m-ticket" key={t}>
              <i className={t} />
              <b />
              <u className={t} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}