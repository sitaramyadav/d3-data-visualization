// d3.select("body").style("background-color", "green");
// d3.select("body").style("background-color", "black");

// var d3 = d3.selectAll("p").style("color", function() {
//   return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });

// hsl(hue, saturation, lightness).
// Hue
// Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.
//
// Saturation
// Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
//
// Lightness
// Lightness is also a percentage; 0% is black, 100% is white.

// Update…
// var p = d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//     // .text(function(d) { return d; });
//
// // Enter…
// p.enter().append("p")
//     .text(function(d) { return d; });
//
// // Exit…
// p.exit().remove();

 pdata = [10,'f',1,3,4,];
         selectDIV = d3.select(".container");

        selectDIV.selectAll("p")
             .data(pdata)
             .enter()
             .append("p")
             .text(function(d){return d;});
