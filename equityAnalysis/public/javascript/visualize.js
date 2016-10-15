var months = [,'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var parseDate = function(dateText){
	var parts = dateText.split('-').reverse();
	parts[1] = months.indexOf(parts[1]);
	return new Date(parts.join('-'));
};

var parseQuote = function(quote){
	quote['Date'] = parseDate(quote['Date']);
	quote['Close Price'] = +quote['Close Price'];
	return quote;
};

const WIDTH = 1280;
const HEIGHT = 800;
const MARGIN = 30;

const INNER_WIDTH = WIDTH - 2 * MARGIN;
const INNER_HEIGHT = HEIGHT - 2 * MARGIN;

var translate = function(x, y){
	return "translate("+x+","+y+")";
};

var loadChart = function(quotes){
	var svg = d3.select('.container').append('svg')
		.attr('width', WIDTH)
		.attr('height', HEIGHT);
	var dateRange = d3.extent(quotes, function(quote){
	    return quote['Date'];
	});

	var priceRange = d3.extent(quotes, function(quote){
    	return quote['Close Price'];
    });

    priceRange[0] -= 5;
    priceRange[1] += 5;
    dateRange = [new Date(dateRange[0]), new Date(dateRange[1])];
    dateRange[0].setDate(dateRange[0].getDate() - 5);
    dateRange[1].setDate(dateRange[1].getDate() + 5);

	var xScale = d3.scaleTime()
	    .domain(dateRange)
	    .range([0, INNER_WIDTH]);

	var yScale = d3.scaleLinear()
	    .domain(priceRange)
	    .range([INNER_HEIGHT, 0]);

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
		.x(function(q){return xScale(q['Date'])})
		.y(function(q){return yScale(q['Close Price'])});

	g.append('path')
		.classed('close-price', true)
		.attr('d', line(quotes));

	g.selectAll('circle').data(quotes)
		.enter().append('circle')
		.attr('r', 1).append('title')
		.text(function(q){
			return 'Date: ' + q['Date'].toISOString().split('T')[0] + '\nPrice: ' + q['Close Price'];
		});
	
	var circles = g.selectAll('circle');
	
	circles.attr('cx', function(q){return xScale(q['Date'])})
		.attr('cy', function(q){return yScale(q['Close Price'])});

	g.selectAll('circle').exit().remove();

};

d3.csv('../data/tataSteel.csv', parseQuote, loadChart);

