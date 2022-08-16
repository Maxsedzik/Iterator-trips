//TRIPS
const data = [
  {
    name: "Trip A",
    price: 2500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Diam maecenas ultricies mi eget mauris pharetra et. Donec adipiscing tristique risus nec feugiat in. Quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id. Dui id ornare arcu odio ut. Euismod lacinia at quis risus sed. Amet massa vitae tortor condimentum lacinia quis vel eros. Ut venenatis tellus in metus vulputate eu scelerisque felis. Enim facilisis gravida neque convallis a cras semper auctor. Sed vulputate mi sit amet mauris.",
    image: "img/1.jpg",
  },
  {
    name: "Trip B",
    price: 1000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Diam maecenas ultricies mi eget mauris pharetra et. Donec adipiscing tristique risus nec feugiat in. Quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id. Dui id ornare arcu odio ut. Euismod lacinia at quis risus sed. Amet massa vitae tortor condimentum lacinia quis vel eros. Ut venenatis tellus in metus vulputate eu scelerisque felis. Enim facilisis gravida neque convallis a cras semper auctor. Sed vulputate mi sit amet mauris.",
    image: "img/2.jpg",
  },
  {
    name: "Trip C",
    price: 1780,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Diam maecenas ultricies mi eget mauris pharetra et. Donec adipiscing tristique risus nec feugiat in. Quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id. Dui id ornare arcu odio ut. Euismod lacinia at quis risus sed. Amet massa vitae tortor condimentum lacinia quis vel eros. Ut venenatis tellus in metus vulputate eu scelerisque felis. Enim facilisis gravida neque convallis a cras semper auctor. Sed vulputate mi sit amet mauris.",
    image: "img/3.jpg",
  },
  {
    name: "Trip D",
    price: 2125,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Diam maecenas ultricies mi eget mauris pharetra et. Donec adipiscing tristique risus nec feugiat in. Quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id. Dui id ornare arcu odio ut. Euismod lacinia at quis risus sed. Amet massa vitae tortor condimentum lacinia quis vel eros. Ut venenatis tellus in metus vulputate eu scelerisque felis. Enim facilisis gravida neque convallis a cras semper auctor. Sed vulputate mi sit amet mauris.",
    image: "img/4.jpg",
  },
  {
    name: "Trip E",
    price: 2000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Diam maecenas ultricies mi eget mauris pharetra et. Donec adipiscing tristique risus nec feugiat in. Quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id. Dui id ornare arcu odio ut. Euismod lacinia at quis risus sed. Amet massa vitae tortor condimentum lacinia quis vel eros. Ut venenatis tellus in metus vulputate eu scelerisque felis. Enim facilisis gravida neque convallis a cras semper auctor. Sed vulputate mi sit amet mauris.",
    image: "img/5.jpg",
  },
  {
    name: "Trip F",
    price: 1980,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut. Diam maecenas ultricies mi eget mauris pharetra et. Donec adipiscing tristique risus nec feugiat in. Quam quisque id diam vel quam elementum pulvinar. Suspendisse interdum consectetur libero id. Dui id ornare arcu odio ut. Euismod lacinia at quis risus sed. Amet massa vitae tortor condimentum lacinia quis vel eros. Ut venenatis tellus in metus vulputate eu scelerisque felis. Enim facilisis gravida neque convallis a cras semper auctor. Sed vulputate mi sit amet mauris.",
    image: "img/6.jpg",
  },
];

//ITERATOR
function tripIterator(trip) {
  let index = 0;
  return {
    next: function () {
      return index < trip.length
        ? { value: trip[index++], done: false }
        : { done: true };
    },
  };
}

const trips = tripIterator(data);

//WYWOŁANIE PIERWSZEJ

nextTrip();

//DODAWANIE TRIPÓW

document.getElementById("next").addEventListener("click", nextTrip);

function nextTrip() {
  const firstTrip = trips.next().value;
  //JEŻELI JEST TRIP TO GO WRZUCAMY
  if (firstTrip) {
    document.getElementById("trip").innerHTML = `
    <h2>${firstTrip.name}</h2>
    <h4>${firstTrip.price}</h4>
    <img src="${firstTrip.image}"></img>
    <p>${firstTrip.description}</p>`;
  } else {
    //GDY SIĘ SKOŃCZYŁY PRZEŁADOWUJEMY STRONĘ - OD NOWA
    window.location.reload();
  }
}
