<?php

$db = mysqli_connect("127.0.0.1", "root" ,"" , "gjmm");

$db->query("set names 'utf8'");

$spl = "SELECT * FROM goods";

$result = mysqli_query($db,$spl);

$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data,true);

?>
