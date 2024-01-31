
const _WAIT_TIME = 2500; // waiting for v1 data to fill

// Create style element
const style = document.createElement('style');

// Add CSS rules 
style.innerHTML = `
[aria-labelledby="title"] + a {
    min-width: 400px;
}
.persona-filters {
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
}
li.owner.selected {
    border: 1px solid lime !important;
    padding: 5px !important;
    border-radius: 5px !important;
}`;

console.log("v1.ext: Loading CSS", style);

// Append style element to head
document.head.appendChild(style);


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

// wait for data to load
setTimeout(checkHeaders, _WAIT_TIME);