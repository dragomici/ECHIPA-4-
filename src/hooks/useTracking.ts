import { useCallback } from 'react';

interface EventPayload {
  [key: string]: unknown;
}

export const useTracking = () => {
  const trackEvent = useCallback((eventName: string, payload?: EventPayload) => {
    const timestamp = new Date().toISOString();
    console.log(`[ANALYTICS]  Event Tracked: ${eventName}`, {
      timestamp,
      ...payload,
    });
  }, []);

  const trackPageView = useCallback((pageName: string) => {
    trackEvent('page_view', { page: pageName });
  }, [trackEvent]);

  const trackAddToCart = useCallback((productId: string | number, title: string, price: number) => {
    trackEvent('add_to_cart', {
      product_id: productId,
      product_title: title,
      price: price,
      currency: 'USD',
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackAddToCart,
  };
};

export default useTracking;