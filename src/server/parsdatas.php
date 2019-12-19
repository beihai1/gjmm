<?php
# 设置响应头信息，告诉客户端返回的是JSON数据
header("Content-Type: text/json; charset=UTF-8");

$json = file_get_contents("parsdata.json");

echo $json;
?>