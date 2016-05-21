<?php
include('../Database/TableClass.php');

$DB = new TableClass('contacts');
$result = $DB->delete($_POST['id']);
echo $result;