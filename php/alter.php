<?php
include('conn.php');

$nm = mysqli_real_escape_string($pdo, trim($_REQUEST['nm']));
$id = filter_input($pdo, trim($_REQUEST['id']));

$sql = "UPDATE test SET nm = '$nm' WHERE id = '$id'";

if($pdo -> query($sql)){

    $dados = array(
        "nm" => $nm,
        "id" => $id
        );
    
    echo json_encode($dados);

}
?>