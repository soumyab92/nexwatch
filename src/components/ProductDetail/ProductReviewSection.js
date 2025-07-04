import React from 'react';

const ProductReviewSection = () => {
  const ratingStats = [
    { stars: 5, count: 103 },
    { stars: 4, count: 20 },
    { stars: 3, count: 7 },
    { stars: 2, count: 5 },
    { stars: 1, count: 5 },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Andreas Markson',
      date: '3 days ago',
      rating: 5,
      title: 'Perfect Balance of Style and Performance!',
      content:
        "I've been using the Pulse X1 for a week now, and it’s amazing! The display is super clear, and I love how I can take calls directly from my wrist. Fitness tracking is accurate, and the battery easily lasts 5–6 days. Definitely worth the price.",
      image: '/images/review-product-1.png',
    },
    {
      id: 2,
      name: 'Ava Thompson',
      date: '3 days ago',
      rating: 5,
      title: 'Feature-Rich and Very Comfortable',
      content:
        "This smartwatch exceeded my expectations! It’s stylish, light, and fits perfectly on my wrist. The health tracking features like heart rate and sleep monitoring are very useful. I also love how easy it is to connect with my iPhone. Great value for money!",
      image: '/images/review-product-2.png',
    },
  ];

  return (
    <section className="product_reviews my-5">
      <h3 className="mb-3 fw-bold">Our Reviews</h3>
      <div className="d-flex align-items-center mb-2">
        <span className="fs-4 fw-semibold">4.9</span>
        <img src="/images/star.svg" alt="rating" className="mx-2" />
        <span className="text-muted">(135 Reviews)</span>
      </div>

      {/* Rating Breakdown */}
      <div className="mb-4">
        {ratingStats.map(stat => (
          <div key={stat.stars} className="d-flex align-items-center">
            <span className="me-2">{stat.stars} star</span>
            <div className="progress flex-grow-1 me-2" style={{ height: 6 }}>
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: `${(stat.count / 135) * 100}%` }}
              ></div>
            </div>
            <span>{stat.count}</span>
          </div>
        ))}
      </div>

      {/* Filter Controls */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex gap-3">
          <span className="fw-semibold">Filter Reviews</span>
          <span className="text-primary" style={{ cursor: 'pointer' }}>Rating</span>
        </div>
        <span className="text-primary" style={{ cursor: 'pointer' }}>Clear Filter</span>
      </div>

      {/* Review Cards */}
      {reviews.map(review => (
        <div key={review.id} className="p-3 mb-4 border rounded-3 d-flex justify-content-between">
          <div className="flex-grow-1 pe-3">
            <div className="mb-1 text-muted">{review.date}</div>
            <h6 className="fw-bold">{review.name}</h6>
            <div className="d-flex align-items-center mb-1">
              <img src="/images/star.svg" alt="star" style={{ width: 16 }} />
              <span className="ms-1">{review.rating}</span>
            </div>
            <h5 className="mb-1">{review.title}</h5>
            <p className="mb-0 text-muted">{review.content}</p>
          </div>
          <div>
            <img src={review.image} alt="product" className="img-fluid" style={{ maxWidth: 100 }} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductReviewSection;