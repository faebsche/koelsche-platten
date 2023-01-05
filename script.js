var map = L.map('map', {
	layers: [L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'})],
	center: [50.922118, 6.947867],
	zoom: 12
});
var marker = L.marker([50.922118, 6.947867]).addTo(map);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//			'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
//		})
