// src/components/GoogleAd.jsx
import { useEffect } from "react";
import { ADSENSE_CONFIG } from '@/config/ads-config';

const GoogleAd = ({ adSlot }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.warn("AdSense error:", e);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [adSlot]);

  return (
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format="fluid"
        data-ad-layout="in-article"
      ></ins>
  );
};

export { GoogleAd }
