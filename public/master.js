const styles = `content: url("./public/checklist.png");width: 150px;height: 150px;display: flex;justify-content: center;align-items: center;background: #fff`;

let date = new Date();
date = date.toDateString();

dateTag.innerHTML = date;

if (!localStorage.date) {
  localStorage.setItem("date", date);
}

if (localStorage.date !== date) {
  localStorage.clear();
}

if (localStorage) {
  for (let i in localStorage) {
    if (i == "a" || i == "b" || i == "c" || i == "d") {
      document.getElementById(i).style = styles;
    }
  }
}

function click(e, b) {
  e.onclick = function () {
    e.style = styles;
    location.href = b
    localStorage.setItem(e.id, true);
  };
}

click(a, "https://quran.com");
click(b, "https://learngerman.dw.com/en/nicos-weg/c-36519789");
click(c, "https://www.youtube.com/@anaHr/playlists?view=50&sort=dd&shelf_id=2");
click(d, "https://www.youtube.com/@ZAmericanEnglish/playlists");
