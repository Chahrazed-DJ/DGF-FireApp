<?php
     include 'connect.php';
     $message="";
     $bool=false;
     function test_input($data) {
          $data = trim($data);
          $data = stripslashes($data);
          $data = htmlspecialchars($data);
          return $data;
        }
if(isset($_POST["submit"])){
      
     $date_exl=$_POST['de'];
     $date_exl= strtotime($date_exl);
     $date_exl=date('m/d/Y',$date_exl);

     $date_ext=$_POST['t'];
     $date_ext= strtotime($date_ext);
     $date_ext=date('m/d/Y',$date_ext);
     
     $sup_foret=$_POST['f'];
     $sup_maquis=$_POST['sup'];
     $sup_brouss=$_POST['brou'];
     $sup_autre=$_POST['autre'];
     $degat=$_POST['degat'];
     $signal=$_POST['signal'];
     $section=$_POST['sec'];
     $k=$_POST['degre'];
     $l=$_POST['minute'];
     $m=$_POST['seconde'];
     $lan=round($k+($l/60)+($m/3600),5);
     $n=$_POST['degre2'];
     $o=$_POST['minute2'];
     $p=$_POST['seconde2'];
     $lat= round($n+($o/60)+($p/3600),5);
     
     $p=0;
     $res=$pdo->query("SELECT date_exlos,date_extin,round(ST_X (ST_Transform (geom, 4326))::numeric,5) AS long,
     round(ST_Y (ST_Transform (geom, 4326))::numeric,5) AS lat from feux;");
     foreach($res as $row)
     { 
          
         if(($row['date_exlos']==$date_exl)&&($row['date_extin']==$date_ext)&&($row['long']==$lan)&&($row['lat']==$lat))
         {
              $bool=true;
         }
     }
     if($bool==false)
     { 
          $message="Insertion avec succès";
          $result=$pdo->query("INSERT INTO feux(date_exlos,date_extin,sup_foret,sup_maquis,sup_brouss,sup_autre,degat,signal,id_section,geom) VALUES('$date_exl','$date_ext',$sup_foret,$sup_maquis,$sup_brouss,$sup_autre,$degat,'$signal','$section',st_transform(st_geomfromtext('POINT($lan $lat)',4326),32631))");
     }
     else
     {
          $message="Erreur:feu déjà saisi";
     }
    
}
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/MJR.css">
    <title>Document</title>
</head>
<body>
    <nav>
    <ul>
        <li>
            <a href="../index1.php">Map</a>
        </li>
        <li>
            <a href="deconnexion.php">Déconnecter</a>
        </li>
    </ul>
    </nav>
    <form action="" method="POST">
        <div class="input-group">
        <h2>Ajout de feux</h2>
        <?php if($bool==false){ ?>
					<div id="message2"><?php  echo $message; ?></div>
					<?php }
               else{?>
                    <div id="message"><?php   echo $message; ?></div>
                    <?php  }?>
        <fieldset>
                <legend>Date</legend>
                <div class="divv">
                <label for="d">Date_exlos </label>
                <input type="date" name="de" id="d" required>
                </div>
                <div class="divv">
                <label for="t">Date_extin </label>
                <input type="date" name="t" id="t" required>
                </div>
        </fieldset>
        <br>
        <fieldset >
              <legend>Superficie brulée </legend>
              <div class="divv">
                <label for="f">Foret </label>
                <input type="number" name="f" id="f" required>
               </div>
               <div class="divv">
                <label for="sup">Maquis </label>
                <input type="number" name="sup" id="sup" required>
               </div>
               <div class="divv">
                <label for="brou">Brouss </label> 
                <input type="number" name="brou" id="brou" required>
               </div>
               <div class="divv">
                <label for="autre">Autres </label>
                <input type="number" name="autre" id="autre" required>
               </div>
        </fieldset>
        <br>
        <fieldset id="plus">
                 <legend>Autres </legend>

                 <div class="divv">
                <label for="degat">Degat </label>
                <input type="number" name="degat" id="degat" required>
                </div>
                <div class="divv">
                <label for="signal">Signal </label>
                <input type="text" name="signal" id="signal" required>
                </div>
                <div class="divv">
                <label for="sec"> Section_forestière</label>
                <input type="text" name="sec" id="sec" required>
                </div>
        </fieldset>
        <br>
        <fieldset>
                <legend>Cordonnées géographiques</legend>
                <fieldset>
                        <legend>Longitude</legend>
                        <div class="divv">
                        <label for="num1">Degré ° </label>
                        <input type="number" name="degre" step="0.1" id="num1" required>
                        </div>
                        <div class="divv">
                        <label for="num2">Minutes </label>
                        <input type="number" step="0.1"  name="minute" id="num2" required>
                        </div>
                        <div class="divv">
                        <label for="num3">Secondes </label>
                        <input type="number" name="seconde"step="0.1" id="num3" required>
                        </div>
                        </fieldset>
                        
                        <fieldset>
                        <legend>Latitude</legend>
                        <div class="divv">
                        <label for="aa">Degré ° </label>
                        <input type="number" name="degre2" step="0.1" id="aa" required>
                        </div>
                        <div class="divv">
                        <label for="bb">Minutes </label>
                        <input type="number" name="minute2"step="0.1" id="bb" required>
                        </div>
                        <div class="divv">
                        <label for="cc">Secondes </label>
                        <input type="number" name="seconde2" step="0.1" id="cc" required>
                        </div>
                </fieldset>
        </fieldset>
        <br>
        <input type="submit" name="submit" id="submit"  value="Valider">
    </div>
    </form>
</body>
</html>