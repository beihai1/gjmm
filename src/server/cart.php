<?php
$db = mysqli_connect("127.0.0.1", "root", "", "gjmm");
$db->query("set names 'utf8'");
$type = $_REQUEST["type"];

$good_id = $_REQUEST["good_id"];
$title = $_REQUEST["title"];
$price = $_REQUEST["price"];
$num = $_REQUEST["num"];
$src = $_REQUEST["src"];

if($type == "add")
{
  $good_id = $_REQUEST["good_id"];

  /* 检查之前是否存在对应的数据，如果存在那么就修改num值，如果不存在那么就插入数据 */
  $sql = "SELECT * FROM cart WHERE good_id = '$good_id'"   ;
  $result = mysqli_query($db,$sql);
  if(mysqli_num_rows($result) == 0)
  {
    /* 往数据库表中新增一条数据 */
    $sql = "INSERT INTO `cart` ( `good_id`,`title`,`price`,`src`, `num`) VALUES ('$good_id', '$title','$price','$src','$num')";
  }else{
    /* 更新数据 */
    $sql = "UPDATE `cart` SET `num`= `num`+ 1 WHERE `good_id`='$good_id' ";
  }
  $res = mysqli_query($db,$sql);
  echo json_encode(array("status"=>"success"));
}
?>





