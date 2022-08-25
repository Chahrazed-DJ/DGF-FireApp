<?php
     include 'connect.php';
     $result=$pdo->query("SELECT commune.nom_com,count(id_feu) as nbr_feu ,ST_AsGeoJson(ST_Transform(ST_SetSRID(commune.geom, 32631),4326) )AS geojson from commune,feux,\"section foret\" WHERE commune.id_com=\"section foret\".id_com and \"section foret\".id_section=feux.id_section GROUP BY commune.nom_com,commune.geom;");
     $features=[];
     foreach($result as $row)
     {
       unset($row['geom']);
       unset($row['gid']);
       $geometry=$row['geojson']=json_decode($row['geojson']);
       unset($row['geojson']);
       $feature=["type"=>"Feature","properties"=>$row,"geometry"=>$geometry];
       array_push($features,$feature);
     }
    $featureCollection=["type"=>"FeatureCollection","features"=>$features];
    echo json_encode($featureCollection);
    
?>
