// Saves options to chrome.storage
const saveOptions = () => {
    const options = {
        collapse: document.getElementById('collapse').checked,
        ownersHover: document.getElementById('owners-hover').checked,
        ownersHighlight: document.getElementById('owners-highlight').checked,
        titleWidth: document.getElementById('title-width').checked,
    };
  

  chrome.storage.sync.set(
    options,
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    const defaults = {
        collapse: true,
        ownersHover: true,
        ownersHighlight: true,
    };
  chrome.storage.sync.get(
    defaults,
    (items) => {
        document.getElementById('collapse').checked = items.collapse;
        document.getElementById('owners-hover').checked = items.ownersHover;
        document.getElementById('owners-highlight').checked = items.ownersHighlight;
        // titleWidth
        document.getElementById('title-width').checked = items.titleWidth;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);