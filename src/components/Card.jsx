const frame = "/Frame.svg"
const Card = () => {
    return (
        <div className="bg-[#0052FE] flex flex-col w-[326px] h-[576px] items-center gap-[35px] py-[55px]  px-[16px]relative rounded-[8px] mt-8 ml-[15%]">
            <div className=" flex-col h-[182px] gap-[14px] inline-flex items-center relative">
                <p className="relative w-[268px] mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[24px] text-center tracking-[0] leading-[40px]">
                    Get Started with KoinX for FREE
                </p>
                <p className="relative w-[327px] h-[68px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#f2f2f2] text-[14px] text-center tracking-[0] leading-[24px]">
                    With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your
                    tax reports.
                </p>
            </div>
            <img className="relative w-[178.66px] h-[166.22px]" alt="Frame" src={frame} />
            <div className="relative mb-[-0.22px] w-[237px] h-[48px]">
                <div className="h-[48px]">
                    <div className="w-[237px] h-[48px]">
                        <div className="flex-col h-[48px] justify-center gap-[8px] px-[24px] py-[8px] bg-white rounded-[8px] inline-flex items-center relative">
                            <div className="gap-[6px] flex-[0_0_auto] inline-flex items-center relative">
                                <button className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-1 text-[16px] tracking-[0] leading-[28px] whitespace-nowrap">
                                    Get Started for FREE &gt;
                                </button>
                                <div className="relative w-[20px] h-[20px] bg-[url(arrow-right.svg)] bg-[100%_100%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;
