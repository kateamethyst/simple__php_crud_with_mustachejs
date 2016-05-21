<?php
include('../Database/TableClass.php');

$DB = new TableClass('contacts');
$result = $DB->create($_POST);
echo $result;