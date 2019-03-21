queue()
    .defer(d3.csv, "data/london-housing.csv")
    .await(makeGraphs);
    
function makeGraphs(error, housingData) {
    var ndx = crossfilter(housingData);
    
    housingData.forEach(function(d){
        d.carbonEmissions = parseInt(d.carbonEmissions);
    });
    
    show_emissions_per_borough(ndx);
    
    dc.renderAll();
}


// Chart emmissions Per Borough:
function show_emissions_per_borough(ndx) {
        var borough_dim = ndx.dimension(dc.pluck('borough'));
        var borough_emissions_group = borough_dim.group().reduceSum(dc.pluck('carbonEmissions'));
        dc.barChart('#emissions-borough')
            .width(400)
            .height(250)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(borough_dim)
            .group(borough_emissions_group)
            .transitionDuration(600)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Borough")
            .yAxisLabel("Emissions")
            .yAxis().ticks(40);

};




    
    












