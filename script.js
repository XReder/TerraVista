const data = {
  europe: [
    { title: "Ейфелева вежа", country: "Франція", img: "images/eiffel.jpg", desc: "Один із символів Парижа та всієї Франції." },
    { title: "Бранденбурзькі ворота", country: "Німеччина", img: "images/brandenburg.jpg", desc: "Історична пам’ятка Берліна." },
    { title: "Колізей", country: "Італія", img: "images/colosseum.jpg", desc: "Давньоримський амфітеатр у центрі Риму." },
    { title: "Парфенон", country: "Греція", img: "images/parthenon.jpg", desc: "Давньогрецький храм на Афінському акрополі." },
    { title: "Біг-Бен", country: "Велика Британія", img: "images/bigben.jpg", desc: "Одна з найвідоміших веж у світі." }
  ],
  asia: [
    { title: "Великий китайський мур", country: "Китай", img: "images/greatwall.jpg", desc: "Одна з нових семи чудес світу." },
    { title: "Тадж-Махал", country: "Індія", img: "images/tajmahal.jpg", desc: "Мавзолей з білого мармуру в Агра." },
    { title: "Фудзіяма", country: "Японія", img: "images/fuji.jpg", desc: "Священна гора та символ Японії." },
    { title: "Петра", country: "Йорданія", img: "images/petra.jpg", desc: "Стародавнє місто, висічене в скелях." },
    { title: "Ангкор-Ват", country: "Камбоджа", img: "images/angkorwat.jpg", desc: "Найбільший храмовий комплекс у світі." }
  ],
  north_america: [
    { title: "Статуя Свободи", country: "США", img: "images/liberty.jpg", desc: "Знаковий символ свободи в Нью-Йорку." },
    { title: "Ніагарський водоспад", country: "Канада/США", img: "images/niagara.jpg", desc: "Грандіозний водоспад на кордоні двох країн." },
    { title: "Чичен-Іца", country: "Мексика", img: "images/chichen.jpg", desc: "Місто мая з пірамідою Кукулькана." },
    { title: "Гранд-Каньйон", country: "США", img: "images/grandcanyon.jpg", desc: "Одне з найбільших природних чудес світу." },
    { title: "Алькатрас", country: "США", img: "images/alcatraz.jpg", desc: "Відома в’язниця на острові в затоці Сан-Франциско." }
  ],
  south_america: [
    { title: "Мачу-Пікчу", country: "Перу", img: "images/machu.jpg", desc: "Інкське місто серед гір Анд." },
    { title: "Христос-Спаситель", country: "Бразилія", img: "images/christ.jpg", desc: "Гігантська статуя над Ріо-де-Жанейро." },
    { title: "Водоспади Ігуасу", country: "Аргентина/Бразилія", img: "images/iguazu.jpg", desc: "Один із найбільших комплексів водоспадів у світі." },
    { title: "Салар де Уюні", country: "Болівія", img: "images/salar.jpg", desc: "Найбільше солоне озеро у світі." },
    { title: "Острів Пасхи", country: "Чилі", img: "images/easterisland.jpg", desc: "Відомий завдяки кам’яним статуям моаї." }
  ],
  africa: [
    { title: "Піраміди Гізи", country: "Єгипет", img: "images/pyramids.jpg", desc: "Стародавні гробниці фараонів." },
    { title: "Водоспад Вікторія", country: "Замбія/Зімбабве", img: "images/victoria.jpg", desc: "Один із найбільших водоспадів у світі." },
    { title: "Сахара", country: "Північна Африка", img: "images/sahara.jpg", desc: "Найбільша пустеля у світі." },
    { title: "Кіліманджаро", country: "Танзанія", img: "images/kilimanjaro.jpg", desc: "Найвища вершина Африки." },
    { title: "Мадагаскарські баобаби", country: "Мадагаскар", img: "images/baobab.jpg", desc: "Незвичайні дерева з фантастичним виглядом." }
  ],
  australia: [
    { title: "Оперний театр у Сіднеї", country: "Австралія", img: "images/opera.jpg", desc: "Ікона архітектури та культури." },
    { title: "Великий Бар'єрний риф", country: "Австралія", img: "images/reef.jpg", desc: "Найбільша коралова система у світі." },
    { title: "Айерс-Рок (Улуру)", country: "Австралія", img: "images/uluru.jpg", desc: "Священна гора аборигенів." },
    { title: "Пляж Бонді", country: "Австралія", img: "images/bondi.jpg", desc: "Відомий пляж у Сіднеї." },
    { title: "Національний парк Какаду", country: "Австралія", img: "images/kakadu.jpg", desc: "Дика природа, водоспади та стародавнє мистецтво." }
  ]
};

    
let currentPlaces = [];
let currentIndex = 0;

function showNextPlace() {
  if (!currentPlaces.length) return;

  currentIndex = (currentIndex + 1) % currentPlaces.length;
  const place = currentPlaces[currentIndex];

  document.getElementById("place-title").innerText = `${place.title} (${place.country})`;
  document.getElementById("place-image").src = place.img;
  document.getElementById("place-desc").innerText = place.desc;
  playClick();
}

    let currentKey = null;

    function goToMap() {
      document.getElementById("home-page").style.display = "none";
      document.getElementById("map-page").style.display = "block";
      playClick();
    }

    function goHome() {
      document.getElementById("map-page").style.display = "none";
      document.getElementById("home-page").style.display = "flex";
      hidePopup();
      playClick();
    }

    function toggleTheme() {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
      playClick();
    }

    function showPlace(key) {
        const placeList = data[key];
        if (!placeList) return;

        const index = Math.floor(Math.random() * placeList.length);
        currentPlaces = placeList;
        currentIndex = index;

        const place = currentPlaces[currentIndex];

        document.getElementById("place-title").innerText = `${place.title} (${place.country})`;
        document.getElementById("place-image").src = place.img;
        document.getElementById("place-desc").innerText = place.desc;

        const popup = document.getElementById("popup");
        const overlay = document.getElementById("overlay");

        popup.classList.remove("fade-out");
        popup.classList.add("scale-in");
        popup.style.display = "block";
        overlay.classList.add("fade-in");
        overlay.style.display = "block";

    playClick();
    }

    function showRandomPlace(key) {
      const places = data[key];
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      document.getElementById("place-title").innerText = `${randomPlace.title} (${randomPlace.country})`;
      document.getElementById("place-image").src = randomPlace.img;
      document.getElementById("place-desc").innerText = randomPlace.desc;
    }

    function showAnotherPlace() {
      if (currentKey) {
        showRandomPlace(currentKey);
        playClick();
      }
    }

    function hidePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  popup.classList.remove("scale-in");
  popup.classList.add("fade-out");
  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");

  setTimeout(() => {
    popup.style.display = "none";
    overlay.style.display = "none";
    popup.classList.remove("fade-out");
    overlay.classList.remove("fade-out");
  }, 300);
}

    function playClick() {
      document.getElementById("click-sound").play();
    }