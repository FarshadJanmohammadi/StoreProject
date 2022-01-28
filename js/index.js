let slidINdex = 1;
let remainintTime = 70000;

function setTime() {
    if (remainintTime == 0) return;
    let h = Math.floor(remainintTime / 3600);
    let m = Math.floor((remainintTime % 3600) / 60);
    let s = (remainintTime % 3600) % 60;
    document.querySelector("#hour").innerHTML = h;
    document.querySelector("#minute").innerHTML = m;
    document.querySelector("#secound").innerHTML = s;
}
setInterval(() => {
    remainintTime -= 1;
    setTime();
}, 1000);

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