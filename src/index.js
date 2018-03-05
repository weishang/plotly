import Plotly from 'plotly.js'
import _ from 'lodash';


var element = document.createElement('div');


element.innerHTML = _.join(['Hello', 'webpack'], ' ');

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 20],
  mode: 'markers'
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 10],
  mode: 'lines'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers'
};

var data = [trace1, trace2, trace3];

var layout = {
  autosize: true,
  xaxis: {
    fixedrange: false,
    layer: 'below traces'
  },
  yaxis: {
    fixedrange: false,
    layer: 'below traces'
  },
};

Plotly.newPlot('plotly', data, layout);

var myPlot = document.getElementById('plotly');

myPlot.on('plotly_click', function () {
  alert('You clicked this Plotly chart!');
});

// https://plot.ly/javascript/
// http://bl.ocks.org/niclasmattsson/7bceb05fba6c71c78d507adae3d29417
// https://github.com/d3/d3-drag