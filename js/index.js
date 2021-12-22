
//nike part
var $nike_contCover = document.querySelector("#cont_01 .cont");
var $nike_contGroup = "";

//랜덤방식으로 이미지 4개중에 두개만을 가져온다. (겹치지 않게)
var nike_num_arr = [];
var nike_number;

while(nike_num_arr.length < 2){
    nike_number = Math.floor(Math.random()*4); //0~3 랜덤 숫자 발생
    if(nike_num_arr.indexOf(nike_number) == -1){
        nike_num_arr.push(nike_number);
    }
}

for(i=0; i<nike_num_arr.length; i++){
    $nike_contGroup += `
    <div style="background-image : url(./img/nike_0${nike_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#nike_${nike_num_arr[i]}'"></div>
    `;
} // 사진은 1~4, 페이지는 0~3
$nike_contCover.innerHTML = $nike_contGroup;



//adidas part
var $adidas_contCover = document.querySelector("#cont_02 .cont");
var $adidas_contGroup = "";

//랜덤방식으로 이미지 4개중에 두개만을 가져온다. (겹치지 않게)
var adidas_num_arr = [];
var adidas_number;

while(adidas_num_arr.length < 2){
    adidas_number = Math.floor(Math.random()*4); //0~3 랜덤 숫자 발생
    if(adidas_num_arr.indexOf(adidas_number) == -1){
        adidas_num_arr.push(adidas_number);
    }
}

for(i=0; i<adidas_num_arr.length; i++){
    $adidas_contGroup += `
    <div style="background-image : url(./img/adidas_0${adidas_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#adidas_${adidas_num_arr[i]}'"></div>
    `;
} // 사진은 1~4, 페이지는 0~3
$adidas_contCover.innerHTML = $adidas_contGroup;



//puma part
var $puma_contCover = document.querySelector("#cont_03 .cont");
var $puma_contGroup = "";

//랜덤방식으로 이미지 4개중에 두개만을 가져온다. (겹치지 않게)
var puma_num_arr = [];
var puma_number;

while(puma_num_arr.length < 2){
    puma_number = Math.floor(Math.random()*4); //0~3 랜덤 숫자 발생
    if(puma_num_arr.indexOf(puma_number) == -1){
        puma_num_arr.push(puma_number);
    }
}

for(i=0; i<puma_num_arr.length; i++){
    $puma_contGroup += `
    <div style="background-image : url(./img/puma_0${puma_num_arr[i]+1}.jpg);" onclick="location.href='./detail.html#puma_${puma_num_arr[i]}'"></div>
    `;
} // 사진은 1~4, 페이지는 0~3
$puma_contCover.innerHTML = $puma_contGroup;


$(document).ready(function(){
    var $brand = ["nike", "adidas", "puma"];
    var slide_arr = [];
    var slide_img;

    //3가지 각 브랜드의 이미지가 1~4중 랜덤으로 뜨도록
    while(slide_arr.length < 4){
        slide_img = `${$brand[Math.floor(Math.random() * 3)]}_0${Math.ceil(Math.random() * 4)}.jpg`;
        
        if(slide_arr.indexOf(slide_img) == -1)
            slide_arr.push(slide_img);
    }

    for(v of slide_arr){
        $("main .slider").append(`<div class="slide" style="background-image:url(./img/${v})"></div>`);
    }


    // js plugin 으로, 구조가 잡히고 나서 사용할 수 있음
    // 좌우로 드래그 슬라이드
    $('.slider').slick({
        infinite : true, // 무한반복
        dots : true, // navigator
        slidesToShow : 1, // 한번에 몇장의 이미지 보여줄 것인지
        slidesToScroll : 1, // 한번에 이동할 이미지의 개수
        autoplay : true, // 자동회전 여부
        autoplaySpeed : 3000 // 슬라이드 텀
        });
});