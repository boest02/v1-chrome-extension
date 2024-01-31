chrome.runtime.onStartup.addListener(() => {

    chrome.scripting.executeScript({
      target: {allFrames: true},
      files: ['content.js']
    });
  
  });