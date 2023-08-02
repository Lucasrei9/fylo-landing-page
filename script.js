let link = document.getElementsByClassName('productive_text_link')[0]
link.addEventListener('mouseover', changeSrc)
link.addEventListener('mouseout', backSrc)


function changeSrc(e) {

    let a = e.target
    let img = a.children[0]
    img.src = "./images/icon-arrow-light.svg"
}

function backSrc(e) {
    let a = e.target
    let img = a.children[0]
    img.src = "./images/icon-arrow.svg"
}