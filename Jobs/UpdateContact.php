<?php
include('../Database/TableClass.php');
$DB = new TableClass('contacts');
$result = $DB->update($_GET['id'], $_POST);
echo json_encode($result);
