var circleRadii = [3390, 3340, 1775];
var color = d3.scale.category20();
var svgW = 250;
var svgH = 250;
var svgContainer = d3.select("#comp-mars").append("svg")
                                        .attr("width", svgW)
                                        .attr("height", svgH);
var circles = svgContainer.selectAll("circle")
                            .data(circleRadii)
                            .enter()
                            .append("circle");
var rScale = d3.scale.linear()
     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
     .range([0, 1000]);
var circleAttributes = circles
               .attr("cx", svgW/2)
               .attr("cy", svgH/2)
               .attr("r", function (d) { return rScale(d); })
               .attr("fill",function(d,i){return color(i);});