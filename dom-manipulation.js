// ////----------------DOM MANIPULATION----------------
//     //// PART 1
//     // console.log(document.head) // akses ke tag, tp tidak bisa sampai akses title
//     // console.log(document.getElementsByTagName('title'))
//     // // untuk mengetahui isi dokumen (child element)
//     // console.log(document.childElementCount)
//     // console.log(document.head.childElementCount) // di dalam head ada 3 elemen : meta, meta, title
//     // console.log(document.children) // children nya html
//     // console.log(document.head.children) // children nya [0]meta, [1]meta, [2]title
//     // console.log(document.head.children[0]) // memanggil child ke-0, yaitu meta
//     // console.log(document.head.children[2]) // memanggil child ke-2, yaitu title

    
//     ////----------------DOM MANIPULATION - Change innerHTML----------------
//     // const testingDom = document.head
//     // // testingDom.push('hello world') // error, karena DOM itu array-like

//     // console.log(testingDom) // dapat menampilkan headnya

//     //// PART 2
//     // console.log(document.getElementsByTagName('h1')[0]) 
//     // console.log(document.getElementsByTagName('h1')[0].innerHTML) 

//     // // mengubah h1 Hello World tanpa menghapus teks Hello World di h1
//     // let judul1 = document.getElementsByTagName('h1')[0]
//     // judul1.innerHTML = 'Geocourse.id'

//     //// PART 3
//     // let judul3 = document.getElementsByTagName('h1')
//     // judul3[3].innerHTML = 'Geocourse.id'
//     // console.log(judul3)

//     // // mengatasi urutan yang bisa berubah, memanggil dengan class nya
//     // const judulUbah = document.getElementsByClassName('ubah')
//     // judulUbah[0].innerHTML = 'Geocourse.id'
//     // // console.log(judulUbah)
    
//     // // PART 4
//     // // memanggil dengan id
//     // const judulItem1 = document.getElementById('item-1')
//     // // console.log(judulItem1)
//     // judulItem1.innerHTML = 'Geocourse.id'

//     // // PART 5 mengubah semua element tanpa manual ketikkan fungsi 1 per 1 dgn looping
//     // const test = document.getElementsByTagName('h1')
//     // console.log(test)
//     // for (let i = 0; i  < test.length; i++) {
//     //   test[i].innerHTML = 'Geocourse.id'
//     // }

//     // // PART 6
//     // const judulUbah6 = document.getElementsByClassName('ubah')
//     // // judulUbah6[0].innerHTML = 'Geocourse.id'
//     // // judulUbah6[1].innerHTML = 'Geocourse.id'
//     // // judulUbah6[2].innerHTML = 'Geocourse.id'
    
//     // // buat perulangan agar tidak perlu memanggil 1 per 1 
//     // for (let i = 0; i  < judulUbah6.length; i++) {
//     //   judulUbah6[i].innerHTML = 'Geocourse.id'
//     // }

//     // //----------------DOM MANIPULATION - HTML Attribute----------------
//     // const judulUbah6 = document.getElementsByClassName('ubah')
//     // for (let i = 0; i  < judulUbah6.length; i++) {
//     //   judulUbah6[i].innerHTML = 'Geocourse.id'
//     // }
//     // const judulAtt = document.getElementsByTagName('h1')
//     // judulAtt[3].className = 'testing' // menambahkan class
//     // // judulAtt[3].id = 'item-25' //menambahkan id
//     // judulAtt[3].style.color = 'green' // menambahkan style
//     // judulAtt[3].style.fontFamily = 'Arial' // menambahkan style
//     // judulAtt[3].setAttribute('id', 'item-50') // cara lain set attribute
//     // console.log(judulAtt[3])

//     //----------------DOM MANIPULATION - Add, Delete, Replace Element----------------
//     // masih pakai kode program di bagian sebelumnya (DOM MANIPULATION - HTML Attribute-)
//     // // menambahkan paragraf
//     // const paragraf = document.createElement('p')
//     // paragraf.innerHTML = 'Lorem ipsum'
//     // judulAtt[3].appendChild(paragraf)
//     // // document.body.appendChild(paragraf)
//     // console.log(document.getElementsByTagName('body')[0]) // untuk melihat code hasil DOM manipulation

//     // // menambahkan div dan h1
//     // const divisi = document.createElement('div')
//     // const judulD = document.createElement('h1')
//     // judulD.innerHTML = 'webGIS'
//     // judulD.style.color = 'red'
//     // const judulD2 = document.createElement('h2')
//     // judulD2.innerHTML = 'Javascript'
//     // const paragrafD = document.createElement('p')
//     // paragrafD.innerHTML = 'Lorem ipsum'
//     // document.body.appendChild(divisi) //menambahkan div
//     // divisi.appendChild(judulD) // dalam div ada h1
//     // divisi.appendChild(paragrafD) // dalam div ada p
//     // // appendChild digunakan pada item HTML Collection
//     // // append digunakan untuk menambahkan string

