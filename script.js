var map = L.map('map', {
	layers: [L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'		})
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'})
	],
	center: [51.505, -0.09],
	zoom: 12
});
var marker = L.marker([51.5, -0.09]).addTo(map);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//			'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
//		})
