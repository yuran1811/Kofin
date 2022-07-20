import React from "react";
import { HeaderLink } from "./HeaderLink";

export const Header = () => (
  <header className="py-6 mx-10">
    <nav className="flex items-center justify-between">
      <div className="cursor-pointer basis-2/6 font-bold text-center text-xl">Kofin</div>

      <ul className="basis-3/6 flex items-center justify-end gap-4 text-sm font-bold text-gray-600">
        <HeaderLink>
          <a className="" href="#">
            Home
          </a>
        </HeaderLink>

        <HeaderLink>
          <a className="" href="#">
            Our products
          </a>
        </HeaderLink>

        <HeaderLink>
          <a className="" href="#">
            Blog
          </a>
        </HeaderLink>

        <HeaderLink>
          <a className="" href="#">
            About
          </a>
        </HeaderLink>

        <HeaderLink>
          <a className="" href="#">
            Contact
          </a>
        </HeaderLink>

        <HeaderLink>
          <a className="" href="#">
            Styleguide
          </a>
        </HeaderLink>
      </ul>

      <div className="basis-1/6 ml-2 font-bold text-sm">
        <div className="cursor-pointer flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="px-1">Cart</span>
        </div>
        <div className="sm:hidden">Menu</div>
      </div>
    </nav>
  </header>
);
