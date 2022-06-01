<?php
include('conn.php');

$id = mysqli_real_escape_string($pdo, trim($_REQUEST['id_d']));

$sql = "DELETE FROM test WHERE id='$id'";

$res = mysqli_query($pdo,$sql);

$dados = array(
    "gg" => "Sucesso"
)
?>