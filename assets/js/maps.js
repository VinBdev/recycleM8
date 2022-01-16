const places = [
    {
        name: "Recycling Center",
        imageLink: "https://www.pexels.com/photo/city-road-sunny-street-4124936/",
        coordinates: {lat:35.4567898764567, lng: -121.67890654323 },
        description: "This is a paper recycling center"
    },

    name: "Bottle Bank ",
    imageLink: "https://unsplash.com/photos/5bRisdbx-8U",
    coordinates: {lat:35.4567898764567, lng: -121.67890654323 },
    description: "This is a paper recycling center"
},

name: "Clothes Recycling Center",
imageLink: "https://unsplash.com/photos/oa7pqZmmhuA",
coordinates: {lat:35.4567898764567, lng: -121.67890654323 },
description: "This is a paper recycling center"
];


var map;
const recyclingContainer = document.getElementById("recycling-container");


        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 3,
            
          });
        for (let i = 0; i < places.length; i++) {
            let place = places[i]
            const marker = new google.maps.Marker({
                position: place.coordinates,
                map: map,
                title: place.name
            });

            let infoWindowRecyclingString =`
            <div class="info-window">
               <img src="${place.imageLink}">
               <h1>${place.name}</h1>
               <br>
               <a href="#locations-${i}">Locations</a>
               <span>${place.description}</span>
            </div>
            `;
        
            const infoWindow = new google.maps.infoWindow({
            });

            marker.addListener("click", () => {
                infowindow.open{{
                    anchor: marker,
                    map,
                }};
            });
        }
    }
    function showLocations() {
        for (let i = 0; i < places.length; i++) {
            let place = places[i]
            let locationHTML = `
            <div class="location" id="locations-${i}">
                <h3>${place.name}</h3>
                <img src="${place.imageLink}">

                <div class="description">
                ${place.description}
                </div>
                <br>

                <a onclick="goToPlaceOnMap(${i})">Find on Map</a>
            </div>`

            locationsContainer.innerHTML += locationsHTML
        }
    }

    function goToPlaceOnMap(placeId) {
        let place = places[placeId]
        location.href = "#map"

        map.setCenter(place.coordinates)
        map.setZoom(18)
    }

    showLocations()