//     // // //menghapus element yang telah dibuat
//     // // divisi.removeChild(judulD)

//     // // replace element
//     // divisi.replaceChild(judulD2, judulD)

//     // console.log(document.getElementsByTagName('body')[0]) // untuk melihat code hasil DOM manipulation

    
//     // //----------------DOM MANIPULATION - Event Handler----------------
//     // const divisiEv = document.createElement('div')
//     // document.body.appendChild(divisiEv)

//     // const tombol = document.createElement('button')
//     // tombol.innerHTML = 'Klik di sini'
//     // divisiEv.appendChild(tombol)

//     // tombol.onclick = function() {
//     //   const judulEv = document.getElementsByTagName('h1')[0]
//     //   if (judulEv.innerHTML === 'Hello World') {
//     //     return judulEv.innerHTML = 'Geocourse.id' // klik 1
//     //   } else {
//     //     return judulEv.innerHTML = 'Hello World' // klik sebaliknya
//     //   }
//     // }

//     // // Case Increment Decrement
//     // const divisiEv2 = document.createElement('div')
//     // document.body.appendChild(divisiEv2)

//     // let angkaEv = 0

//     // const angkaEvHTML = document.createElement('h1')
//     // angkaEvHTML.innerHTML = angkaEv
//     // divisiEv2.appendChild(angkaEvHTML)

//     // const tombolTambah = document.createElement('button')
//     // tombolTambah.innerHTML = 'Naik'
//     // tombolTambah.style.backgroundColor = 'green'
//     // tombolTambah.style.color = 'white'
//     // divisiEv2.appendChild(tombolTambah)

//     // const tombolTurun = document.createElement('button')
//     // tombolTurun.innerHTML = 'Turun'
//     // tombolTurun.style.backgroundColor = 'red'
//     // tombolTurun.style.color = 'white'
//     // divisiEv2.appendChild(tombolTurun)

//     // tombolTambah.onclick = function(){
//     //   angkaEv++
//     //   return angkaEvHTML.innerHTML = angkaEv
//     // }

//     // tombolTurun.onclick = function(){
//     //   angkaEv--
//     //   return angkaEvHTML.innerHTML = angkaEv
//     // }

//     //----------------DOM MANIPULATION - Query----------------
//     // const element = document.getElementsByTagName('h1')
//     // console.log(element)

//     // const element2 = document.querySelectorAll('ubah')
//     // console.log(element2)
    
//     // const kueri = document.querySelectorAll('h1.ubah')
//     // console.log(kueri)

//     // element.forEach(function(){
//     //   console.log(globalThis)
//     // }) // error karena forEach hanya tersedia di query

//     // kueri.forEach(function(){
//     //   console.log(this)
//     // })

//     // const kueri3 = document.querySelectorAll('div.primer > h2[data="invalid"]')
//     // console.log(kueri3)

//     //----------------DOM MANIPULATION - Case : Change Image by Number----------------
//     const divisiIm = document.createElement('div')
//     document.body.appendChild(divisiIm)

//     const gambar = document.createElement('img')
//     gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png'
//     gambar.height = '100'
//     divisiIm.appendChild(gambar)
    
//     let angkaIm = 1
//     const teks = document.createElement('h3')
//     teks.innerHTML = `Peringkat: ${angkaIm}`
//     divisiIm.appendChild(teks)

//     const tombolNaikIm = document.createElement('button')
//     tombolNaikIm.innerHTML = 'Naik'
//     tombolNaikIm.style.backgroundColor = 'green'
//     tombolNaikIm.style.color = 'white'
//     divisiIm.appendChild(tombolNaikIm)

//     tombolNaikIm.onclick = function(){
//       angkaIm++
//       if(angkaIm === 1){
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png'
//       } else if (angkaIm === 2) {
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/330px-Instagram_logo_2016.svg.png'
//       } else if (angkaIm === 3) {
//         gambar.src = 'data:image/png;base64,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'
//       } else if (angkaIm === 4) {
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png'
//       } else if (angkaIm === 5) {
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png'
//       } else {
//         gambar.src = 'https://media.istockphoto.com/id/1278893745/id/vektor/simbol-tanda-seru-pada-pelat-lingkaran-merah-ikon-perhatian-terisolasi-pada-latar-belakang.jpg?s=612x612&w=0&k=20&c=qKjR8esqWxB1xF3xTr6Qeu1KxLJrzt6dBekly5qwnbI='
//       }
//       return teks.innerHTML = `Peringkat: ${angkaIm}`
//     }

