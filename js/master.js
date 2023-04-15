document.querySelector(".mob").addEventListener("click", () => {
  document.querySelector("header .container ul").classList.toggle("sow");
});

document.querySelector(".soh1").addEventListener("click", () => {
  document.querySelector(".pag").classList.toggle("sow");
});

document.querySelectorAll(".pags .hed").forEach((e) => {
  e.addEventListener("click", (t) => {
    t.currentTarget.parentElement.children[1].classList.toggle("sow");
    t.currentTarget.parentElement.children[0].classList.toggle("sow");
    t.currentTarget.parentElement.children[1].classList.remove("sow1");
    let d = t.currentTarget.parentElement.children[1].classList.contains("sow");
    let a = t.currentTarget.parentElement.children[1];
    setTimeout(() => {
      if (d == true) {
        a.classList.add("sow1");
      }
    }, 400);
  });
});
let rr;
let testlmon;
let Count;
document.querySelectorAll("div").forEach((e) => {
  rr = e.classList.contains("testlmon");
  if (rr == true) {
    testlmon = true;
  }
  rr = e.classList.contains("Count");
  if (rr == true) {
    Count = true;
  }
});

if (testlmon == true) {
  var swiper2 = new Swiper(".ss", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".right",
      prevEl: ".left",
    },
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

let neam = document.querySelectorAll(".Count .boxs .box h2");
let section = document.querySelector(".Count .boxs");
let sarat = false;

if (Count == true) {
  window.onscroll = function () {
    let t = section.offsetTop; //  المسافه اللى فوق عنصر
    let t1 = section.scrollHeight; // طول العنر
    let t2 = this.innerHeight; // طول صفحه كلها
    let t3 = this.scrollY; // المسافه اللى بنزلها بي اسكورال

    if (t3 >= t + t1 - t2) {
      if (!sarat) {
        neam.forEach((n) => startCount(n));
      }
      sarat = true;
    }
  };
  document.querySelector(".vedio img").addEventListener("click", () => {
    let ovr = document.createElement("div");
    ovr.className = "ovr";
    document.body.appendChild(ovr);
    let div = document.createElement("div");
    div.className = "ar-c";
    let video = document.createElement("video");
    video.src = "imgs/video.mp4";
    video.setAttribute("controls", "");
    let span = document.createElement("span");
    span.textContent = "x";
    div.appendChild(span);
    div.appendChild(video);
    document.body.appendChild(div);
    span.addEventListener("click", () => {
      ovr.remove();
      div.remove();
    });
  });
}

function startCount(el) {
  let goal = el.dataset.goal;
  let Count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(Count);
    }
  }, 3000 / goal);
}

document.querySelectorAll("form [placeholder]").forEach((e) => {
  e.addEventListener("focus", (e) => {
    e.currentTarget.setAttribute(
      "data",
      e.currentTarget.getAttribute("placeholder")
    );
    e.currentTarget.setAttribute("placeholder", "");
  });
  e.addEventListener("blur", (e) => {
    e.currentTarget.setAttribute(
      "placeholder",
      e.currentTarget.getAttribute("data")
    );
    e.currentTarget.setAttribute("data", "");
  });
});
