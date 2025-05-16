<?php
$host = 'local_host'
$user = 'username'
$pass = ''
$db = 'test'
$conn = mysql_connect($host,$user,$pass,$dp)
if(!$conn)
{
    die('conntion error'.mysql_error());
}
echo'connection maintain';
?>