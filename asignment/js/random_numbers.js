const WIDTH = 1400;
const HEIGHT = 800;
const MARGIN = 30;

var loadChart = function(){
  var genrateRandomNumbers = function(){
    var random_numbers = [];
    for(var i = 0;i<100;i++){
      random_numbers.push(Math.round(Math.random(1,100)*100));
    }
    return random_numbers;
  }

  var random_numbers = genrateRandomNumbers();

  var svg = d3.select('.container').append('svg')
        .attr('width',WIDTH)
        .attr('height',HEIGHT);

	var xScale = d3.scaleLinear()
      .domain([0,10])
      .range([0, WIDTH - (2 * MARGIN)]);

	var yScale = d3.scaleLinear()
      .domain([0,100])
	    .range([HEIGHT - (2 * MARGIN), 0]);
	var xAxis = d3.axisBottom(xScale).ticks(12);
	var yAxis = d3.axisLeft(yScale).ticks(10);

	svg.append('g')
		.attr('transform', 'translate('+MARGIN+', '+(HEIGHT - MARGIN)+')')
		.call(xAxis);

	svg.append('g')
		.attr('transform', 'translate('+(MARGIN)+', '+ MARGIN +')')
		.call(yAxis);

  var path = d3.selectAll('g');

  // var path = g.append('path').
  //   .data(random_numbers)
  //   attr(d,function(d){
  //   return d;
  // });

}
Window.load = loadChart();
