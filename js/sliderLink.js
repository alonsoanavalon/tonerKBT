const d = document;


export default function sliderLink (slider, link) {

    let $slider = d.querySelector(slider)

    $slider.addEventListener("click", e => {
        location.href= link;
    })
    
}