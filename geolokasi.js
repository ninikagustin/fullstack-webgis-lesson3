// ----------- WebAPI - GEOLOKASI -----------

const divisi = document.createElement('div')
document.body.appendChild(divisi)
    
const judul = document.createElement('h1')
judul.innerHTML = 'Ujicoba Geolokasi'
divisi.appendChild(judul)

const lintang = document.createElement('p')
lintang.innerHTML = 'Lintang'
divisi.appendChild(lintang)

const bujur = document.createElement('p')
bujur.innerHTML = 'Bujur'
divisi.appendChild(bujur)

const ketinggian = document.createElement('p')
ketinggian.innerHTML = 'ketinggian'
divisi.appendChild(ketinggian)

const timestamp = document.createElement('p')
timestamp.innerHTML = 'timestamp'
divisi.appendChild(timestamp)

const tombol = document.createElement('button')
tombol.innerHTML = 'Tampilkan koordinat'
divisi.appendChild(tombol)

// aktivasi function geolocation
tombol.onclick = function(){
  return getLocation()
}

function getLocation() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  lintang.innerHTML = "Geolocation is not supported by this browser.";
  bujur.innerHTML = "Geolocation is not supported by this browser.";
  ketinggian.innerHTML = "Geolocation is not supported by this browser.";
  timestamp.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
  lintang.innerHTML = `Lintang = ${position.coords.latitude}`
  bujur.innerHTML = `Bujur = ${position.coords.longitude}`
  ketinggian.innerHTML = `Ketinggian = ${position.coords.altitude}` // tidak terbaca pada GPS seperti laptop
  timestamp.innerHTML = `Waktu pengambilan = ${new Date(position.timestamp)}`
}