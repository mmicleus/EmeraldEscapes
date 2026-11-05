// 1. DATA: one object per experience (add or edit entries here)
var TripCategory = Object.freeze({
  CITY: "City",
  COASTAL: "Coastal",
  COUNTRYSIDE: "Countryside",
  FAMILY: "Family",
  CULTURAL: "Cultural"
});

var MIN_PRICE = 100;
var MAX_PRICE = 600;


// the list of experiences to be displayed by the frontend
var experiences = [
  { id: 1, title: "Dublin By Night Fest", loc: "Dublin", category: TripCategory.CITY, days: 3, price: 320, picture_urls: ["images/DublinByNightFest/1.jpg","images/DublinByNightFest/2.jpg","images/DublinByNightFest/3.jpg","images/DublinByNightFest/4.jpg","images/DublinByNightFest/5.jpg"], alt: "Dublin skyline at sunset", desc: "Dublin’s free after-dark street festival, with live music, food, culture and street entertainment across the city centre. It opens the Winter in Dublin season." },
  { id: 2, title: "Galway Arts Break", loc: "Galway", category: TripCategory.CITY, days: 2, price: 210, picture_urls: ["https://upload.wikimedia.org/wikipedia/commons/c/cd/Galway_-_Southwest_end_of_Shop_Street_-_geograph.org.uk_-_1631334.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/GalwayStreet%28js%29.jpg/960px-GalwayStreet%28js%29.jpg"], alt: "Galway's Shop Street", desc: "Street theatre, seafood on the quays and a sunset walk along Salthill." },
  { id: 3, title: "Cork Market Trail", loc: "Cork", category: TripCategory.CITY, days: 2, price: 190, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/A_fantastic_food_market_in_Cork.jpg/960px-A_fantastic_food_market_in_Cork.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Buttered_eggs%2C_2015.jpg/960px-Buttered_eggs%2C_2015.jpg"], alt: "Inside Cork's English Market", desc: "English Market tasting tour and a day trip to Kinsale." },
  { id: 4, title: "Belfast Titanic and Taxi Tour", loc: "Belfast", category: TripCategory.CITY, days: 3, price: 280, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Aerial-Titanic_Belfast_and_Titanic_Hotel_Belfast_%2837198649996%29.jpg/960px-Aerial-Titanic_Belfast_and_Titanic_Hotel_Belfast_%2837198649996%29.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Belfast_Titanic_Museum_19-11-2023_14-21-09.jpg/960px-Belfast_Titanic_Museum_19-11-2023_14-21-09.jpg"], alt: "Aerial view of the Titanic Belfast museum and nearby hotel", desc: "Titanic Quarter, political murals and a night in the Cathedral Quarter." },
  { id: 5, title: "Cliffs of Moher Walk", loc: "Co. Clare", category: TripCategory.COASTAL, days: 2, price: 230, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Cliffs_of_Moher%2C_Ireland_04.jpg/960px-Cliffs_of_Moher%2C_Ireland_04.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Cliffs_of_Moher%2C_Ireland_07.jpg/960px-Cliffs_of_Moher%2C_Ireland_07.jpg"], alt: "The Cliffs of Moher in County Clare", desc: "Guided coastal path from Doolin with a pub dinner and a night in Lahinch." },
  { id: 6, title: "Giant's Causeway Coast Drive", loc: "Co. Antrim", category: TripCategory.COASTAL, days: 3, price: 340, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/20120830_Giant%27s_Causeway.jpg/960px-20120830_Giant%27s_Causeway.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/20180408_122920_Giants_Causeway.jpg/960px-20180408_122920_Giants_Causeway.jpg"], alt: "Giant's Causeway on the Northern Ireland coast", desc: "Causeway Coastal Route, Dunluce Castle and the Carrick-a-Rede rope bridge." },
  { id: 7, title: "Dingle Peninsula Escape", loc: "Co. Kerry", category: TripCategory.COASTAL, days: 4, price: 480, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/%22Raue_Sch%C3%B6nheit_und_vielf%C3%A4ltige_Natur%22_01.jpg/960px-%22Raue_Sch%C3%B6nheit_und_vielf%C3%A4ltige_Natur%22_01.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/%22Raue_Sch%C3%B6nheit_und_vielf%C3%A4ltige_Natur%22_02.jpg/960px-%22Raue_Sch%C3%B6nheit_und_vielf%C3%A4ltige_Natur%22_02.jpg"], alt: "Coastal scenery on the Dingle Peninsula", desc: "Slea Head Drive, a boat trip to meet Fungie's successors and live music nightly." },
  { id: 8, title: "Wild Atlantic Way Sampler", loc: "Mayo and Sligo", category: TripCategory.COASTAL, days: 5, price: 590, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Achill_Island_-_Atlantic_Coastline_%5E_Ashleam_Bay_-_geograph.org.uk_-_3756822.jpg/960px-Achill_Island_-_Atlantic_Coastline_%5E_Ashleam_Bay_-_geograph.org.uk_-_3756822.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Achill_Island-_Atlantic_Drive_%5E_Side_View_of_Stone_Cottage_along_Atlantic_Drive_-_geograph.org.uk_-_3756790.jpg/960px-Achill_Island-_Atlantic_Drive_%5E_Side_View_of_Stone_Cottage_along_Atlantic_Drive_-_geograph.org.uk_-_3756790.jpg"], alt: "Atlantic coastline on Achill Island", desc: "Surf lesson, Achill Island and a sea-kayak trip at Mullaghmore." },
  { id: 9, title: "Connemara Hills Retreat", loc: "Co. Galway", category: TripCategory.COUNTRYSIDE, days: 3, price: 360, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Connemara_National_Park.jpg/960px-Connemara_National_Park.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Connemara-mautains.watetcol.jpg/960px-Connemara-mautains.watetcol.jpg"], alt: "Connemara National Park in County Galway", desc: "Kylemore Abbey, guided hill walks and a sheepdog demonstration." },
  { id: 10, title: "Wicklow Mountains Cottage Stay", loc: "Co. Wicklow", category: TripCategory.COUNTRYSIDE, days: 3, price: 260, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Dec2025._Hills_around_Blessington%2C_Ireland._Black_Hill_04.jpg/960px-Dec2025._Hills_around_Blessington%2C_Ireland._Black_Hill_04.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Glendasan_River%2C_Wicklow_Mountains.jpg/960px-Glendasan_River%2C_Wicklow_Mountains.jpg"], alt: "Hills and river in the Wicklow Mountains", desc: "Self-catering cottage, Powerscourt Gardens and a ridge walk with a local guide." },
  { id: 11, title: "Ring of Kerry by Bike", loc: "Co. Kerry", category: TripCategory.COUNTRYSIDE, days: 5, price: 540, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Atlantic_Ocean%2C_Ring_of_Kerry_%28506559%29_%2827964189752%29.jpg/960px-Atlantic_Ocean%2C_Ring_of_Kerry_%28506559%29_%2827964189752%29.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Ballaghisheen_Pass_-_geograph.org.uk_-_3329973.jpg/960px-Ballaghisheen_Pass_-_geograph.org.uk_-_3329973.jpg"], alt: "The Atlantic coast and mountain passes along the Ring of Kerry", desc: "Supported cycling with luggage transfer and B&Bs along the route." },
  { id: 12, title: "Donegal Hidden Valleys", loc: "Co. Donegal", category: TripCategory.COUNTRYSIDE, days: 4, price: 430, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Slieve_League._Donegal%2C.jpg/960px-Slieve_League._Donegal%2C.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/SLIEVE_LEAGUE-DONEGAL....._%2850376114127%29.jpg/960px-SLIEVE_LEAGUE-DONEGAL....._%2850376114127%29.jpg"], alt: "Slieve League cliffs in County Donegal", desc: "Slieve League viewpoints, Glenveagh National Park and Irish-language evenings." },
  { id: 13, title: "Dublin Zoo and Phoenix Park Day", loc: "Dublin", category: TripCategory.FAMILY, days: 1, price: 120, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/African_plains.JPG/960px-African_plains.JPG", "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Children_on_a_pony_carriage_ride_at_Dublin_Zoo%2C_1954.jpg/960px-Children_on_a_pony_carriage_ride_at_Dublin_Zoo%2C_1954.jpg"], alt: "The African Plains at Dublin Zoo", desc: "Family zoo ticket, picnic lunch and bike hire in the park." },
  { id: 14, title: "Working Farm Family Stay", loc: "Co. Tipperary", category: TripCategory.FAMILY, days: 3, price: 310, picture_urls: ["https://upload.wikimedia.org/wikipedia/commons/a/aa/Farm%2C_Nr_Waterford%2C_Ireland._-_geograph.org.uk_-_1517008.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d5/Farm_near_Birdhill%2C_Co._Tipperary_-_geograph.org.uk_-_1387950.jpg"], alt: "A farm near Waterford, Ireland", desc: "Feed the animals, bake soda bread and ride ponies. Suits ages 3 to 12." },
  { id: 15, title: "Glendalough and Monastic Ireland", loc: "Co. Wicklow", category: TripCategory.CULTURAL, days: 2, price: 175, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Condado_de_Wicklow_-_Glendalough_-_20170827114654.jpg/960px-Condado_de_Wicklow_-_Glendalough_-_20170827114654.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Condado_de_Wicklow_-_Glendalough_-_20170827115227.jpg/960px-Condado_de_Wicklow_-_Glendalough_-_20170827115227.jpg"], alt: "St Kevin's Cross and the round tower at Glendalough", desc: "Early Christian sites with a historian guide and a lakeside walk." },
  { id: 16, title: "Medieval Kilkenny Weekend", loc: "Co. Kilkenny", category: TripCategory.CULTURAL, days: 2, price: 205, picture_urls: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/%22Ein_beeindruckendes_Schloss_in_Kilkenny%22._01.jpg/960px-%22Ein_beeindruckendes_Schloss_in_Kilkenny%22._01.jpg", "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/%22Ein_beeindruckendes_Schloss_in_Kilkenny%22._02.jpg/960px-%22Ein_beeindruckendes_Schloss_in_Kilkenny%22._02.jpg"], alt: "Kilkenny Castle in County Kilkenny", desc: "Castle tour, craft workshops and a tasting at a local brewery." }
];


// 2. STATE: the current filter and sort settings
var state = { categories: [], minPrice: 100, maxPrice: 600, favOnly: false, sort: "price-ascending" };

// Load saved favourites; default to an empty list for first-time visitors.
var favourites = JSON.parse(localStorage.getItem("ee-favs") || "[]");
// favourites = favourites.map(function (savedId) {
//   var experience = experiences.find(function (item) {
//     var legacySlug = item.title.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-")
//       .replace(/-and-/g, "-").replace(/^-|-$/g, "");
//     return item.id === Number(savedId) || item.title === savedId || legacySlug === savedId;
//   });
//   return experience ? experience.id : savedId;
// });


// the container that stores experience cards
var list = document.getElementById("cards");

// the reset button

var resetBtn = document.getElementById("reset");




// min and max filters
var minInput = document.getElementById("price-min");
var maxInput = document.getElementById("price-max");

// category inputs
var categoryInputs= document.querySelectorAll(".category-option input")

// saved experiences toggle
var savedBtn = document.getElementById("fav-only")

//card 



// add event listeners

savedBtn.addEventListener("click", function(e){

  if(e.target.getAttribute("aria-pressed") == "false"){
    e.target.setAttribute("aria-pressed","true")
    state.favOnly = true
    render()
  }
  else{
    e.target.setAttribute("aria-pressed","false")
    state.favOnly = false
    render()
  }

  
  

})


// when 'reset' btn is clicked
resetBtn.addEventListener("click",function(e){

  // reset the state object
  state = { categories: [], minPrice: 100, maxPrice: 600, favOnly: false, sort: "price-ascending" };

  // uncheck category checkboxes
  categoryInputs.forEach(e => {
    e.checked = false
  })

  // toggle 'saved experiences' off
  savedBtn.setAttribute("aria-pressed","false")

  // reset minPrice and maxPrice input fields
  minInput.value = 100
  maxInput.value = 600


  render()
})





// selecting or deselecting a category will update the 'state' object and rerender the cards
categoryInputs.forEach(function(c){
    
    c.addEventListener("change",function(e){

       category = e.target.value
      if (e.target.checked){
        state.categories.push(category)
      
      }else{
        state.categories = state.categories.filter(e => e !== category)
      }

        render()
      
    })

})



// validating min and max price filters

minInput.addEventListener("change", function () {
  minInput.value = Math.min(Math.max(minInput.value, MIN_PRICE), maxInput.value)
  state.minPrice = minInput.value
  render()
})


maxInput.addEventListener("change", function () {

  maxInput.value = Math.min(Math.max(maxInput.value, minInput.value), MAX_PRICE)
  state.maxPrice = maxInput.value
  render()
})








localStorage.setItem("ee-favs", JSON.stringify(favourites));



// 3. RENDER the cards that match the current filters
function render() {
  list.innerHTML = "";


  // shown is the list of experiences that match the current filters
  var shown = experiences.filter(function (e) {
    return (!state.categories.length || state.categories.indexOf(e.category) > -1) &&
           e.price >= state.minPrice && e.price <= state.maxPrice &&
           (!state.favOnly || favourites.indexOf(e.id) > -1);
  });

  shown.sort((a,b) => a.price - b.price)


 

  
  // render all the experiences in 'shown' as cards
  shown.forEach(function (e) {
    var saved = favourites.indexOf(e.id) > -1;
    var gallery = e.picture_urls;
    var li = document.createElement("li");
    li.className = "card";
    li.innerHTML =
      '<div class="card-gallery">' +
        '<img class="gallery-image" src="' + gallery[0] + '" alt="' + e.alt + '" width="800" height="500" loading="lazy">' +
        '<button class="gallery-arrow gallery-previous" type="button" >&#8249;</button>' +
        '<button class="gallery-arrow gallery-next" type="button" >&#8250;</button>' +
        '<span class="gallery-count" >1 / ' + gallery.length + '</span>' +
        '<button class="fav" type="button" aria-pressed="' + saved + '" aria-label="Save ' + e.title + '" data-id="' + e.id + '">' + (saved ? "\u2665" : "\u2661") + '</button>' +
      '</div>' +
      '<div class="body"><span class="loc">' + e.loc + ' (' + e.category + ')</span>' +
      '<h3>' + e.title + '</h3><p>' + e.desc + '</p>' +
      '<div class="meta"><span>' + e.days + (e.days === 1 ? " day" : " days") + '</span><span class="price">&euro;' + e.price + ' pp</span></div></div>';
    list.appendChild(li);

    var image = li.querySelector(".gallery-image");
    var count = li.querySelector(".gallery-count");
    var imageIndex = 0;
    li.querySelectorAll(".gallery-arrow").forEach(function (button) {
      button.addEventListener("click", function () {
        var direction = button.classList.contains("gallery-next") ? 1 : -1;
        imageIndex = (imageIndex + direction + gallery.length) % gallery.length;
        image.src = gallery[imageIndex];
        image.alt = imageIndex === 0 ? e.alt : e.title + " - image " + (imageIndex + 1);
        count.textContent = (imageIndex + 1) + " / " + gallery.length;
      });
    });

    li.querySelector(".fav").addEventListener("click",function(e){
      
      const id = Number(e.currentTarget.dataset.id);

      // console.log(id)

      // console.log("before:")
      // console.log(favourites)

      if(e.target.getAttribute("aria-pressed") == "true"){

        e.target.setAttribute("aria-pressed","false")

        favourites = favourites.filter(i => {

          return i != id
        })
        // console.log("removing")
        
      }
      else{
        e.target.setAttribute("aria-pressed","true")
        favourites.push(id)

        // console.log("adding")
      }

      // console.log("after:")
      // console.log(favourites)

      localStorage.setItem("ee-favs", JSON.stringify(favourites));
      render()


    })

  });

//   document.getElementById("result-count").textContent = "Showing " + shown.length + " of " + experiences.length + " experiences";
  document.getElementById("empty").style.display = shown.length ? "none" : "block";
  document.getElementById("fav-count").textContent = favourites.length;
}


render();