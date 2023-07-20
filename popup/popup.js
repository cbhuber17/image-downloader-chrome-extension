let images = [];

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { action: "get_images" }, (res) => {
    // Clear the gallery
    $(".gallery").html("");

    images = res;
    res.map((img) => {
      $(".gallery").append('<img src="' + img + '" />');
    });
  });
});

// Button click action
$(document).on("click", "#download_all", (e) => {
  console.log("Downloading all");
  chrome.runtime.sendMessage({ action: "download", data: images }, (res) => {
    console.log("Complete");
  });
});
