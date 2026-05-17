function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
function showRoute(routeId) {

    const display = document.getElementById("route-display");

    let content = "";

    switch(routeId) {

        // ================= NATURAL DISASTERS =================
        case "earthquake":
            content = "<h3>Earthquake Safety</h3><p>Drop, Cover, and Hold. Stay away from glass and heavy objects. Evacuate after shaking stops.</p>";
            break;

        case "volcano":
            content = "<h3>Volcano Safety</h3><p>Follow evacuation orders immediately. Wear masks to protect from ash and avoid low-lying areas.</p>";
            break;

        case "landslide":
            content = "<h3>Landslide Safety</h3><p>Avoid steep slopes during heavy rain. Move quickly to higher, stable ground if warning signs appear.</p>";
            break;

        case "stormsurge":
            content = "<h3>Storm Surge Safety</h3><p>Evacuate coastal areas immediately during typhoon warnings. Move to higher ground.</p>";
            break;

        case "tsunami":
            content = "<h3>Tsunami Preparedness</h3><p>After a strong earthquake near the coast, go immediately to higher ground.</p>";
            break;

        // ================= HEALTH & ENVIRONMENT =================
        case "dengue":
            content = "<h3>Dengue Prevention</h3><p>Remove stagnant water, clean surroundings, and protect against mosquito bites.</p>";
            break;

        case "heat":
            content = "<h3>Severe Heat Safety</h3><p>Stay hydrated, avoid direct sunlight, and wear light clothing during extreme heat.</p>";
            break;

        case "5s":
            content = "<h3>5S Safety System</h3><p>Sort, Set in Order, Shine, Standardize, Sustain for workplace safety and efficiency.</p>";
            break;

        // ================= ELECTRICAL & TRANSPORT =================
        case "electrical":
            content = "<h3>Electrical Safety</h3><p>Avoid overloaded outlets, keep hands dry, and report damaged wiring immediately.</p>";
            break;

        case "motorcycle":
            content = "<h3>Motorcycle Safety</h3><p>Always wear a helmet, follow traffic rules, and maintain safe speed and distance.</p>";
            break;

        // ================= RELIGIOUS & CULTURAL =================
        case "eid":
            content = "<h3>Eid Al Adha Safety</h3><p>Maintain cleanliness during gatherings and ensure safe food handling practices.</p>";
            break;

        case "soul":
            content = "<h3>All Souls' Day Safety</h3><p>Be cautious in crowded cemeteries, secure belongings, and stay hydrated.</p>";
            break;

        default:
            content = "<h3>Select a topic</h3><p>Click a button to view safety information.</p>";
    }

    display.innerHTML = content;
}
// ENLARGE DISPLAY BOX WHEN CLICKED
const routeDisplay = document.getElementById("route-display");

routeDisplay.addEventListener("click", () => {
    routeDisplay.classList.toggle("active");
});
// OPEN MODAL
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

// CLOSE WHEN CLICKING OUTSIDE IMAGE
window.onclick = function(event){

    const modal = document.getElementById("imageModal");

    if(event.target === modal){
        modal.style.display = "none";
    }
}

function showEvac(id) {

    let boxes = document.querySelectorAll('.evac-box');

    boxes.forEach(box => box.style.display = "none");

    document.getElementById(id).style.display = "block";
}
