function openStock(stockName) {
  var i;
  var x = document.getElementsByClassName("stockTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(stockName).style.display = "block";  
}

/* stock list */
let stocks = [
  { brand: "BTC", name: "BTC", pts: "$51,773.02", reb: "1.82%" },
  { brand: "ETH", name: "ETH", pts: "$3,946.60", reb: "3.19%" },
  { brand: "Icons_Market_Crypto_ADA", name: "ADA", pts: "$2.90", reb: "2.56%" },
  { brand: "Icons_Market_Crypto_BNB", name: "BNB", pts: "$504.40", reb: "1.84%" },
  { brand: "Icons_Market_Crypto_USDT", name: "USDT", pts: "$0.9996", reb: "0.02%" },
  { brand: "XRP", name: "XRP", pts: "$1.34", reb: "6.4%" },
  { brand: "Icons_Market_Crypto_SOL", name: "SOL", pts: "$145.11", reb: "3.0%" },
  { brand: "Icons_Market_Crypto_DOGE", name: "DOGE", pts: "$0.313726", reb: "4.3%" },
  { brand: "Icons_Market_Crypto_DOT", name: "DOT", pts: "$34.62", reb: "6.6%" }
];

/* get images */
let images = ["image1.jpg", "photo.jpg", "graphic.png", "animation.gif"];

/* table */
const dataPanel = document.querySelector("#data-panel");

function displayPlayerList(stocks) {
  let html = "";
  stocks.forEach((stock) => {
    html += `
    <table> 
       <tbody>
        <tr>
          <td><img src="images/${stock.brand}.png" alt="Icons_Market_Crypto_BNB"></td>
          <td>${stock.name}</td>
          <td>
            <span>${stock.pts}</span>
          </td>
          <td>
            <span class="upPrice">${stock.reb}</span>
          </td>
          <td>
            <canvas class="lineChart"></canvas>
          </td>
          <td>
            <button class="stock-button" onclick="buyStock()">交易</button>
          </td>
        </tr>
       </tbody>
      </table> 
      `;
  });
  dataPanel.innerHTML = html;
}
displayPlayerList(stocks);

/* line Chart */
var table = document.querySelector('table')
var tableArr = [];
for ( var i = 1; i < table.rows.length; i++ ) {
  tableArr.push([
  table.rows[i].cells[1].innerHTML,
  table.rows[i].cells[2].innerHTML,
  table.rows[i].cells[3].innerHTML,
  ]);

  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "lineChart"+i);
  table.rows[i].cells[4].appendChild(canvas);
}

tableArr.forEach(function(e,i){
  const chartID = "lineChart"+ (i+1)
  const ctx = document.getElementById(chartID).getContext('2d');

  // gradient = ctx.createLinearGradient(0, 0, 0, 450);
  // gradient.addColorStop(0, 'rgba(255 209 64, 0.5)');
  // gradient.addColorStop(0.5, 'rgba(255 209 64, 0.25)');
  // gradient.addColorStop(1, 'rgba(255 209 64, 0)');

  gradient = ctx.createLinearGradient(0,0,200,0);
  gradient.addColorStop(0,"#1c1d24");
  gradient.addColorStop(1,"rgb(255 209 64)");
  ctx.fillStyle = gradient;
  // ctx.fillRect(10,10,200,100);

  var lineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['', '', '', '', '', '', ''],
      datasets: [{
        label: '',
        // backgroundColor: gradient,
        borderWidth: 1,
        data: [0, 24, 36, 43, 58, 66, 38],
        fill: {
          target: 'origin',
          above: gradient,   // Area will be red above the origin
          below: '#ffd140'    // And blue below the origin
        }
      }]
    }
  });
});

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(200, 200, 200, 0.05)',
        lineWidth: 1
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(200, 200, 200, 0.08)',
        lineWidth: 1
      }
    }]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  legend: {
    display: false
  },
  point: {
    backgroundColor: 'white'
  },
  tooltips: {
    titleFontFamily: 'Open Sans',
    backgroundColor: 'rgba(0,0,0,0.3)',
    titleFontColor: 'red',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10
  }
};

