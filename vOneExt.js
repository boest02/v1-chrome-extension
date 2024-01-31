
const _WAIT_TIME = 2500; // waiting for v1 data to fill

// Create style element
const style = document.createElement('style');

// Add CSS rules 
style.innerHTML = `
[aria-labelledby="title"] + a {
    width: 400px;
    border: 1px solid goldenrod;
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