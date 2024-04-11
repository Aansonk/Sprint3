document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    // Define an object with airline names as keys and their descriptions as values
    const airlineInfo = {
      "Emirates": "Emirates provides flights to over 150 cities across 80 countries. Known for luxury travel.",
      "Qantas": "Qantas is the flag carrier of Australia, offering domestic and international flights.",
      "Singapore Airlines": "Singapore Airlines, known for exceptional service, flies to more than 60 destinations globally.",
      "Jetstar": "Jetstar offers low-cost domestic and international flights, a subsidiary of Qantas.",
      "American Airlines": "One of the largest airlines in the world, American Airlines offers an extensive domestic and international network, flying to nearly 350 destinations in over 50 countries.",
      "Air Canada": "As the flag carrier and largest airline of Canada, Air Canada provides scheduled and charter air transport for passengers and cargo to 207 destinations worldwide.",
      "Virgin Atlantic": "Known for its innovative marketing and unique customer service, Virgin Atlantic operates long-haul routes between the United Kingdom and major world cities.",
      "Lufthansa": "Germany's largest airline, Lufthansa, is known for its premium services, offering extensive coverage across Europe, Asia, America, and Africa.",
      "KLM": "KLM Royal Dutch Airlines is the flag carrier airline of the Netherlands, recognized as one of the oldest airlines in the world, serving destinations globally.",
      "Etihad Airways": "The national airline of the United Arab Emirates, Etihad Airways serves over 84 destinations with a fleet of 102 aircraft, known for its luxury services."
  };
  
  
    document.querySelectorAll('.learn-more-btn').forEach(button => {
      button.addEventListener('click', function() {
        const airline = this.getAttribute('data-airline');
        // Use the airline name to get the corresponding description
        const info = airlineInfo[airline] || "Information not available."; // Fallback text
        document.getElementById('modal-info').textContent = info;
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  });
  