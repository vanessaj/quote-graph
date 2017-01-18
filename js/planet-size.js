
        var dataset = [[57910000 , 2440, "red"], [108200000 , 6052, "green"], [149600000, 6371, "blue"], [227900000, 3390,"orange"], 
                            [778500000,69911,"purple"], [1433000000, 58232,"gold"], 
                        [2877000000, 25362,"black"], [4503000000, 24622,"pink"]];
        
        // vars for svg width and height
        var svgW = 700;
        var svgH = 500;
        // padding
        var padding = 50;


        // scales 
        var xScale = d3.scale.log()
            .domain([d3.min(dataset, function(d){return d[0];}) - 10000000,
                    d3.max(dataset, function(d) { return d[0]; })])
            .range([padding,svgW - padding * 2]);
        var yScale = d3.scale.log()
            .domain([d3.min(dataset, function(d){return d[1];}) - 1000, d3.max(dataset, function(d){return d[1];})])
            .range([svgH - padding,padding]);
        var rScale = d3.scale.linear()
             .domain([0, d3.max(dataset, function(d) { return d[1]; })])
             .range([4, 35]);

        // axes
        var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient("bottom")
              .ticks(10);
        var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left")
                .ticks(20);


        // var for svg
        var svg = d3.select("#chart1")
                    .append("svg")
                    .attr("width", svgW)
                    .attr("height", svgH);

        // creating circles in scatter plot
        svg.selectAll("circle")
           .data(dataset)
           .enter()
           .append("circle")
           .attr("cx", function(d) {return xScale(d[0]);})
           .attr("cy", function(d) {return yScale(d[1]);})
            .attr("r", function(d) {return rScale(d[1]);})
            .attr("fill", function(d){return d[2]});

        // adding x axis
        svg.append("g")
            .attr("class", "axis")  // assign "axis" class
            .attr("transform", "translate(0," + (svgH - padding) + ")")
            .call(xAxis);
        // text for x axis
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", svgW/2)
            .attr("y", svgH - 6)
            .text("Distance from Sun");

        // adding y axis
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding + ", 0)")
            .call(yAxis);
        // text for y axis
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("x",-svgH/2)
            .attr("y", 1)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Radius");

    // end of D3 Planets' Size code