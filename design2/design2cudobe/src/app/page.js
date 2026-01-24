"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("#stats .stat-card").forEach((card) => {
      const num = card.querySelector(".stat-number");
      const value = parseFloat(num.dataset.value);

      gsap.from(card, {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });

      gsap.fromTo(
        { val: 0 },
        { val: value },
        {
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          onUpdate() {
            let suffix =
              num.innerHTML.includes("%")
                ? "%"
                : num.innerHTML.includes("+")
                ? "+"
                : num.innerHTML.includes("s")
                ? "s"
                : "";

            num.innerHTML = Math.round(this.targets()[0].val) + suffix;
          },
        }
      );
    });

    gsap.from("#features .feature-card", {
      scrollTrigger: {
        trigger: "#features",
        start: "top 75%",
      },
      rotationY: 45,
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Cudobe</a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#process">How It Works</a></li>
              <li className="nav-item"><a className="nav-link" href="#stats">Why Cudobe</a></li>
              <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
              <li className="nav-item ms-2">
                <a className="btn btn-primary-custom" href="/signup">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>Intelligent Trade Document Verification Using AI</h1>
              <p className="lead">
                Instantly validate invoices, bills of lading, packing lists,
                certificates of origin, and customs documents using AI.
              </p>
              <div className="mt-4">
                <a href="/signup" className="btn btn-primary-custom me-3">
                  Start Free Trial
                </a>
                <a href="#process" className="btn btn-outline-custom">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="data:image/jpeg;base64,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"
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: "120%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="section bg-light">
        <div className="container">
          <div className="row g-4">
            {[
              ["99.5", "Verification Accuracy", "%"],
              ["10", "Avg Processing Time", "s"],
              ["190", "Trade Jurisdictions", "+"],
              ["75", "Document Types", "+"],
            ].map(([value, label, suffix], i) => (
              <div className="col-md-3" key={i}>
                <div className="stat-card">
                  <div className="stat-number" data-value={value}>
                    0{suffix}
                  </div>
                  <div className="stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="row g-4">
            <Feature icon="fa-file-invoice" title="Trade Paperwork Automation" />
            <Feature icon="fa-shield-alt" title="Fake Document Detection" />
            <Feature icon="fa-globe" title="International Trade Compliance" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section bg-light">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="row g-4">
            <Step n="1" title="Upload Documents" />
            <Step n="2" title="AI Verification" />
            <Step n="3" title="Instant Results" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center">
        <div className="container">
          <p>© 2026 Cuboid. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="col-md-4">
      <div className="feature-card">
        <i className={`fas ${icon} feature-icon`}></i>
        <h4>{title}</h4>
        <p>AI-powered automation and verification.</p>
      </div>
    </div>
  );
}

function Step({ n, title }) {
  return (
    <div className="col-md-4">
      <div className="process-step">
        <div className="step-number">{n}</div>
        <h5>{title}</h5>
        <p>Secure, fast and accurate.</p>
      </div>
    </div>
  );
}
