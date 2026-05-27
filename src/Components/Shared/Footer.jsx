import Link from "next/link";

import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* GRID BACKGROUND */}
      <div
        className="
          absolute inset-0 opacity-20
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-size-[70px_70px]
        "
      />

      <div className="relative mx-auto container px-2 py-16">
        {/* TOP */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              {/* ICON */}
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  bg-linear-to-br
                  from-fuchsia-600
                  to-violet-500
                  shadow-lg
                "
              >
                H
              </div>

              {/* TEXT */}
              <div className="leading-none">
                <h1 className="text-lg font-bold text-white">HireFlow</h1>

                <p className="text-sm font-semibold text-white">
                  Hiring Platform
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p className="max-w-xs text-sm leading-7 text-gray-400">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              {/* FACEBOOK */}
              <Link
                href="#"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  bg-white/5
                  text-white
                  transition-all duration-200
                  hover:bg-violet-600
                "
              >
                <LogoFacebook className="h-5 w-5" />
              </Link>

              {/* PINTEREST */}
              <Link
                href="#"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  bg-violet-600
                  text-white
                  transition-all duration-200
                  hover:scale-105
                "
              >
                <LogoLinkedin className="h-5 w-5" />
              </Link>

              {/* LINKEDIN */}
              <Link
                href="#"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  bg-white/5
                  text-white
                  transition-all duration-200
                  hover:bg-violet-600
                "
              >
                <LogoLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-violet-500">
              Product
            </h3>

            <ul className="space-y-4">
              {["Job discovery", "Worker AI", "Companies", "Salary data"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="
                      text-sm text-gray-400
                      transition hover:text-white
                    "
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-violet-500">
              Navigations
            </h3>

            <ul className="space-y-4">
              {["Help center", "Career library", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-sm text-gray-400
                      transition hover:text-white
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-violet-500">
              Resources
            </h3>

            <ul className="space-y-4">
              {["Brand Guideline", "Newsroom"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-sm text-gray-400
                      transition hover:text-white
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-16
            flex flex-col gap-4
            border-t border-white/10
            pt-6
            text-sm text-gray-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>Copyright 2026 — Hiring Platform</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" className="transition hover:text-white">
              Terms & Policy
            </Link>

            <span className="hidden md:block">-</span>

            <Link href="#" className="transition hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
