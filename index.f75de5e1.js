"use strict";
const thumbs = document.getElementById("thumbs");
const largeImg = document.getElementById("largeImg");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    if (!link) return;
    const newSrc = link.href;
    largeImg.src = newSrc;
});

//# sourceMappingURL=index.f75de5e1.js.map
