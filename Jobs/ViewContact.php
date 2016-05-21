<?php
include('../Database/TableClass.php');
$DB = new TableClass('contacts');
$result = $DB->all();
echo json_encode($result);
