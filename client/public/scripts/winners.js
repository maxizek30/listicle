const renderWinners = async () => {
  const response = await fetch("/winners");
  const data = await response.json();
  const mainContent = document.getElementById("main-content");
  mainContent.style.display = "flex";
  mainContent.style.flexWrap = "wrap";
  mainContent.style.justifyContent = "center";

  if (data) {
    data.map((winner) => {
      const card = document.createElement("article");

      // Card styles
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.maxWidth = "50%";
      card.style.margin = "20px";
      card.style.borderRadius = "10px";
      card.style.overflow = "hidden";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      card.style.transition = "transform 0.3s ease-in-out";
      card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-10px)";
      });
      card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0)";
      });

      // Top container with image and overlay styles
      const topContainer = document.createElement("header");
      topContainer.style.position = "relative";
      topContainer.style.height = "300px";
      topContainer.style.backgroundImage = `url(${winner.imageUrl})`;
      topContainer.style.backgroundSize = "cover";
      topContainer.style.backgroundPosition = "center";
      topContainer.style.borderBottom = "5px solid #f4f4f4";

      const imageOverlay = document.createElement("div");
      imageOverlay.style.position = "absolute";
      imageOverlay.style.top = "0";
      imageOverlay.style.left = "0";
      imageOverlay.style.right = "0";
      imageOverlay.style.bottom = "0";
      imageOverlay.style.background = "rgba(0, 0, 0, 0.4)";
      imageOverlay.style.display = "flex";
      imageOverlay.style.justifyContent = "center";
      imageOverlay.style.alignItems = "center";

      const teamName = document.createElement("h2");
      teamName.textContent = winner.teamName;
      teamName.style.color = "#fff";
      teamName.style.fontSize = "24px";
      teamName.style.fontWeight = "bold";
      teamName.style.textAlign = "center";
      teamName.style.padding = "0 15px";
      teamName.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
      imageOverlay.appendChild(teamName);

      topContainer.appendChild(imageOverlay);

      // Bottom container for details
      const bottomContainer = document.createElement("footer");
      bottomContainer.style.padding = "20px";
      bottomContainer.style.backgroundColor = "#fff";
      bottomContainer.style.display = "flex";
      bottomContainer.style.flexDirection = "column";
      bottomContainer.style.justifyContent = "space-between";

      const tournamentName = document.createElement("p");
      tournamentName.textContent = "Tournament: " + winner.tournamentName;
      tournamentName.style.margin = "0 0 10px";
      tournamentName.style.color = "#333";
      tournamentName.style.fontSize = "16px";
      bottomContainer.appendChild(tournamentName);

      const date = document.createElement("p");
      const formattedDate = new Date(winner.date).toLocaleDateString(
        undefined,
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );
      date.textContent = "Date Won: " + formattedDate;
      date.style.margin = "0 0 10px";
      date.style.color = "#333";
      date.style.fontSize = "16px";
      bottomContainer.appendChild(date);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/winners/${winner.id}`;
      link.style.display = "inline-block";
      link.style.padding = "10px 15px";
      link.style.marginTop = "10px";
      link.style.backgroundColor = "#007BFF";
      link.style.color = "white";
      link.style.textDecoration = "none";
      link.style.borderRadius = "5px";
      link.style.textAlign = "center";
      link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#0056b3";
      });
      link.addEventListener("mouseout", () => {
        link.style.backgroundColor = "#007BFF";
      });
      bottomContainer.appendChild(link);

      // Append top and bottom containers to the card
      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Winners Available 😞";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();
if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderWinners();
}
