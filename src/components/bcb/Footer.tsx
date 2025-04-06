'use client';

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-bcb-teal">Beach Coast Beads</h3>
            <p className="text-bcb-tan">Handcrafted coastal jewelry made with love and positive intentions.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-bcb-teal">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/default-channel/products" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/default-channel/categories/necklaces" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/default-channel/categories/bracelets" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-bcb-teal">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-bcb-teal">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-bcb-tan hover:text-bcb-aqua transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-bcb-neutral">
          <p className="text-center text-bcb-tan">
            © {new Date().getFullYear()} Beach Coast Beads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 