import { Link } from "react-router-dom";
import { usePageMeta } from "../usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found | AERO", "");
  return (
    <section className="section section-white">
      <div className="container">
        <h1 className="display">We could not find that page</h1>
        <p className="section-sub">
          The address may be wrong or the page may have moved.
        </p>
        <p style={{ marginTop: 24 }}>
          <Link to="/" className="btn btn-primary">
            Back to the homepage
          </Link>
        </p>
      </div>
    </section>
  );
}