<?php
     include 'connect.php';
     $table = $_POST['tab'];
     $result=$pdo->query("SELECT *, ST_AsGeoJson(ST_Transform(ST_SetSRID(geom, 32631),4326) )AS geojson FROM $table");
     $features=[];
     $liste_id=['geom','gid','id','id_wil','id_com','id_zone','id_daira','id_section','id_oued','id_piste','id_tpf','id_pc','id_brigade','id_vegie'];
     foreach($result as $row)
     {
      for($i=0;$i<14;$i++)
       unset($row[$liste_id[$i]]);
       $geometry=$row['geojson']=json_decode($row['geojson']);
       unset($row['geojson']);
       $feature=["type"=>"Feature","properties"=>$row,"geometry"=>$geometry];
       array_push($features,$feature);
     }
    $featureCollection=["type"=>"FeatureCollection","features"=>$features];
    echo json_encode($featureCollection);
    
?>