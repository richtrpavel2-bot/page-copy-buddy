import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Domů", end: true },
  { to: "/aktualne", label: "Aktuálně" },
  { to: "/o-nas", label: "O spolku" },
  { to: "/co-nabizime", label: "Co nabízíme" },
  { to: "/studio-my-dve", label: "Studio My Dvě" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center" aria-label="Spolek Galimatyáš — domů">
          <img
            src={logo}
            alt="Spolek Galimatyáš"
            className="h-12 w-12 rounded-full md:h-16 md:w-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-secondary hover:text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary md:hidden"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <div className="container flex flex-col py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-secondary",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
