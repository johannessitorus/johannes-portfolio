
import { useEffect } from "react";
import { useLocation } from "react-router";

const pageTitles = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/certifications": "Certifications",
  "/contact": "Contact",
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pathname.startsWith("/projects/")
      ? "Project Details"
      : pageTitles[pathname] || "Page Not Found";

    document.title =
      `${page} | Johannes Christian Pratama Sitorus`;
  }, [pathname]);

  return null;
}
