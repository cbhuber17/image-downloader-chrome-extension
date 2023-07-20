chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "get_images") {
    let formatted_images = [];

    // Get all img URLs on this page
    $("*").each(function () {
      let backImg;

      if ($(this).is("img")) {
        formatted_images.push($(this).prop("src"));
      } else {
        backImg = $(this).css("background-image");
        if (backImg != "none") {
          formatted_images.push(backImg.substring(4, backImg.length - 1));
        }
      }
    });

    sendResponse(formatted_images);
  }
});
