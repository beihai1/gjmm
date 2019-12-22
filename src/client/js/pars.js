


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

            let oImg = document.getElementsByClassName("zoom-tiny-image")[0];

            oImg.src = item.srcA;
            let oImgu = document.getElementsByClassName("goodspic")[0].getElementsByTagName("img")[0];

            oImgu.src = item.srcA
            let oImgv = document.getElementsByClassName("max_box")[0].getElementsByClassName("imga")[0];
            oImgv.src = item.srcA
            $(".shp").text(item.priceA)
            $(".name").text(item.title)
        }
    });








    class Manager {
        constructor(data) {
            this.data = data;
        }
        init() {
            this.renderUI();
            this.AddClickEvent();
            this.mouseenter();
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
                    <div  class="min_box">
                    <a class="activeimg" href=""><img src="" alt=""></a>
                        
                         <div class="zzhao"></div>
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
                                <p>￥<span class="jq">${ele.priceA}</span> / 件</p>
                                <span>${ele.shuA}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥<span class="jq">${ele.priceB}</span> / 件</p>
                                <span>${ele.shuB}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥<span class="jq">${ele.priceC}</span> / 件</p>
                                <span>${ele.shuC}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥<span class="jq">${ele.priceD}</span> / 件</p>
                                <span>${ele.shuD}</span>
                            </div>
                            <div class="tcxzss">
                                <p>￥<span class="jq">${ele.priceE}</span> / 件</p>
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


            let html5 = this.data.map((ele, index) => {
                return `<div id="buy">
            <div class="img"><img src=${ele.srcq}
                    alt=${ele.h1}></div>
            <div class="p_n">
                <p class="prices">${ele.price}</p>
                <div class="close_btn"><img id="buy_num_close" src="https://www.guojimami.com/themes/mbts1/images/goods_icon_close.png"
                        alt="close">
                </div>
                <div class="buy_num">
                    <span class="s-p-l">
                        <img style="CURSOR: pointer; vertical-align:middle" class="jian"
                            href="javascript:void(0)"
                            src="https://www.guojimami.com/themes/mbts1/images/flow_icon_p-.png" alt="minus">
                        <input name="number" type="text" id="number" value="1" size="1" onblur="changePrice()"
                            readonly="true">
                        <img style="CURSOR: pointer; vertical-align:middle" class="jia"
                            href="javascript:void(0)"
                            src="https://www.guojimami.com/themes/mbts1/images/flow_icon_add.png" alt="plus"></span>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <a class="dinggo">立即订购</a>
        `
            })
            $("#SPEC_NUM_CONFIRM").html(html5);
        }
        AddClickEvent() {
            $("#rollList").find("li").click(function () {
                // let o = $(this).index();
                $(this).addClass("selected").siblings().removeClass("selected");
                $(".activeimg").html($(this).html());
                $(".max_box").html($(this).html())



            });
            $(".swiper-wrapper").find("div").click(function () {
                $(this).addClass("tcxzs").removeClass("tcxzss").siblings().addClass("tcxzss").removeClass("tcxzs");
                $(".addtopi").hide();
                $(".fittings_g").addClass("addtocart").removeClass("fittings_g")

                let a = this.querySelector(".jq").innerText;
                console.log(a);
                $(".shp").text(a)
                $(".prices").text(a)

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


            $(".fittings_g").click(function () {
                $(".go_buys_fixed").hide();
                $("#SPEC_NUM_CONFIRM").show();
                $("#page_dialog_bj").show();
            })


            /* 点击选择商品数量 */

            let va = $("#number").val()

            $(".jia").click(function () {
                va++
                console.log(va);
                $("#number").val(va)
            })
            $(".jian").click(function () {
                va--
                $("#number").val(va)
                if (va < 1) {
                    alert("最小为1")
                    $("#number").val(1)
                }
            })
            /* 添加到购物袋 */
            // $("#SPEC_NUM_CONFIRM .dinggo").click(function () {
            //     if (val != 0) {
            //         $("#SPEC_NUM_CONFIRM").hide();
            //         $("#page_dialog_bj").hide();
            //         $(".go_buys_fixed").show();
            //         $("#cart_info_numbers").text(val)

            /* 实现点击添加商品到购物车的功能 */
            $("#SPEC_NUM_CONFIRM .dinggo").click(function () {
                /* 检查是否已经登录 ，如果没有登录那就跳转到登录页面*/


                if (!localStorage.username) {
                    window.location.href = "http://127.0.0.1/code/gjmm/src/client/html/login.html";
                }

                /* 获取当前商品的ID */
                let good_id = val
                console.log(val);
                let title = $(".name").text();
                console.log(title);
                let priceB = $(".shp").text();
                console.log(priceB);
                let index = priceB.split("￥")
                let price = index[1];
                console.log(price);
                let num = va;
                console.log(va);
                let src = document.getElementsByClassName("zoom-tiny-image")[0].src
                console.log(src);


                $.ajax({
                    url: "http://127.0.0.1/code/gjmm/src/server/cart.php",
                    data: { type: "add", good_id: good_id, title: title, price: price, num: num, src: src },
                    dataType: "json",
                    success: function (response) {
                        if (response.status == "success") {
                            $("#cart_info_numbers").text($("#cart_info_numbers").text() * 1 + 1);
                        }
                    }
                });
            })

            /* 发请求获取购物车中商品的数量 */
            /* 检查登录状态，如果已经登录那么就请求获取购物车的数量 */
            if (localStorage.id) {
                $.ajax({
                    url: "http://127.0.0.1/code/gjmm/src/server/getTotalCount.php",
                    data: {
                        id: localStorage.id
                    },
                    dataType: "json",
                    success: function ({ total }) {
                        // console.log(total);
                        $("#cart_info_numbers").text(total);
                    }
                });
            }

            /* 打开购物车页面 */
            $(".head-shopcart").click(() => window.location.href = "http://127.0.0.1/code/gjmm/src/client/html/cart.html");




            //     }

            // })


            /*  点击关闭商品选择 */
            $("#buy_num_close").click(function () {
                $("#SPEC_NUM_CONFIRM").hide();
                $("#page_dialog_bj").hide();
                $(".go_buys_fixed").show();
            })


            /* ///////// */
        }

        mouseenter() {

            //min_box移入事件，显示遮罩
            $(".min_box").hover(function () {
                $(".zzhao").toggle();
                $(".max_box").toggle();


            });
            //遮罩的移动事件
            $(".min_box").mousemove(function (ev) {
                //遮罩的坐标等于clientX减去遮罩宽度/高度的一半，这样鼠标就正好在正中间
                var x = ev.pageX - $(".activeimg").get(0).offsetLeft - $(".zzhao").width() / 2 - 490;
                var y = ev.pageY - $(".activeimg").get(0).offsetTop - $(".zzhao").height() / 2 - 280;
                console.log(x, y);

                //遮罩可移动的最大距离，盒子的宽度/高度-遮罩的宽度/高度
                var maxX = $(".min_box").width() - $(".zzhao").width();
                var maxY = $(".min_box").height() - $(".zzhao").height();
                //设置最小移动范围
                if (x < 0) {
                    x = 0
                }
                if (y < 0) {
                    y = 0
                }
                //设置最大移动范围
                if (x > maxX) {
                    x = maxX
                }
                if (y > maxY) {
                    y = maxY
                }
                //设置遮罩的位置
                $(".zzhao").css({
                    top: y,
                    left: x
                });
                //设置max_img的移动
                var bilix = ($(".imga").width() - $(".max_box").width()) / maxX;
                var biliy = ($(".imga").height() - $(".max_box").height()) / maxY;
                $(".imga").css({
                    top: -y * biliy,
                    left: -x * bilix
                });

            });
        }

    }





})