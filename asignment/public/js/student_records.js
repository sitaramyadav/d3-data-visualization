
var data = [
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



//
// var  displayChart = function(xScale){
// 	var display = d3.select('.container');
//
// 	var existingSelection = display.selectAll('.bar');
//
// 	var newSelection = existingSelection.data(data,function(d){
// 		return d.index;})
// 		.enter()
//
// 	var removedSelection = existingSelection.data(data,function(d){return d.index}).exit()
//
// 	newSelection.append('div')
// 		.style('width',function(d){return xScale(d.val)+'px';})
// 		.attr('class','bar')
// 		.style('opacity',function(d){return d.val/100;})
// 		.text(function(d){return d.val;})
//
// 	removedSelection.remove();
// }


function createChart(){
	// Update…
	var p = d3.select("body")
		.selectAll("p")
		.data([4, 8, 15, 16, 23, 42])
		.text(function(d) { return d; });

// Enter…
	p.enter().append("p")
		.text(function(d) { return d; });

// Exit…
	p.exit().remove();

	var xScale = d3.scaleLinear()
		.domain([0,100])
		.range([5,700]);


}


window.load= createChart();
