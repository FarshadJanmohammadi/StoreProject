let slidINdex = 1;

function setSlide(input, index) {
    slidINdex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector(".slides").children];
    slides.forEach((slid) => {
        slid.classList.remove("active");
    });

    item.classList.add("active");
}

setInterval(() => {
    slidINdex += 1;
    if (slidINdex >= 4) {
        slidINdex = 1;
    }
    setSlide(`slid${slidINdex}`, slidINdex);
}, 3000);