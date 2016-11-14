var randomNumbers = [1,2,3,4,5];
var createChart = function(){
	var xScale = d3.scaleLinear()
					.domain([0,100])
					.range([5,700]);

	var display = d3.select('.container');

	var existingSelection = display.append('div');

	var newSelection = existingSelection.randomNumbers(randomNumbers,function(d){return d}).enter();

	newSelection.append('div')
		.style('width',function(d){return xScale(d)+'px';})
		.attr('class','bar')
		.text(function(d){return d;})



}


window.load= createChart();
