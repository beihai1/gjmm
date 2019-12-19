// var arr = [];
// var c = document.querySelectorAll(".clearfix")[2].querySelectorAll("li");
// var obj = {};
// obj.srcq = c[0].querySelector("img").src;
// obj.srcw = c[1].querySelector("img").src;
// obj.srce = c[2].querySelector("img").src;
// obj.srcr = c[3].querySelector("img").src;

// var b = document.querySelector(".goodss_js_middle");

// obj.srcD = b.querySelector(".cloud-zoom").querySelector("img").src;
// obj.srcA = b.querySelector(".pingjia").querySelectorAll("img")[0].src
// obj.srcB = b.querySelector(".pingjia").querySelectorAll("img")[1].src
// obj.srcC = b.querySelector(".pingjia").querySelectorAll("img")[2].src
// obj.koubei = b.querySelector(".pingjia").querySelector("a").innerText

// var a = document.querySelector(".goodss_js_right");

// obj.h1 = a.querySelector("h1").innerText;
// obj.zx = a.querySelector(".fbt_zx").innerText;
// obj.price = a.querySelector(".shp").innerText;
// obj.hdj_tb = a.querySelector(".hdj_tb").innerText;
// obj.mkpp = a.querySelector(".mkpp").innerText;

// obj.t_l = a.querySelector(".t_l").innerText;
// obj.djs = a.querySelector(".djs").innerText;

// obj.bonus_boxA = a.querySelectorAll(".lbox")[0].innerText;
// obj.bonus_boxB = a.querySelectorAll(".lbox")[1].innerText;
// obj.bonus_boxC = a.querySelectorAll(".lbox")[2].innerText;
// obj.bonus_boxD = a.querySelectorAll(".lbox")[3].innerText;
// obj.bonus_boxE = a.querySelectorAll(".lbox")[4].innerText;
// obj.bonus_boxF = a.querySelectorAll(".lbox")[5].innerText;
// obj.lboxA = a.querySelector("#tax_show_btn").querySelector(".lbox").innerText;
// obj.rbox = a.querySelector("#tax_show_btn").querySelector(".rbox").innerText;


// obj.priceA = a.querySelectorAll(".tcxzss")[0].querySelector("p").innerText;
// obj.shuA = a.querySelectorAll(".tcxzss")[0].querySelector("span").innerText;
// obj.priceB = a.querySelectorAll(".tcxzss")[1].querySelector("p").innerText;
// obj.shuB = a.querySelectorAll(".tcxzss")[1].querySelector("span").innerText;
// obj.priceC = a.querySelectorAll(".tcxzss")[2].querySelector("p").innerText;
// obj.shuC = a.querySelectorAll(".tcxzss")[2].querySelector("span").innerText;
// obj.priceD = a.querySelectorAll(".tcxzss")[3].querySelector("p").innerText;
// obj.shuD = a.querySelectorAll(".tcxzss")[3].querySelector("span").innerText;
// obj.priceE = a.querySelectorAll(".tcxzss")[4].querySelector("p").innerText;
// obj.shuE = a.querySelectorAll(".tcxzss")[4].querySelector("span").innerText;


// obj.tubiao = a.querySelector(".tubiao").innerText;
// obj.text = a.querySelector(".text").innerText;

// obj.jw_sm = a.querySelector(".jw_sm").innerText;

// var d = document.querySelector(".suxing");

// obj.expA = d.querySelectorAll("div")[0].querySelectorAll("span")[0].innerText;
// obj.dataA = d.querySelectorAll("div")[0].querySelectorAll("span")[1].innerText;
// obj.expB = d.querySelectorAll("div")[1].querySelectorAll("span")[0].innerText;
// obj.dataB = d.querySelectorAll("div")[1].querySelectorAll("span")[1].innerText;
// obj.expC = d.querySelectorAll("div")[2].querySelectorAll("span")[0].innerText;
// obj.dataC = d.querySelectorAll("div")[2].querySelectorAll("span")[1].innerText;
// obj.expD = d.querySelectorAll("div")[3].querySelectorAll("span")[0].innerText;
// obj.dataD = d.querySelectorAll("div")[3].querySelectorAll("span")[1].innerText;
// obj.expE = d.querySelectorAll("div")[4].querySelectorAll("span")[0].innerText;
// obj.dataE = d.querySelectorAll("div")[4].querySelectorAll("span")[1].innerText;
// obj.expF = d.querySelectorAll("div")[5].querySelectorAll("span")[0].innerText;
// obj.dataF = d.querySelectorAll("div")[5].querySelectorAll("span")[1].innerText;
// obj.expG = d.querySelectorAll("div")[6].querySelectorAll("span")[0].innerText;
// obj.dataG = d.querySelectorAll("div")[6].querySelectorAll("span")[1].innerText;
// obj.expH = d.querySelectorAll("div")[7].querySelectorAll("span")[0].innerText;
// obj.dataH = d.querySelectorAll("div")[7].querySelectorAll("span")[1].innerText;
// obj.expI = d.querySelectorAll("div")[8] ? d.querySelectorAll("div")[8].querySelectorAll("span")[0].innerText : "";
// obj.dataI = d.querySelectorAll("div")[8] ? d.querySelectorAll("div")[8].querySelectorAll("span")[1].innerText : "";
// obj.expJ = d.querySelectorAll("div")[9] ? d.querySelectorAll("div")[9].querySelectorAll("span")[0].innerText : "";
// obj.dataJ = d.querySelectorAll("div")[9] ? a.querySelectorAll("div")[9].querySelectorAll("span")[1].innerText : "";

