var $nike = [
    ["nike_01.jpg", "nike_title_ad_1", "nike_text_ad_1"],
    ["nike_02.jpg", "nike_title_ad_2", "nike_text_ad_2"],
    ["nike_03.jpg", "nike_title_ad_3", "nike_text_ad_3"],
    ["nike_04.jpg", "nike_title_ad_4", "nike_text_ad_4"],
];

var $adidas = [
    ["adidas_01.jpg", "adidas_title_ad_1", "adidas_text_ad_1"],
    ["adidas_02.jpg", "adidas_title_ad_2", "adidas_text_ad_2"],
    ["adidas_03.jpg", "adidas_title_ad_3", "adidas_text_ad_3"],
    ["adidas_04.jpg", "adidas_title_ad_4", "adidas_text_ad_4"],
];

var $puma = [
    ["puma_01.jpg", "puma_title_ad_1", "puma_text_ad_1"],
    ["puma_02.jpg", "puma_title_ad_2", "puma_text_ad_2"],
    ["puma_03.jpg", "puma_title_ad_3", "puma_text_ad_3"],
    ["puma_04.jpg", "puma_title_ad_4", "puma_text_ad_4"],
];

//http://127.0.0.1:5500/detail.html#nike_0

var $hash = location.hash; // #nike_0
var $hash_txt = $hash.replace("#", ""); // nike_0

var $divide_arr = $hash_txt.split("_"); // ['nike', '0']
// arr[0] : 카테고리 정의 , arr[1] : 카테고리의 데이터 인덱스


// 선택자 구성
var $detailBg = document.querySelector("#cont .ad_img");
var $detailTitle = document.querySelector("#cont h3");
var $detailText = document.querySelector("#cont p");


if($divide_arr[0] == "nike"){
    $detailBg.style.backgroundImage = `url(./img/${$nike[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $nike[$divide_arr[1]][1];
    $detailText.textContent = $nike[$divide_arr[1]][2];
}

if($divide_arr[0] == "adidas"){
    $detailBg.style.backgroundImage = `url(./img/${$adidas[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $adidas[$divide_arr[1]][1];
    $detailText.textContent = $adidas[$divide_arr[1]][2];
}

if($divide_arr[0] == "puma"){
    $detailBg.style.backgroundImage = `url(./img/${$puma[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $puma[$divide_arr[1]][1];
    $detailText.textContent = $puma[$divide_arr[1]][2];
}



// 하단의 list view
var backBtn = document.querySelector(".history button");

backBtn.addEventListener("click", function(){
    // history.back();
    // history.go(-1);
    location.href = `./sub.html#${$divide_arr[0]}`;
});