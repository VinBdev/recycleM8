const places = [
    {
        name: "Northside recycling Ltd",
        imageLink: "assets/images/recycle-center-img.jpg",
        coordinates: {lat: 53.39743296428285, lng:-6.191854013974559 },
        description: "This is waste disposal company specialising in recycled goods. There are several waste specialists across Dublin, they focus on getting the most out of waste material by recycling the majority of an item but responsibly removing the rest."
    },
    {
        name: "North Dublin Clothes Bank",
        imageLink: "assets/images/clothes-center-img.jpg",
        coordinates: {lat: 53.45850637555919, lng:  -6.189073059448463 },
        description: "This Northside recycling center is situated in Seatown east beside the Malahide rugby club. It is most commonly used for recycling old clothes which will be collected and recycled into new clothing or for textile reuse "
    },
    {
        name: "Bottle Bank - Eastwall",
        imageLink: "assets/images/glass-center-img.jpg",
        coordinates: {lat: 53.35064202981545,  lng: -6.234333856779967 },
        description: "This is a glass bottle bank and recycling center located just off Sheriff street Upper on the East Rd. This is one of many glass bottle banks in the greater Dublin area. These bottle banks usually facilitate for green, brown and clear bottles. "
    },
    {
        name: "Ringsend Recycling Center",
        imageLink: "assets/images/paper-recycling.jpg",
        coordinates: {lat:53.34174855288023,  lng: -6.214332297535924 },
        description: "The Ringsend recycling Center has a very good name for responsible recycling, waste management and customer service. Although this is not a free service, they have impecible reviews and a loyal local customer base. "
    },
    {
        name: "Southside Clothes Bank",
        imageLink: "assets/images/old-clothes-2.jpg",
        coordinates: {lat: 53.28848262870961,  lng: -6.154683493193059 },
        description: "Located in Monkstown, Bring Backs is an amazing example of how easy it can be for communities to designate an area for all waste materials in a responsible and sanitary way. This is a full collection point for glass and clothing items. "
    },
    {
        name: "S.D.C.C Recycling Center",
        imageLink: "assets/images/glass-bottle-2.jpg",
        coordinates: {lat:53.30953220356517, lng:-6.346409280718422},
        description: "This is the South Dublin County Council Recycling Ceter. Similiar to the Ringsend Recycling center this is a multi-purpose waste management facility with excellent reviews and recommendations from locals. Disposal of small items is free."
    },
    {
        name: "Coolmine Recycling Center",
        imageLink: "assets/images/paper-recycling-2.jpg",
        coordinates: {lat: 53.38441913987859,  lng: -6.396209535994277 },
        description: "The Coolmine recycling center is a classic example of a paper and plastic based recycling center. There are two very large purple containers at the back side of a car park. This is located in a large residential area with easy access."
    },
{

name: "Bottle Recycling Center",
imageLink: "assets/images/glass-bottle-1.jpg",
coordinates: {lat:53.31209788670306, lng: -6.2827682652981025 },
description: "This is glass bottle recycling center located in the center of Terenure, Rathgar and Kimmage. This too contains waste facilitie for green, brown and transparent glass bottles. All waste must be cleaned before using the bins."
}];


let map;
const recyclingsContainer = document.getElementById("recycling-container");


        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:53.34768383192905, lng: -6.267762270955096},
            zoom: 10,
            
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

            recyclingsContainer.innerHTML += locationHTML;
        }
    }

    function goToPlaceOnMap(placeId) {
        let place = places[placeId];
        location.href = "#map";

        map.setCenter(place.coordinates);
        map.setZoom(17);
    }

    showLocations();