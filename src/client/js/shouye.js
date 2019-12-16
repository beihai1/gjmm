$(() => {

    $(".gjmm_nav li a").hover(function () {
        $(this).addClass("active")
    }, function () {
        $(this).removeClass("active");
        $(".gjmm_nav li a").eq(0).addClass("active");
    })

    // 第一个轮播图
    let index = 0;
    let timer = setInterval(function () {
        index++
        if (index == $(".p_l_1").length) {
            index = 0;
        }
        $(".p_l_1").eq(index).addClass("p_active").siblings().removeClass("p_active");
        $(".swiper-slidea").eq(index).addClass("slide_active").siblings().removeClass("slide_active")

    }, 2000)

    // 第二个轮播图
    let indexs = 0;
    let timers = setInterval(function () {
        indexs++;
        if (indexs == $(".swiper-slides-list").length) {
            indexs = 0;
            // $(".swiper-slides-list").css("left", indexs * 1200 + "px")
        }
        $(".swiper-slides-list").css("left", - indexs * 1200 + "px")

    }, 2000)


    //第三个轮播图
    let indexa = 0;
    let timera = setInterval(function () {
        indexa++;
        if (indexa == $(".swiper-slides-lists").length) {
            indexa = 0;
            // $(".swiper-slides-list").css("left", indexs * 1200 + "px")
        }
        $(".swiper-slides-lists").css("left", - indexa * 1200 + "px")

    }, 2000)
    /*  获取数据
     var a = document.getElementsByClassName("swiper-wrapper")[3].getElementsByClassName("swiper-slide");
     var arr = [];
     for (var i = 0; i < a.length; i++) {
         var obj = {};
         obj.src = a[i].getElementsByClassName("comm_img")[0].getElementsByTagName("img")[0].src;
         obj.srcA = a[i].getElementsByClassName("userimg")[0].getElementsByTagName("img")[0].src;
         obj.title = a[i].getElementsByClassName("comm_con")[0].innerText
         obj.title1 = a[i].getElementsByClassName("username")[0].innerText


         obj.price = a[i].getElementsByClassName("supp")[0].innerText

         arr.push(obj);
     } */


    // let html = data.map((ele, index) => {
    //     return `<div class="swiper-slides ">
    //             <p><img src=${ele.src}></p>
    //                 <p class="name ">${ele.title}</p>
    //                 <p class="jiage ">
    //                     <span class="jg">${ele.title1}</span>
    //                     <span class="p_num">${ele.price}</span>
    //                 </p>
    //         </div>`
    // }).join("");
    // $(".swiper-wrapperd").html(html);

    //渲染第二个轮播图
    let html = data.map((ele, index) => {
        let html1 = ele.map((item) => {
            return `<div class="swiper-slides ">
                    <p><img src=${item.src}></p>
                         <p class="name ">${item.title}</p>
                         <p class="jiage ">
                             <span class="jg">${item.title1}</span>
                             <span class="p_num">${item.price}</span>
                         </p>
                    </div>`
        }).join("");
        return `<ul class="swiper-slides-list">${html1}</ul>`;
    })
    $(".swiper-wrapperd").html(html);


    //渲染第三个轮播图
    let htmlA = data1.map((ele) => {
        let htmlB = ele.map((item) => {
            return `
                <div class="swiper-slide ">
                <a class="comment_unit">
                    <div class="comm_img"><img src=${item.src}></div>
                         <div class="comm_con ">${item.title}</div>
                         <div class="comm_supp ">
                            <div class="userimg "><img src=${item.srcA}></div>
                                
                             <span class="username">${item.title1}</span>
                             <span class="supp">${item.price}</span>
                         </div>
                         </a>  
                </div>`
        }).join("");
        return `<ul class="swiper-slides-lists">${htmlB}</ul>`;
    })
    $(".swiper-wrapperB").html(htmlA);
})