$(() => {

    $("#loginBtn").click(function () {

        var username = $("#username-ID").val();
        var password = $("#password-ID").val();

        console.log(username, password);

        $.ajax({
            type: "post",
            url: "http://127.0.0.1/code/gjmm/src/server/denglu.php",
            data: { username, password },
            dataType: "json",
            success: function (response) {
                // console.log(response);

                if (response.status == "success") {
                    /* 存储登录数据到本地 */
                    localStorage.username = username;
                    localStorage.id = response.data.userId;
                    window.location.href = "http://127.0.0.1/code/gjmm/src/client/html/shouye.html";
                } else {
                    alert(response.data.msg);
                }
            }
        });
    })

    $(".tab-login-item").click(function () {


        $(this).addClass("active").siblings().removeClass("active");
        $(".loginView").eq($(this).index()).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    });

})

