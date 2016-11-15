
var studentRecords = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
]



var  updateChart = function(xScale){
	var display = d3.select('.container');

	var existingSelection = display.selectAll('.bar');


	var newSelection = existingSelection.data(studentRecords)
		.enter()

	var removedSelection = existingSelection.data(studentRecords,function(d){return d.name+ ' '+d.score}).exit()

	newSelection.append('div')
		.style('width',function(d){return xScale(d.score)+'px';})
		.attr('class','bar')
		.style('opacity',function(d){return d.score/100;})
		.text(function(d){return d.name+ ' '+d.score;})

	removedSelection.remove();
}


var createChart = function (){
	var xScale = d3.scaleLinear()
		.domain([0,100])
		.range([5,700]);

	var display = d3.select('.container');

	var existingSelection = display.selectAll('.bar')
			.data(studentRecords,function(d){return d.name+ ' '+d.score;})
			.style('text-align','center');


	var newSelection = existingSelection.data(studentRecords);

	var newS = newSelection.append('div')
		.style('width',function(d){return xScale(d.score)+'px';})
		.style('text-align','center')
		.style('opacity',function(d){return d.score/100;})
		.attr('class','bar')
		.text(function(d){return d.score;})

	setInterval(function(){updateChart(xScale)},1000)

}


window.load= createChart();
