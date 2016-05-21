<?php
include('../Database/TableClass.php');

$DB = new TableClass('contacts');
$result = $DB->find($_POST['id']);
echo json_encode($result);
