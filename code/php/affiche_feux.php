<?php
     include 'connect.php';
     $D1 = $_POST['D1'];
     $D1= strtotime($D1);
     $D1=date('Y-m-d',$D1);
     
     $D2 = $_POST['D2'];
     $D2= strtotime($D2);
     $D2=date('Y-m-d',$D2);
     $result=$pdo->query("SELECT nom_com,feux.*,ST_AsGeoJson(ST_Transform(ST_SetSRID(feux.geom, 32631),4326) )AS geojson from feux,\"section foret\",commune 
          WHERE feux.id_section=\"section foret\".id_section and \"section foret\".id_com=commune.id_com and TO_DATE(date_exlos,'MM/DD/YYYY')>='$D1' 
          and TO_DATE(date_exlos,'MM/DD/YYYY')<='$D2';");
     $features=[];
     foreach($result as $row)
     {
       unset($row['geom']);
       unset($row['gid']);
       unset($row['id_feu']);
       unset($row['id_section']);
       $geometry=$row['geojson']=json_decode($row['geojson']);
       unset($row['geojson']);
       $feature=["type"=>"Feature","properties"=>$row,"geometry"=>$geometry];
       array_push($features,$feature);
     }
    $featureCollection=["type"=>"FeatureCollection","features"=>$features];
    echo json_encode($featureCollection);
    
?>
