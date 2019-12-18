<?php
$db = mysqli_connect("127.0.0.1","root","","gjmm");
$db->query("set names 'utf8'");
// mysql_query("set names 'utf8'",$db); 
// mysql_select_db("god");  //选择数据库  
// mysql_query("set names utf8"); //设定字符集 
$jsonData = file_get_contents("data.json");

$data = json_decode($jsonData,true);

for($i = 0;$i<count($data);$i++)
{
    //  print_r($data[$i]);
      $goods_id = $data[$i]["goods_id"];
      $src = $data[$i]["src"];
      $srcA = $data[$i]["srcA"];
      $title = $data[$i]["title"];
      $titleA = $data[$i]["titleA"];
      $titleB = $data[$i]["titleB"];
      $titleC = $data[$i]["titleC"];
      $priceA = $data[$i]["priceA"];
      $priceB = $data[$i]["priceB"];
      $priceC = $data[$i]["priceC"];
      $sql = "INSERT INTO `goods` (`goods_id`, `src`, `srcA`, `title`, `titleA`, `titleB`, `titleC`, `priceA`, `priceB`, `priceC`) 
            VALUES ($goods_id, '$src', '$srcA', '$title', '$titleA', '$titleB', '$titleC', '$priceA', '$priceB', '$priceC')";
      mysqli_query($db, $sql);
    }
?>