
    <?php
      include 'connect.php';
      $type = $_POST['typeofgeom'];
      $type=strtoupper($type);
      $result=$pdo->query("SELECT *, ST_AsGeoJson(ST_Transform(ST_SetSRID(geom, 32631),4326) )AS geojson FROM commune WHERE id_com='$type';"); 
    
      $features=[];
     foreach($result as $row)
     {
       unset($row['geom']);
       unset($row['gid']);
       unset($row['id_com']);
       unset($row['id_daira']);
       $geometry=$row['geojson']=json_decode($row['geojson']);
       unset($row['geojson']);
       $feature=["type"=>"Feature","properties"=>$row,"geometry"=>$geometry];
       array_push($features,$feature);
     }
    $featureCollection=["type"=>"FeatureCollection","features"=>$features];
    echo json_encode($featureCollection);
    
    
    ?>
