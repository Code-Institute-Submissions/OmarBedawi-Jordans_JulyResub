function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: {
			lat: 52.3676,
			lng: 4.9041
		}
	});

	var labels = "";

	var locations = [{
			lat: 52.3676,
			lng: 4.9041
		},

	];

	var markers = locations.map(function (location, i) {
		return new google.maps.Marker({
			position: location,
			label: labels[i % labels.length]
		});
	});

	var markerCluster = new MarkerClusterer(map, markers, {
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	});
}
