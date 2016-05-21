<?php
include('../Database/TableClass.php');
$DB = new TableClass('contacts');
$result = $DB->update($_POST['id'], $_POST);
echo json_encode($result);
