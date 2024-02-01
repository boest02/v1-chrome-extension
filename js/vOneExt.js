
const _WAIT_TIME = 2500; // waiting for v1 data to fill

// helper functions
// ================
const headerCheck = (h) => {
    let value = parseInt(h.querySelector('.card-count-container .value').innerText);
    let button = h.querySelector('.collapseButton');
    
    // collapse zero counts, if not collapsed
    !h.classList.contains('collapsed') && !value && button.click();
    
    // expand non-zero counts, if collapsed
    h.classList.contains('collapsed') && value && button.click();
};

const checkHeaders = () => {
    console.log("v1.ext: Checking headers", document);
    let headers = document.querySelectorAll('.header-cell');
    console.log("v1.ext: Found " + headers.length + " headers", headers);

    headers.forEach(header => headerCheck(header));
};

const collapseHeaders = () => setTimeout(checkHeaders, _WAIT_TIME);

// ================

// Features
const features = {
    collapse: {
        css: ``,
        js: collapseHeaders
    },
    ownersHover: {
        css: `.persona-filters {
            overflow: unset !important;
        }
        .persona-filters ul {
            overflow: unset !important;
        }
        li.owner {
            min-width: 40px;
        }
        li.owner:hover {
            transform: scale(2) translate(0, 10px);
            font-weight: bold;
        }`,
        js: null
    },
    ownersHighlight: {
        css: `li.owner.selected {
            border: 1px solid lime !important;
            padding: 5px !important;
            border-radius: 5px !important;
        }`,
        js: null
    },
    titleWidth: {
        css: `
        [aria-labelledby="title"] + a {
            min-width: 400px;
        }`,
        js: null
    }
}

// Process features

const processFeatures = (active) => {
    let cssText = '';
    const addCSS = (css) => cssText += css;
    Object.keys(active).forEach(feature => {
        if (active[feature]) {
            console.log("v1.ext: Processing feature", feature);
            addCSS(features[feature].css);
            features[feature].js && features[feature].js();
        }
    });
    
    // Create style element
    const style = document.createElement('style');

    // Add CSS rules 
    style.innerHTML = cssText;

    console.log("v1.ext: Loading CSS", style);

    // Append style element to head
    document.head.appendChild(style);
}


// MAIN
console.log("v1.ext: Running");
// get enabled features
chrome.storage.sync.get(
    {
        collapse: true,
        ownersHover: true,
        ownersHighlight: true,
        titleWidth: true
    },
    (items) => {
        console.log("Items", items);
        processFeatures(items);
    }
  );



