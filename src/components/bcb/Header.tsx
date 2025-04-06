'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // Default to default-channel if we can't fetch the channel list
    setBaseUrl("/default-channel");
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/bcb-logo.png"
              alt="Beach Coast Beads"
              width={50}
              height={50}
              className="w-auto h-12"
              priority
            />
            <span className="text-bcb-teal font-bold text-xl">Beach Coast Beads</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href={`${baseUrl}/products`} className="text-bcb-teal hover:text-bcb-aqua transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-bcb-teal hover:text-bcb-aqua transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-bcb-teal hover:text-bcb-aqua transition-colors">
              Contact
            </Link>
            <Link href={`${baseUrl}/cart`} className="btn-primary">
              Cart (0)
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}; 