<?php

include ("conn.php");

$sel= mysqli_real_escape_string($pdo, trim($_REQUEST['seach']));


$sql="SELECT * FROM test WHERE nm like '%$sel%'";

$res = mysqli_query($pdo,$sql);


while($row = mysqli_fetch_assoc($res)){
    
    echo "
    
    <tr name="."line".$row['id']." id="."line".$row['id'].">
        <td value=".$row['id']." "."name="."id".$row['id']." id="."id".$row['id'].">".$row['id']."</td>
        <td value=".$row['nm']." "."name="."nm".$row['id']." id="."nm".$row['id'].">".$row['nm']."</td>
        
    </tr>"
    ;
}

?>