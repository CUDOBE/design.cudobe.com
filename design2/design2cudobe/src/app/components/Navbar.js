"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">Cudobe</Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link href="/#features" className="nav-link">Features</Link></li>
            <li className="nav-item"><Link href="/#process" className="nav-link">How It Works</Link></li>
            <li className="nav-item"><Link href="/#stats" className="nav-link">Why Cudobe</Link></li>
            <li className="nav-item"><Link href="/login" className="nav-link">Login</Link></li>
            <li className="nav-item ms-2">
              <Link href="/register" className="btn btn-primary-custom">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
