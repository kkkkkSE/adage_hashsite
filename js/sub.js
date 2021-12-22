//http://127.0.0.1:5500/sub.html#nike

var $url = location.href;
console.log($url);


// index.html -> sub.html 진입 시 진입된 페이지의 hash를 가져와 변수에 저장
var $hash = location.hash;
console.log($hash); //#nike
var $hash_txt = $hash.replace("#", "");
console.log($hash_txt); //nike

// 선택자 구성하기
var $main = document.querySelector("main"); // 배너이미지 교체
var $title = document.querySelector("#cont .wrap .title h3"); // 페이지 타이틀 변경
var $contCover = document.querySelector("#cont .wrap .cont"); // 내부 이미지 담을 곳


var $contGroup = ""; // .cont에 이미지 넣어줄 빈 공간

var hash_apply = function(){
    if($hash_txt){
        $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpg)`;
        $title.textContent = $hash_txt;
        $contGroup = ""; // 기존에 넣은 데이터 초기화
        for(i=0; i<4; i++){
            $contGroup += `
            <div style="background-image: url(./img/${$hash_txt}_0${i+1}.jpg)" onclick="location.href='./detail.html#${$hash_txt}_${i}'"></div>
            `;
        }

        $contCover.innerHTML = $contGroup;

    }else{
        location.href = "./"; // 해시태그 없으면 메인페이지로 이동
    }
};
hash_apply();


// sub페이지에서 상단메뉴 클릭 시
var $body = document.querySelector("body");
var $sub_list = document.querySelectorAll("header nav ul li");

var $resBtn = document.querySelector(".resBtn");
var $nav = document.querySelector("header nav");

// for문이 돌면서 v에 마지막 데이터인 puma가 계속 재할당 되는 문제로 const를 사용해주면 해결
for(const v of $sub_list){
    console.log(v); // li, li, li
    v.addEventListener("click", function(){
        console.log(v);
        $hash_txt = v.getAttribute("rel");
        hash_apply();

        $body.classList.remove("showMenu");
        $resBtn.classList.remove("active");
        $nav.classList.remove("active");
    });

}

// var의 약점 : 기존에 작성된 변수명이 있어도 갱신이 가능함 (데이터 완전 교체)
// const : 변수값이 고정값임 (갱신 불가, 견고/경직)
