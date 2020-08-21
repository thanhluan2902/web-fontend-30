<?php 
	session_start();
	foreach ($_SESSION['info'] as $key => $value) {
		if ($_GET['id'] == $key) {
			unset($_SESSION['info'][$key]);
			// echo "yes";
		}	
	}

	header('Location:list.php');
 ?>