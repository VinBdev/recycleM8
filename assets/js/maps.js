const places = [
    {
        name: "Northside Recycling Center",
        imageLink: "assets/images/recycle-center-img.jpg",
        coordinates: {lat: 53.36111228016031, lng:  -6.24404138890759 },
        description: "This is a paper recycling center"
    },
    {
        name: "Clothes Bank",
        imageLink: "assets/images/clothes-center-img.jpg",
        coordinates: {lat:53.34768383192905, lng: -6.267762270955096 },
        description: "This is a paper recycling center"
    },
    {
        name: "Glass Bottle Bank",
        imageLink: "assets/images/glass-center-img.jpg",
        coordinates: {lat:53.34768383192905, lng: -6.267762270955096 },
        description: "This is a paper recycling center"
    },
    {
        name: "Paper and Plastic Recycling Center",
        imageLink: "assets/images/recycle-center-img.jpg",
        coordinates: {lat:53.34768383192905, lng: -6.267762270955096 },
        description: "This is a paper and plastic recycling center"
    },
    {
        name: "Clothes Bank",
        imageLink: "assets/images/clothes-center-img.jpg",
        coordinates: {lat:53.34768383192905, lng: -6.267762270955096 },
        description: "This is a paper recycling center"
    },
    {
        name: "Glass Bottle Bank",
        imageLink: "assets/images/glass-center-img.jpg",
        coordinates: {lat:53.34768383192905, lng: -6.267762270955096 },
        description: "This is a paper recycling center"
    },
    {
        name: "Paper and Plastic Recycling Center",
        imageLink: "assets/images/recycle-center-img.jpg",
        coordinates: {lat:53.34768383192905, lng: -6.267762270955096 },
        description: "This is a paper recycling center"
    },
{

name: "Clothes Recycling Center",
imageLink: "assets/images/clothes-center-img.jpg",
coordinates: {lat:53.34768383192905, lng: -6.267762270955096 },
description: "This is a paper recycling center"
}];


let map;
const locationsContainer = document.getElementById("recycling-container");


        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:53.34768383192905, lng: -6.267762270955096},
            zoom: 3,
            
          });
        for (let i = 0; i < places.length; i++) {
            let place = places[i];
            const marker = new google.maps.Marker({
                position: place.coordinates,
                map: map,
                title: place.name
            });
/*jshint esversion: 6 */

            let infoWindowRecyclingString =`
            <div class="info-window">
               <img src="${place.imageLink}">
               <h1>${place.name}</h1>
               <br>
               <a href="#locations-${i}">Locations</a>
               <span>${place.description}</span>
            </div>
            `;
        
            const infoWindow = new google.maps.InfoWindow({
                content: infoWindowRecyclingString
            });

            marker.addListener("click", () => {
                infoWindow.open;{
                    anchor: marker,
                    map;
                }
            });
        }
    }
    function showLocations() {
        for (let i = 0; i < places.length; i++) {
            let place = places[i];
            let locationHTML = `
            <div class="location" id="locations-${i}">
                <h3>${place.name}</h3>
                <img src="${place.imageLink}">

                <div class="description">
                ${place.description}
                </div>
                <br>

                <a onclick="goToPlaceOnMap(${i})">Find on Map</a>
            </div>`;

            locationsContainer.innerHTML += locationHTML;
        }
    }

    function goToPlaceOnMap(placeId) {
        let place = places[placeId];
        location.href = "#map";

        map.setCenter(place.coordinates);
        map.setZoom(18);
    }

    showLocations();