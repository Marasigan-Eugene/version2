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

    let routes = document.querySelectorAll('.route-box');

    routes.forEach(route => {
        route.style.display = 'none';
    });

    document.getElementById(routeId).style.display = 'block';
}