import { serviceCategories } from "./services";

type NavItem = { label: string; href: string; hasMegaMenu?: boolean };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const servicesMegaMenu = serviceCategories.map((category) => ({
  title: category.title,
  href: `/services#${category.slug}`,
  links: category.services.map((service) => ({
    label: service.name,
    href: `/services#${category.slug}`,
  })),
}));
