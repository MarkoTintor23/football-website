const showScorers = async function () {
  try {
    const res = await fetch("https://api.football-data.org/v4/areas/", {
      method: "GET",
      headers: {
        "X-Auth-Token": "cc13e9364e52402183503e253e324864",
      },
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    console.log(data);
  } catch (err) {
    alert("Error: " + err.message);
  }
};
showScorers();
