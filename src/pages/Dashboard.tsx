import BudgetChart from "./chart/BudgetChart" 
import ExpenseChart from "./chart/ExpenseChart"
import PieChart from "./chart/PieChart";
import { MdSavings, MdPayments, MdApproval, MdEvent, MdChecklist, MdFamilyRestroom, MdVideocam } from "react-icons/md";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import { themeQuartz } from "ag-grid-community"; 
import type { ICellRendererParams } from "ag-grid-community";
import { useState, useEffect } from "react";
import axios from "axios";

type Approval = { num: string; docName: string, type: string};
type Family = { num: string; img: string; name: string, relation: string };
type Schedule = { id: number; startTime: string; endTime: string, date: string, 
                content: string, category: string, link: string};
                
function DashBoard() {
    const defaultData = [100,200,150,200,300,200,300,340];
    const col: ColDef<Approval>[] = [
        { field : "num", headerName : "#번호", flex: 0.5}, 
        { field : "docName", headerName : "기안명" },
        { field : "type", headerName : "구분" },
    ];
    let rowData = [
        { num: "01", docName: "여름휴가 계획", type: "결재요청"}, 
        { num: "02", docName: "용돈 인상 요청", type: "결재요청"},
        { num: "03", docName: "집안일 제분담", type: "협조자"}
    ]

    // 가족구성원 Grid
    const faCol: ColDef<Family>[] = [
        { field: "num", headerName: "#", flex: 0.5 },
        { field: "name", headerName: "Name", cellRenderer: (p: ICellRendererParams<Family>) => (
            <div className="flex items-center gap-2 h-full">
                <img src={p.data?.img} className="w-8 h-8 rounded-full"></img>
                <span>{p.data?.name}</span>
            </div>
        ) },
        { field: "relation", headerName: "Relation" },
    ];
    let faRowData = [
        { num: "01", img: "/avatars/avatar1.svg", name: "Earl Grines", relation: "GrandFather"},
        { num: "02", img: "/avatars/avatar2.svg", name: "James Tyler", relation: "Dad"},
        { num: "03", img: "/avatars/avatar3.svg", name: "Tom Anderson", relation: "Ancle"},
        { num: "04", img: "/avatars/avatar4.svg", name: "Gobby", relation: "Mom"},
    ];

    // 일정 Axios, useEffect 빈 배열로 최초 1회만 실행한다. 
    const [schedule, setSchedule] = useState<Schedule[]>([]);
    useEffect(()=>{
        axios.get("/mock/schedule.json").then((res) => setSchedule(res.data))
    },[])

    // 일정 Grouping
    const group = schedule.reduce<Record<string, Schedule[]>>((acc, item) => {
        acc[item.date] ??=[]
        acc[item.date].push(item);
        return acc
    },{})

    // expense
    const [expense, setExpense] = useState<number[]>([]);
    useEffect(()=>{
        axios.get("/mock/expense.json").then((res) => setExpense(res.data));
    }, [])

    // PieChart
    const [pieData, setPieData] = useState<number[]>([]);
    const [pieName, setPieName] = useState<string[]>([]);
    useEffect(()=>{
        axios.get<Record<string, number>[]>("/mock/pieData.json").then((res) => {
            const pieData = res.data.map((val) => Object.values(val)[0]);
            const nameData: string[] = res.data.map((val) => Object.keys(val)[0]);
            setPieData(pieData);
            setPieName(nameData);
        });
    },[]) 

    // Grid Theme
    const gridTheme = themeQuartz.withParams({
        wrapperBorder: false,       // 외곽선 제거
        columnBorder: false,        // Body 세로 구분선 제거
        headerColumnBorder: false,  // header 세로 구분선 제거
        rowBorder: false,            // 행 사이 가로선
        headerRowBorder: false,       // 헤더 아래 가로선 
        headerBackgroundColor: "white",
        
    })

    function dateLabel(param:string) {
        const year = param.slice(0,4);
        const month = param.slice(4,6);
        const day = param.slice(6,8);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const target = new Date(+year, +month - 1, +day);
        const diff = (+target - +today) / 86400000;

        return ({0: "Today", 1: "내일"} as Record<number, string>)[diff] ?? `${target.getMonth()+1}월 ${target.getDate()}일`;
    }

    // "0830" → "08:30"
    const fmtTime = (t: string) => `${t.slice(0,2)}:${t.slice(2,4)}`;

    // 카테고리 → 색점 색 (Figma palette)
    const categoryColor: Record<string, string> = {
        meeting: "#3B82F6",      // blue/500
        appointment: "#EC4899",  // pink/500
        task: "#FBBF24",         // amber/400
        work: "#22C55E",         // green/500
    };

    return (
        <div className="h-full flex flex-col">
            <div className="border-b border-gray-300 py-2 shrink-0">
                <h1 className="text-3xl">DashBoard</h1>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-5 py-4 flex-1 min-h-0">
                <div id="cd1" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd1_tit" className="px-4 my-1 h-20 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#4368FA]/5">
                            <MdSavings size={35} className="text-[#4368FA]"></MdSavings>
                        </div> 
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-base font-semibold">이번달 가계 예산</span>
                            <span className="text-[#2B2F42] text-xl font-bold">₩ 6,500,000</span>
                        </div>
                        <div className="ml-auto">
                            <span className="text-[#16A34A] text-sm font-bold">+ ₩500,000</span>
                        </div>
                    </div>
                    <div id="cd1_content" className="">
                        <BudgetChart data={defaultData} kind={"budget"}></BudgetChart>
                    </div>
                </div>
                <div id="cd2" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd2_tit" className="px-4 my-1 h-20 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#4368FA]/5">
                            <MdPayments size={35} className="text-[red]"></MdPayments>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-base font-semibold">이번달 가계 지출</span>
                            <span className="text-[#2B2F42] text-xl font-bold">₩ 4,500,000</span>
                        </div>
                        <div className="ml-auto">
                            <span className="text-[#EF4444] text-sm font-bold">- ₩500,000</span>
                        </div>
                    </div>
                    <div id="cd2_content" className="">
                        <BudgetChart data={defaultData} kind={"expense"}></BudgetChart>
                    </div>
                </div>
                <div id="cd3" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd3_tit" className="px-4 my-1 h-20 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#4368FA]/5">
                            <MdApproval size={35} className="text-[#7C3AED]"></MdApproval>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-base font-semibold text-xl">전자결재</span>
                        </div>
                    </div>
                    <div id="cd3_content" className="" style={{height: 200, width: "100%"}}>
                        <AgGridReact theme={gridTheme} defaultColDef={{flex:1, resizable:false, headerClass: "ag-header-center",cellStyle:{ textAlign: "center"}}} columnDefs={col} rowData={rowData}></AgGridReact>
                    </div>
                </div>
                <div id="cd4" className="row-span-2 flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd4_tit" className="px-4 my-1 h-20 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#F59E0B]/5">
                            <MdEvent size={35} className="text-[#F59E0B]"></MdEvent>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-base font-semibold text-xl">2026년 6월 일정</span>
                        </div>
                    </div>
                    <div id="cd4_content" className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-6">
                    {
                        Object.entries(group).map(([date, items])=>{
                            const isToday = dateLabel(date) === "Today";
                            return (
                            <div className="flex flex-col gap-2" key={date}>
                                <div className={`text-[13px] font-bold leading-5 ${isToday ? "text-blue-500" : "text-gray-700"}`}>{dateLabel(date)}</div>
                                <ul className="flex flex-col gap-2">
                                    {
                                        items.map((item) => (
                                            <li className="flex flex-col" key={item.id}>
                                                {/* Meta: 색점 + 시간 + (링크 있으면) 화상 배지 */}
                                                <div className="flex items-center gap-2 h-4">
                                                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: categoryColor[item.category] ?? "#A1A1AA" }} />
                                                    <span className="flex items-center gap-1 text-[11px] font-semibold text-[#A1A1AA]">
                                                        <span>{fmtTime(item.startTime)}</span>
                                                        <span>–</span>
                                                        <span>{fmtTime(item.endTime)}</span>
                                                    </span>
                                                    {item.link && (
                                                        <span className="w-3 h-3 rounded-full bg-[#A1A1AA] flex items-center justify-center">
                                                            <MdVideocam size={8} className="text-white" />
                                                        </span>
                                                    )}
                                                </div>
                                                {/* Title */}
                                                <div className="pl-5 text-xs font-medium text-[#0C0C0D]">{item.content}</div>
                                                {/* URL (링크 있을 때만) */}
                                                {item.link && (
                                                    <a href={item.link} className="pl-5 text-[11px] text-[#A1A1AA] truncate hover:underline">{item.link}</a>
                                                )}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            );
                        })
                    }
                    </div>
                </div>
               <div id="cd5" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd5_tit" className="pt-4 h-15 flex items-center">
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-xl font-semibold">2026년 가계 지출 현황</span>
                        </div>
                    </div>
                    <div id="cd5_content" className="h-[260px]">
                        <ExpenseChart data={expense}></ExpenseChart>
                    </div>
                </div>
                <div id="cd6" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd6_tit" className="px-4 my-1 h-18 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#14B8A6]/5">
                            <MdChecklist size={35} className="text-[#14B8A6]"></MdChecklist>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-xl font-semibold">Plan</span>
                        </div>
                    </div>
                    <div id="cd6_content" className="flex-1 min-h-0">
                        <PieChart data={pieData} column={pieName}></PieChart>
                    </div>
                </div>
                <div id="cd7" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd7_tit" className="px-4 my-1 h-18 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#EC4899]/5">
                            <MdFamilyRestroom size={35} className="text-[#EC4899]"></MdFamilyRestroom>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-base font-semibold text-xl">가족구성원 정보</span>
                        </div>
                    </div>
                    <div id="cd7_content" className="" style={{height: 240, width: "100%"}}>
                        <AgGridReact theme={gridTheme} defaultColDef={{flex:1, resizable:false, headerClass: "ag-header-center",cellStyle:{ textAlign: "center"}}} columnDefs={faCol} rowData={faRowData}></AgGridReact>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;