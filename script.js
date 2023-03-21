// let conf = confirm('Туда или туда и обратно')

// let all = document.querySelector('.all')
// let all2 = document.querySelector('.all2')


// if(conf === true) {
//     all.remove()
//     flightStr = document.querySelector('#time')
// } else if (conf === false) {
//     all2.remove()
//     flightStr = document.querySelector('#time')
// }

let from = prompt('Откуда')
let to = prompt('Куда')
let flightTime = prompt('Время полёта')
let arrivalTime = prompt('Время прилёта')

let fromStr = document.querySelector('#from')
let toStr = document.querySelector('#to')
let flightStr = document.querySelector('#time')
let arrivalStr = document.querySelector('#time2')


fromStr.innerHTML = from
toStr.innerHTML = to
flightStr.innerHTML = flightTime
arrivalStr.innerHTML = arrivalTime




// let from2 = prompt('Откуда')
// let to2 = prompt('Куда')
// let flightTime2 = prompt('Время полёта')
// let arrivalTime2 = prompt('Время прилёта')

// let fromStr2 = document.querySelector('#from2')
// let toStr2 = document.querySelector('#to2')
// let flightStr2 = document.querySelector('#time2_2')
// let arrivalStr2 = document.querySelector('#time2-2')


// fromStr2.innerHTML = from2
// toStr2.innerHTML = to2
// flightStr2.innerHTML = flightTime2
// arrivalStr2.innerHTML = arrivalTime2

// let chekIn2 = document.querySelector('#chekIn2')
// let timeAfter12 = flightTime2.slice(0, 2)
// let timeAfter2 = timeAfter12 - 3


// document.onkeydown = (evt) => {
//     evt = evt || window.event;
//     if (evt.keyCode == 13) {
//         if (timeAfter12 == '02') {
//             chekIn2.innerHTML = `23${flightStr2.innerHTML.slice(2, 5)}`
//         } else if (timeAfter12 == '01') {
//             chekIn2.innerHTML = `22${flightStr2.innerHTML.slice(2, 5)}`
//         } else if (timeAfter12 == '00') {
//             chekIn2.innerHTML = `21${flightStr2.innerHTML.slice(2, 5)}`
//         } else {
//             chekIn2.innerHTML = `${timeAfter2}${flightStr2.innerHTML.slice(2, 5)}`
//             console.log(flightStr2);
//         }
//     }
// }






let chekIn = document.querySelector('#chekIn')
let timeAfter1 = flightTime.slice(0, 2)
let timeAfter = timeAfter1 - 3

document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode == 13) {
        if (timeAfter1 == '02') {
            chekIn.innerHTML = `23${time.innerHTML.slice(2, 5)}`
        } else if (timeAfter1 == '01') {
            chekIn.innerHTML = `22${time.innerHTML.slice(2, 5)}`
        } else if (timeAfter1 == '00') {
            chekIn.innerHTML = `21${time.innerHTML.slice(2, 5)}`
        } else {
            chekIn.innerHTML = `${timeAfter}${time.innerHTML.slice(2, 5)}`
        }
    }
}


let comp = document.querySelector('#company')
let logo = document.querySelector('.logotype')
let llo = document.querySelector('.llo')




document.addEventListener
    (
        "DOMContentLoaded",
        function () {
            comp.addEventListener
                (
                    'change',
                    function () {
                        let nameC = this.options[this.selectedIndex].text
                        if(nameC === 'Uzbekistan Air') {
                            logo.src = 'https://www.uzairways.com/sites/default/files/inline-images/lg14.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Flymania') {
                            logo.src = './img/logo.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Turkish airlines') {
                            logo.src = 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1602914708'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Wizz Air') {
                            logo.src = './img/image_2023-03-20_12-15-52.png'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Qanot Sharq') {
                            logo.src = 'https://img.hhcdn.ru/employer-logo/5610257.jpeg'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Аэрофлот') {
                            logo.src = './img/image_2023-03-20_14-38-00.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                            logo.style.borderRadius = '50%'
                        } else if (nameC === 'Ямал') {
                            logo.src = 'https://seekvectorlogo.com/wp-content/uploads/2022/01/yamal-airlines-vector-logo-2022.png'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Korean Air') {
                            logo.src = 'https://assets.stickpng.com/images/587b511044060909aa603a80.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Fly Dubai') {
                            logo.src = './img/image_2023-03-20_15-44-59.png'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Panorama Airways') {
                            logo.src = 'https://play-lh.googleusercontent.com/9jylzSsrKpLkiAZ8cM6f0uJ8ETeiMLq-RfETMRKbqaSlnE0Mkr5R7kBbcYp1umIMXYLj=rw-w250'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Azimuth') {
                            logo.src = 'data:image/png;base64,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'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Utair') {
                            logo.src = 'https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/8434/ut_logo01_jpg.jpg'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Redwings') {
                            logo.src = 'https://flyredwings.com/upload/information_system_50/6/8/1/item_681/small_item_681.svg'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Lot Airlines') {
                            logo.src = 'https://asset.brandfetch.io/idZf4m5uAJ/idXy3YkJFz.png'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Centrum Air') {
                            logo.src = 'data:image/png;base64,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'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'S7 Airlines') {
                            logo.src = 'data:image/png;base64,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'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Etihad') {
                            logo.src = 'data:image/png;base64,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'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Jazeera Airways') {
                            logo.src = 'https://www.chennaiairport.com/images/airlines17/jazeera-airways.png'
                            llo.className = 'llo2'
                            logo.className = 'logotype2'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Air Astana') {
                            logo.src = 'data:image/png;base64,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'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        } else if (nameC === 'Asiana Airlines') {
                            logo.src = 'https://companieslogo.com/img/orig/020560.KS-a5d795c3.png?t=1596169047'
                            llo.className = 'llo'
                            logo.className = 'logotype'
                            logo.style.borderRadius = '15px'
                        }
                    }
                )
        }
    )