/** Normalize pathname for same-route comparison (trailing slash). */
export function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

export function resolveAnchorHref(href: string, base: string): URL | null {
  try {
    return new URL(href, base);
  } catch {
    return null;
  }
}

export function isInternalUrl(url: URL, origin: string): boolean {
  return url.origin === origin;
}

export function isSameRoute(current: URL, target: URL): boolean {
  return (
    normalizePathname(current.pathname) === normalizePathname(target.pathname) &&
    current.search === target.search
  );
}

/** Let the browser handle hash-only navigation to a different section. */
export function shouldAllowHashNavigation(current: URL, target: URL): boolean {
  return Boolean(target.hash) && target.hash !== current.hash;
}

export function isModifiedClick(event: MouseEvent): boolean {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export function isIgnorableAnchor(anchor: HTMLAnchorElement): boolean {
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) return true;

  const href = anchor.getAttribute("href");
  if (!href) return true;
  if (href.startsWith("#")) return true;
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
    return true;
  }

  return false;
}
