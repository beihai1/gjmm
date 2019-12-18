/* 功能：表单验证 + 图形验证码 + 手机短信验证码 + 注册 */
$(() => {

    /* 表单验证：监听对应的输入框失去焦点事件，当失去焦点的时候检查是否满足规则，如果不满足规则那么就提示！！！ */
    $("#usernameID").blur(function () {
        let reg = /^[a-zA-Z]{2,6}$/;
        if (!reg.test($.trim($(this).val()))) {
            $(this).parents(".username").addClass("form-group-error");
            $(this).next().text("用户名不规范！");
        } else {
            $(this).parents(".username").removeClass("form-group-error");
            $(this).next().text("");
        }
    })

    $("#phoneID").blur(function () {
        let reg = /^1[3-9]\d{9}$/;
        if (!reg.test($.trim($(this).val()))) {
            $(this).parents(".phone").addClass("form-group-error");
            $(this).next().text("手机号码不规范！");
        } else {
            console.log("++");

            $(this).parents(".phone").removeClass("form-group-error");
            $(this).next().text("");
        }
    })

    $("#passwordA").blur(function () {
        let reg = /^[0-9a-zA-Z]{3,6}$/;
        if (!reg.test($.trim($(this).val()))) {
            $(this).parents(".passwordA").addClass("form-group-error");
            $(this).next().text("设置的密码不符合规范！");
        } else {
            console.log("++");

            $(this).parents(".passwordA").removeClass("form-group-error");
            $(this).next().text("");
        }
    })

    $("#passwordB").blur(function () {
        if ($.trim($(this).val()) != $.trim($("#passwordA").val())) {
            $(this).parents(".passwordB").addClass("form-group-error");
            $(this).next().text("两次输入的密码不一致！！！");
        } else {
            $(this).parents(".passwordB").removeClass("form-group-error");
            $(this).next().text("");
        }
    })

    /* 实现图形验证码 */
    let captcha1 = new Captcha({
        dotNum: 10,
        lineNum: 20,
        fontSize: 40,
        length: 5,
        // content: "我你她它塔谁睡水税"
    });
    let code;
    captcha1.draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码1');
        code = r.toUpperCase();
    });


    $("#imageCode").blur(function () {
        if ($.trim($(this).val()).toUpperCase() != code) {
            $(this).parents(".image-code").addClass("form-group-error");
            $(this).next().text("请输入正确的图形验证码");
        } else {
            $(this).parents(".image-code").removeClass("form-group-error");
            $(this).next().text("");
        }
    })

    /* 注册的思路： */
    /* (1) 先获取按钮，添加点击事件 */
    /* (2) 检查用户名等所有信息是否都已经正确填写 */
    /* (3) 检查是否勾选同意用户协议 */
    /* (4) 如果2+3都满足，那么就应该把需要的数据作为参数提交给服务器。 */
    $("#registerBtn").click(function () {
        $("#usernameID,#phoneID,#imageCode,#passwordA,#passwordB").trigger("blur");
        if ($(".form-group-error").length != 0) {
            alert("请输入正确的注册信息");
        }

        if ($("#protocol").is(":checked") == false) {
            alert("请阅读并同意用户协议！！！");
        }

        $.ajax({
            type: "post",
            url: "http://127.0.0.1/code/gjmm/src/server/register.php",
            data: `username=${$("#usernameID").val()}&password=${$("#passwordA").val()}&phone=${$("#phoneID").val()}`,
            dataType: "json",
            success: function (data) {
                console.log(data);
                /* {status:"ok",data:{msg:"注册成功"}} */
                if (data.status == "success") {
                    window.location.href = "http://127.0.0.1/code/gjmm/src/client/html/shouye.html";
                } else {
                    alert(data.data.msg)
                }
            }
        });
    })

})