document.addEventListener('DOMContentLoaded', () => {

  var tempData = [];
  var hData = [];
  var dData = [];
  var times = [];

  function getNames(){
    $.get("./api/visitors")
        .done(function(data) {
              $.each(data.datas, function(index, element) {
                tempData.push(element.t)
                hData.push(element.h)
                dData.push(element.d)
                if (times.length < 40) {
                  times.push(new Date(element.time).toLocaleString())
                }
              })
              launchLine(tempData, hData, dData, times)
        });

    }          //Call getNames on page load.
    getNames();

  const ctx = document.getElementById("tempChart");


  function launchLine(data, datah, datad, times) {
    const config = {
      type: 'line',
      data: {
          labels: times,
          datasets: [{
              label: 'Températures',
              data: data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
              ],
              borderWidth: 1
          }, {
            label: 'Humidité',
            data: datah,
            backgroundColor: [
                'rgba(255, 51, 14, 0.2)',
            ],
            borderColor: [
                'rgba(255, 51, 14, 0.2)',
            ],
            borderWidth: 1
          }, {
            label: 'Point de condentiation',
            data: datad,
            backgroundColor: [
                'rgba(12, 51, 14, 0.2)',
            ],
            borderColor: [
                'rgba(12, 51, 14, 0.2)',
            ],
            borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
          }
      }
    }
    let myChart = new Chart(ctx, config);
  }
});
