// ---------------------- Web API JavaScript Validation ----------------------

const divisi = document.createElement('div')
document.body.appendChild(divisi)
    
const judul = document.createElement('h1')
judul.innerHTML = 'Ujicoba Validasi'
divisi.appendChild(judul)

const label = document.createElement('p')
label.innerHTML = 'Masukkan nilai lintang : '
divisi.appendChild(label)

// membuat dropdown menu
const pilihan = document.createElement('select')
pilihan.name = 'poros-koordinat'
pilihan.id = 'poros-koordinat'
divisi.appendChild(pilihan)

const defaultValue = document.createElement('option')
defaultValue.value = '-- Pilih Kategori --'
defaultValue.innerHTML = '-- Pilih Kategori --'
defaultValue.defaultSelectedselected = true 
pilihan.appendChild(defaultValue)

const lintang = document.createElement('option')
lintang.value = 'Lintang'
lintang.innerHTML = 'Lintang'
pilihan.appendChild(lintang)

const bujur = document.createElement('option')
bujur.value = 'Bujur'
bujur.innerHTML = 'Bujur'
pilihan.appendChild(bujur)
// ----------

const inputData = document.createElement('input')
inputData.type = 'number'
divisi.appendChild(inputData)

const tombolSubmit = document.createElement('button')
tombolSubmit.type = 'submit'
tombolSubmit.innerHTML = 'Kirim'
divisi.appendChild(tombolSubmit)

const pesanError = document.createElement('p')
pesanError.innerHTML = 'Hello World'
divisi.appendChild(pesanError)

console.log(document.querySelector('select > option[selected]'))


// validasi input
function validasi(){
  
  pilihan.onchange = function(){
    
    const opsi = this.value

    if(opsi === 'Lintang'){
      inputData.min = 0
      inputData.max = 90
    } else {
      inputData.min = 0
      inputData.max = 180
    }
    
    if(inputData.checkValidity() && opsi == 'Lintang'){
      return pesanError.innerHTML = `Data valid, dipilih lintang`
    } else if(inputData.checkValidity() && opsi == 'Bujur') {
      return pesanError.innerHTML = `Data valid, dipilih bujur`
    } else {
      return pesanError.innerHTML = `Data tidak valid`
    }
  }
  
}

// event onclick tombol submit
tombolSubmit.onclick = () => validasi()
