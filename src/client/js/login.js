$(() => {

    $(".tab-login-item").click(function () {

        $(this).addClass("active").siblings().removeClass("active");
        $(".loginView").eq($(this).index()).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    });

    $("#loginBtn").click(function () {

        var username = $("#username-ID").val();
        var password = $("#password-ID").val();

        $.ajax({
            type: "post",
            url: "http://127.0.0.1/code/gjmm/src/server/login.php",
            data: { username, password },
            dataType: "json",
            success: function (response) {

                if (response.status == "success") {
                    window.location.href = "http://127.0.0.1/code/gjmm/src/client/html/shouye.html";
                } else {
                    alert(response.data.msg)
                }
            }
        });
    })
})

