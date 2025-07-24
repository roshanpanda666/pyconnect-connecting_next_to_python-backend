// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-green-400 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">📦 Data Portal</h1>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className={`md:flex space-x-6 text-base font-medium hidden`}>
          <li><Link href="/pushdata"><span className="hover:text-green-300 transition">Push Data</span></Link></li>
          <li><Link href="/updatedata"><span className="hover:text-green-300 transition">Update Data</span></Link></li>
          <li><Link href="/getalldata"><span className="hover:text-green-300 transition">See All Data</span></Link></li>
          <li><Link href="/"><span className="hover:text-green-300 transition">See Latest Data</span></Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-2 flex flex-col space-y-3 px-2 text-base font-medium">
          <li><Link href="/pushdata"><span className="hover:text-green-300 transition">Push Data</span></Link></li>
          <li><Link href="/updatedata"><span className="hover:text-green-300 transition">Update Data</span></Link></li>
          <li><Link href="/getalldata"><span className="hover:text-green-300 transition">See All Data</span></Link></li>
          <li><Link href="/"><span className="hover:text-green-300 transition">See Latest Data</span></Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
