// Function to hide sponsored content and AI Overview
const hideContent = () => {
  // Hide Sponsored Content
  document.querySelectorAll("div.vdQmEd.fP1Qef.xpd.EtOod.pkphOe").forEach((element) => {
    const span = element.querySelector("span.U3A9Ac.qV8iec");
    if (span && span.textContent.includes("Sponsored")) {
      element.style.display = "none";
    }
  });

  // Hide Google AI Overview
  document.querySelectorAll("div.OZ9ddf.WAUd4.GkDqAd").forEach((element) => {
    element.style.display = "none";
  });
};

// Run on page load and observe DOM changes to catch new content
hideContent();
const observer = new MutationObserver(hideContent);
observer.observe(document.body, { childList: true, subtree: true });
