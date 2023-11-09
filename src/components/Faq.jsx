

const Faq = () => {
  return (
    <div className="mt-8 ml-5 max-w-[70%]">
      <div className="bg-white pt-[35px] rounded-lg shadow-lg">
        <div className="inline-flex gap-[24px] top-[24px] left-[24px] flex-col items-start relative">
          <div className="relative w-[500px] h-[51px] mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0f1629] text-[30px] tracking-[0] leading-[21.6px]">
            Frequently Asked Questions
          </div>
          <div className="inline-flex gap-[15px] flex-[0_0_auto] flex-col items-start relative">
            <div className="flex h-[173px] gap-[10px] self-stretch w-full flex-col items-start relative">
              <p
                id="1"
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap cursor-pointer"
              >
                How are cryptocurrencies taxed in Australia?{" "}
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative self-stretch h-[129px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                The Australian Taxation Office (ATO) regards cryptocurrency as
                both property, which is subject to Capital Gains Tax (CGT), and
                income, which is subject to Income Tax. CGT applies when you
                sell, trade, gift, or make purchases using cryptocurrency. On
                the other hand, Income Tax applies when you receive
                cryptocurrency as payment for services,
                <br /> work, mining, staking, or other activities. To simplify
                tax calculations, consider using a free crypto tax calculator
                for Australia.
              </p>
            </div>
            <div className="relative w-[830px] h-px border-b [border-bottom-style:solid] border-[#c9cfdd99]" />
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p
                id="2"
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap cursor-pointer"
              >
                What’s the difference between long-term and short-term capital
                gains?
                <span className="ml-1 font-light">&#9662;</span>
              </p>

              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                The distinction between long-term and short-term capital gains
                lies in the duration of ownership. When you own an asset, such
                as cryptocurrency, for more than 12 months, any gains from its
                sale are categorised as long-term. These long-term gains often
                receive a 50% discount on the capital gains tax (CGT). In
                contrast, if you hold the asset for 12 months or less, the gains
                are considered short-term, and they are taxed at your regular
                income tax rate.
              </p>
            </div>
            <div className="relative w-[830px] h-px border-b [border-bottom-style:solid] border-[#c9cfdd99]" />
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                Do I have to pay tax on crypto-to-crypto transactions?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] h-[248px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                Yes, according to the ATO, when you trade one cryptocurrency for
                another, like NFTs, stablecoins, or tokens, it&#39;s seen as
                selling one asset to buy another, and any profit you make from
                this exchange is subject to Capital Gains Tax. To compute taxes
                for crypto-to-crypto transactions, you must determine the fair
                market value of your coins in AUD at both the acquisition and
                disposal times. However, this can be challenging because many
                exchanges use cryptocurrency as the standard for valuation.
                <br />
                <br />
                Explore KoinX for a streamlined experience in calculating your
                cryptocurrency taxes. Our historical price engine swiftly
                delivers the fair market value of your crypto holdings at the
                time of each transaction, making tax assessment hassle-free.
              </p>
            </div>
            <div className="inline-flex h-[448px] gap-[10px] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                How do I lower my cryptocurrency taxes?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[640px] h-[29px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                Here are the top 6 strategies for lowering your cryptocurrency
                taxes in Australia:
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Bold',Helvetica] font-normal text-gray-1 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-bold">Hold for over 12 months-</span>
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium">
                  {" "}
                  Hold your crypto for more than 12 months to qualify for a 50%
                  long-term CGT discount to reduce your tax liability.
                </span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Bold',Helvetica] font-normal text-gray-1 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-bold">Offset gains with losses-</span>
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium">
                  {" "}
                  Offset capital gains with capital losses from cryptocurrency,
                  reducing your overall tax burden.
                </span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Bold',Helvetica] font-normal text-gray-1 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-bold">Claim tax deductions-</span>
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium">
                  {" "}
                  Explore opportunities to claim significant deductions on your
                  regular income if you&#39;re a trader or running a crypto
                  business.
                </span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Bold',Helvetica] font-normal text-gray-1 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-bold">Use crypto tax tools-</span>
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium">
                  {" "}
                  Employ crypto tax software like KoinX or seek help from a
                  crypto tax specialist to streamline calculations and ensure
                  compliance.
                </span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Bold',Helvetica] font-normal text-gray-1 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-bold">Donate to charities-</span>
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium">
                  {" "}
                  Donate cryptocurrency to registered charities since it’s not a
                  taxable event, and claim deductions on the donated amount.
                </span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Bold',Helvetica] font-normal text-gray-1 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-bold">Full disclosure-</span>
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium">
                  {" "}
                  Be transparent and disclose all your crypto transactions to
                  the ATO to avoid penalties for hiding trading activities.
                </span>
              </p>
            </div>
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                Can the ATO track crypto?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] h-[151px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                The Australian Taxation Office (ATO) possesses strong tracking
                capabilities for cryptocurrency transactions. Since 2014,
                they&#39;ve been gathering data on crypto activities, including
                KYC info from exchanges and wallets. The ATO&#39;s data matching
                program, active since 2019, lets them access data from service
                providers like Binance and CoinJar, covering personal details
                and transaction specifics. Since 2020, the ATO has been
                notifying Australian crypto investors to report holdings to
                avoid penalties.
              </p>
            </div>
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                What is the best crypto tax calculator for Australia?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] h-[96px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                KoinX is a crypto tax platform that makes it easy to calculate
                tax on crypto transactions. It also provides portfolio insights
                of all crypto exchange accounts combined, making it a valuable
                tool for chartered accountants and VDA Investors alike.
              </p>
            </div>
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px]">
                Do I have to pay tax if I lose money trading crypto?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                In Australia, when your cryptocurrency loses value, it&#39;s
                classified as a capital loss. This means you won&#39;t have to
                pay taxes on that loss. It&#39;s a way to offset any gains you
                might have made in other investments for tax purposes.
              </p>
            </div>
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                Is using a crypto tax calculator safe?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                KoinX provides a reliable crypto tax calculator that can assist
                you in determining your tax obligations for cryptocurrency
                transactions. This tool accurately tracks your portfolio on your
                preferred exchange and computes your gains or losses based on
                the crypto amounts and prices involved.
              </p>
            </div>
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                Which exchanges do you support?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                KoinX seamlessly integrates with a wide array of exchanges,
                including Binance, CoinSpot, MEXC, Bybit, Coinbase, Kraken, and
                numerous others. It effortlessly consolidates cryptocurrency
                transactions from over 180+ chains, exchanges, and wallets,
                presenting them in a user-friendly unified dashboard.
              </p>
            </div>
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="w-[696px] relative mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px]">
                Do I have to pay tax if I transfer crypto from one wallet to
                another?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                Transferring cryptocurrency from one wallet to another that you
                own in Australia is not subject to tax, as it is not recognised
                as a taxable event, and capital gains tax is not triggered.
                Nevertheless, it&#39;s essential to keep detailed records of
                these transfers, particularly if you are utilising automated
                crypto tax software like KoinX. KoinX, as a reliable crypto tax
                software, can streamline the process, making it easier to
                maintain accurate and efficient tax records and reporting while
                ensuring compliance with Australian tax regulations.
              </p>
            </div>
            <div className="relative w-[830px] h-px border-b [border-bottom-style:solid] border-[#c9cfdd99]" />
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                How do I use a cryptocurrency tax calculator?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                In order to use a cryptocurrency tax calculator, you need to
                input information about your cryptocurrency transactions.
                <br />
                After you enter your information, the cryptocurrency tax
                calculator will calculate the gain or loss on every transaction.
                <br />
                <br />
                This includes:
                <br />
                1. The financial year you want to calculate your taxes for.
                <br />
                2. The country you want to calculate your taxes for.
                <br />
                3. The purchase price of the coin.
                <br />
                4. The sale price of the coin.
              </p>
              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                You will get results that mention the following:
                <br />
                1. The total profit/loss you made
                <br />
                2. The tax you’re liable to pay
              </p>
            </div>
            <p className="relative w-[421px] h-[19px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[14px]">
              <span className="text-[#161b3d]">Still have doubts?</span>
              <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#161b3d]">
                &nbsp;
              </span>
              <a
                href="#"
                className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#0052fe] underline"
              >
                Consult with a crypto taxation expert
              </a>
            </p>
            <div className="inline-flex gap-[10px] flex-[0_0_auto] flex-col items-start relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                How do I calculate my crypto tax in Australia?
                <span className="ml-1 font-light">&#9662;</span>
              </p>
              <p className="relative w-[830px] h-[203px] [font-family:'Inter-Medium',Helvetica] font-normal text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-medium">
                  To calculate your crypto tax in Australia accurately, you need
                  to consider both income tax and capital gains tax.
                  <br />
                  <br />
                </span>
                <span className="[font-family:'Inter-Bold',Helvetica] font-bold">
                  Income Tax
                  <br />
                </span>
                <span className="font-medium">
                  In Australia, when an individual (investor) sells, trades,
                  spends, earns (salary, mining, interest) or gifts
                  cryptocurrency, the net capital gain is taxed at the same rate
                  as their Income Tax. This tax rate is determined based on
                  their total income for the tax year.
                  <br />
                  <br />
                </span>
              </p>
              <div className="inline-flex h-[372px] gap-[16px] flex-col items-start relative">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0b1426] text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                  ATO Individual Income Tax Rates 2022–2023
                </p>
                <div className="relative w-[630px] h-[301px] mr-[-24.00px]">
                  <div className="w-[214px] top-0 left-0 bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <div className="absolute w-[58px] top-[14px] left-[78px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Income
                    </div>
                  </div>
                  <div className="w-[214px] top-[50px] left-0 bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <div className="w-[98px] left-[58px] absolute top-[14px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $0 - $18,200
                    </div>
                  </div>
                  <div className="w-[214px] top-[100px] left-0 bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <div className="w-[139px] left-[38px] absolute top-[14px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $18,201 - $45,000
                    </div>
                  </div>
                  <div className="w-[214px] top-[150px] left-0 bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <div className="w-[149px] left-[32px] absolute top-[14px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $45,001 - $120,000
                    </div>
                  </div>
                  <div className="w-[214px] top-[200px] left-0 bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <div className="w-[156px] left-[30px] absolute top-[14px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $120,001 - $180,000
                    </div>
                  </div>
                  <div className="w-[214px] top-[250px] left-0 bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <div className="w-[80px] left-[68px] absolute top-[14px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $180,001+
                    </div>
                  </div>
                  <div className="w-[392px] top-0 left-[214px] bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <div className="absolute w-[68px] top-[14px] left-[168px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Tax Rate
                    </div>
                  </div>
                  <div className="w-[392px] top-[50px] left-[214px] absolute h-[50px]">
                    <div className="w-[214px] border border-solid border-[#3e424a] absolute h-[50px] top-0 left-0 bg-white" />
                    <div className="w-[392px] border-[0.5px] border-solid border-gray-3 absolute h-[50px] top-0 left-0 bg-white" />
                    <div className="absolute w-[23px] top-[15px] left-[191px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      0%
                    </div>
                  </div>
                  <div className="w-[392px] top-[100px] left-[214px] bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <p className="absolute w-[279px] top-[14px] left-[62px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      Nil + 19% of the excess over $18,200
                    </p>
                  </div>
                  <div className="w-[392px] top-[150px] left-[214px] bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <p className="absolute w-[332px] top-[14px] left-[36px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $5,092 + 32.5% of the excess over $45,000
                    </p>
                  </div>
                  <div className="w-[392px] top-[200px] left-[214px] bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <p className="absolute w-[335px] top-[14px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $29,467 + 37% of the excess over $120,000
                    </p>
                  </div>
                  <div className="w-[392px] top-[250px] left-[214px] bg-white border-[0.5px] border-solid border-gray-3 absolute h-[50px]">
                    <p className="absolute w-[336px] h-[22px] top-[13px] left-[34px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e424a] text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                      $51,667 + 45% of the excess over $180,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-[830px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0b1426] text-[20px] tracking-[0] leading-[21.6px]">
                Capital Gains Tax (CGT)
                <span className="ml-1 font-light">&#9662;</span>
              </div>
              <p className="relative w-[830px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                Calculate your capital gains or losses on cryptocurrency
                transactions using this formula:
              </p>
              <p className="relative w-[830px] h-[38px] [font-family:'Inter-Bold',Helvetica] font-bold text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                {" "}
                Capital Gain/Loss = Capital Proceeds - Cost Basis
              </p>
              <p className="relative w-[830px] h-[287px] [font-family:'Inter-Bold',Helvetica] font-normal text-gray-2 text-[16px] tracking-[0] leading-[25.6px]">
                <span className="font-bold">
                  Note:
                  <br />
                  Capital Proceeds (sale value or any form of receipt)
                  <br />
                  Cost Basis (costs incurred to acquire, hold, and dispose of
                  the asset)
                  <br />
                </span>
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium">
                  <br />
                  Your tax rate depends on whether you held the cryptocurrency
                  for more than 12 months (long-term) or less (short-term).
                  Long-term gains receive a 50% discount.
                  <br />
                  <br />
                  Calculate your Australian crypto taxes accurately and
                  effortlessly with KoinX&#39;s free crypto tax calculator for
                  Australia. It simplifies the process, ensuring compliance with
                  the latest tax rates and regulations making crypto tax
                  calculations easy and precise.
                  <br />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Faq;
