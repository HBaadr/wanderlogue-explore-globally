// src/components/Footer.tsx

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="text-center text-muted-foreground mb-6">
          <p className="text-sm">© 2025 Wanderlogue. All rights reserved.</p>
        </div>
        
        {/* Download Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=net.wanderlogue"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark smooth-transition shadow-lg hover:shadow-xl"
          >
            {/* Google Play Icon */}
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 512 512">
              <path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z"/>
              <path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z"/>
              <path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z"/>
              <path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z"/>
            </svg>
            <span className="font-medium">Get it on Google Play</span>
          </a>
          
          <a
            href="https://apps.apple.com/ma/app/wanderlogue/id6538716270"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 smooth-transition shadow-lg hover:shadow-xl"
          >
            {/* Apple Icon */}
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
            </svg>
            <span className="font-medium">Download on App Store</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
