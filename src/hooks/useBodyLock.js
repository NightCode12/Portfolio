import { useEffect } from "react";

/** Freezes background scrolling while an overlay is open. */
export function useBodyLock(locked) {
  useEffect(() => {
    document.body.classList.toggle("is-locked", locked);
    return () => document.body.classList.remove("is-locked");
  }, [locked]);
}
