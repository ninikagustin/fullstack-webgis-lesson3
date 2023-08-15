// ----------- WebAPI - FETCH -----------

const divisi = document.createElement('div')
document.body.appendChild(divisi)
    
const judul = document.createElement('h1')
judul.innerHTML = 'Ujicoba Fetch'
divisi.appendChild(judul)

const foto = document.createElement('img')
foto.height = '150'
divisi.appendChild(foto)

const para = document.createElement('p')
para.innerHTML = 'Hello World'
divisi.appendChild(para)

const tombokBack = document.createElement('button')
tombokBack.innerHTML = 'Back'
divisi.appendChild(tombokBack)


const tombolNext = document.createElement('button')
tombolNext.innerHTML = 'Next'
divisi.appendChild(tombolNext)

let urutan = 10;

fetch(`https://jsonplaceholder.typicode.com/photos/${urutan}`)
      .then(response => response.json())
      .then(function(json){
        para.innerHTML = json.title
        foto.src = json.thumbnailUrl
      })

tombokBack.onclick = function(){
  urutan--
  console.log(urutan)
  fetch(`https://jsonplaceholder.typicode.com/photos/${urutan}`)
      .then(response => response.json())
      .then(function(json){
        para.innerHTML = json.title
        foto.src = json.thumbnailUrl
      })
}

tombolNext.onclick = function(){
  urutan++
  console.log(urutan)
  fetch(`https://jsonplaceholder.typicode.com/photos/${urutan}`)
      .then(response => response.json())
      .then(function(json){
        para.innerHTML = json.title
        foto.src = json.thumbnailUrl
      })
}

