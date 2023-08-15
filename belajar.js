// ------------------------------ latihan type data ------------------------------
// console.log('Hello World');

// // contoh mengubah tag h1 html jadi text tertentu 
// // biasanya pd webgis digunakan utk klik ini, muncul lainnya
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Geocourse";

// // contoh type data null
// let myVariable = null;
// console.log(myVariable);
// console.log(typeof(myVariable)); // utk mengetahui type, ini hasilnya type object

// //contoh type data undefined
// let payung;
// console.log(payung);
// console.log(typeof(payung)); // type : undefined

// // contoh type data boolean 
// let indonesia = true;
// console.log(indonesia);
// console.log(typeof(indonesia)); // type : boolean

// //contoh set logika boolean 
// let angka = 1 > 2;
// console.log(angka);
// console.log(typeof(angka)); // type : boolean

// // contoh type data number 
// let angka1 = 5;
// let angka2 = 8;
// console.log(angka1, angka2); // hasilnya string 
// console.log(typeof(angka1)); // type : number

// // contoh type data string
// let nama = 'geocouse.id';
// console.log(typeof(nama)); // type : string
// ------------------------------ end of latihan type data ------------------------------


// ------------------------------ VARIABLE LET, CONST, dan VAR ------------------------------

// var tempat = 'Jakarta';
// console.log(tempat);

// // variable let (bisa diubah)
// let nama = 'Bambang';
// console.log(nama);

// nama = 'Faiz';
// console.log(nama);

// // variable const (tidak bisa diubah)
// const phi = 3.14;
// console.log(phi);

// phi = 4;
// console.log(phi); // phi = 4 tidak muncul



// ------------------------------ OPERATOR ------------------------------
// console.log(5 + 2);
// console.log('Ninik' + 'Agustin');

// console.log('5' + 2); // masih jalan dan tidak error
// console.log(5 + 4 + '2');
// console.log(5 + 2);

// console.log(5 * 2);
// console.log(5 *'2');

// console.log( 10 / 2);
// console.log( 10 / '2');

// let laptop = 'Asus';

// console.log(laptop === 'Asus');
// console.log(laptop !== 'HP');


// ------------------------------ CONDITIONAL ------------------------------

// const kewarganegaraan = 'Indonesia';

// if(kewarganegaraan === 'Indonesia') {
//     console.log('Warga Negara Indonesia');
// } else {
//     console.log('Warga Negara Asing');
// }


// const kota = 'Bandung';

// if(kota === 'Jakarta') {
//     console.log('DKI Jakarta');
// } else if(kota === 'Bandung') {
//     console.log('Jawa Barat');
// } else if(kota === 'Surabaya') {
//     console.log('Jawa Timur');
// } else {
//     console.log('Tidak diketahui');
// }


// ------------------------------ FUNCTION ------------------------------

// function namaLengkap(namaDepan, namaTengah, namaBelakang){
//     return console.log(namaDepan + ' ' + namaTengah + ' ' + namaBelakang);
// }

// namaLengkap('Ninik','','Agustin');

// ALERT 
// function namaLengkap(namaDepan, namaTengah, namaBelakang){
//     return alert(namaDepan + ' ' + namaTengah + ' ' + namaBelakang);
// }

// namaLengkap('Ninik','','Agustin');


// // MENJADIKAN FUNGSI SBG VARIABLE
// const angka = function(number) {
//     return console.log(number);
// }
// // kalau pakai yg ini, variable nya tidak didefinisikan terlebih dulu
// angka(5);
// angka(10);

// const aplikasi = 'zoom';
// console.log(aplikasi);
// console.log(aplikasi.toUpperCase());

// let angka = 5;
// const angkaString = String(angka);

// console.log(typeof(angka));
// console.log(typeof(angkaString));

// ketika ingin 
// let orang = prompt('masukkan nama anda');
// console.log(orang);

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "./google.png") {
        myImage.setAttribute ("src", "./geocourse.png");
    } else {
        myImage.setAttribute("src", "./google.png");
    }
};


// const jakarta = "Ibukota Negara";
// const bandung = "Ibukota Provinsi";
// const cibinong = "Ibukota Kabupaten";

// // console.log('Jakarta adalah sebuah kota di Indonesia yang statusnya'. jakarta);

// // backtick
// const kalimat = `Terdapat status ${jakarta}`;
// console.log(kalimat);

// ------------------------------ ARRAY ------------------------------
// const buah1 = 'apel';
// const buah2 = 'jeruk';
// const buah3 = 'durian';
// const buah4 = 'sirsak';
// // console.log(buah1, buah2, buah3, buah4);

