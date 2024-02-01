chrome.storage.local.get('signed_in', (data) => {
    if (data.signed_in) {
      chrome.action.setPopup({popup: 'popup/popup2.html'});
    } else {
      chrome.action.setPopup({popup: 'popup/popup.html'});
    }
  });