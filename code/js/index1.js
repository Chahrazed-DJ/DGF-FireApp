var  p, 
        CoucheSatellitaire = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=a0zXyeUAtTeSTfXjkKxt'),
        streets   = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=a0zXyeUAtTeSTfXjkKxt'),
        Toner   = L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=a0zXyeUAtTeSTfXjkKxt'),
        Topo=L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=a0zXyeUAtTeSTfXjkKxt');

        function GetLayer(tableau)
        {
         p=$.ajax(
            {
                type: "POST",
                url: "php/Get_Layer.php",
                dataType: 'json',
                data:{
                    tab:tableau,
                },
                success: function(response)
                {
                },
                async:false
            });
            return p;
        }

        function GetIcon(ic){
            var icc=L.icon({
                iconUrl: ic,
                iconSize: [40, 40]
            });
            return icc;
        }
         /*******************************Wilayas**************************** */
        var wilaya_1 =L.geoJSON(GetLayer("wilaya")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#fff2cc',
                    weight: 2,
                    opacity: 4,
                    color: '#cc0000',
                    dashArray: '2',
                    fillOpacity: 0.2
                };}  ,
            onEachFeature: onEachFeature_code1,
            
        }); 
        /*******************************Wilayas**************************** */
        /*******************************Commune**************************** */
        var commune   =L.geoJSON(GetLayer("commune")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#f9e8ef',
                    weight: 1,
                    opacity: 4,
                    color: '#000000',
                    dashArray: '2',
                    fillOpacity: 0.2
                };}  ,
            onEachFeature: onEachFeature_code1, 
        }); 
        /*******************************Commune**************************** */
        /*******************************daira**************************** */
        var daira   =L.geoJSON(GetLayer("daira")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#f9e8ef',
                    weight: 1,
                    opacity: 4,
                    color: 'white',
                    dashArray: '2',
                    fillOpacity: 0.2
                };}  ,
            onEachFeature: onEachFeature_code1, 
        }); 
         /*******************************daira**************************** */
         /*******************************Zone forestiere**************************** */

        var zone_f  =L.geoJSON(GetLayer("\"zone forestiere\"")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#6aa84f',
                    weight: 1,
                    opacity: 4,
                    color: 'white',
                    dashArray: '2',
                    fillOpacity: 0.7
                };}  ,
            onEachFeature: onEachFeature_code1, 
        }); 
       
        /*******************************Zone forestiere**************************** */
        /*******************************Section forestiere**************************** */
        var section_f=L.geoJSON(GetLayer("\"section foret\"")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#38761d',
                    weight: 1,
                    opacity: 4,
                    color: 'white',
                    dashArray: '2',
                    fillOpacity: 0.9
                };}  ,
            onEachFeature: onEachFeature_code1,
            
        }); 
        /*******************************Section forestiere**************************** */
        /*******************************Barrage**************************** */
        var barrage =L.geoJSON(GetLayer("barrage")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#21a7e5',
                    weight: 1,
                    opacity: 4,
                    color: 'white',
                    dashArray: '2',
                    fillOpacity: 0.9
                };}  ,
            onEachFeature: onEachFeature_code1,
            
        }); 
        /*******************************Barrage**************************** */
        /*******************************brigade mobile**************************** */
        
        var brigade_mobile =L.geoJSON(GetLayer("\"brigade mobile\"")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon:GetIcon('icons/mobile.png')});
            },
            onEachFeature: onEachFeature_code1,
            
        });   
        /*******************************Brigade mobile**************************** */
        /*******************************Brigade fixe**************************** */
       
        var brigade_fixe =L.geoJSON(GetLayer("brigadefix")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: GetIcon('icons/fixe.png')});
            },
            onEachFeature: onEachFeature_code1,
            
        });   
        
        /*******************************Brigade fixe**************************** */
        /*******************************Dispositif**************************** */
        var dispositif =L.geoJSON(GetLayer("\"dispositif protection civil\"")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: GetIcon('icons/dispositif.png')});
            },
            onEachFeature: onEachFeature_code1,
            
        });  
        
        /*******************************Dispositif**************************** */
        /*******************************Loisirs**************************** */
        
        var loisir  =L.geoJSON(GetLayer("espaces_loisirs")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: GetIcon('icons/loisirs.png')});
            },
            onEachFeature: onEachFeature_code1,
            
        });    
         
        /*******************************Loisirs**************************** */
        /*******************************Oued**************************** */
        
        var oued  =L.geoJSON(GetLayer("oued")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#64e5e5',
                    weight: 5,
                    opacity: 5,
                    color: '#64e5e5',
                    dashArray: '2',
                    fillOpacity: 0.7
                };}  ,
            onEachFeature: onEachFeature_code1,
            
        }); 
        
         /*******************************Oued**************************** */
        /*******************************Piste**************************** */
       
        var piste   =L.geoJSON(GetLayer("piste")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#cccccc',
                    weight: 5,
                    opacity: 5,
                    color: '#cccccc',
                    dashArray: '2',
                    fillOpacity: 0.7
                };}  ,
            onEachFeature: onEachFeature_code1,
            
        }); 
        /*******************************Piste**************************** */ 
        /*******************************Poste vegie**************************** */ 
      
        var poste_v  =L.geoJSON(GetLayer("\"poste vegie\"")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: GetIcon('icons/tour de guet.png') });
            },
            onEachFeature: onEachFeature_code1,
            
        });    
         
        /*******************************Poste vegie**************************** */ 
        /*******************************Protection civile**************************** */

        var p_civile=L.geoJSON(GetLayer("\"protection civile\"")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: GetIcon('icons/Protection.svg') });
            },
            onEachFeature: onEachFeature_code1,
            
        }); 
        /*******************************Protection civile**************************** */
        /*******************************Retenue**************************** */
      
            var retenue =L.geoJSON(GetLayer("\"retenue collinaire\"")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon:GetIcon('icons/retenue.png') });
            },
            onEachFeature: onEachFeature_code1,
            
        });
        /*******************************Retenue**************************** */  
        /*******************************Feux**************************** */  
       /*
        var feu  =L.geoJSON(GetLayer("feux")["responseJSON"], {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: GetIcon('icons/firee.png') });
            },
            onEachFeature: onEachFeature_code1,
            
        });        
           */                  
        /*******************************Feux**************************** */ 
         /*******************************TPF**************************** */
         
        var tpf   =L.geoJSON(GetLayer("tpf")["responseJSON"], {
            style:function style(feature) {
                return {
                    fillColor:'#cccccc',
                    weight: 5,
                    opacity: 5,
                    color: '#bf9000',
                    dashArray: '2',
                    fillOpacity: 0.7
                };}  ,
            onEachFeature: onEachFeature_code1,
            
        }); 
        /*******************************TPF**************************** */ 
        



        /**************************************************** */
        p=$.ajax(
            {
                type: "POST",
                url: "php/nombre_feux.php",
                dataType: 'json',
                success: function(response)
                {
                },
                async:false
            });

        var wilaya =L.geoJSON(p["responseJSON"]); 
        function getColor(d) {
            return d > 240 ? '#BD0026' :
                d > 200  ? '#E31A1C' :
                d > 160  ? '#FC4E2A' :
                d > 120  ? '#FD8D3C' :
                d > 80   ? '#FEB24C' :
                d > 40   ? '#FED976' :
                d > 1   ? '#FFEDA0' :
                            ''; }
            function style(feature) {
            return {
                fillColor: getColor(feature.properties.nbr_feu),
                weight: 2,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
            };}
           
            var geojson= L.geoJSON(p["responseJSON"]);
        function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            opacity: 3,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        });
        wilaya=L.geoJSON(p["responseJSON"], {style: style});
        
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
        }
        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }
        
        function zoomToFeature(e) {
            //map.fitBounds(e.target.getBounds());
            /*commune = "commune1";
            console.log("commune "+commune);
            const xhr = new XMLHttpRequest();
            xhr.open("POST","php/data.php",true);
            xhr.send(commune);*/
            /*$.ajax({
                type: "POST",
                url:"../php/data.php",
                dataType:"json",
                data:{
                    com : "HNIF",
                },
                success:function(response){
                },
            });*/

            //////////////////////////////////////////////// FEUX //////////////////////////////////////////////////

            var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            xmlhttp.onload=function(){
                //var data = this.response;
                //alert("data: "+data);
                 var data =  JSON.parse(this.response); 
                 var annee = [];
                 var nb_feux = [];
                 var i = 0;
               while(i<data.length) {
                   annee.push(data[i].annee);
                   nb_feux.push(data[i].nb_feux);
                   i++;
               }
               var com = "Feux par année (" + e.target['feature'].properties.nom_com + ")";
               //alert(com);
               changeChartF(annee, nb_feux, com);
            };

            xmlhttp.onerror=function( err ){
                alert( err );
            };
            xmlhttp.open( 'GET', 'php/data.php?q='+e.target['feature'].properties.nom_com,true );
            xmlhttp.send();

              /////////////////////////// ////DEGATS ////////////////////////////////////////////////////////////////////////

            var xmlhttp1 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            xmlhttp1.onload=function(){
                //var data = this.response;
                //console.log("data: "+data);
                 var dataD =  JSON.parse(this.response); 
                 var anneeD = [];
                 var degat = [];
                 var i = 0;
               while(i<dataD.length) {
                   anneeD.push(dataD[i].annee);
                   degat.push(dataD[i].degat);
                   i++;
               }
               var comD = "Dégats par année (" + e.target['feature'].properties.nom_com + ")";
               changeChartD(anneeD, degat, comD);

            };

            xmlhttp1.onerror=function( err ){
                alert( err );
            };
            xmlhttp1.open( 'GET', 'php/degat.php?d='+e.target['feature'].properties.nom_com,true );
            xmlhttp1.send();

            ////////////////////////////VEGETATION//////////////////////

            var xmlhttp2 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            xmlhttp2.onload=function(){
                var dataV = JSON.parse(this.response);
                var comV = "(" + e.target['feature'].properties.nom_com + ")";
                var anneeVV = [];
                var foret = [];
                var i=0;
                while(i<dataV.length) {
                    anneeVV.push(dataV[i].annee);
                     foret.push(dataV[i].foret);
                             i++;
                     }
                changeChart(anneeVV, foret, "Forets brulées par année"+comV);
  
                changeDataV(dataV, comV);
                 /*var dataD =  JSON.parse(this.response); 
                 var anneeD = [];
                 var degat = [];
                 var i = 0;
               while(i<dataD.length) {
                   anneeD.push(dataD[i].annee);
                   degat.push(dataD[i].degat);
                   i++;
               }
               var comV = "Dégats par année (" + e.target['feature'].properties.nom_com + ")";
               changeChartD(anneeD, degat, comV);*/

            };

            xmlhttp2.onerror=function( err ){
                alert( err );
            };
            xmlhttp2.open( 'GET', 'php/vegetation.php?v='+e.target['feature'].properties.nom_com,true );
            xmlhttp2.send();


        }


        function onEachFeature1(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
        }

        wilaya=geojson = L.geoJSON(p["responseJSON"], {
            style: style,
            onEachFeature: onEachFeature1
        })
        

        var map=L.map('map',{
            center: [36.250, 3.902],
            zoom:  10,
            layers: [CoucheSatellitaire,wilaya],
            fullscreenControl: {
            pseudoFullscreen: false
           
    },
	
    zoomControl:false 
        });
        var baseMaps = {
            "Satellite Hybrid": CoucheSatellitaire ,
            "Streets": streets,
            "Toner":Toner,
            "Topo":Topo
            
        };
        /***************************************************************************** */


        function style_code(feature) {
            return {
                fillColor: '#FFFFFF',
                weight: 2,
                opacity: 3,
                color: 'black',
                dashArray: '6',
                fillOpacity: 0.1
            };}

            function getDaira(mnd)
            {
               MoveLayers();
               if(mnd!="")
               {
                    $.ajax(
                    {
                        type: "POST",
                        url: "php/Search_daira.php",
                        data :
                        {
                            typeofgeom : mnd,
                        },
                        dataType: 'json',
                        success: function(response)
                        {
                            
                            var lay=L.geoJson(response, {style: style_code});
                            lay.addTo(map);
                            flyToStore(response.features[0],lay.getBounds().getCenter().lat,lay.getBounds().getCenter().lng);
                            
                        }
                    }) 
                }
                
            }
            function getCommune(mnd)
            {
               MoveLayers();
               if(mnd!="")
               {
                    $.ajax(
                    {
                        type: "POST",
                        url: "php/Search_commune.php",
                        data :
                        {
                            typeofgeom : mnd,
                        },
                        dataType: 'json',
                        success: function(response)
                        {
                            
                            var lay=L.geoJson(response, {style: style_code});
                            lay.addTo(map);
                            flyToStore(response.features[0],lay.getBounds().getCenter().lat,lay.getBounds().getCenter().lng);
                            
                        }
                    }) 
                }
                
            }
            function getSection(mnd)
            {
               MoveLayers();
               if(mnd!="")
               {
                    $.ajax(
                    {
                        type: "POST",
                        url: "php/Search_section.php",
                        data :
                        {
                            typeofgeom : mnd,
                        },
                        dataType: 'json',
                        success: function(response)
                        {
                            
                            var lay=L.geoJson(response, {style: style_code});
                            lay.addTo(map);
                            flyToStore(response.features[0],lay.getBounds().getCenter().lat,lay.getBounds().getCenter().lng);
                            
                        }
                    }) 
                }
                
            }
            
        
        /**************************************************************************************** */
        
        



        var overlayMaps = {
            
            
			"Wilayas (Zone d'etude)":wilaya_1,
            "Daira":daira,
            "Commune":commune,
            "Zone Forestière":zone_f,
            "Feux par commune":wilaya,
            "Section Forestière":section_f,
            "Barrage":barrage,
            "Oued":oued,
            "Piste":piste,
            "Retenue collinaire":retenue,
            "Tranchée par feux":tpf,
            "Dispositif Protection Civile":dispositif,
            "Espace Loisirs":loisir,
            "Brigade mobile":brigade_mobile,
            "Brigade fix":brigade_fixe,
            "Protection Civile":p_civile,
            "Poste Vegie":poste_v,
            //"feux":feu, 
        };
       
        L.control.layers(baseMaps, overlayMaps).addTo(map);
        

        L.control.scale({
            metric:true,
            imperial:true,
            position:'bottomleft',
        }).addTo(map);
     
        
        /****************************************************/
        
       
        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML = '<h4>Nombre de feux par commune</h4>' +  (props ?
                '<br />Commune de:' + props.nom_com + '<br /><br /> Nombre de feux:'+props.nbr_feu+''
                : 'Mettez-vous le curseur sur une commune');
        };

        info.addTo(map);

        /****************************************************/
        

        /********************************************************/
        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [1, 40, 80, 120, 160, 200,240],
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }

            return div;
        };
        legend.addTo(map);

        /********************************** */
         




    
        /*********************************************/
          function makePopupContent_code1(shop) {
            html="<div> <h4>Boite d'informations</h4>"
            for (prop in shop.properties){
				html += "<p> " + prop+": "+shop.properties[prop]+"</p>";
			};
            html+="</div>";
            return html;
          }
         
          function onEachFeature_code1(feature, layer) {
            layer.bindPopup(makePopupContent_code1(feature), { closeButton: false, offset: L.point(0, -8) });
        }
          
        
          function flyToStore(store,var1,var2) {
              const  lat= var1;
			  const  lng= var2;
              
              map.flyTo([lat, lng], 12, {
                  duration: 4
              });
              setTimeout(() => {
                  L.popup({closeButton: false})
                  .setLatLng([lat, lng])
                  .setContent(makePopupContent_code1(store))
                  .openOn(map);
              }, 3000);
    }
    /**************************************** */

    var ctlZoomslider = L.control.zoomslider({position:'topleft'}).addTo(map);
    var ctlSidebar = L.control.sidebar('side-bar').addTo(map);
    var ctlEasyButton = L.easyButton('fa-exchange', function () {
        ctlSidebar.toggle();
    }).addTo(map);
    
    (function ($) {
        'use strict';
        try {
            var singleDate = $('.js-single-datepicker');
        
            singleDate.each(function () {
                var that = $(this);
                var dropdownParent = '.dropdown-datepicker' + that.data('drop');
        
                that.daterangepicker({
                    "singleDatePicker": true,
                    "showDropdowns": true,
                    "autoUpdateInput": true,
                    "parentEl": dropdownParent,
                    "opens": 'right',
                    "locale": {
                        "format": 'MM/DD/YYYY'
                    }
                });
            });
        
        } catch(er) {console.log(er);}
    })(jQuery);

/********************************************* */
function getDate()
{
    //MoveLayers();
    var date1= document.getElementById('date1').value;
    var date2= document.getElementById('date2').value;
    
    p=$.ajax(
        {
            type: "POST",
            url: "php/affiche_feux.php",
            dataType: 'json',
            data:{
                D1:date1,
                D2:date2,
            },
            success: function(response)
            {
                var layerTest = L.geoJSON(response, {
                    pointToLayer: function (feature, latlng) {
                        return L.marker(latlng, { icon: GetIcon('icons/firee.png')});
                    },
                    onEachFeature: onEachFeature_code1,
                    
                }).addTo(map);
                $("#id").click(function(){
                    map.removeLayer(layerTest);
                });
            },
            async: false
        }); 
}

function MoveLayers()
{
    map.eachLayer(function(layer)
                        {
                            //if not the tile layer
                            if (typeof layer._url === "undefined"){
                                map.removeLayer(layer);
                            }
                        });
}
    

    
        
