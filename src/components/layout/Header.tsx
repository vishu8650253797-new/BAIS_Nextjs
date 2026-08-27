"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MegaMenuPanel } from "@/components/layout/MegaMenuPanel";
import { BlogMegaMenuPanel } from "@/components/layout/BlogMegaMenuPanel";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/layout/Logo";

type Rect = { left: number; width: number };
type MegaMenuKey = "services" | "blog";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaMenuKey | null>(null);
  const [hoverRect, setHoverRect] = useState<Rect | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  function updateRectFromTarget(target: HTMLElement) {
    if (!navRef.current) return;
    const containerRect = navRef.current.getBoundingClientRect();
    const itemRect = target.getBoundingClientRect();
    setHoverRect({ left: itemRect.left - containerRect.left, width: itemRect.width });
  }

  function openMegaMenu(key: MegaMenuKey, target: HTMLElement) {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    updateRectFromTarget(target);
    setOpenMenu(key);
  }

  function scheduleClose() {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 150);
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-cream transition-shadow duration-300",
          scrolled && "shadow-md shadow-ink/5",
        )}
        onMouseLeave={() => {
          setHoverRect(null);
          scheduleClose();
        }}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Bay Area Immigration Services home">
            <Logo />
          </Link>

          <div ref={navRef} className="relative hidden items-center lg:flex">
            <motion.div
              className="absolute inset-y-1 rounded-full bg-white"
              animate={
                hoverRect
                  ? { left: hoverRect.left, width: hoverRect.width, opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
            />

            {mainNav.map((item) =>
              item.hasMegaMenu ? (
                <button
                  key={item.label}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openMenu === item.hasMegaMenu}
                  onMouseEnter={(e) => openMegaMenu(item.hasMegaMenu!, e.currentTarget)}
                  onFocus={(e) => openMegaMenu(item.hasMegaMenu!, e.currentTarget)}
                  onClick={(e) => openMegaMenu(item.hasMegaMenu!, e.currentTarget)}
                  className="relative z-10 flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-ink"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openMenu === item.hasMegaMenu && "rotate-180",
                    )}
                  />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={(e) => {
                    if (closeTimeout.current) clearTimeout(closeTimeout.current);
                    setOpenMenu(null);
                    updateRectFromTarget(e.currentTarget);
                  }}
                  onFocus={(e) => {
                    setOpenMenu(null);
                    updateRectFromTarget(e.currentTarget);
                  }}
                  className="relative z-10 px-4 py-2.5 text-sm font-semibold text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button href="/contact">Schedule a Consultation</Button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="rounded-md p-2 text-ink transition-colors hover:bg-white lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </Container>

        <div onMouseEnter={() => closeTimeout.current && clearTimeout(closeTimeout.current)}>
          <MegaMenuPanel open={openMenu === "services"} onClose={() => setOpenMenu(null)} />
          <BlogMegaMenuPanel open={openMenu === "blog"} onClose={() => setOpenMenu(null)} />
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
