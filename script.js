var map = L.map('map', {
	layers: [
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
		})
	],
	center: [0, 0],
	zoom: 0
});
