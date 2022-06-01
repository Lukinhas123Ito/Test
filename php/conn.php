<?php

define('HOST', 'sql209.epizy.com');
define('user', 'epiz_31850525');
define('senha', 'Z3iTmP6bp6RFG8');
define('db', 'epiz_31850525_Teste');

$pdo = mysqli_connect(HOST , user, senha , db) or die ("Não foi encontrado o Paranawe");

?>