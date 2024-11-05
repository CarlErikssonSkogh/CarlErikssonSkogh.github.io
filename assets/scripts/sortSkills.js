// Select the skillsContainer element
const skillsContainer = document.getElementById("skillsContainer");

// Select all .item elements within skillsContainer
const skillItems = skillsContainer.querySelectorAll(".item");

// Array to hold skill items with their progress widths
const skillProgressList = [];

// Loop through each .item element
skillItems.forEach((item) => {
    // Access the skill title
    const title = item.querySelector(".level-title").textContent;

    // Access the progress bar and its width
    const progressBar = item.querySelector(".progress-bar");
    const progressWidth = parseFloat(progressBar.style.width); // Convert to a number for comparison

    // Push an object with title and progress width to the array
    skillProgressList.push({ item, title, progressWidth });
});

// Sort the skillProgressList based on progressWidth in descending order
skillProgressList.sort((a, b) => b.progressWidth - a.progressWidth);
console.log(skillProgressList)
// Clear the existing items in the container
skillsContainer.innerHTML = '';

// Re-append sorted items to the skillsContainer
skillProgressList.forEach(({ item }) => {
    skillsContainer.appendChild(item); // Append each sorted item back to the container
});
