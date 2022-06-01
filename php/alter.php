<?php
include('conn.php');

$id = mysqli_real_escape_string($pdo, trim($_REQUEST['id_d']));
$nm = mysqli_real_escape_string($pdo, trim($_REQUEST['nm_d']));


$sql = "UPDATE test SET nm = '$nm' WHERE id = '$id'";

if($pdo -> query($sql)){

    $dados = array(
        "nm" => $nm,
        "id" => $id
        );
    
    echo json_encode($dados);

}
?>