var num_img = 0;
var sec = 0;

load();
function load() {
    num_img = Number(localStorage.getItem("num_img"));
    sec = localStorage.getItem("slideshow-sec");
    console.log(`slideshow-sec: ${sec}`);
    console.log(`num_img: ${num_img}`);
    attr = "slider " + sec + "s infinite cubic-bezier(1, 0, 0, 1)"
    $(".slider-inner").css("animation", attr);


    var img = [];
    html = "";
    image_area_html = "";
    json = {
        name: "slider",
        "0%": { transform: "translateX(0)" },
    };
    if (num_img > 0) {
        for (var i = 0; i < num_img; i++) {
            keyname = "img" + (i + 1)
            console.log(`keyname: ${keyname}`);
            img[i] = localStorage.getItem(keyname);
            // console.log(`${img[i]}`);
            html += `<div class="slider-item"><img src="${img[i]}"></div>`
            image_area_html += `<img src="${img[i]}" width="20%" />`
            ns = (100.0 / num_img) * i + "%";
            ns2 = (100.0 / num_img) * i + (100.0 / num_img) * 0.8 + "%";
            json[ns] = { transform: `translateX(-${20 * i}vw)` }
            json[ns2] = { transform: `translateX(-${20 * i}vw)` }
            console.log(`${i}: ${ns}, ${ns2}`);
        }
    }
    console.log(json);
    $(".slider-inner").html(html);
    document.querySelector('#uploadImageArea').innerHTML = image_area_html;
    $.keyframe.define([json]);
    $(".slider-inner").css("width", `${100 * num_img}%`)
}

$("#reset").on("click", () => {
    num_img = localStorage.getItem("num_img");
    for (var i = 0; i < num_img; i++) {
        keyname = "img" + (i + 1);
        localStorage.removeItem(keyname);
    }
    num_img = 0;
    localStorage.setItem("num_img", num_img);
    load();
});

function fileDragOver(e) {
    e.preventDefault()
}
function fileDrop(e) {
    e.preventDefault()
    const files = e.dataTransfer.files
    for (var i = 0; i < files.length; i++) {
        const file = files[i]

        const reader = new FileReader()
        reader.onload = (event) => {
            const base64Text = event.currentTarget.result

            document.querySelector('#uploadImageArea').innerHTML += `<img src="${base64Text}" width="20%" />`
            num_img = Number(num_img) + 1;
            keyname = "img" + num_img;
            localStorage.setItem(keyname, base64Text);
            localStorage.setItem("num_img", num_img);
            load();
        }
        reader.readAsDataURL(file)
    }
}

var send_data = "ASDASDASD"
$.ajax("/call_from_ajax", {
    type: "post",
    data: { "data": send_data },              // 連想配列をPOSTする
}).done(function (received_data) {           // 戻ってきたのはJSON（文字列）
    var dict = JSON.parse(received_data);   // JSONを連想配列にする
    // 以下、Javascriptで料理する
    var answer = dict["answer"];
    // console.log(answer);
}).fail(function () {
    console.log("失敗");
});

$("#slideshow-sec").on("change", (event) => {
    console.log(event.currentTarget.value);
    localStorage.setItem("slideshow-sec", event.currentTarget.value);
    load();
});



