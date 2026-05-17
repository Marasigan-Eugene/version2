// =========================
// SHOW SECTION
// =========================
function showSection(sectionId) {

    // Hide all sections
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // ACTIVE SIDEBAR
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(link => {
        link.classList.remove('active');
    });

    event.currentTarget.classList.add('active');
}


// =========================
// SHOW ROUTE INFO
// =========================
function showRoute(routeId) {

    const display = document.getElementById("route-display");

    let content = "";

    switch(routeId) {

        case "earthquake":
            content = `
                <h3>Earthquake Safety</h3>
                <p>
                    Drop, Cover, and Hold. Stay away from glass and heavy objects.
                    Evacuate after shaking stops.
                </p>
            `;
            break;

        case "volcano":
            content = `
                <h3>Volcano Safety</h3>
                <p>
                    Follow evacuation orders immediately.
                    Wear masks and avoid low-lying areas.
                </p>
            `;
            break;

        case "landslide":
            content = `
                <h3>Landslide Safety</h3>
                <p>
                    Avoid steep slopes during heavy rain and move
                    to higher ground if warning signs appear.
                </p>
            `;
            break;

        case "stormsurge":
            content = `
                <h3>Storm Surge Safety</h3>
                <p>
                    Evacuate coastal areas immediately during typhoon warnings.
                </p>
            `;
            break;

        case "tsunami":
            content = `
                <h3>Tsunami Preparedness</h3>
                <p>
                    After a strong earthquake, immediately move
                    to higher ground.
                </p>
            `;
            break;

        case "dengue":
            content = `
                <h3>Dengue Prevention</h3>
                <p>
                    Remove stagnant water and protect yourself
                    from mosquito bites.
                </p>
            `;
            break;

        case "heat":
            content = `
                <h3>Severe Heat Safety</h3>
                <p>
                    Stay hydrated and avoid direct sunlight
                    during extreme heat.
                </p>
            `;
            break;

        case "5s":
            content = `
                <h3>5S Safety System</h3>
                <p>
                    Sort, Set in Order, Shine, Standardize,
                    and Sustain workplace safety.
                </p>
            `;
            break;

        case "electrical":
            content = `
                <h3>Electrical Safety</h3>
                <p>
                    Avoid overloaded outlets and report
                    damaged wiring immediately.
                </p>
            `;
            break;

        case "motorcycle":
            content = `
                <h3>Motorcycle Safety</h3>
                <p>
                    Always wear a helmet and follow traffic rules.
                </p>
            `;
            break;

        case "eid":
            content = `
                <h3>Eid Al Adha Safety</h3>
                <p>
                    Maintain cleanliness and practice safe food handling.
                </p>
            `;
            break;

        case "soul":
            content = `
                <h3>All Souls' Day Safety</h3>
                <p>
                    Be cautious in crowded areas and stay hydrated.
                </p>
            `;
            break;

        default:
            content = `
                <h3>Select a Topic</h3>
                <p>Click a button to view safety information.</p>
            `;
    }

    display.innerHTML = content;
}


// =========================
// ENLARGE DISPLAY
// =========================
const routeDisplay = document.getElementById("route-display");

routeDisplay.addEventListener("click", () => {
    routeDisplay.classList.toggle("active");
});


// =========================
// IMAGE MODAL
// =========================
function openModal(src){

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = src;
}


// CLOSE MODAL
function closeModal(){
    document.getElementById("imageModal").style.display = "none";
}


// CLOSE WHEN CLICK OUTSIDE
window.onclick = function(event){

    const modal = document.getElementById("imageModal");

    if(event.target === modal){
        modal.style.display = "none";
    }
}
