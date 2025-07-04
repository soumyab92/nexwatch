import React, { useState } from 'react';

const ProductTabs = ({ description, specs = [], qa = [] }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="mt-5">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            Specification
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'qa' ? 'active' : ''}`}
            onClick={() => setActiveTab('qa')}
          >
            Q & A
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'description' && <p>{description || 'No description available.'}</p>}

        {activeTab === 'specs' && (
          <ul>
            {(specs.length > 0 ? specs : ['High quality build', '12-month warranty', 'Fast shipping']).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}

        {activeTab === 'qa' && (
          <div>
            {(qa.length > 0 ? qa : [
              'Q: Is this product waterproof?',
              'A: Yes, it is IP67 rated.',
              'Q: Does it support fast charging?',
              'A: Yes, with compatible charger.'
            ]).map((q, i) => (
              <p key={i}>{q}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;