$(() => {


    $.ajax({
        type: "get",
        url: "http://127.0.0.1/code/gjmm/src/server/getTotalCount.php",
        dataType: "json",
        success: (data) => {

            let html = data.map((ele) => {
                return `   
                    <ul class="clear_fix">
                    <li><input type="checkbox" name="select_goods" onclick="select_cart_goods(3045427)"></li>
                
                <li><img src=${ele.src} class="imgss"></li>
                <li class="title">${ele.title}</li>
                <li class="price">${ele.price}</li>
                <li class="num">
                <span class="jian"><img src="https://www.guojimami.com/themes/mbts1/images/flow_icon_p-h.png" ></span>
                <span class= "numm">${ele.num}</span> 
                <span class="jia"><img src="https://www.guojimami.com/themes/mbts1/images/flow_icon_add.png"></span>
                </li>
                <li class="xiaoji">${ele.price * ele.num}</li>
                <li class="shanchu">删除</li>
                    </ul>
            	
                    `
            })
            $(".cart_no_goods").html(html);
            $("ul").on("click", ".jian,.jia", function () {
                if (this.className == "jian") {
                    count = $(this).next().text() * 1 - 1;
                    $(this).next().text(count);
                    console.log($(this).parent().prev().text() * 1 * count);
                    $(this).parent().next().text($(this).parent().prev().text() * 1 * count);

                } else {
                    count = $(this).prev().text() * 1 + 1;
                    $(this).prev().text(count);
                    $(this).parent().next().text($(this).parent().prev().text() * 1 * count);
                }
                let v = $(".cart_no_goods ul");

                let arr = [];
                for (let i = 0; i < v.length; i++) {
                    let obj = {}
                    obj = v[i].querySelector(".xiaoji").innerText * 1;
                    arr.push(obj)
                }
                var sum = arr.reduce(function (prev, cur, index, array) {
                    return prev + cur
                })
                $("#cart_amount_desc").text("￥" + sum)


            })
            $("ul").on("click", ".shanchu", function () {
                $(this).parent().hide()

            })




        }

    })


})