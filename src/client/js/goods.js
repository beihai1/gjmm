$(() => {


    new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/code/gjmm/src/server/getPageCount.php",
            dataType: "json",
            success: (data) => {
                let res = "";
                for (let i = 0; i < data.count; i++) {
                    res += `<a href="javascript:;">${i + 1}</a>`
                }
                $("#page").html(res);
                $("#page").children().eq(0).addClass("active");

                resolve();
            }
        });
    }).then(function () {
        getDataWithPage(1, 0);
    })



    $("#sxxl3").hover(function () {
        $("#sxxl3_item").css("display", "block")
    }, function () {
        $("#sxxl3_item").css("display", "none")
    })
    $("#sxxl4").hover(function () {
        $("#sxxl4_item").css("display", "block")
    }, function () {
        $("#sxxl4_item").css("display", "none")
    })

    // getDataWithPageCount(1);

    /* 发送网络请求获取服务器商品数据 */
    // function getDataWithPageCount(index) {
    //     $.ajax({
    //         type: "get",
    //         url: "http://127.0.0.1/code/gjmm/src/server/getGoodData.php",
    //         data: "page=" + index,
    //         dataType: "json",
    //         success: function (data) {
    //             console.log(data);
    //             renderUI(data);


    //         }
    //     });
    // }

    function getDataWithPage(page, type) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/code/gjmm/src/server/getGoodData.php",
            data: `page=${page}&sortType=${type}`,
            dataType: "json",
            success: (data) => renderUI(data)
        });
    }




    /* 渲染商品数据 */
    function renderUI(data) {
        let html = data.map((ele, index) => {
            return `
            <div class="gjm">
            <div class="tc_ja"><img src=${ele.src}></div> 
            <div><a class="gia">
            <img src=${ele.srcA}></a></div>
            <div class="qhq"><p>&nbsp;</p></div>
            <div class="gan"><a href="" >${ele.title}</a></div>
            <div class="hdgy">
            <font id="xs994" class="xst">${ele.titleA}</font>
            <font id="mjj994"></font>
            <div class="lzyf">${ele.titleC}</div>
            <div class="clear"></div>
            </div>            
            <div class="jiage">
            <p class="gap">
            <span class="shop_prices" id="zj994" ;>${ele.priceA}</span>
            <span class="dg_price" id="gj994">${ele.priceB}</span>
            <span id="qishou994"><span class="goods_qishou">${ele.priceC}</span></span>
            </p>
            </div>
            </div>                       
            `
        }).join("");

        $(".ct").html(html);
    }


    $("#page").on("click", "a", function () {
        getDataWithPage($(this).text());
        $(this).addClass("active").siblings().removeClass("active");

    })

    $(".left a").click(function () {
        getDataWithPage(1, $(this).index());
        $(this).addClass("current").siblings().removeClass("current");
    })

})