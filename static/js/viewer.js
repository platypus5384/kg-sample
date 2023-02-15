// localStorage.setItem('キー', '値');
sec = localStorage.getItem("slideshow-sec");
console.log(sec);
attr = "slider " + sec + "s infinite cubic-bezier(1, 0, 0, 1)"
$(".slider-inner").css("animation", attr);

var num_img = localStorage.getItem("num_img");
var img = [];
html = "";
json = {
    name: "slider",
    "0%": { transform: "translateX(0)" },
};
if (num_img > 0) {
    for (var i = 0; i < num_img; i++) {
        keyname = "img" + (i + 1)
        img[i] = localStorage.getItem(keyname);
        html += `<div class="slider-item"><img src="${img[i]}"></div>`
        ns = (100.0/num_img) * i  +"%";
        ns2 = (100.0/num_img) * i + (100.0/num_img)*0.8 +"%";
        json[ns] = {transform: `translateX(-${100*i}vw)`}
        json[ns2] = {transform: `translateX(-${100*i}vw)`}
        console.log(`${i}: ${ns}, ${ns2}`);
    }
    console.log(json);
    $(".slider-inner").html(html);
    $.keyframe.define([json]);
    $(".slider-inner").css("width", `${100*num_img}%`)
}