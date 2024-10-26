// Select all elements that contain 'Sponsored' text within the specified div
const hideSponsoredContent = () => {
    document.querySelectorAll("div.vdQmEd.fP1Qef.xpd.EtOod.pkphOe").forEach((element) => {
      const span = element.querySelector("span.U3A9Ac.qV8iec");
      if (span && span.textContent.includes("Sponsored")) {
        element.style.display = "none"; // Hides the sponsored element
      }
    });
  };
  
  // Run on page load and observe DOM changes to catch new ads
  hideSponsoredContent();
  const observer = new MutationObserver(hideSponsoredContent);
  observer.observe(document.body, { childList: true, subtree: true });
  