import EChartsReact from "echarts-for-react";

type PieProp = {
    column: string[];
    data: number[];
}

function PieChart({data, column}: PieProp) {

    if(data.length <=0) {
        data = [6500000, 4500000, 1500000];
    }
    
    const options = {
      tooltip: {trigger: 'item'},
      graphic: {
        type: "text",
        left: "center", top: "center",
        style: {
            text: "This Month",
            textAlign: "center",
            fontSize: 16, fontWeight: 700, fill: "#2B2F42"
        }
      },
      series: [{
        type: "pie",
        radius: ["50%", "70%"],
        padAngle: 3,
        itemStyle: { borderRadius: 6 },
        label: { show: false },
        emphasis: { scale: false, label: { show: false }, labelLine: { show: false } },
        data: [
            { value: data[0], name: column[0] },
            { value: data[1], name: column[1] }, 
            { value: data[2], name: column[2] },
        ]
      }]
    };

    return(
        <EChartsReact option={options} style={{height: "100%"}}></EChartsReact>
    )
}

export default PieChart;