import React from 'react';
import { FiCheck } from 'react-icons/fi';
import '../styles/Courses.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Access to 50+ free courses',
        'Community support',
        'Basic AI assistant',
        'Limited projects'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      features: [
        'Unlimited courses',
        'Priority support',
        'Advanced AI assistant',
        'All projects & templates',
        'Certificate of completion',
        'Career guidance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'Team management',
        'Custom learning paths',
        'Dedicated support',
        'Analytics dashboard',
        'API access'
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            Start free, upgrade when you're ready to accelerate
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FiCheck className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`plan-btn ${plan.popular ? 'primary' : ''}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;