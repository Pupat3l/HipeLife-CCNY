const featuredDiscussions = [];

// Get elements from the DOM
const startFormButton = document.getElementById("start-form");
const discussForm = document.getElementById("discuss-form");
const discussTitleInput = document.getElementById("discuss-title");
const discussContentInput = document.getElementById("discuss");
const featuredDiscussionsSection = document.getElementById("featured-discussions");

function addDiscussionToFeatured(title, content, timestamp) {
  const newDiscussion = {
    id: featuredDiscussions.length + 1,
    title: title,
    content: content,
    timestamp: timestamp
  };
  featuredDiscussions.push(newDiscussion);
}

// Event listener for "Start a discussion" button
startFormButton.addEventListener("click", function() {
  discussForm.style.display = "block";
  startFormButton.style.display = "none";
});

// Event listener for form submission
discussForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get discussion title and content
  const discussionTitle = discussTitleInput.value;
  const discussionContent = discussContentInput.value;
  
  // Get current timestamp
  const timestamp = new Date().toLocaleString();

  // Add the new discussion to the featured discussions array
  addDiscussionToFeatured(discussionTitle, discussionContent, timestamp);

  // Create a new discussion card
  const discussionCard = document.createElement("div");
  discussionCard.classList.add("discussion-card");
  discussionCard.innerHTML = `
    <h3>${discussionTitle}</h3>
    <p>${discussionContent}</p>
    <p class="timestamp">${timestamp}</p>
  `;

  // Append the new discussion card to the featured discussions section
  featuredDiscussionsSection.appendChild(discussionCard);

  // Clear form inputs
  discussTitleInput.value = "";
  discussContentInput.value = "";

  // Hide the form and show the "Start a discussion" button
  discussForm.style.display = "none";
  startFormButton.style.display = "block";
});
