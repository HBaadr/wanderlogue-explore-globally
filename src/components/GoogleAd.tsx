// src/components/GoogleAd.jsx
import { useEffect } from "react";
import { ADSENSE_CONFIG } from '@/config/ads-config';

const GoogleAd = ({ adSlot }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [adSlot]);

  return (
    <div className="mb-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format="fluid"
        data-ad-layout="in-article"
      ></ins>
    </div>
  );
};

export default GoogleAd;
