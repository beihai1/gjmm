<?php

# (1) 先链接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "gjmm");

$usernane = $_REQUEST["username"];
$password = $_REQUEST["password"];


# (2) 去数据库中查询看指定的用户名是否存在
$sql1 = "SELECT * FROM user WHERE username='$username'";

$result = mysqli_query($db,$sql1);

$data = array("status"=>"","data"=>array("msg"=>""));

f (mysqli_num_rows($result1) == 0) {
    # (2-1) 如果不存在，那么就返回数据(登录失败，用户名不存在)
    $data["status"] = "error";
    $data["data"]["msg"] = "登录失败，用户名不存在";
}else{
  # (2-2) 如果用户名存在，接着检查密码

  # (2-2) 如果用户名存在，接着检查密码
    $sql2 = "SELECT * FROM user WHERE username='$username'";
    $res = mysqli_query($db, $sql2);
    $res = mysqli_fetch_all($res, MYSQLI_ASSOC);
    $username = $res[0]["username"];
    $id = $res[0]["id"];
    $res = $res[0]["password"];
    if ($password !=  $res) {
        # (2-2-1) 密码不正确，那么就返回数据(登录失败，密码错误)
        $data["status"] = "error";
        $data["data"]["msg"] = "登录失败，密码不正确！！！";
    } else {
        # (2-2-2) 密码正确，那么就返回数据(登录成功)
    $userId = $res["id"];
    $data["status"] = "success";
    $data["data"]["msg"] = "恭喜你，登录成功";
    $data["data"]["userId"] = $userId;
    $data["data"]["password"] = $password;
    $data["data"]["username"] = $username;
    }
}

# 最后，需要把结果以JSON数据的方式返回
echo json_encode($data,true);

?>