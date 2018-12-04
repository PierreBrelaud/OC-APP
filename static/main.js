document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById("tempChart");

  console.log(ctx)

  let data = {
    0: {
      'h': 47,
      't': 20,
      'timestamp': "2018-12-04T09:09:30:10"
    },
    1: {
      'h': 14,
      't': 25,
      'timestamp': "2018-12-04T09:09:30:10"
    },
    2: {
      'h': 228,
      't': 41,
      'timestamp': "2018-12-04T09:09:30:10"
    },
    3: {
      'h': 36,
      't': 41,
      'timestamp': "2018-12-04T09:09:30:10"
    },
    4: {
      'h': 5,
      't': 25,
      'timestamp': "2018-12-04T09:09:30:10"
    }
  }

  let tempData = [];


  $.each(data, (index, element) => {
    tempData.push(element.t);
  })

  console.log(tempData)

  const config = {
    type: 'line',
    data: {
        labels: ["Températures"],
        datasets: [{
            label: '# of Votes',
            data: tempData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  }

  let myChart = new Chart(ctx, config);
});
