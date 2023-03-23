let conf = confirm('Туда или туда и обратно')

let all = document.querySelector('.all')
let all2 = document.querySelector('.all2')
let twoo = document.querySelector('.twoo')
let flex = document.querySelectorAll('.flex')
let hr = document.querySelector('hr')


if (conf === true) {
    all.remove()
    twoo.remove()
    flex.forEach(flex => {
        flex.style.height = '105px'
    })
    hr.style.display = 'none'
} else if (conf === false) {
    all2.remove()
    let from2 = prompt('Откуда')
    let to2 = prompt('Куда')
    let flightTime2 = prompt('Время полёта')
    let arrivalTime2 = prompt('Время прилёта')
    
    let fromStr2 = document.querySelector('#from2')
    let toStr2 = document.querySelector('#to2')
    let flightStr2 = document.querySelector('#time2_2')
    let arrivalStr2 = document.querySelector('#time2-2')
    
    
    fromStr2.innerHTML = from2
    toStr2.innerHTML = to2
    flightStr2.innerHTML = flightTime2
    arrivalStr2.innerHTML = arrivalTime2
    
    let chekIn2 = document.querySelector('#chekIn2')
    let timeAfter12 = flightTime2.slice(0, 2)
    let timeAfter2 = timeAfter12 - 3
    
    
    let promo = prompt('Ввендите номер рейса')
    let comp1 = document.querySelector('#comp22')

    comp1.innerHTML = promo

    
    let logo2 = document.querySelector('.logotype22')
    let llo2 = document.querySelector('.llo22')
    
    // document.onkeydown = (evt) => {
    //     evt = evt || window.event;
    //     if (evt.keyCode == 39) {
            if (timeAfter12 == '02') {
                chekIn2.innerHTML = `23${flightStr2.innerHTML.slice(2, 5)}`
            } else if (timeAfter12 == '01') {
                chekIn2.innerHTML = `22${flightStr2.innerHTML.slice(2, 5)}`
            } else if (timeAfter12 == '00') {
                chekIn2.innerHTML = `21${flightStr2.innerHTML.slice(2, 5)}`
            } else {
                chekIn2.innerHTML = `${timeAfter2}${flightStr2.innerHTML.slice(2, 5)}`
                console.log(flightStr2);
            }
            
            

            let nameC = comp1.innerHTML.slice(0, 2)
            
            if (nameC === 'hy') {
                logo2.src = 'https://www.uzairways.com/sites/default/files/inline-images/lg14.png'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'Flymania') {
                logo2.src = './img/logo.png'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'tk') {
                logo2.src = 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1602914708'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === '5w') {
                logo2.src = './img/image_2023-03-20_12-15-52.png'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'hh') {
                logo2.src = 'https://img.hhcdn.ru/employer-logo/5610257.jpeg'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'su') {
                logo2.src = './img/image_2023-03-20_14-38-00.png'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
                logo2.style.borderRadius = '50%'
            } else if (nameC === 'yc') {
                logo2.src = 'https://seekvectorlogo.com/wp-content/uploads/2022/01/yamal-airlines-vector-logo-2022.png'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'ke') {
                logo2.src = 'https://assets.stickpng.com/images/587b511044060909aa603a80.png'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'fz') {
                logo2.src = './img/image_2023-03-20_15-44-59.png'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'p9') {
                logo2.src = 'https://play-lh.googleusercontent.com/9jylzSsrKpLkiAZ8cM6f0uJ8ETeiMLq-RfETMRKbqaSlnE0Mkr5R7kBbcYp1umIMXYLj=rw-w250'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'a4') {
                logo2.src = './img/Без названия.png'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'ut') {
                logo2.src = 'https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/8434/ut_logo01_jpg.jpg'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'wz') {
                logo2.src = 'https://flyredwings.com/upload/information_system_50/6/8/1/item_681/small_item_681.svg'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'lo') {
                logo2.src = 'https://cdn.worldvectorlogo.com/logos/lot-2.svg'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'c6') {
                logo2.src = './img/ff.png'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 's7') {
                logo2.src = './img/Без названия (1).png'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'ey') {
                logo2.src = 'https://w7.pngwing.com/pngs/281/416/png-transparent-logo-etihad-airways-airline-emirates-others-text-logo-typography.p'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'j9') {
                logo2.src = 'https://www.chennaiairport.com/images/airlines17/jazeera-airways.png'
                llo2.className = 'llo2'
                logo2.className = 'logotype2'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'kc') {
                logo2.src = 'https://logosandtypes.com/wp-content/uploads/2020/06/air-astana.png'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            } else if (nameC === 'oz') {
                logo2.src = 'https://companieslogo.com/img/orig/020560.KS-a5d795c3.png?t=1596169047'
                llo2.className = 'llo'
                logo2.className = 'logotype'
                logo2.style.borderRadius = '15px'
            }
        }
//     }
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





let promp = prompt("Введите номер рейса")
let comp2 = document.querySelector('#comp')

comp2.innerHTML = promp

let logo = document.querySelector('.logotype')
let llo = document.querySelector('.llo')

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


        let nameC = comp2.innerHTML.slice(0, 2)
        if (nameC === 'hy') {
            logo.src = 'https://www.uzairways.com/sites/default/files/inline-images/lg14.png'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'Flymania') {
            logo.src = './img/logo.png'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'tk') {
            logo.src = 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1602914708'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === '5w') {
            logo.src = './img/image_2023-03-20_12-15-52.png'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'hh') {
            logo.src = 'https://img.hhcdn.ru/employer-logo/5610257.jpeg'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'su') {
            logo.src = './img/image_2023-03-20_14-38-00.png'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
            logo.style.borderRadius = '50%'
        } else if (nameC === 'yc') {
            logo.src = 'https://seekvectorlogo.com/wp-content/uploads/2022/01/yamal-airlines-vector-logo-2022.png'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'ke') {
            logo.src = 'https://assets.stickpng.com/images/587b511044060909aa603a80.png'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'fz') {
            logo.src = './img/image_2023-03-20_15-44-59.png'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'p9') {
            logo.src = 'https://play-lh.googleusercontent.com/9jylzSsrKpLkiAZ8cM6f0uJ8ETeiMLq-RfETMRKbqaSlnE0Mkr5R7kBbcYp1umIMXYLj=rw-w250'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'a4') {
            logo.src = './img/Без названия.png'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'ut') {
            logo.src = 'https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/8434/ut_logo01_jpg.jpg'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'wz') {
            logo.src = 'https://flyredwings.com/upload/information_system_50/6/8/1/item_681/small_item_681.svg'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'lo') {
            logo.src = 'https://cdn.worldvectorlogo.com/logos/lot-2.svg'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'c6') {
            logo.src = './img/ff.png'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 's7') {
            logo.src = './img/Без названия (1).png'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'ey') {
            logo.src = 'https://w7.pngwing.com/pngs/281/416/png-transparent-logo-etihad-airways-airline-emirates-others-text-logo-typography.p'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'j9') {
            logo.src = 'https://www.chennaiairport.com/images/airlines17/jazeera-airways.png'
            llo.className = 'llo2'
            logo.className = 'logotype2'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'kc') {
            logo.src = 'https://logosandtypes.com/wp-content/uploads/2020/06/air-astana.png'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        } else if (nameC === 'oz') {
            logo.src = 'https://companieslogo.com/img/orig/020560.KS-a5d795c3.png?t=1596169047'
            llo.className = 'llo'
            logo.className = 'logotype'
            logo.style.borderRadius = '15px'
        }
    }
}






