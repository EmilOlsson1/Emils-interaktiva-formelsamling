/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
  // The location of Nordenbergsskolan
  const nordenbergsskolan = {
    lat: 56.27326,
    lng: 14.53516
  };
  // The map, centered at Nordenbergsskolan
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: nordenbergsskolan,
  });
  // The marker, positioned at Nordenbergsskolan
  const marker = new google.maps.Marker({
    position: nordenbergsskolan,
    map: map,
  });
}

window.initMap = initMap;
