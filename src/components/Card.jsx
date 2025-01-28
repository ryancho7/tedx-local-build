import React from "react";

function Card() {
    return (
        <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[740px] h-[268px] flex-none order-0 self-stretch flex-grow-0">
            <img class="w-[268px] h-[268px] flex-none order-0 flex-grow-0" src="/Image.svg" alt="image"/>
            <div class="flex flex-col items-start gap-[20px] w-[166px] h-[110px] flex-none order-1 flex-grow-0">
                <div class="flex flex-col items-start gap-[4px]">
                    <div class="flex items-center text-[28px] leading-[34px] font-normal tracking-[-0.01em] text-[#FDFCFD]">Eddy Peng</div>
                    <div class="text-[16px] leading-[20px] font-normal font-[ABC Favorit Mono Variable Edu] tracking-[-0.01em] text-[#B1A8B3]">Informatics</div>
                </div>
                <div class="box-border flex flex-row justify-center items-center px-3 py-1.5 w-[166px] h-[32px] border border-[#5E5469] rounded-[20px] flex-none order-1 flex-grow-0 text-[#FDFCFD] tracking-wider">Design Director</div>
            </div>
        </div>
    )
}

export default Card;