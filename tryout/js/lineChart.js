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
  var rects = svg.selectAll('rect').data(data);

  //Enter
  rects.enter().append('rect')
  .attr('x',scale)
  .attr('y',50)
  .attr('width',20)
  .attr('height',20)
  .attr('fill',color)
}

render([1],'red');
render([1,2,],'green')
render([1,2,3,4,7,5],'blue')
// render([1,2,3,4,5,5],'red')
// render([1,2,3,4,5,5],'black')

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
