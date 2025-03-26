const sideContainer = document.querySelector(".content-area");
const showTeam = async function () {
  try {
    const res = await fetch(
      " https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Manchester%20City"
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    let team = data.teams[0];

    team = {
      club: team.strTeam,
      description: team.strDescriptionEN,
      country: team.strCountry,
      league: team.strLeague,
      location: team.strLocation,
      stadium: team.strStadium,
      stadiumCapacity: team.intStadiumCapacity,
      formedYear: team.intFormedYear,
      logo: team.strBadge,
      banner: team.strBanner,
    };

    console.log(team);

    const markup = `
    <figure class="team__fig">
          <img src=${team.banner} alt=${team.club} class="team__img" />
          <h1 class="team__title">
            <span>${team.club}</span>
          </h1>
        </figure>
        <div class="team__details">
         <h2 class="heading--2">History</h2>
            <span class="team__info-text">${team.description}</span>
        </div>
        <div class="team__additionals">
          <h2 class="heading--2">${team.country}</h2>
          <ul class="team__additional-list">
            <li class="team__additional">
              <div class="team__quantity">STADIUM CAPACITY: ${team.stadiumCapacity}</div>
              <div class="team__description">
                <span class="team__unit"> STADIUM: ${team.stadium}</span>
              </div>
            </li>
            <li class="team__additional">
              <div class="team__quantity"> LOCATION: ${team.location}</div>
              <div class="team__description">
                <span class="team__unit"> FORMED YEAR: ${team.formedYear}</span>
              </div>
            </li>
        <div class="team__directions">
          <h2 class="heading--2">${team.league}</h2>
          <img src="${team.logo}"class="team__logo">
          </img>
        </div>`;
    sideContainer.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert("Error: " + err.message);
  }
};
showTeam();
