chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Download each image
  if (request.action === "download") {
    for (let i = 0; i < request.data.length; i++) {
      chrome.downloads.download({ url: request.data[i] });
    }

    sendResponse("Done");
  }
});
