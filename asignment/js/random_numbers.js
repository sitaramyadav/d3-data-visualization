const WIDTH = 1400;
const HEIGHT = 800;
const MARGIN = 30;


const INNER_WIDTH = WIDTH - 2 * MARGIN;
const INNER_HEIGHT = HEIGHT - 2 * MARGIN;

var translate = function(x, y){
	return "translate("+x+","+y+")";
};

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
		.attr('transform', translate(MARGIN, HEIGHT - MARGIN))
		.call(xAxis)
		.classed('xAxis', true);

	svg.selectAll('.xAxis .tick')
		.append('line')
		.attr('x1', 0)
		.attr('y1', 0)
		.attr('x2', 0)
		.attr('y2', -INNER_HEIGHT)
		.classed('grid', true);

	svg.append('g')
		.attr('transform', translate(MARGIN, MARGIN))
		.classed('yAxis', true)
		.call(yAxis);

	svg.selectAll('.yAxis .tick')
		.append('line')
		.attr('x1', 0)
		.attr('y1', 0)
		.attr('x2', INNER_WIDTH)
		.attr('y2', 0)
		.classed('grid', true);

	var g = svg.append('g')
		.attr('transform',  translate(MARGIN, MARGIN));

  var line = d3.line()
      .x(function(d,i){return xScale(d[i])})
      .y(function(d,i){return yScale(d[i])});

  g.append('path')
      .classed('random-numbers', true)
      .attr('d', line(random_numbers));
}
Window.load = loadChart();
