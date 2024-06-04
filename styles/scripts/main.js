document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photo");

  photos.forEach((photo) => {
    const title = photo.getAttribute("data-title");
    const details = photo.getAttribute("data-details");

    // Create and append title element
    const titleElement = document.createElement("div");
    titleElement.className = "photo-title";
    titleElement.textContent = title;
    photo.appendChild(titleElement);

    // Create and append details element
    const detailsElement = document.createElement("div");
    detailsElement.className = "details";
    detailsElement.textContent = details;
    photo.appendChild(detailsElement);

    // Create and append "Know More" button
    const knowMoreButton = document.createElement("a");
    knowMoreButton.className = "know-more";
    knowMoreButton.href = "#"; // Update with the actual link if needed
    knowMoreButton.textContent = "Know More";
    photo.appendChild(knowMoreButton);
  });
});
