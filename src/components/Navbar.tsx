import { useState } from "react";
import { Menu, X } from "lucide-react";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  if (href === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState("", "", href);
    return;
  }
  const targetId = href.replace(/.*#/, "");
  const elem = document.getElementById(targetId);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth" });
  }
  window.history.pushState("", "", href);
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Research", href: "#research" },
  { name: "About", href: "#about" },
  //   { name: 'Publications', href: '#publications' },
  //   { name: 'Team', href: '#team' },
  //   { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">Kim Lab</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  smoothScroll(e, item.href);
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
