import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently closest to the top of the viewport,
 * so the header can highlight the matching nav link.
 */
export function useActiveSection(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const pick = () => {
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }

      // Anchor the last link once the page is scrolled to the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setActive(atBottom ? ids[ids.length - 1] : current);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);

    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, [ids, offset]);

  return active;
}
