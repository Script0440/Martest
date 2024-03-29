let catalog = document.getElementById("catalogItems");
const showAllItems = document.getElementById("showAllItemsCatalog");
const levelButton = document.querySelectorAll("#levelSelectButton");
const branchButton = document.querySelectorAll("#branchSelectButton");
let catalogMore = document.getElementById("catalogItemsMore");

const catalogItems = [
  {
    name: "Anchor Handling",
    status: "support",
    branch: "deck",
  },
  {
    name: "bulk carrier",
    status: "support",
    branch: "deck",
  },
  {
    name: "chemical tanker",
    status: "support",
    branch: "deck",
  },
  {
    name: "container vessel",
    status: "support",
    branch: "deck",
  },
  {
    name: "general cargo vessel",
    status: "support",
    branch: "deck",
  },
  {
    name: "LNG Tanker",
    status: "support",
    branch: "deck",
  },
  {
    name: "LPG tanker",
    status: "support",
    branch: "deck",
  },
  {
    name: "NON-rORO Passenger vessel",
    status: "support",
    branch: "deck",
  },
  {
    name: "Oil Tanker",
    status: "support",
    branch: "deck",
  },
  {
    name: "pure car carrier",
    status: "support",
    branch: "deck",
  },
  {
    name: "reefers",
    status: "support",
    branch: "deck",
  },
  {
    name: "RORO cargo vessel",
    status: "support",
    branch: "deck",
  },
  {
    name: "rORO Passenger Vessel",
    status: "support",
    branch: "deck",
  },
  {
    name: "Anchor Handling",
    status: "management",
    branch: "deck",
  },
  {
    name: "bulk carrier",
    status: "management",
    branch: "deck",
  },
  {
    name: "chemical tanker",
    status: "management",
    branch: "deck",
  },
  {
    name: "container vessel",
    status: "management",
    branch: "deck",
  },
  {
    name: "general cargo vessel",
    status: "management",
    branch: "deck",
  },
  {
    name: "LNG Tanker",
    status: "management",
    branch: "deck",
  },
  {
    name: "LPG tanker",
    status: "management",
    branch: "deck",
  },
  {
    name: "NON-rORO Passenger vessel",
    status: "management",
    branch: "deck",
  },
  {
    name: "Oil Tanker",
    status: "management",
    branch: "deck",
  },
  {
    name: "pure car carrier",
    status: "management",
    branch: "deck",
  },
  {
    name: "reefers",
    status: "management",
    branch: "deck",
  },
  {
    name: "RORO cargo vessel",
    status: "management",
    branch: "deck",
  },
  {
    name: "rORO Passenger Vessel",
    status: "management",
    branch: "deck",
  },
  {
    name: "Anchor Handling",
    status: "operational",
    branch: "deck",
  },
  {
    name: "bulk carrier",
    status: "operational",
    branch: "deck",
  },
  {
    name: "chemical tanker",
    status: "operational",
    branch: "deck",
  },
  {
    name: "container vessel",
    status: "operational",
    branch: "deck",
  },
  {
    name: "general cargo vessel",
    status: "operational",
    branch: "deck",
  },
  {
    name: "LNG Tanker",
    status: "operational",
    branch: "deck",
  },
  {
    name: "LPG tanker",
    status: "operational",
    branch: "deck",
  },
  {
    name: "NON-rORO Passenger vessel",
    status: "operational",
    branch: "deck",
  },
  {
    name: "Oil Tanker",
    status: "operational",
    branch: "deck",
  },
  {
    name: "pure car carrier",
    status: "operational",
    branch: "deck",
  },
  {
    name: "reefers",
    status: "operational",
    branch: "deck",
  },
  {
    name: "RORO cargo vessel",
    status: "operational",
    branch: "deck",
  },
  {
    name: "rORO Passenger Vessel",
    status: "operational",
    branch: "deck",
  },
  {
    status: "operational",
    branch: "engine",
  },
  {
    status: "support",
    branch: "engine",
  },
  {
    status: "management",
    branch: "engine",
  },
];

let catalogValue = "support";
let branchValue = "deck";
let filteredItems = [];
let catalogList = [];

window.addEventListener("load", () => {
  filtItems();
  showItems();
  catalogHeight();
});

function catalogHeight() {
  const catalogHeightSmall = "449px";
  const catalogHeightLarge = "1000px";
  const catalogMoreHeightSmall = "650px";
  const catalogMoreHeightLarge = "1200px";

  if (window.innerWidth < 649) {
    catalog.style.height = catalogHeightSmall;
    catalogMore.classList.contains("active")
      ? (catalogMore.style.height = catalogMoreHeightSmall)
      : (catalogMore.style.height = "0px");
  } else {
    catalog.style.height = catalogHeightLarge;
    catalogMore.classList.contains("active")
      ? (catalogMore.style.height = catalogMoreHeightLarge)
      : (catalogMore.style.height = "0px");
  }
}

levelButton.forEach((item) =>
  item.addEventListener("click", (e) => {
    catalogValue = item.value;
    filtItems();
    showItems();
    levelButton.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  })
);

branchButton.forEach((item) =>
  item.addEventListener("click", (e) => {
    branchValue = item.value;
    filtItems();
    showItems();
    branchButton.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  })
);

function createINewtem(item) {
  let newItem = `
	<a href="#" class="item item-${item.status}">
	 <div class="info">
		<h3>Ces deck</h3>
		<img src="./img/logo-catalog.png" alt="" />
		<h3>${item.status}</h3>
		<h6>${item.name ? `(${item.name})` : ""}</h6>
	 </div>
	 <div class='more-info'>
	 <h1>CES ${item.branch} support ${item.name ? `(${item.name})` : ""}</h1>
	 <img src="./img/google-play.png" alt="" />
	 </div>
</a>
`;
  return newItem;
}

function showItems() {
  catalogList = filteredItems.map((item) => createINewtem(item));
  catalogList.length < 6
    ? (showAllItems.style.display = "none")
    : (showAllItems.style.display = "block");
  catalog.innerHTML = catalogList.slice(0, 6).join(" ");
  catalogMore.innerHTML = catalogList.slice(6, 13).join(" ");
}

function filtItems() {
  filteredItems = catalogItems.filter((item) => item.status === catalogValue);
  filteredItems = filteredItems.filter((item) => item.branch === branchValue);
  catalogHeight();
}

showAllItems.addEventListener("click", () => {
  catalogMore.classList.toggle("active");
  catalogHeight();
});
