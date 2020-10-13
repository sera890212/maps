<link rel="stylesheet" href="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.css" />
<script src="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.js"></script>
<script type="text/javascript">

  // 建立 Leaflet 地圖
  var map = L.map('mapid');

  // 設定經緯度座標
  map.setView(new L.LatLng(22.992, 120.239), 12);
  
  // 設定圖資來源
  var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16});
  map.addLayer(osm);

</script>