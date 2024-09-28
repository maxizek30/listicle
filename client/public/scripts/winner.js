const renderWinner = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/winners");
  const data = await response.json();

  const winnerContent = document.getElementById("winner-content");
  let winner;
  winner = data.find((winner) => winner.id === requestedID);
  if (winner) {
    document.getElementById("image").src = winner.imageUrl;
    document.getElementById("name").textContent = winner.teamName;
    document.getElementById("tournament-name").textContent =
      "Tournament: " + winner.tournamentName;

    document.getElementById("roster").textContent =
      "Roster: " + winner.roster.join(", ");
    const formattedDate = new Date(winner.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    document.getElementById("date").textContent = formattedDate;
    document.title = `Team - ${winner.teamName}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Winners Available 😞";
    winnerContent.appendChild(message);
  }
};
renderWinner();
