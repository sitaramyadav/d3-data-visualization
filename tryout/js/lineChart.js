// //
const WIDTH = 1000;
const HEIGHT = 700;
// const MARGIN = 30;

// var data = [1,29,34,34,56,56,45,56,89,100];

var scale = d3.scaleLinear()
.domain([1,5])
.range([0,200])

var svg = d3.selectAll('.container')
    .append('svg')
    .attr('height',250)
    .attr('width',250);

function render (data,color){
  //bind Data
  var existingSelection = svg.selectAll('rect');
  var dataBound = existingSelection.data(data);
  var newSelection = dataBound.enter();
  //Enter + u
  newSelection.append('rect')



  // Update

  var modiefiedSelection = svg.selectAll('rect');

  modiefiedSelection
  .attr('x',function(d){return scale(d)})
  .attr('fill',color)
  .attr('y',50)
  .attr('width',20)
  .attr('height',20);
//exit

dataBound.exit().remove();

}

render([1,2,3],'red');
setTimeout(function(){render([1,2,3,4],'green')},1000);
setTimeout(function(){render([1,2],'blue')},2000)
setTimeout(function(){render([1,2,3,8,9,10,100],'yellow')},3000)
setTimeout(function(){render([1],'black')},4000)
// setTimeout(function(){render([1,2,,10,20,30,40,50,67,78,88],'orange')},5000)
// setTimeout(function(){render([1,2],'orange')},1000)



// render([1,2,3,4,5,5],'black',setTimeout(function () {
//
// }, 1000));

//         .domain([1,100])
//         .range([500,30])


// var oldList = svg.selectAll('circle').data([]);
// var dataBound = oldList.data(data);
// var newList = dataBound.enter();
//
// newList.append('circle')
//   .attr('r',4)
//   .attr('cx',function(d,index){return doosraScale(index+1)})
//   .attr('cy',function(d){return scale(d);})



    // console.log(scale(6))
    // console.log(scale('B'))
    // console.log(scale('C'))
    // console.log(scale('D'))
