<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <title>FireApp</title>
        <link rel="stylesheet" href="lib/leaflet/leaflet.css" />
        <script src="lib/leaflet/leaflet.js"></script>

        <link rel="stylesheet" href="css/index1.css">
        <link href='dist/leaflet.fullscreen.css' rel='stylesheet' />
        <script src='dist/Leaflet.fullscreen.min.js'></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="lib/leaflet/plugins/easy-button.css">
        <link rel="stylesheet" href="lib/leaflet/plugins/L.Control.Sidebar.css">
        <link rel="stylesheet" href="lib/leaflet/plugins/L.Control.Zoomslider.css">
        <link href="lib/vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
        <link href="lib/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
        <link href="lib/vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">

       
        <link rel="stylesheet" href="css/statstyles.css">
    </head>
    <body>
        <nav>
            <ul>
                <li>
                    <a href="php/MJR.php">Ajout de feux</a>
                </li>
                <li>
                    <a href="php/deconnexion.php">Déconnecter</a>
                </li>
            </ul>
        </nav>
        <main>
            <section id="mymap">
                <div class="store-list" id="side-bar">
                    <?php
                    include 'php/connect.php';
                    $query = "SELECT * FROM daira order by nom_daira";
                    $result = $pdo->query($query);
                    ?>
                    <div class="card card-3">
                        <p>Chercher le lieu dit</p>
                        <br>
                        <div class="input-group lieudit">
                            <select name="country" id="country" class="form-control" onchange="FetchState(this.value);getDaira(this.value);"  required>
                                <option value="">Daira</option>
                                <?php
                                    if ($result->rowCount()> 0 ) {
                                    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                                        echo '<option value='.$row['id_daira'].'>'.$row['nom_daira'].'</option>';
                                    }
                                    }
                                ?> 
                            </select>
                        </div>
                        <div class="input-group lieudit">
                            <select name="state" id="state" class="form-control" onchange="FetchCity(this.value); getCommune(this.value);"required>
                                <option>commune</option>
                            </select>
                        </div>
                        <div class="input-group lieudit">
                            <select name="city" id="city" class="form-control" onchange="getSection(this.value);">
                                <option>section</option>
                            </select>
                        </div>
                    </div>
                    <div class="card card-3">
                        <p>Visualiser les feux</p>
                        <br>
                        <div class="input-group">
                            <label class="label">De</label>
                                <i class="zmdi zmdi-calendar-alt input-group-symbol"></i>
                                <input class="input--style-1 js-single-datepicker" id="date1" type="text" name="pickup"
                                placeholder="mm/dd/yyyy" data-drop="1">
                            <div class="dropdown-datepicker" id="dropdown-datepicker1">
                            </div>
                        </div>
                        <div class="input-group">
                            <label class="label">à</label>
                            <i class="zmdi zmdi-calendar-alt input-group-symbol"></i>
                            <input class="input--style-1 js-single-datepicker" type="text" id="date2" name="dropoff"
                            placeholder="mm/dd/yyyy" data-drop="2">
                            <div class="dropdown-datepicker" id="dropdown-datepicker2"></div>
                        </div>
                        <button class="btn-submit m-t-15" type="submit" onclick="getDate(); ">Afficher</button>
                        <button class="btn-submit m-t-15" type="reset" id="id" >Masquer</button>
                    </div>
                </div>
                <div id="map"></div>
            </section>

            <section id="stat" >
                <div class="content">
                    <div id="chart-container">
                        <canvas id="mycanvass"></canvas>
                    </div>
                </div>

                <div class="content">
                    <div id="degat-container">
                        <canvas id="mydegatcanvas"></canvas>
                    </div>
                </div>

                <div class="vegetationBox">
                    <div id="vegetation-container">
                        <canvas id="myvegetationcanvas"></canvas>
                    </div>

                    <div class="bttonBox">
                        <ul>
                            <li><button id="foret" type="button" class="btn foret statistique">foret</button></li>
                            <li><button id="maquis" class="btn maquis statistique">maquis</button></li>
                            <li><button id="brouss" class="btn brouss statistique">brouss</button></li>
                            <li><button id="autre" class="btn autre statistique">autre</button></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <script src="js/liste_deroulante.js"></script>
        <script src="lib/leaflet/jquery-3.5.1.js"></script>
        <script src="lib/leaflet/jquery-3.5.1.min.js"></script>
        <script src="lib/leaflet/plugins/easy-button.js"></script>
        <script src="lib/leaflet/plugins/L.Control.Sidebar.js"></script>
        <script src="lib/leaflet/plugins/L.Control.Zoomslider.js"></script>
        <script src="lib/vendor/jquery/jquery.min.js"></script>
        <script src="lib/vendor/select2/select2.min.js"></script>
        <script src="lib/vendor/jquery-validate/jquery.validate.min.js"></script>

        <script src="lib/vendor/datepicker/moment.min.js"></script>
        <script src="lib/vendor/datepicker/daterangepicker.js"></script>

        <!--STAT-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.3.2/chart.min.js"></script>
        <script src="js/app.js"></script>

        <script src="js/index1.js"></script>
    </body>
</html>