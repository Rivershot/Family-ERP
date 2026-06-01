import EChartsReact from "echarts-for-react";

type ExpenseProp = {
    data: number[]
}

function ExpenseChart ({data = []}: ExpenseProp) {
    // Data를 전달받지 않은 경우 기본값 셋팅.
    if(data.length <= 0) {
        data = [18400, 14000, 30000, 22000, 16500, 28400, 15000];
    }

    // 막대별 색 (Figma: Jan·Mar·Jun 코랄, 나머지 파랑)
    const palette = ["#FB7A5A", "#4368FA", "#FB7A5A", "#4368FA", "#4368FA", "#FB7A5A", "#4368FA"];
    const seriesData = data.map((value, i) => ({
        value,
        itemStyle: { color: palette[i % palette.length], borderRadius: 6 }, // 6 ≈ 막대 높이 절반 → 알약 모양
    }));

    const options = {
        grid: { left: 8, right: 56, top: 8, bottom: 8, containLabel: true }, // 좌(월라벨)·우(값라벨) 여백 확보
        xAxis: { type: "value", show: false },                              // 숫자축 통째 숨김
        yAxis: {
            type: "category",
            inverse: true,                                                   // 첫 항목(Jan)을 맨 위로
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            axisLine: { show: false },                                       // 축선 제거
            axisTick: { show: false },                                       // 눈금 제거
            axisLabel: { color: "#5A6478", fontWeight: 700 },                // 월 라벨 회색 굵게
        },
        series: [{
            type: "bar",
            barWidth: 12,                                                    // 얇은 막대
            data: seriesData,
            label: {
                show: true,
                position: "right",
                color: "#2B2F42",
                fontWeight: 700,
                formatter: (p: { value: number }) => p.value.toLocaleString(), // 천단위 콤마
            },
        }],
    };

    return(
        <EChartsReact option={options} style={{height: "100%"}}></EChartsReact>
    );
}

export default  ExpenseChart;