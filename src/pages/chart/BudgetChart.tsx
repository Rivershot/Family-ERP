import EChartsReact from "echarts-for-react";

type BudgetChartProps = {
    data: number[],
    //color: string, // color?: string 부모가 값을 안 넘기면 undefined 처리.
    kind: "expense" | "budget" // 둘 중 하나의 값만을 사용한다.
}

function BudgetChart({data, kind}: BudgetChartProps) {

    const options = {
        grid:  { left:0, right:0, top:0, bottom:0 },
        xAxis: { type:"category", show:false, boundaryGap:false}, // 가로축
        yAxis: { type:"value", show:false },                      // 세로축 show:false는 숨기기
        series: [{                                                // 실제 그려지는 데이터 묶음 (배열로 여러 개 가능)
            type:"line",                                          // 꺾은 선
            smooth:true,                                          // 곡선화
            symbol:"none",                                        // 각 데이터 점의 동그라미 마커 숨김
            lineStyle:{ width:3, color: kind === "budget" ? "#3B5BFE" : "red"},      // 선 스타일 "#3B5BFE"
            areaStyle:{ color: {                                  // 선 아래 영역 채우기
                type:"linear", x:0, y:0, x2:0, y2:1,   // 위→아래 방향
                colorStops:[
                { offset:0, color: kind === "budget" ? "rgba(59,91,254,0.35)" : "rgba(239,68,68,0.35)"},   // 위: 진하게
                { offset:1, color: kind === "budget" ? "rgba(59,91,254,0)"    : "rgba(239,68,68,0)" },     // 아래: 투명
                ],
            }},
            data:data 
        }]
    }

    return(<EChartsReact style={{height: 150}} option={options}/>)
}

export default BudgetChart;

/*
 * [정리] kind === "budget" 삼항이 3군데 반복됨 → 색을 위에서 한 번만 정하면 깔끔.
 * kind별 색을 매핑 객체로 두고, 아래에서 palette.line / palette.area 로 재사용:
 *
 *   const palette = {
 *     budget:  { line: "#3B5BFE", area: "59,91,254"  },
 *     expense: { line: "#EF4444", area: "239,68,68" },
 *   }[kind];
 *
 *   lineStyle: { width:3, color: palette.line }
 *   colorStops: [
 *     { offset:0, color: `rgba(${palette.area},0.35)` },
 *     { offset:1, color: `rgba(${palette.area},0)`    },
 *   ]
 *
 * → 색 종류가 늘어도(저축·수입 등) 매핑에 한 줄만 추가하면 됨.
 */