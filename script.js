// JavaScript

const map = L.map('map').setView([33.59663180611383, 130.4805438097469], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

  //アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([33.59663180611383, 130.4805438097469], { icon: whiteIcon }).addTo(map)
  .bindPopup('Hello!<br><img src="images/2064710.png" alt="img">');


  const circle = L.circle([33.59663180611383, 130.4805438097469], {
    color: 'purple', //円の輪郭線の色
    fillColor: 'pink', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  // Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);


// 多角形の表示
const polygon = L.polygon([
  [33.596613932752405, 130.48096223407407],
  [33.60790291169009, 130.48571378379654],
  [33.606231145831465, 130.47322889638727]
], {
  color: 'orange',
  fillColor: 'yellow',
  fillOpacity: 0.3
}).addTo(map);