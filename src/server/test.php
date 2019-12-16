<?php
// mysqli_query($conn , "set names utf8");
# INSERT INTO `goods` (`good_id`, `src`, `title`, `price`, `disCount`, `shopName`) VALUES ('1', 'e32r', '32425', '3434', '3242', '2342452');

# 01 链接数据库
$db = mysqli_connect("127.0.0.1","root","","gjmm");

# 02 插入数据
# 加载JSON数据
$jsonData = file_get_contents("goods.json");
# 把JSON数据转换PHP数组
$data = json_decode($jsonData,true);
// print_r(count($data));
# 通过for循环遍历数组
for($i = 0;$i<count($data);$i++)
{
 print_r($data[$i]);
 $id = $data[$i]["goods_id"];
  $src = $data[$i]["src"];
  $srcA = $data[$i]["srcA"];
  $title = $data[$i]["title"];
  $title1 = $data[$i]["title1"];
  $title2 = $data[$i]["title2"];
  $title3 = $data[$i]["title3"];
  $price1 = $data[$i]["price1"];
  $price2 = $data[$i]["price2"];
  $price3 = $data[$i]["price3"];
  $sql = "INSERT INTO `goods` (`goods_id`,`src`, `srcA`, `title`, `title1`, `title2`, `title3` , `price1` , `price2` ,`price3`) 
        VALUES ( '$src', `$srcA`,'$title', $title1, '$title2', '$title3', '$price1', '$price2', '$price3')";
  mysqli_query($db, $sql);
}

?>