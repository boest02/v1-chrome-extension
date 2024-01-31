const cssFiles = {
    '/TeamRoom': 'style1.css',
    '/store/': 'style2.css'
  };
  
  
  //...
  console.log("V1: Loaded");
  const url = new URL(window.location.href);
  const path = url.pathname;
  
  for (let key in cssFiles) {
    if (path.match(key)) {
        console.log("V1: Match" + cssFiles[key]);
      chrome.scripting.insertCSS({
        //...
        files: [cssFiles[key]] 
      });
      break;
    } 
  }