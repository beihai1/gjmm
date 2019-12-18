<?php
$db = mysqli_connect("127.0.0.1", "root", "", "gjmm");
# 查询数据的总数 120
$sql = "SELECT * FROM goods";
$result = mysqli_query($db,$sql);
// $total = mysqli_num_rows($result);
$count = ceil(mysqli_num_rows($result) / 24);

# 计算页码的数据
// 122 / 30 4.123 
# Math.round()
# Math.floor()
# Math.ceil()

// $count = ceil($total  / 24);

# 返回
// $data  = array("count"=>$count);  
// echo json_encode($data,true);
echo '{"count":'.$count."}";
?>