<?php 
include 'connect.php';

if (isset($_POST['country_id'])) {
    $var =$_POST['country_id'];
	$query = "SELECT * FROM commune where id_daira='$var'";
	$result = $pdo->query($query);
	if ($result->rowCount()> 0 ) {
			echo '<option value="">Commune</option>';
		 while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
		 	echo '<option value='.$row['id_com'].'>'.$row['nom_com'].'</option>';
		 }
	}else{

		echo '<option>Vide</option>';
	}

}elseif (isset($_POST['state_id'])) {
	 
   $var= $_POST['state_id'];
	$query = "SELECT * FROM \"section foret\" where id_com='$var'";
	$result = $pdo->query($query);
	if ($result->rowCount()> 0 ) {
			echo '<option value="">Section</option>';
		 while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
		 	echo '<option value='.$row['id_section'].'>'.$row['nom_section'].'</option>';
		 }
	}else{

		echo '<option>Vide</option>';
	}

}


?>