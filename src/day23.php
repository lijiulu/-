<?php
//处理中文乱码
header("content-type:text/html;charset=utf-8");

$username = $_POST['username'];
$password = $_POST['password'];

//链接数据库
$link = mysqli_connect('localhost','root','root','music');
//执行查询数据库
$cha = mysqli_query($link,"SELECT*FROM`user`WHERE`username`='$username'AND`possWord`='$password'");
//解析查询语句
$ucl = mysqli_fetch_assoc($cha);

//判断
if($ucl){
    $json = json_encode($username);
    setcookie('name',$json);
    echo 1;   
}else{
    echo 0;  
}

?>