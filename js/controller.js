const token = "	cc13e9364e52402183503e253e324864";

const showTeam = async function () {
  try {
    const res = await fetch(
      " https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Liverpool"
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
  } catch (err) {
    alert("Error: " + err.message);
  }
};
showTeam();