//     const tombolTurunIm = document.createElement('button')
//     tombolTurunIm.innerHTML = 'Turun'
//     tombolTurunIm.style.backgroundColor = 'red'
//     tombolTurunIm.style.color = 'white'
//     divisiIm.appendChild(tombolTurunIm) 

//     tombolTurunIm.onclick = function(){
//       angkaIm--
//       if(angkaIm === 1){
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png'
//       } else if (angkaIm === 2) {
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/330px-Instagram_logo_2016.svg.png'
//       } else if (angkaIm === 3) {
//         gambar.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABOFBMVEUAAAD/////AE4B8us6Ojr//v8A9u+q8fAB8uz+AEz+CFT9//8Pqqb1AE4SAAUUurKtCDoLlpL+AET0AELznrKU7+v/AEkAAgAA8+gA6uL///v5AD4A8O0GAAD5//95BykYw7yVBTHtJ1/2ADsE+fBrCCQT5d4hAwfuAEbNC0T3ADr98vqkCjgQa20Kl5QQrqQDGBcONTQbXlwOeXdm7OmXv8OSABkrBQ3yfpxLBhj0v86GBizvb5H1ytzzq8Q3BxLtCVTrU4DGAC6TFD6Cd3xrwLwAIiBV8ufO+vrkobG9ADddCiDyoLLsWoLsQ3H22uULgXuL8vCEABvziqfys8Pd+/kMRkJABxjdC0gT2NK69/T71+Tud53SCkVO6ObzE1h2AAoLPzu42Ni7nairO12qACjqM2dZWVlTmggbAAAOC0lEQVR4nO2dCVvbSBKGdYyEDjyAbYwkG4OxcAADw+HdJFxx9pgwIVxLHAjMkJ3dnez//wdb3Tqsy5Zst201qy9PwkweTOtNdVdXH1VimBeuH6b9AGNXRki/MkL6lRHSr4yQfmWE9CsjpF8ZIf3KCOlXRki/MkL6lRHSr4yQfmWE9GvyhDsLuws9tDuO9iZP+JNpimYPjaO9KRCKmiZFS9wbQ3uTJ5wVNYmPlrg/hvamQWgDSlqI8GAM7U2PUKvwPltqGm8eut+1RKy9KdqQD9twHM50eoStxbD+9Oca1jI5E06RcIZlWcEvtpnnkJRXBNubLmFQ6loJI74m2F66CNk32IjKW4LtpYtQPSpjG64TbC9lhMIGJjwm2F7KCNkTPBDnmWVi7aWN8HQLEW4SbC9dhIC4JgNhjmB76SIUVPZsCxCVd+TaSxehqrJCWybralJGKLDsWVkmOhDTRYi6KQtxjayQay9lhMiOp3VZ5laItZc+QgHmRJlgN00fIXY2Mjlvmj5CGIvQTyGsIaQUEoKKdZnYGjGdhOyveWJGTCehyr7PkxqJ6SQ0VOF9npA7TSchTPyAiObE0VdRKSVEEepJgYizSSehioPw4l9IbAynkxACcMGA+O2vBNpLJ6FL+rfR20s3Icv+/edR20s3ocpWP8yOeKiYbkIYj+qHyuxIdkw3IbZjSzRXd4ZvL/2ELLuoayY/dzikJdNPqBrsuc6Lkig25nYPD/b3Bgx0KCBkDaPa0tFxqimKoimag52jpp8QCczY4CvwIQl+iQsDtUcHIWsI6oyO7nAA5oskFFRYbVQXGxo6/H+RhCo6EIev5y39pfZSx5ZG9bElvWRCA1vyl4/bKxevf0zYHl2EsGiEDvuppGAl26uii1AAREP9ZN1JSbgbRxehpWJG6FNGSF7/34QqWkm8aEJ0tPayCT/jk/yXTFi4bMYDUk2Yy298RpGL0NeWVBPKXPnqGq+WXqoNZY4r1U+aYEY11YT7B4c3N7sLNzeHB+EMijhCYCy86Tscp0q4fzi72jDRjhGWCb/ChHwMocMIhhSibDk1wuXDnxqAhHJ+eEewIg9+25xp5Vn0IVTmlXz98hT9jZAewp1VzRQrPH56lxBgIwilWELm7QOXL68VryPH4zQI93YrJjy4pvESevz+hPG9VIH1+zb01Xz9qnidBsL9OdHkfdJsSPgqBjN8EhIy95ucDJDltTdH2O+oKjYozCPF0mQJf54zRT4glLQFxkT2DOUUJiVkmPUH+G9ZLhUKayfFo2uBtXrsRNf4ywyzK2paJUiIrKfpmv7cat3+o3a8sn7RvRyTnJBhVh4UDCmX8vn6xtrVm7vip89HJ5O04UHD1CR/DhqSrrdmHjtWYGLliCiKc5wyCCGyo6JYPIAJnEg24CQIl+c82ZKWlwFvoz/PdDxPXbCfejhChrn4qHD2NGmzchMj/NKo+OY+5EX1D49VtD/dncdGJWSYVzXorNBVOW7ChDempKEJwgWUeH2xgw6mDcMTOo9OCLqvub11coSzJo9Tlrtznz5TFVgD+XPDsxsxMuGSNd+8Op5vKxMjXGKWVwNThKbPRC95iNjQ1qv17Y8POdua49vzRv+gy19dQDTtaVrjtsqykSsekoSWXr9dOa5tz88nu+0+jA2XEaA3iVfjnzvoasjYbTiMhuulYEGpa0O+gp5WNaIXrWQJB7/KNxShOwYreIpodCIelmobznWdDJoCW/13ACkkXDA1D6G2yPbfxaWP8MDslgqAOf6RVaN9KLWESxWn6gOKQvXzfnB0Eq46i11kSACM3YWni3AJBaP2RCEhwAQnRXQRMnvdxaBWgTEYudtHNeGc5KznKz3PONF2ioBPH/C+A12EX0RPLHprRPZRtI+Lv1hxqkoXYTcc1bTnHv0T3Xmx6PA30EW4A1Oh42b0jhHtRoGreVQ8eX919f7k7nOTrl76tRuPgpcJoQnYes3i93o5X8LK5+vf7eUqFYQH3X1frRUagwJ2MU+XhVLJu6NSoonQnez5il6NNGHzpF6SI/aMKCH8ubuk0KIniqONfAQbPYS7pmTFo5qmB6NtPALvtqKM54gCwobmzIVoQeEbh/jM5NJvQKe3onuSdBD+7sz2Gv/MBvwMCt4CgJzMKe2PtZWL+/u367X5Bwp66YIzDGHJZAjBNaH6a5njfJ20Xbv3fvx1+gm/ihXbho3Qkxns2Zbffg89i1mllnDPtEs5SvxjKJhRrws++33rs5WZWsLDbrnDiLnwquThUzb77fmllnDWXfrehp/sqNw1oazU+m5rppbQjUmDOxfIj373AsaUk0snIfhBd3+tEpgqYDV4Wvd00bh6eekkhJDNjUlvA4TwfyfdUajE1rBKK+GBp5P6EQ226XGk8SdeaSW8Ma2YVNKDS3uVPXKjGbkdf3KSVsJd05rttVbwqSDi7sZrF/E/Ka2Es/Y4RMcUfgnspTsMkxRcSSuh/VwR2/iq+s0Zhokqq6aV0D4y1BrhgEbYkO1g9LckPynlhHzI0bCq40oTlpFLOaH2HH4sl1BJdATdl5CbPmHIlXYJE9bJSy2h5UulkCuFqM3pW7XYn4JWwav2NaogIdr6qU+RcM6e8cOEguNLYyNSS87JQIhQUIXCFAl737B358OEBdac8C/4k1BJ9mna0NmlCa/vBdW+lezuNfXVl16E0Emvy1MkvLE9TcRxhbN4SlbeeKEXIVqF5adIaK0tJD58M0FwXE0ywtWehKx6Nk1Ce30oRdy9UFWrGn4iwj13nRnuperdNAmZBn6sSriXgp62Eo/DBZcw9JNU9n1pmoR275qJPBa9KskKxyXxpbp19sFreFvZD8i2nfvcIwCFlJhwV+wZiYARsRNMMB8uuK/R0auG/x4HuFJnu4dkSfbkhDsWYcRWItIJGkHxMc2Sc7VfkxpsIE9UZT87K+mHkZACSr6rbxFGxKVITeRO4xdPq6abLXRrBO4UG9Y/U/IAN6EGObdAl0kj1hYsimtOt2BtEecgbjzpUWFHo37j7FUYsSrJSAOcPZkVCCj1aEJVLZZjq+G74QwahkLIZT3VHcL47j6AkhPu4x6mR94HRmf4b8ox4+d3zwuetIjx7MyGsbvmg2mAM+Cv6JVw4d5l9TDwGndbfbfavnheQ6ZVOuFZx35PEEeu0DXWAIQ3ooSuBAtG9I1L8IXlPr5mx5kn8N3woAnRPZWCdcIqy0Qni0EIl0UYR9Jz7zvB6vXaP3t9dtZ0s2vQdF8Nn+6clJwzZKKOZqD7ND+BGaRGlY1OO8Dz9y/RnzxoeNMXNP1RCNz6E7xHAyTfFDQYIbqroPHnRnSFFVhjQAfu3IQ/t/PV9OVg4s0efzyjskX3CFIh+cauAe+1QWwqgRfsXUMGQs1Ffm7HG4J/2W2Ingwi9PtDeEeSdTZ7YBwSjWgGJPyCbKH3u9qtssatJopfZ3cPQQuzq7xo+vKHUAJKeFOZVYvd0x2is+Gg90vBiBX9vHf2AY40FzVexC9Thd+ilcLuRQTA0OeFrgmJvidocMJ9tE922/v6uoHKPAgzuuQG2IFXcWqVD1Ujok6C5/gq0dHA2AhR2Q5Y9/S9vQ5m7DR4zZ/+LPF2+kLUbiQ6GOjeNiL3hpmhCBld7HUx0e2pqmGoi7rfeNiokvQcEfOh6fW97BLmCL6CdCjCA5gTw3eifD0V5QGz1Vudr3hMCDatPJ9HpUhBCP657PZRZZsh+ZrVIQiZWfCNkbGpaxM0GIGz+thqdIef3ljswAA0wpfDVba54dwqlslu0QxHyDQgrmGN+EwSQKl2ZhZboNvF84gZgnXegeC9UEU2YhuGcGl5XxQh6ooFZO04zlaPBFNUPtfjR8GEhEfhUPmHh6YYNadFA8Aws0oFRU8x8FOOvLcaCc/2QxKiPc/FREYUcGZQ0JxeQIG9LnjupbYJ0yENlQc8J+odsE2PlJKEUnG11WZb9vRRoot7W8Nlq6+Kz71GVnJClKDRXPNe2/xIHI8ZumrEqjkj9K2ploAQXXJY62afyFyOuJdBGrYuxhzficlwjkcEwHy3IousJLhQNYSGrvwxyyf0p73wwMm0u11UlhNcAxhKw9c2uWkNb0OcBHa64bsbTnSj26MR6tMchNcJiQWExbrnYjHHPYxlEDKj1Rja+9fwgM3Lssd+Mtf+keBrnH0arRLWv63+NhAdrqt+2vaEajK4UcILe49GrPX1nydsksHsh5L4/Bl8ufv4pobVqBXp/sBFKgcyInuWy/t6KNceI+DoFen+kIuDudSjtTKaJLrzIPdA9JwiqNGrCh6XcsUmDsLQPnZ0RK4KVoY+8H33JynCPNg3w2Z0EagMeZHLF948scFTaz8i/qNZtOznFd62GKdI1L5c3uTy5e+fmj0XSbDaB/dydFnIl4I5wrl1wtsyIZGpX3qscKVy/eruqZcVr88uCyHzoRywsQ5BLEI1aN9tgueQS+XC1d3ZU9M7GJvXR3eXuXK+5DcetmWO9N5olAgRLjHrbfzgpXy+XMh9u7o8QbpaaxfqITpH82OKYvwiVyl5qZZzi1TKuJ5CLzI8Byqb45wEPSJZ7RoY7ccP8QT/RtlMkppBRITrea/8FqpQGcGb2yZ7CNpXhAmXmHfbD9GQspWgr+Tmx7Hf1FuECbHveFfbzIWrjXKo+MDDhPGY8b054O3x/G9dYyqKknuYr62jQ4nxzu9hjffdCK/vL9ZXVtbX374jfuCSWJN/+8OklRHSr4yQfmWE9CsjpF8ZIf3KCOlXRki/MkL6lRHSr4yQfmWE9CsjpF8ZIf36gfnhheu//wOssGZbwViz8AAAAABJRU5ErkJggg=='
//       } else if (angkaIm === 4) {
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png'
//       } else if (angkaIm === 5) {
//         gambar.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png'
//       } else {
//         gambar.src = 'https://media.istockphoto.com/id/1278893745/id/vektor/simbol-tanda-seru-pada-pelat-lingkaran-merah-ikon-perhatian-terisolasi-pada-latar-belakang.jpg?s=612x612&w=0&k=20&c=qKjR8esqWxB1xF3xTr6Qeu1KxLJrzt6dBekly5qwnbI='
//       }
//       return teks.innerHTML = `Peringkat: ${angkaIm}`
//     }
