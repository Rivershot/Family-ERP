import BudgetChart from "./chart/BudgetChart" 
import { MdSavings, MdPayments, MdApproval, MdEvent, MdChecklist, MdFamilyRestroom } from "react-icons/md";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import { themeQuartz } from "ag-grid-community";

type Approval = { num: string; docName: string, type: string};

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

    // Grid Theme
    const gridTheme = themeQuartz.withParams({
        wrapperBorder: false,       // 외곽선 제거
        columnBorder: false,        // Body 세로 구분선 제거
        headerColumnBorder: false,  // header 세로 구분선 제거
        rowBorder: false,            // 행 사이 가로선
        headerRowBorder: false,       // 헤더 아래 가로선 
        headerBackgroundColor: "white",
        
    })

    return (
        <div>
            <div className="border-b border-gray-300 py-2">
                <h1 className="text-3xl">DashBoard</h1>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-5 py-4">
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
                        <div className="">
                            <MdEvent size={35} className="text-[#F59E0B]"></MdEvent>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-base font-semibold text-xl">2026년 6월 일정</span>
                        </div>
                    </div>
                    <div id="cd4_content" className="">
                    </div>
                </div>
               <div id="cd5" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd5_tit" className="px-4 my-1 h-20 flex items-center">
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-xl font-semibold">2026년 가계 지출 현황</span>
                        </div>
                    </div>
                    <div id="cd5_content" className="">
                    </div>
                </div>
                <div id="cd6" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd6_tit" className="px-4 my-1 h-20 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#14B8A6]/5">
                            <MdChecklist size={35} className="text-[#14B8A6]"></MdChecklist>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-xl font-semibold">Plan</span>
                        </div>
                    </div>
                    <div id="cd6_content" className="">
                        
                    </div>
                </div>
                <div id="cd7" className="flex flex-col border border-violet-300 rounded-lg">
                    <div id="cd7_tit" className="px-4 my-1 h-20 flex items-center">
                        <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#EC4899]/5">
                            <MdFamilyRestroom size={35} className="text-[#EC4899]"></MdFamilyRestroom>
                        </div>
                        <div className="flex flex-col px-5">
                            <span className="text-[#5A6478] text-base font-semibold text-xl">가족구성원 정보</span>
                        </div>
                    </div>
                    <div id="cd7_content" className="" style={{height: 200, width: "100%"}}>
                        <AgGridReact theme={gridTheme} defaultColDef={{flex:1, resizable:false, headerClass: "ag-header-center",cellStyle:{ textAlign: "center"}}} columnDefs={col} rowData={rowData}></AgGridReact>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;