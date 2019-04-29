// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
function create_chart(tseries_sub_count, pewdiepie_sub_count) {
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
        "name": "T-Series",
        "points": tseries_sub_count,
        "color": '#AA1B1B',
        "bullet": "/static/tseries_cropped.gif"
    }, {
        "name": "PewDiePie",
        "points": pewdiepie_sub_count,
        "color": '#77A26F',
        "bullet": "/static/pewdiepie_cropped.gif"
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
    categoryAxis.renderer.labels.template.fontSize = 20;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

    // Do not crop bullets
    chart.maskBullets = false;

    // Remove padding
    chart.paddingBottom = 0;

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "points";
    series.dataFields.categoryX = "name";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

    // Add bullets
    var bullet = series.bullets.push(new am4charts.Bullet());
    var image = bullet.createChild(am4core.Image);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.dy = 20;
    image.y = am4core.percent(100);
    image.propertyFields.href = "bullet";
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = "color";
    image.filters.push(new am4core.DropShadowFilter());
}