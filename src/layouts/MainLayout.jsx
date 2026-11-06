
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PageTitle from "../components/PageTitle";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-primary">
      {/* Page Title & Scroll Management */}
      <PageTitle />
      <ScrollToTop />

      {/* Accessibility */}
      <a
        href="#main-content"
        className="sr-only rounded-md bg-primary px-4 py-2 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-6 md:py-16"
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
