import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import type { Service, ServiceId } from "../data/services";
import { details } from "../data/serviceDetails";
import Infrastructure from "../components/Infrastructure";
import Security from "../components/Security";
import Contact from "../components/Contact";
import { Icon } from "../components/Icons";
import { usePageMeta } from "../usePageMeta";
import NotFound from "./NotFound";

// Charts are the heaviest part of the site, so load them only on the data page.
const DemoDashboard = lazy(() => import("../components/DemoDashboard"));

function PageHero({ s }: { s: Service }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Link to="/#services" className="crumb">
          All services
        </Link>
        <h1>{s.name}</h1>
        <p className="page-sub">{s.summary}</p>
        <ul className="chips">
          {s.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Book a free consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function Details({ id }: { id: ServiceId }) {
  const d = details[id];
  if (!d) return null;

  return (
    <section className="section section-mist">
      <div className="container">
        <h2 className="display">What is included</h2>
        <div className="inc-grid">
          {d.included.map((x) => (
            <article className="inc-card" key={x.title}>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </article>
          ))}
        </div>

        <h2 className="display inc-gap">How it works</h2>
        <ol className="ad-steps ad-steps-flat">
          {d.steps.map((st, i) => (
            <li key={st.title}>
              <span className="ad-num">{i + 1}</span>
              <h3>{st.title}</h3>
              <p>{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Cta({ s }: { s: Service }) {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="ad-cta">
          <div>
            <h3>Interested in {s.name}?</h3>
            <p>
              Book a free consultation. Tell us what you need, and we will
              explain what we would do and in what order.
            </p>
            <a href="#contact" className="btn btn-light">
              Book a free consultation
            </a>
          </div>
          <ul className="ad-reasons">
            {s.items.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Others({ current }: { current: ServiceId }) {
  return (
    <section className="section section-white">
      <div className="container">
        <h2 className="display">Our other services</h2>
        <div className="other-grid">
          {services
            .filter((x) => x.id !== current)
            .map((x) => (
              <Link key={x.id} to={`/services/${x.slug}`} className="other-card">
                <h3>{x.name}</h3>
                <p>{x.summary}</p>
                <span>View service</span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);

  usePageMeta(s ? `${s.name} | AERO` : "Page not found | AERO", s ? s.summary : "");

  if (!s) return <NotFound />;

  return (
    <>
      <PageHero s={s} />
      {s.id === "infra" && <Infrastructure />}
      {s.id === "security" && <Security />}
      {s.id === "data" && (
        <Suspense fallback={<section className="section section-dark demo-fallback" />}>
          <DemoDashboard />
        </Suspense>
      )}
      {(s.id === "web" || s.id === "support") && <Details id={s.id} />}
      {(s.id === "web" || s.id === "support" || s.id === "security") && <Cta s={s} />}
      <Others current={s.id} />
      <Contact key={s.id} service={s.name} />
    </>
  );
}