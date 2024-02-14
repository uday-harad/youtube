const cities = [
    "Mumbai",
    "Thane",
    "kalyan",
   "Navi Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Bhopal",
    "Patna",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Vadodara",
    "Faridabad",
    "Madurai",
    "Varanasi",
    "Srinagar",
    "Amritsar",
    "Raipur",
    "Allahabad",
    "Coimbatore",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Jodhpur",
    "Noida",
    "Kochi",
    "Guwahati",
    "Kota",
    "Bareilly",
    "Moradabad",
    "Jamshedpur",
    "Bhubaneswar",
    "Mangalore",
    "Cuttack",
    "Firozabad",
    "Mysore",
    "Ghaziabad",
    "Rajkot",
    "Dhanbad",
    "Kakinada",
    "Akola",
    "Bhilai",
    "Bikaner",
    "Panipat",
    "Aizawl",
  ];
  
  const searchBar = document.getElementById("search-bar");
  const autocompleteList = document.getElementById("autocomplete-list");
  
  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredCities = cities.filter(city => city.toLowerCase().startsWith(searchTerm));
    displayAutocompleteSuggestions(filteredCities);
  });
  
  function displayAutocompleteSuggestions(cities) {
    clearAutocompleteList();
    cities.forEach(city => {
      const suggestion = document.createElement("li");
      suggestion.innerText = city;
      suggestion.addEventListener("click", () => {
        searchBar.value = city;
        clearAutocompleteList();
      });
      autocompleteList.appendChild(suggestion);
    });
  }
  
  function clearAutocompleteList() {
    while (autocompleteList.firstChild) {
      autocompleteList.removeChild(autocompleteList.firstChild);
    }
  }
 

  //  hide and show 

  // function hide()
  // {
  //  document.getElementById('autocomplete-list').style.display="none";
  // }
  // function show()
  // {
  //  document.getElementById('autocomplete-list').style.display="flex";

  // }

  searchBar.addEventListener('click',()=>{
    autocompleteList.style.display= "flex";
    clearAutocompleteList();
  })

  window.addEventListener("mouseup",function(event){
    if(event.target != autocompleteList){
      autocompleteList.style.display = "none";
    }
  })