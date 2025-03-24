const token = "	cc13e9364e52402183503e253e324864";

const showScorers = async function () {
  try {
    const res = await fetch(
      " https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Everton"
    );

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    console.log(data);
  } catch (err) {
    alert("Error: " + err.message);
  }
};
showScorers();
