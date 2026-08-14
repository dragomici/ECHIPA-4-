import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';
import { useCart } from '../../../hooks/useCart';
import { useToast } from '../../../hooks/useToast';
import { useTranslation } from '../../../hooks/useTranslation';
import './CheckoutPage.css';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  notes: string;
  paymentMethod: 'card' | 'ramburs' | 'bank';
  agreeTerms: boolean;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addToast } = useToast();
  const { items, clearCart } = useCart();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    country: 'Romania',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    notes: '',
    paymentMethod: 'ramburs',
    agreeTerms: false,
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent: number; discountFixed: number; freeShipping: boolean } | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<{ orderRef: string; total: number } | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  let shippingCost = items.length > 0 ? 5.00 : 0.00;
  if (appliedCoupon?.freeShipping) {
    shippingCost = 0;
  }

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent > 0) {
      discountAmount += (subtotal * appliedCoupon.discountPercent) / 100;
    }
    if (appliedCoupon.discountFixed > 0) {
      discountAmount += appliedCoupon.discountFixed;
    }
  }

  const finalTotal = Math.max(0, subtotal + shippingCost - discountAmount);

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'NEST10') {
      setAppliedCoupon({ code: 'NEST10', discountPercent: 10, discountFixed: 0, freeShipping: false });
      addToast('Coupon NEST10 applied! 10% discount added.', 'success');
    } else if (code === 'SAVE20') {
      setAppliedCoupon({ code: 'SAVE20', discountPercent: 0, discountFixed: 20, freeShipping: false });
      addToast('Coupon SAVE20 applied! $20 discount added.', 'success');
    } else if (code === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', discountPercent: 0, discountFixed: 0, freeShipping: true });
      addToast('Coupon FREESHIP applied! Free shipping granted.', 'success');
    } else {
      addToast('Invalid coupon code. Try NEST10, SAVE20 or FREESHIP.', 'error');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Record<string, boolean> = {};
    if (!formData.firstName.trim()) errors.firstName = true;
    if (!formData.lastName.trim()) errors.lastName = true;
    if (!formData.address.trim()) errors.address = true;
    if (!formData.city.trim()) errors.city = true;
    if (!formData.phone.trim()) errors.phone = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = true;
    if (!formData.agreeTerms) errors.agreeTerms = true;

    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) errors.cardNumber = true;
      if (!formData.cardExpiry.trim()) errors.cardExpiry = true;
      if (!formData.cardCvc.trim()) errors.cardCvc = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      if (errors.agreeTerms) {
        addToast('Please agree to the terms and conditions.', 'error');
      } else {
        addToast('Please fill in all required fields correctly.', 'error');
      }
      return;
    }

    const orderRef = `#NEST-${Math.floor(100000 + Math.random() * 900000)}`;
    
    const newOrder = {
      orderRef,
      date: new Date().toISOString(),
      customer: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.country}`,
      },
      items,
      paymentMethod: formData.paymentMethod,
      subtotal,
      discount: discountAmount,
      shipping: shippingCost,
      total: finalTotal,
    };

    try {
      const existingOrders = JSON.parse(localStorage.getItem('user_orders') || '[]');
      localStorage.setItem('user_orders', JSON.stringify([newOrder, ...existingOrders]));
    } catch (e) {
      console.error(e);
    }

    setOrderSuccess({
      orderRef,
      total: finalTotal,
    });
    addToast('Order placed successfully!', 'success');
    clearCart();
  };

  if (orderSuccess) {
    return (
      <div className="checkout-page">
        <Header />
        <main className="checkout-page__main">
          <div className="checkout-container">
            <div className="checkout-success-card">
              <div className="checkout-success-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h1 className="checkout-success-card__title">{t('checkout.orderSuccessTitle')}</h1>
              <p className="checkout-success-card__sub">
                Thank you for your order. We have sent a confirmation email to <strong>{formData.email}</strong>.
              </p>

              <div className="checkout-success-card__details">
                <div className="checkout-success-row">
                  <span>{t('checkout.orderRef')}:</span>
                  <strong>{orderSuccess.orderRef}</strong>
                </div>
                <div className="checkout-success-row">
                  <span>Payment Method:</span>
                  <strong>
                    {formData.paymentMethod === 'ramburs'
                      ? 'Cash on Delivery (Ramburs)'
                      : formData.paymentMethod === 'card'
                      ? 'Credit Card'
                      : 'Bank Transfer'}
                  </strong>
                </div>
                <div className="checkout-success-row">
                  <span>{t('checkout.total')}:</span>
                  <strong className="total-price">${orderSuccess.total.toFixed(2)}</strong>
                </div>
              </div>

              <button
                type="button"
                className="checkout-btn checkout-btn--primary"
                onClick={() => navigate('/')}
              >
                {t('checkout.backHome')}
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Header />

      <main className="checkout-page__main">
        <div className="checkout-container">
          <nav className="checkout-breadcrumb" aria-label="Breadcrumb">
            <a href="/">{t('about.breadcrumb.home')}</a>
            <span className="separator">›</span>
            <a href="/cart">Cart</a>
            <span className="separator">›</span>
            <span className="current">{t('checkout.breadcrumb')}</span>
          </nav>

          <h1 className="checkout-page__title">{t('checkout.title')}</h1>

          {items.length === 0 ? (
            <div className="checkout-empty">
              <p>Your shopping cart is empty.</p>
              <button
                type="button"
                className="checkout-btn checkout-btn--primary"
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="checkout-grid">
              <div className="checkout-billing">
                <h2 className="checkout-section-title">{t('checkout.billingTitle')}</h2>

                <div className="checkout-form-row">
                  <div className="checkout-form-group">
                    <label className="checkout-label">
                      {t('checkout.firstName')} <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`checkout-input ${formErrors.firstName ? 'checkout-input--error' : ''}`}
                    />
                  </div>

                  <div className="checkout-form-group">
                    <label className="checkout-label">
                      {t('checkout.lastName')} <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`checkout-input ${formErrors.lastName ? 'checkout-input--error' : ''}`}
                    />
                  </div>
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-label">{t('checkout.company')}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="checkout-input"
                  />
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-label">{t('checkout.country')}</label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="checkout-select"
                  >
                    <option value="Romania">Romania</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-label">
                    {t('checkout.address')} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="House number and street name"
                    className={`checkout-input ${formErrors.address ? 'checkout-input--error' : ''}`}
                  />
                </div>

                <div className="checkout-form-group">
                  <input
                    type="text"
                    value={formData.apartment}
                    onChange={(e) => handleInputChange('apartment', e.target.value)}
                    placeholder={t('checkout.apartment')}
                    className="checkout-input"
                  />
                </div>

                <div className="checkout-form-row">
                  <div className="checkout-form-group">
                    <label className="checkout-label">
                      {t('checkout.city')} <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`checkout-input ${formErrors.city ? 'checkout-input--error' : ''}`}
                    />
                  </div>

                  <div className="checkout-form-group">
                    <label className="checkout-label">{t('checkout.state')}</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="checkout-input"
                    />
                  </div>
                </div>

                <div className="checkout-form-row">
                  <div className="checkout-form-group">
                    <label className="checkout-label">{t('checkout.zip')}</label>
                    <input
                      type="text"
                      value={formData.zip}
                      onChange={(e) => handleInputChange('zip', e.target.value)}
                      className="checkout-input"
                    />
                  </div>

                  <div className="checkout-form-group">
                    <label className="checkout-label">
                      {t('checkout.phone')} <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`checkout-input ${formErrors.phone ? 'checkout-input--error' : ''}`}
                    />
                  </div>
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-label">
                    {t('checkout.email')} <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`checkout-input ${formErrors.email ? 'checkout-input--error' : ''}`}
                  />
                </div>

                <div className="checkout-form-group">
                  <label className="checkout-label">{t('checkout.notes')}</label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="checkout-textarea"
                  />
                </div>
              </div>

              <div className="checkout-order-summary">
                <div className="checkout-card">
                  <h2 className="checkout-section-title">{t('checkout.orderTitle')}</h2>

                  <div className="checkout-items-list">
                    {items.map((item) => (
                      <div key={item.id} className="checkout-item">
                        <img src={item.imageUrl} alt={item.title} className="checkout-item__img" />
                        <div className="checkout-item__info">
                          <span className="checkout-item__title">{item.title}</span>
                          <span className="checkout-item__qty">Qty: {item.quantity}</span>
                        </div>
                        <span className="checkout-item__price">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="checkout-coupon-box">
                    <label className="checkout-coupon-label">{t('checkout.couponTitle')}</label>
                    <div className="checkout-coupon-input-group">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder={t('checkout.couponPlaceholder')}
                        className="checkout-input"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="checkout-btn checkout-btn--coupon"
                      >
                        {t('checkout.applyCoupon')}
                      </button>
                    </div>
                    {appliedCoupon && (
                      <span className="checkout-coupon-applied">
                        Coupon <strong>{appliedCoupon.code}</strong> applied!
                      </span>
                    )}
                  </div>

                  <div className="checkout-totals">
                    <div className="checkout-total-row">
                      <span>{t('checkout.subtotal')}</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="checkout-total-row">
                      <span>{t('checkout.shipping')}</span>
                      <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="checkout-total-row checkout-total-row--discount">
                        <span>{t('checkout.discount')}</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="checkout-total-row checkout-total-row--grand">
                      <span>{t('checkout.total')}</span>
                      <span className="grand-price">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="checkout-payment">
                    <h3 className="checkout-payment-title">{t('checkout.paymentTitle')}</h3>

                    <div className="checkout-payment-options">
                      <label className="checkout-radio-label">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="ramburs"
                          checked={formData.paymentMethod === 'ramburs'}
                          onChange={() => handleInputChange('paymentMethod', 'ramburs')}
                        />
                        <span>{t('checkout.cashDelivery')}</span>
                      </label>

                      <label className="checkout-radio-label">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={() => handleInputChange('paymentMethod', 'card')}
                        />
                        <span>{t('checkout.cardPayment')}</span>
                      </label>

                      {formData.paymentMethod === 'card' && (
                        <div className="checkout-card-fields">
                          <input
                            type="text"
                            placeholder="Card Number (16 digits)"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            className={`checkout-input ${formErrors.cardNumber ? 'checkout-input--error' : ''}`}
                          />
                          <div className="checkout-form-row">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              value={formData.cardExpiry}
                              onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                              className={`checkout-input ${formErrors.cardExpiry ? 'checkout-input--error' : ''}`}
                            />
                            <input
                              type="text"
                              placeholder="CVC"
                              value={formData.cardCvc}
                              onChange={(e) => handleInputChange('cardCvc', e.target.value)}
                              className={`checkout-input ${formErrors.cardCvc ? 'checkout-input--error' : ''}`}
                            />
                          </div>
                        </div>
                      )}

                      <label className="checkout-radio-label">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank"
                          checked={formData.paymentMethod === 'bank'}
                          onChange={() => handleInputChange('paymentMethod', 'bank')}
                        />
                        <span>{t('checkout.bankTransfer')}</span>
                      </label>
                    </div>

                    <div className="checkout-terms">
                      <label className={`checkout-checkbox-label ${formErrors.agreeTerms ? 'checkout-checkbox-label--error' : ''}`}>
                        <input
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                        />
                        <span>{t('checkout.terms')} *</span>
                      </label>
                    </div>

                    <button type="submit" className="checkout-btn checkout-btn--submit">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      {t('checkout.placeOrder')}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
