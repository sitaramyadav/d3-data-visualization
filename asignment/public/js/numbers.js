var loadChart = function () {
    var data = [0,1,2,3,4,5,6,7,8,9,10];

    var xScale = d3.scaleLinear().domain([0,10]).range(["italic bold 10px/20px","italic bold 120px/180px serif"]);
    var scaleQuantize = d3.scaleQuantize().domain([9,10]).range([60,120]);

    var cover = d3.select('.chart').selectAll('.box').data(data);
    cover.enter().append('div')
        .classed("box",true)
        .text(function(d){return d;})
        .style("font",function(d){return xScale(d);})
        .style("width",function(d){return scaleQuantize(d)+"px";})

};

window.onload = loadChart();