import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import Aux from "../../../hoc/_Aux";

am4core.useTheme(am4themes_animated);

class PieChart extends React.Component {
    componentDidMount() {
        let chart = am4core.create("am-pie-2", am4charts.PieChart);

        this.chart = chart;
        chart.data = [{
            "country": "Lithuania",
            "litres": 201.9
        }, {
            "country": "Germany",
            "litres": 165.8
        }, {
            "country": "Australia",
            "litres": 139.9
        }, {
            "country": "Austria",
            "litres": 128.3
        }, {
            "country": "UK",
            "litres": 99
        }, {
            "country": "Belgium",
            "litres": 60
        }];

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        chart.legend = new am4charts.Legend();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <Aux>
                <div id="am-pie-2" style={{ width: "100%", height: "500px" }} />
            </Aux>
        );
    }
}

export default PieChart;