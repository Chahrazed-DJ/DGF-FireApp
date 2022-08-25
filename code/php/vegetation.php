<?php
//setting header to json
header('Content-Type: application/json');

//databse

try{
    $dsn = "pgsql:host=localhost;dbname=db_pfe;port=5432";
$opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
];

$pdo = new PDO($dsn, 'postgres', '', $opt);

/*if ($pdo) {
    echo "Connected to  database successfully!";
    echo "<br>";
}*/
$v = !empty( $_GET['v'] ) ? $_GET['v'] : false;
$query = sprintf("select extract(year from to_date(date_exlos, 'MM/DD/YYYY')) AS annee,  sum(sup_foret) AS foret,sum(sup_maquis) AS maquis,sum(sup_brouss) AS brouss, sum(sup_autre) AS autre 
from feux, \"section foret\", commune 
WHERE feux.id_section=\"section foret\".id_section 
AND \"section foret\".id_com=commune.id_com  
AND nom_com = '$v'
GROUP BY extract(year from to_date(date_exlos, 'MM/DD/YYYY'))");
$result = $pdo->query($query);
$data = array();
foreach($result as $row){
    $data[] = $row;
}
$price = array_column($data, 'annee');

array_multisort($price, SORT_ASC, $data);
print json_encode($data);
}catch (PDOException $e) {
	die($e->getMessage());
} finally {
	if ($pdo) {
		$pdo = null;
	}
}


?>