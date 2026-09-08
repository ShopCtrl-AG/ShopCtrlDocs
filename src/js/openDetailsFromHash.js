/**
 * Expands a collapsed <details> block when the page is opened with a link to
 * its id, e.g. /docs/reporting#nps-overview-report
 *
 * Docusaurus renders <details> through a React component that keeps the body
 * hidden with inline styles, so setting the native `open` property is not
 * enough - the summary has to be clicked to trigger the component's own
 * toggle handler.
 */
function openDetailsFromHash() {
  const { hash } = window.location;
  if (hash.length < 2) {
    return;
  }

  const target = document.getElementById(decodeURIComponent(hash.substring(1)));
  const details = target && target.closest("details");
  if (!details) {
    return;
  }

  const scrollToTarget = () =>
    target.scrollIntoView({ block: "start", behavior: "smooth" });

  // data-collapsed is set by the Docusaurus Details component
  if (details.dataset.collapsed === "false") {
    scrollToTarget();
    return;
  }

  const summary = details.querySelector("summary");
  if (!summary) {
    return;
  }

  summary.click();
  // The block expands with a height animation, so scroll once it settles
  details.addEventListener("transitionend", scrollToTarget, { once: true });
  setTimeout(scrollToTarget, 400);
}

export function onRouteDidUpdate() {
  // Wait for the page to be rendered before looking for the target
  requestAnimationFrame(() => requestAnimationFrame(openDetailsFromHash));
}

if (typeof window !== "undefined") {
  window.addEventListener("hashchange", openDetailsFromHash);
}