// const buah = ['apel', 'jeruk', 'durian']
// console.log(buah);
// console.log(buah.length);
// // console.log(buah[2]);

// // menambahkan isi array 
// buah.push('sirsak');
// console.log(buah);
// console.log(buah.length);
// // buah[1] = 'mangga'; // mengganti jeruk menjadi mangga
// // console.log(buah);

// buah.length = 2;
// console.log(buah);

// buah.length = 10;
// console.log(buah);

// buah [5] = 'lemon';
// console.log(buah);

// const klubLigaInggris = ['Manchester City', 'Liverpool', 'Manchester United', 'Chelsea'];
// const klubLigaSpanyol = ['Real Madrid', 'Barcelona', 'Ac Madrid', 'Sevila'];
// const klubLigaPrancis = ['PSG', 'Marseille'];

// const ligaChampion = klubLigaInggris.concat(klubLigaPrancis, klubLigaPrancis);

// console.log(ligaChampion);
// // console.log(klubLigaInggris);

// // // mengurutkan 
// // console.log(ligaChampion.sort());
// // console.log(ligaChampion.sort().reverse());

// // ini pakai array function 
// console.log(ligaChampion.filter((kata) => kata === 'Chelsea'));

// const filterLigaChampion = klubLigaInggris.concat(klubLigaInggris. function filter(kata) { 
//     return kata === 'Chelsea'
// })

// function data(angka){
//     console.log(angka)
// }

// data(15)
// data(31)

// console.log(ligaChampion.slice(5))
// console.log(ligaChampion.slice(5,7))

// ------------------------------ OBJECT ------------------------------
// const profileRealMadrid = {
//     liga : 'La Liga',
//     peringkatLiga : 'Spanyol',
//     pelatih : 'Ancelotti',
//     stadion : 'Santiago Bernabeu'
// }

// // console.log(profileRealMadrid)
// console.log(profileRealMadrid.pelatih)

// profileRealMadrid.sponsor = 'Fly Emirates'
// console.log(profileRealMadrid)

// const profileManchesterUnited = {
//     liga : 'Premier League',
//     peringkatLiga : 4,
//     negara : 'Inggris',
//     pelatih : 'Ten Hag'
// }
// // console.log(profileManchesterUnited)

// // // object dalam array 
// // const profileKlubLigaChampion = [profileManchesterUnited, profileRealMadrid]
// // console.log(profileKlubLigaChampion)

// // object dalam object 
// const profileKlubLigaChampion = {
//     realMadrid : profileRealMadrid,
//     united: profileManchesterUnited
// }
// console.log(profileKlubLigaChampion)

// ------------------------------ LOOP AND ITERATION ------------------------------
// const buah = ['apel', 'jeruk', 'mangga', 'melon', 'durian', 'nangka']
// console.log(`Saya makan ${buah[0]}`);
// console.log(`Saya makan ${buah[1]}`);
// console.log(`Saya makan ${buah[2]}`);
// console.log(`Saya makan ${buah[3]}`);
// console.log(`Saya makan ${buah[4]}`);
// console.log(`Saya makan ${buah[5]}`);
// console.log(`Saya makan ${buah[6]}`);

// agar tidak berulang, pakai function 
// function makanBuah(urutan) {
//     return console.log(`Saya makan ${buah[urutan]}`)
// }

// buah.push('cempedak')
// console.log(buah)

// makanBuah(0)
// makanBuah(1)
// makanBuah(2)
// makanBuah(3)
// makanBuah(4)
// makanBuah(5)

// agar tidak menulis function secara berulang 
// let urutan = 0
// console.log(urutan)

// // urutan = urutan + 1
// // ganti dengan increment 
// urutan++
// console.log(urutan)

// urutan++
// console.log(urutan)

// buah.push('anggur')
// // urutan menggunakan loop
// for (let urutan = 0; urutan < buah.length; urutan++) {
//     console.log(`Saya makan ${buah[urutan]}`)
// }


// --- WHILE LOOP
const panitia = [
    ['Andi', 'warga', 24, true],
    ['Budi', 'warga', 24, true],
    ['Putri', 'warga', 19, true]
]

console.log(panitia[0][3])
console.log(`namanya adalah ${panitia[0][0]}, statusnya ${panitia[0][1]}, umurnya ${panitia[0][2]}`)

let urutan
while (panitia[urutan][3]) {
    console.log(`namanya adalah ${panitia[urutan][3]}, statusnya ${panitia[urutan][3]}, umurnya ${panitia[urutan][3]}`)
    urutan++
}

// const angka = [63, 49, 25, 69, 12];
// let urutan = 0
// while (angka[urutan] > 50){
//     console.log(angka[urutan])
//     urutan++
// }
