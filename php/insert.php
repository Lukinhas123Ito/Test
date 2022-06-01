<?php
include('conn.php');

$nm = mysqli_real_escape_string($pdo, trim($_REQUEST['nm']));

$sql = "INSERT INTO test(nm) VALUES ('$nm')";

if($pdo -> query($sql)){

    $dados = array(
        "nm" => $nm
        );
    
    echo json_encode($dados);

}


?>