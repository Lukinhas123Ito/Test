<?php

include ("conn.php");

$sel= mysqli_real_escape_string($pdo, trim($_REQUEST['seach']));


$sql="SELECT * FROM test WHERE nm like '%$sel%'";

$res = mysqli_query($pdo,$sql);


while($row = mysqli_fetch_assoc($res)){
    
    echo "
    
    <tr id="."id".$row['id'].">
        <td>".$row['id']."</td>
        <td data-target="."nm".">".$row['nm']."</td>
        <td><button data-role="."update"." data-id="."id".$row['id'].">Editar</button></td>
        <td><button data-role="."delete"." data-id="."id".$row['id'].">Deletar</button></td>
    </tr>"
    ;
}

?>