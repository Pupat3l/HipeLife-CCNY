// Function to add a new discussion to the featured discussions array
function addDiscussionToFeatured(title, content) {
    const newDiscussion = {
      id: featuredDiscussions.length + 1,
      title: title,
      content: content
    };
    featuredDiscussions.push(newDiscussion);
  }
  
  // Event listener for form submission
  discussForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get discussion title and content
    const discussionTitle = document.getElementById("discuss-title").value;
    const discussionContent = document.getElementById("discuss").value;
  
    // Add the new discussion to the featured discussions array
    addDiscussionToFeatured(discussionTitle, discussionContent);
  
    // Create a new discussion card (similar to what you did before)
    const discussionCard = document.createElement("div");
    discussionCard.classList.add("discussion-card");
    discussionCard.innerHTML = `
      <h3>${discussionTitle}</h3>
      <p>${discussionContent}</p>
      <a href="#discussion/${featuredDiscussions.length}" class="btn">Read More</a>
    `;
  
    // Append the new discussion card to the discussion list
    discussionList.appendChild(discussionCard);
  
    // Clear form inputs
    discussTitleInput.value = "";
    discussContentInput.value = "";
  });
  