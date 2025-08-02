// Example for slots page
function loadSlots() {
    fetch('/data/slots.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('slots-grid');
            grid.innerHTML = data.map(slot => `
                <div class="slot-card">
                    <img src="${slot.image}" alt="${slot.name}">
                    <h3>${slot.name}</h3>
                    <p>${slot.provider}</p>
                    <a href="${slot.link}" class="btn">Play Now</a>
                </div>
            `).join('');
        });
}

// Call this function in slots.html:
if (document.getElementById('slots-grid')) {
    loadSlots();
}