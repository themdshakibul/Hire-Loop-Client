"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UsierData from "./UsierData";

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data } = authClient.useSession();

  const user = data?.user;

  const navLinks = [
    {
      name: "Browse Jobs",
      href: "/jobs",
    },
    {
      name: "Companies",
      href: "/companies",
    },
    {
      name: "Pricing",
      href: "/plans",
    },
  ];

  const deshBoardLinks = {
    seeker: "dashboard/seeker",
    recruiter: "dashboard/recruiter",
  };

  if (user?.email) {
    navLinks.push({
      name: "Dashboard",
      href: deshBoardLinks[user?.role || "seeker"],
    });
  }

  return (
    <nav
      className="
        sticky top-0 z-50 w-full
        bg-[#0a0a0a]
        backdrop-blur-xl
      "
    >
      <header
        className="
          mx-auto
          flex h-20 container  px-2
          items-center justify-between
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              flex items-center justify-center
              rounded-lg p-2
              text-white
              transition hover:bg-white/10
              md:hidden
            "
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-2xl
                bg-linear-to-br
                from-fuchsia-600
                to-violet-500
                shadow-lg
              "
            >
              H
            </div>

            <div className="leading-none">
              <h1 className="text-lg font-bold text-white">HireFlow</h1>

              <p className="text-xs text-gray-400">Hiring Platform</p>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">
          <ul
            className="
              flex items-center gap-8
              rounded-2xl
              border border-white/10
              bg-white/5
              px-6 py-3
              backdrop-blur-xl
            "
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      text-sm font-medium transition-all duration-200
                      hover:text-violet-400
                      ${isActive ? "text-violet-400" : "text-gray-300"}
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {user ? (
            <>
              <UsierData user={user} />
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/sigin"
                className="
                text-sm font-medium
                text-violet-400
                transition hover:text-violet-300
              "
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="
                rounded-xl
                bg-white
                px-5 py-3
                text-sm font-semibold
                text-black
                transition-all duration-200
                hover:scale-105
              "
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className="
            border-t border-white/10
            bg-[#0a0a0a]
            md:hidden
          "
        >
          <div className="space-y-4 px-4 py-6">
            {/* MOBILE LINKS */}
            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        block rounded-xl px-4 py-3
                        text-sm font-medium
                        transition-all duration-200
                        hover:bg-white/5
                        ${
                          isActive
                            ? "bg-white/5 text-violet-400"
                            : "text-gray-300"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* MOBILE BUTTONS */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl border border-white/10
                  px-4 py-3
                  text-center text-sm font-medium
                  text-white
                  transition hover:bg-white/5
                "
              >
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-xl
                  bg-white
                  px-4 py-3
                  text-center text-sm font-semibold
                  text-black
                  transition hover:scale-[1.02]
                "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
