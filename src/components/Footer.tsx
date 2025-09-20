// src/components/Footer.tsx

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a
          href="https://play.google.com/store/apps/details?id=net.wanderlogue"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          {/* Icône Android (optionnelle) */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..." />
          </svg>
          Download for Android
        </a>
        <a
          href="https://apps.apple.com/ma/app/wanderlogue/id6538716270"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {/* Icône Apple (optionnelle) */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..." />
          </svg>
          Download for iOS
        </a>
      </div>
      </div>
    </footer>
  );
}
