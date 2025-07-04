import React from 'react';
import { useLocation } from 'react-router-dom';

const PageBanner = ({ title }) => {
  const location = useLocation();

  // Don't show on Home page
  if (location.pathname === '/') return null;

  // Generate breadcrumb
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <section className="page_banner text-white py-5" style={{ backgroundImage: "url('/images/banner-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <h2 className="fw-bold">{title}</h2>
        <p className="mt-2">
          <a href="/" className="text-white text-decoration-none">Home</a>
          {paths.map((p, i) => (
            <span key={i}> / {decodeURIComponent(p.charAt(0).toUpperCase() + p.slice(1).replaceAll('-', ' '))}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;