document.addEventListener("DOMContentLoaded", function () {
    // Set the first tab and content as active on page load
    const firstTab = document.getElementById("custom-tab1");
    const firstContent = document.getElementById("custom-content1");

    if (firstTab && firstContent) {
        firstTab.classList.add("active");
        firstContent.classList.add("active");

        // Hide all other content divs except for the first one
        const contentDivs = document.querySelectorAll(".custom-content");
        contentDivs.forEach(contentDiv => {
            if (contentDiv !== firstContent) {
                contentDiv.classList.remove("active");
            }
        });

        // Remove the "active" class from all other tabs except for the first one
        const tabs = document.querySelectorAll(".custom-tab");
        tabs.forEach(tab => {
            if (tab !== firstTab) {
                tab.classList.remove("active");
            }
        });
    }
});

function changeTab(tabNumber) {
    // Hide all content divs and remove the "active" class from all tabs and buttons
    const contentDivs = document.querySelectorAll(".custom-content");
    contentDivs.forEach(contentDiv => {
        contentDiv.classList.remove("active");
    });

    const tabs = document.querySelectorAll(".custom-tab");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // Show the selected content div and add the "active" class to the selected tab and button
    const selectedContentDiv = document.getElementById(`custom-content${tabNumber}`);
    const selectedTab = document.getElementById(`custom-tab${tabNumber}`);

    if (selectedContentDiv && selectedTab) {
        selectedContentDiv.classList.add("active");
        selectedTab.classList.add("active");
    }
}
