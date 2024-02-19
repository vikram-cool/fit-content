$(document).ready(function () {
  $("#content").load(
    "https://getresumes.myoutshine.com/139229ea/index.html",
    function () {
      pageBreak();
      $(".resume-page").css("width", "740px");
    }
  );
});

function pageBreak() {
  const pageWidth = 763;
  const content = document.getElementById("content");
  const totalWidth = content.scrollWidth;
  // const totalPages = Math.floor(totalWidth / pageWidth);
  const totalPages = Math.floor(totalWidth / pageWidth);
  console.log("totalPages", totalPages);

  let contentVisible = true;
  const button = document.getElementById("btn-content");
  const buttonText = document.getElementById("btn-content-text");
  const showHideContent = () => {
    contentVisible = !contentVisible;
    content.style.display = contentVisible ? "block" : "none";
    buttonText.innerText = contentVisible ? "Hide" : "Show";
  };
  button.addEventListener("click", showHideContent);

  const html = content.innerHTML;
  const container = document.getElementById("container");
  // console.log('content', content);
  for (let p = 0; p < totalPages; p++) {
    const page = document.createElement("div");
    page.innerHTML = html;
    page.className = "page";
    page.style.cssText = `
    width: ${totalWidth}px;
    transform: translateX(-${p * pageWidth}px);
  `;
    const pageClip = document.createElement("div");
    pageClip.className = "page-clip";
    pageClip.appendChild(page);
    const pageWrapper = document.createElement("div");
    pageWrapper.className = "page-wrapper";
    pageWrapper.appendChild(pageClip);
    container.appendChild(pageWrapper);
  }

  showHideContent();
}

function scalePreviewPage() {
  var $page = $(".page_content");

  getPageSize();
  scalePages($page, pageWidth, pageHeight);

  //using underscore to delay resize method till finished resizing window
  $(window).resize(
    _.debounce(function () {
      getPageSize();
      scalePages($page, pageWidth, pageHeight);
    }, 150)
  );
}