// arr.push(obj)


$(() => {

    $.ajax({
        type: "get",
        url: "http://127.0.0.1/code/gjmm/src/server/parsdatas.php",
        dataType: "json",
        success: function (data) {
            let manager = new Manager(data);
            manager.init();


        }
    });


    // $.ajax({
    //     type: "get",
    //     url: "http://127.0.0.1/code/gjmm/src/server/pars.php",
    //     dataType: "json",
    //     success: function (data) {

    //     }
    // });







    class Manager {
        constructor(data) {
            this.data = data;
        }
        init() {
            this.renderUI();
            this.AddClickEvent();
        }
        renderUI() {

            let html1 = this.data.map((ele, index) => {
                return `
                    <div class="wraps">
                        <a href="" id="rollUp" class="rollMenu">
                            <img src="https://www.guojimami.com/themes/mbts1/images/galleryup.png" alt="">
                        </a>
                        <a href="" id="rollDown" class="rollMenu">
                        <img src="https://www.guojimami.com/themes/mbts1/images/gallerydown.png" alt="">
                        </a>
                        <div id="rollBox">
                            <ul id="rollList">
                                <li><a><img class="zoom-tiny-image"
                                            src=""></a>
                                </li>
                                <li><a><img class="zoom-tiny-image"
                                            src=${ele.srcw}></a>
                                </li>
                                <li><a><img class="zoom-tiny-image"
                                            src=${ele.srce}></a>
                                </li>
                                <li><a><img class="zoom-tiny-image"
                                            src=${ele.srcr}></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                `
            })
            $(".goodss_js_left").html(html1);

            let html2 = this.data.map((ele, index) => {
                return `
                <div class="goodspic">
                    <div><a class="activeimg" href=""><img src="" alt=""></a>
                         <a class="activeimga" href=""><img src=${ele.srcw} alt=""></a>
                         <a class="activeimga" href=""><img src=${ele.srce} alt=""></a>
                         <a class="activeimga" href=""><img src=${ele.srcr} alt=""></a>
                    </div>            
                </div>
                <div class="pingjia">
                    <img src=${ele.srcA} alt="">
                    <img src=${ele.srcB} alt="">
                    <img src=${ele.srcC} alt="">
                    <a href="#ppjj">${ele.koubei}</a>
                    <div class="clear"></div>
                </div>
            `
            })
            $(".goodss_js_middle").html(html2);

            let html3 = this.data.map((ele, index) => {
                return `
                <div id="textinfo">
                    <div class="names">
                        <h1 class="name"></h1>
                        <div class="fbt_zx">${ele.zx}</div>
                    </div>

                    <div class="jiage">
                        <span class="shp"></span>
                        <div class="hdj_tb">${ele.hdj_tb}</div>
                        <del class="mkp mkpp">${ele.mkpp}</del>
                    </div>

                    <div class="flash item_box"><span class="t_l">${ele.t_l}</span><span id="leftTime994" class="djs">
                           ${ele.djs}
                        </span>
                        <div class="clear"></div>
                    </div>

                    <div class="manjian item_box" id="hongbao_show_btn">
                        <span class="lbox">${ele.lboxA}</span>
                        <span class="rbox">
                            <font class="bonus_box">${ele.rbox}</font>
                            <font class="bonus_box">${ele.rboxA}</font>
                            <font class="bonus_box">${ele.rboxB}</font>
                            <font class="bonus_box">${ele.rboxC}</font>
                            <font class="bonus_box">${ele.rboxD}</font>
                            <font class="bonus_box">${ele.rboxE}</font>
                            
                        </span>
                        <code>&gt;</code>
                        <div class="clear"></div>
                    </div>

                    <div class="manjian item_box" id="tax_show_btn"><span class="lbox">${ele.lboxA}</span>
                        <span class="rbox">${ele.rboxM}</span><code>&gt;</code>
                    </div>

                    <div class="manjian_list" id="tax_show_list" style="display: none;">
                        <div class="title">
                            <span>税费说明</span>
                            <span class="img"><img id="tax_close" src="https://www.guojimami.com/themes/mbts1/images/goods_icon_close.png" alt="close"></span>
                        </div>
                            <div class="tax_list_con" id="tax_list_conhb" style="height: 438px;">
                                <p><font>综合税税率：</font>9.10%</p>
                                <p><font>综合税预计：</font>¥13.01 x 1</p>
                                <p class="sm"><span>注意：</span>根据中国海关最新政策规定，本商品适用于“跨境综合税”，不同类目的商品征收税率不同，国际妈咪代征代缴，税费以提交订单时的金额为准。</p>
                                <div class="clear"></div>
                            </div>
                    </div>

                    <div class="tcxz_box">
                        <div class="swiper-wrapper">
                            <div class="tcxzss">
                                <p>￥${ele.priceA} / 件</p>
                                <span>${ele.shuA}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥${ele.priceB} / 件</p>
                                <span>${ele.shuB}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥${ele.priceC} / 件</p>
                                <span>${ele.shuC}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥${ele.priceD} / 件</p>
                                <span>${ele.shuD}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥${ele.priceE} / 件</p>
                                <span>${ele.shuE}</span>
                            </div>
                        </div>
                    </div>
                    <div class="item_box">
                        <div class="youji"><span class="tubiao">${ele.tubiao}</span><span
                                class="text">${ele.text}</span><code>&gt;</code></div>
                        <div class="clear"></div>
                    </div>
                    <div class="jw_sm">
                        <p>${ele.jw_sm}</p>
                    </div>
                </div>
            `
            })

            $(".goodss_js_right").html(html3);

            let html4 = this.data.map((ele, index) => {
                return `<div>
                <span>${ele.expA}</span>
                <span>${ele.dataA}</span>
            </div>
            <div>
                <span>${ele.expB}</span>
                <span>${ele.dataB}</span>
            </div>
            <div>
                <span>${ele.expC}</span>
                <span>${ele.dataC}</span>
            </div>
            <div>
                <span>${ele.expD}</span>
                <span>${ele.dataD}</span>
            </div>
            <div>
                <span>${ele.expE}</span>
                <span>${ele.dataE}</span>
            </div>
            <div>
                <span>${ele.expF}</span>
                <span>${ele.dataF}</span>
            </div>
            <div>
                <span>${ele.expG}</span>
                <span>${ele.dataG}</span>
            </div>
            <div>
                <span>${ele.expH}</span>
                <span>${ele.dataH}</span>
            </div>
            <div>
                <span>${ele.expI}</span>
                <span>${ele.dataI}</span>
            </div>
            <div>
                <span>${ele.expJ}</span>
                <span>${ele.dataJ}</span>
            </div>`

            })
            $(".suxing").html(html4);
        }
        AddClickEvent() {
            $("#rollList").find("li").click(function () {
                let o = $(this).index();
                console.log(o);

                $(this).addClass("selected").siblings().removeClass("selected");
                $(".goodspic a").eq(o).addClass("activeimg").removeClass("activeimga").siblings().addClass("activeimga")

            });
            $(".swiper-wrapper").find("div").click(function () {
                $(this).addClass("tcxzs").removeClass("tcxzss").siblings().addClass("tcxzss").removeClass("tcxzs");
                $(".addtopi").hide();
                $(".fittings_g").addClass("addtocart").removeClass("fittings_g")
            })

            /*点击 隐藏/显示税费说明*/
            $("#page_dialog_bj,#tax_close").click(function () {
                $("#tax_show_list").hide();
                $("#page_dialog_bj").hide();
            });
            $("#tax_show_btn").click(function (e) {
                $("#page_dialog_bj").show();
                var winHeight = $("#tax_show_list").height();
                $("#tax_list_conhb").height(winHeight - 61);
                $("#tax_show_list").show();
            });

        }

    }



    let str = decodeURI(window.location.search.slice(1));


    var data = str.split("=");
    var val = data[1];


    $.ajax({
        type: "get",
        url: "http://127.0.0.1/code/gjmm/src/server/pars.php",
        // data: "data",
        dataType: "json",
        success: function (data) {
            let item = data[val - 1]
            console.log(item);
            let oImg = document.getElementsByClassName("zoom-tiny-image")[0];
            console.log(oImg);
            oImg.src = item.srcA;
            let oImgu = document.getElementsByClassName("goodspic")[0].getElementsByTagName("img")[0];
            console.log(oImgu);
            oImgu.src = item.srcA
            $(".shp").text(item.priceA)
            $(".name").text(item.title)
        }
    });

})