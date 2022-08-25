//Global options
Chart.defaults.font.size = 14;

//FEUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
var f = $.ajax({
  url: "php/data.php",
  method: "POST",
  success: function (data) {
  },
  error: function (data) {
  },
  async:false
});
var data =  f["responseJSON"];

var annee = [];
      var nb_feux = [];
      for (var i in data) {
        annee.push(data[i].annee);
        nb_feux.push(data[i].nb_feux);
      }
var chartData = {
  labels: annee,
  datasets: [
    {
      label: "Nombre de feux par année",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
                    '#CE1212',
                    '#BE0000',
                    '#D44000',
                    '#FF7A00',
                    '#E48900'
      ],
      borderColor: [
        '#810000',
                    '#CE1212',
                    '#BE0000',
                    '#D44000',
                    '#FF7A00',
                    '#E48900'
      ],
      borderWidth: 4,
      data: nb_feux,
    },
  ],
};

var ctx = $("#mycanvass");

var barGraph = new Chart(ctx, {
  type: "bar",
  data: chartData,
  options: {
    plugins: {
      title: {
          display: true,
          text: 'Feux par année',
          font:{
            size: 15
          }
      },
      legend:{
        display: false,
       
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function changeChartF(mydata1, mydata2, mytext){
  //barGraph.data.datasets[0].label = label;
  barGraph.data.labels = mydata1;
  barGraph.data.datasets[0].data = mydata2;
  barGraph.options.plugins.title.text = mytext;
  barGraph.update();            
}

//DEGATS
var d = $.ajax({
  url: "php/degat.php",
  method: "POST",
  success: function (data) {
  },
  error: function (data) {
  },
  async:false
});

var dataD = d["responseJSON"];

    var anneeD = [];
    var degat = [];
    for (var i in dataD) {
      anneeD.push(dataD[i].annee);
      degat.push(dataD[i].degat);
    }
      var chartDataD = {
        labels: anneeD,
        datasets: [
          {
            label: "Degat par annee (DA)",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4,
            data: degat,
          },
        ],
      };

      var ctxD = $("#mydegatcanvas");
      var barGraphD = new Chart(ctxD, {
        type: "line",
        data: chartDataD,
        options: {
          plugins: {
            title: {
                display: true,
                text: 'Dégats par année',
                font:{
                  size: 15
                }
            },
            legend:{
              display: false,
              
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      function changeChartD(mydata1, mydata2, mytext){
        //barGraph.data.datasets[0].label = label;
        barGraphD.data.labels = mydata1;
        barGraphD.data.datasets[0].data = mydata2;
        barGraphD.options.plugins.title.text = mytext;
        barGraphD.update();            
      }

////////////////////////////////// VEGETATION /////////////////////////////

var v =  $.ajax({
        url: "php/vegetation.php",
        method: 'POST',
        success: function(data){
            
            },
            error:function(data){
              console.log(data);
          },
          async: false
      });
      
var dataV = v["responseJSON"]; 
var anneeV=[];
var vegetation = [];
var i = 0;
while(i<dataV.length) {
    anneeV.push(dataV[i].annee);
    vegetation.push(dataV[i].autre);
    i++;
}
  var chartDataV = {
      labels: anneeV,
      datasets: [
          {
              label: 'Superficie par annee(ha)',
              backgroundColor: [
                
                "#9FE6A0",
                "#4AA96C",
                "#9EDE73",
                "#96BB7C",
                "#66DE93",
                "#184D47",
              ],
              borderColor: [
                "#9FE6A0",
                "#4AA96C",
                "#9EDE73",
                "#96BB7C",
                "#66DE93",
                "#184D47",
              ],
              borderWidth: 4,
              data: vegetation,
              color: 'red',
          }
      ]
  };

  var ctxV = $('#myvegetationcanvas');
  var barGraphV = new Chart(ctxV, {
      type: 'bar',
      data: chartDataV,
      options: {
        scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
            title: {
                display: true,
                text: 'Autres brulés par année',
                font:{
                  size: 15
                }
            },
            legend:{
              display: false,
             
            },
          },
      }
  });

  function changeDataV(mydataV, com){
    var anneeVV =  [];
    var i = 0;
    while(i<mydataV.length) {
     anneeVV.push(mydataV[i].annee);
     i++;
   }
    var foret = [];
    var i = 0;
   while(i<mydataV.length) {
    foret.push(mydataV[i].foret);
    i++;
  }
  $('#foret').click(function(){
    changeChart(anneeVV, foret, "Foréts brulées par année "+com);
  });
 
  
        //////maquis//////////
  var maquis = [];
  i=0;
  while(i<mydataV.length) {
    maquis.push(mydataV[i].maquis);
    i++;
  }
  $('#maquis').click(function(){
    changeChart(anneeVV, maquis, "Maquis brulé par année"+com);
  });

  
   ///////////////////// brouss ///////////////////

  var brouss = [];
  i=0;
  while(i<mydataV.length) {
    brouss.push(mydataV[i].brouss);
    i++;
  }
  $('#brouss').click(function(){
    changeChart(anneeVV, brouss, "Brouss brulé par année"+com);
  });



  ///////////////////////autre////////////////////
  var autre = [];
  i=0;
  while(i<mydataV.length) {
    autre.push(mydataV[i].autre);
    i++;
  }
  $('#autre').click(function(){
    changeChart(anneeVV, autre, "Autres brulés par année"+com);
  });
  }
  


function changeChart(mydata1, mydata, mytext){
  //barGraph.data.datasets[0].label = label;
  barGraphV.data.labels = mydata1;
  barGraphV.data.datasets[0].data = mydata;
  barGraphV.options.plugins.title.text = mytext;
  barGraphV.update();            
}

       

    

