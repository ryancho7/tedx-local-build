import React from "react";
import Card from "../components/Card";

function TeamPage() {

    const copresidents = [
        "copresident",
        "copresident",
        "copresident"
    ];

    const designers = [
        "designer",
        "designer",
        "designer",
        "designer",
        "designer",
        "designer",
        "designer",
        "designer",
    ];

    const marketing = [
        "markering",
        "markering",
        "markering",
        "markering",
        "markering",
        "markering",
        "markering",
        "markering",
        "markering",
    ];

    return (
        <div>
            <div class="flex flex-col justify-end items-start p-[400px_200px_100px] gap-[10px] isolation-isolate absolute w-[1920px] h-[1000px] left-0 top-0 bg-[#0C0133]">
                <div class="flex flex-col items-start p-0 gap-[20px] w-[1520px] h-[248px] mix-blend-normal flex-none order-0 z-0">
                    <div class="flex flex-row items-center p-0 gap-[15px] w-[180px] h-[24px] flex-none">
                        <div class="w-[11px] h-[11px] bg-white flex-none rounded-[60px]"></div>
                        <div class="w-[154px] h-[24px] text-white text-[20px] leading-[24px] tracking-[-0.01em] font-normal whitespace-nowrap" style={{ fontFamily: "'ABC Favorit Mono Variable Edu', sans-serif" }}>
                            MEET THE TEAM
                        </div>
                    </div>
                    <div class="w-[1224px] h-[150px] text-white text-[44px] leading-[50px] tracking-[-0.02em] font-bold" style={{ fontFamily: "'ABC Favorit Variable Edu', sans-serif" }}>
                        Driven by passion, creativity, and dedication, the TEDxUofW team unites to showcase visionary speakers, thought-provoking ideas, and immersive experiences.
                    </div>
                    <div class="w-[968px] h-[34px] text-white text-[28px] leading-[34px] tracking-[-0.01em] font-normal" style={{ fontFamily: "'ABC Favorit Variable Edu', sans-serif" }}>
                        See teams of copresidents, design, marketing, blah blah blah....
                    </div>
                </div>
                {/* <div class="absolute w-[1920px] h-[1920px] left-0 top-[-260px] bg-gradient-to-t from-[#080808] via-[#080808] to-transparent bg-[url('leavesdot2.png')] bg-blend-screen z-1"></div> */}
            </div>
            <div class="flex flex-col items-start w-[1920px] h-[9874px] top-[1000px] p-[100px_200px_200px_200px] gap-[100px] bg-[#080808] absolute" style={{ fontFamily: "'ABC Favorit Variable Edu', sans-serif" }}>
                <div class="flex flex-wrap items-start content-start gap-[40px] w-[1520px] h-[666px] flex-none order-0 self-stretch flex-grow-0">
                    <div class="flex flex-row justify-between items-center w-[1520px] h-[50px]">
                        <h1 class="w-[352px] h-[50px] font-[700] text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD]">CO-PRESIDENTS</h1>
                        <div class="box-border flex flex-row items-center p-[16px_20px] gap-[8px] w-[133px] h-[49px] bg-[#403851] rounded-[60px] flex-none order-0 flex-grow-0 z-0">
                            <div class=" font-[400] text-[24px] leading-[32px] text-center text-[#FDFCFD]">Teams</div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_921_5913)">
                                <path d="M2 7L12 17L22 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_921_5913">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] h-[576px]">
                        {copresidents.map((copresident, index) => (
                            <Card index={index}/>
                        ))}
                    </div> 
                </div>
                <div class="flex flex-col items-start p-0 gap-10 w-[1520px] h-[1282px] flex-none order-1 self-stretch flex-grow-0">
                    <div class="flex flex-row items-start p-0 gap-2.5 w-[164px] h-[50px] flex-none order-0 flex-grow-0">
                        <div class="font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] flex-none order-0 flex-grow-0">
                            DESIGN
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] h-[576px]">
                        {designers.map((designer, index) => (
                            <Card index={index}/>
                        ))}
                    </div> 
                </div>
                <div class="flex flex-col items-start p-0 gap-10 w-[1520px] h-[1282px] flex-none order-1 self-stretch flex-grow-0">
                    <div class="flex flex-row items-start p-0 gap-2.5 w-[164px] h-[50px] flex-none order-0 flex-grow-0">
                        <div class="font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] flex-none order-0 flex-grow-0">
                            WEB DEVELOPMENT
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] h-[576px]">
                        {designers.map((designer, index) => (
                            <Card index={index}/>
                        ))}
                    </div> 
                </div>
                <div class="flex flex-col items-start p-0 gap-10 w-[1520px] h-[1282px] flex-none order-1 self-stretch flex-grow-0">
                    <div class="flex flex-row items-start p-0 gap-2.5 w-[164px] h-[50px] flex-none order-0 flex-grow-0">
                        <div class="font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] flex-none order-0 flex-grow-0">
                            FINANCE
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] h-[576px]">
                        {designers.map((designer, index) => (
                            <Card index={index}/>
                        ))}
                    </div> 
                </div>
                <div class="flex flex-col items-start p-0 gap-10 w-[1520px] h-[1282px] flex-none order-1 self-stretch flex-grow-0">
                    <div class="flex flex-row items-start p-0 gap-2.5 w-[164px] h-[50px] flex-none order-0 flex-grow-0">
                        <div class="font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] flex-none order-0 flex-grow-0">
                            LOGISTICS
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] h-[576px]">
                        {designers.map((designer, index) => (
                            <Card index={index}/>
                        ))}
                    </div> 
                </div>
                <div class="flex flex-col items-start p-0 gap-10 w-[1520px] h-[1590px] flex-none order-1 self-stretch flex-grow-0">
                    <div class="flex flex-row items-start p-0 gap-2.5 w-[164px] h-[50px] flex-none order-0 flex-grow-0">
                        <div class="font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] flex-none order-0 flex-grow-0">
                            MARKETING
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] h-[576px]">
                        {marketing.map((marketer, index) => (
                            <Card index={index}/>
                        ))}
                    </div> 
                </div>
                <div class="flex flex-col items-start p-0 gap-10 w-[1520px] h-[1590px] flex-none order-1 self-stretch flex-grow-0">
                    <div class="flex flex-row items-start p-0 gap-2.5 w-[164px] h-[50px] flex-none order-0 flex-grow-0">
                        <div class="font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] flex-none order-0 flex-grow-0">
                            SPEAKER SELECTION
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] h-[576px]">
                        {marketing.map((designer, index) => (
                            <Card index={index}/>
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default TeamPage;
