export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    drop: [
      ["CAD Design", "/cad-design"],
      ["ANSYS Simulation", "/ansys-simulation"],
      ["Formlabs 3D Printing", "/formlabs"],
    ],
  },
  {
    label: "Services",
    href: "/services",
    drop: [
      ["Utility Network Services", "/utility-network"],
      ["Engineering Design Services", "/engineering-design"],
      ["HR Management (HRMS)", "/hrms"],
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
