
var randomNumbers = [];
var counter = 1;

var generateRandomNumbers = function(randomNumbers){
	for(var i = 1 ; i <= 10 ; i++)
		randomNumbers.push({index:counter++,val:Math.round(Math.random()*100)});
}

var modifyList = function(randomNumbers){
  randomNumbers.shift();
	randomNumbers.push({index:counter++, val:Math.round(Math.random()*100)});
}

var  updateChart = function(xScale){
	var display = d3.select('.container');

	var existingSelection = display.selectAll('.bar');

	modifyList(randomNumbers);

	var newSelection = existingSelection.data(randomNumbers,function(d){
						return d.index;})
						.enter()

	var removedSelection = existingSelection.data(randomNumbers,function(d){return d.index}).exit()

	newSelection.append('div')
		.style('width',function(d){return xScale(d.val)+'px';})
		.attr('class','bar')
		.style('opacity',function(d){return d.val/100;})
		.text(function(d){return d.val;})

	removedSelection.remove();
}


function createChart(){
	var xScale = d3.scaleLinear()
					.domain([0,100])
					.range([5,700]);

	var display = d3.select('.container');

	var existingSelection = display.selectAll('.bar').data(randomNumbers,function(d){return d.index;});
	console.log(display)

	generateRandomNumbers(randomNumbers);

	var newSelection = existingSelection.data(randomNumbers,function(d){return d.index}).enter();

	newSelection.append('div')
		.style('width',function(d){return xScale(d.val)+'px';})
		.style('opacity',function(d){return d.val/100;})
		.attr('class','bar')
		.text(function(d){return d.val;})

	setInterval(function(){updateChart(xScale)},1000)

}


window.load= createChart();
