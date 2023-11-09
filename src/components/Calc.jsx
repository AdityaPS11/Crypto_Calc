// Calc.jsx
import { useState, useEffect } from "react";

const Calc = () => {
  const [selectedIncome, setSelectedIncome] = useState("0-18200");
  const [selectedButton, setSelectedButton] = useState(null);

  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [expenses, setExpenses] = useState("");
  const [capitalGainsAmount, setCapitalGainsAmount] = useState(0);
  const [discountForLongTermGains, setDiscountForLongTermGains] = useState(0);
  const [netCapitalGains, setNetCapitalGains] = useState(0);

  const handleButtonClick = (buttonType) => {
    setSelectedButton((prevSelectedButton) =>
      prevSelectedButton === buttonType ? null : buttonType
    );
  };

  const handleIncomeChange = (event) => {
    setSelectedIncome(event.target.value);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "purchasePrice":
        setPurchasePrice(value);
        break;
      case "salePrice":
        setSalePrice(value);
        break;
      case "expenses":
        setExpenses(value);
        break;
      default:
        break;
    }
  };
  const calculateValues = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const sale = parseFloat(salePrice) || 0;
    const expense = parseFloat(expenses) || 0;

    // Calculate Capital Gains Amount
    const calculatedCapitalGains = sale - purchase - expense;
    setCapitalGainsAmount(calculatedCapitalGains);

    // Calculate Discount for Long Term Gains
    const calculatedDiscount =
      selectedButton === "long" && calculatedCapitalGains > 0
        ? calculatedCapitalGains * 0.5
        : 0;
    setDiscountForLongTermGains(calculatedDiscount);

    // Calculate Net Capital Gains
    const calculatedNetCapitalGains =
      selectedButton === "long"
        ? calculatedCapitalGains - calculatedDiscount
        : calculatedCapitalGains;
    setNetCapitalGains(calculatedNetCapitalGains);
  };

  useEffect(() => {
    calculateValues();
  }, [purchasePrice, salePrice, expenses, selectedButton]);

  return (
    <>
      <div className="mt-8 ml-5 max-w-[70%]">
        <div className="bg-white pl-[79px] pr-[73px] pt-[35px] p-8 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-3xl font-semibold [font-family:'Inter-Bold',Helvetica] text-center mb-[40px]">
            Free Crypto Tax Calculator for Australia
          </h2>
          {/* Row with two columns */}
          <div className="flex space-x-4  mb-4 justify-center">
            {/* Column 1: Financial Year Input Box */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center mb-1">
                <label
                  htmlFor="financialYear"
                  className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mr-2"
                >
                  Financial Year
                </label>
                <select
                  id="country"
                  className="w-[60%] pl-1 py-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm appearance-menulist"
                  defaultValue="FY 2023-24"
                >
                  <option value="FY 2023-24">FY 2023-24</option>
                </select>
              </div>
            </div>

            {/* Column 2: Country Dropdown */}
            <div className="flex-1 flex flex-col">
              <div className=" flex items-center mb-1">
                <label
                  htmlFor="country"
                  className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mr-2 ml-10"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="w-[70%] pl-1 py-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm appearance-menulist"
                  defaultValue="Australia"
                >
                  <option value="Australia">&#127759;Australia</option>
                </select>
              </div>
            </div>
          </div>
          {/* Thin gray horizontal line */}
          <hr className="my-4 border-t border-gray-300 mb-7" />
          <div className="flex space-x-4 justify-center items-start mb-[28px]">
            <div className="flex-1 flex flex-col">
              <label
                htmlFor="purchasePrice"
                className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2"
              >
                Enter Purchase Price of Crypto
              </label>
              <input
                type="text"
                id="purchasePrice"
                className="w-[90%] p-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label
                htmlFor="salePrice"
                className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2 item ml-8"
              >
                Enter Sale Price of Crypto
              </label>

              <input
                type="text"
                id="salePrice"
                className="w-[90%] p-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm items-end ml-8"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex space-x-4 justify-center items-start mb-[28px]">
            <div className="flex-1 flex flex-col">
              <label
                htmlFor="expenses"
                className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2"
              >
                Enter your Expenses
              </label>
              <input
                type="text"
                id="expenses"
                className="w-[90%] p-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex-1 flex flex-col mb-[28px]">
              <label
                htmlFor="investmentType"
                className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2 item ml-8"
              >
                Investment Type
              </label>
              <div className="flex space-x-4 ml-8">
                <button
                  className={`w-[48%] p-2 border ${
                    selectedButton === "short"
                      ? "border-blue-500 text-blue-500"
                      : "border-black text-black"
                  } font-semibold rounded-md relative flex items-center`}
                  onClick={() => handleButtonClick("short")}
                >
                  <span>Short Term</span>
                  {selectedButton === "short" && (
                    <span className="ml-1">&#10003;</span>
                  )}
                </button>
                <button
                  className={`w-[48%] p-2 border ${
                    selectedButton === "long"
                      ? "border-blue-500 text-blue-500"
                      : "border-black text-black"
                  } font-semibold rounded-md relative flex items-center`}
                  onClick={() => handleButtonClick("long")}
                >
                  <span>Long Term</span>
                  {selectedButton === "long" && (
                    <span className="ml-1">&#10003;</span>
                  )}
                </button>
              </div>
              <div className="flex space-x-20 mt-1">
                <p className="text-sm text-gray-1 ml-8">&lt; 12 months</p>
                <p className="text-sm text-gray-1 px-3">&gt; 12 months</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 justify-center items-start mb-[28px]">
            <div className="flex-1 flex flex-col">
              <label
                htmlFor="annualIncome"
                className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2"
              >
                Select Your Annual Income
              </label>
              <select
                value={selectedIncome}
                onChange={handleIncomeChange}
                type="text"
                id="annualIncome"
                className="w-[90%] p-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm"
              >
                <option value="0-18200">&#65284;0-&#65284;18,200</option>
                <option value="18,201-45,000">
                  &#65284;18,201-&#65284;45,000
                </option>
                <option value="45,001-120,001">
                  &#65284;45,001-&#65284;120,000
                </option>
                <option value="120,001-180,000">
                  &#65284;120,001-&#65284;180,000
                </option>
                <option value="180,001+">&#65284;180,001+</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col">
              <label
                htmlFor="TaxRate"
                className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2 item ml-8"
              >
                Tax Rate
              </label>

              <div className="flex space-x-20 mt-1">
                <p className="text-sm text-gray-1 ml-8">
                  {getTaxRateText(selectedIncome)}{" "}
                </p>
              </div>
            </div>
          </div>
          {selectedButton === "long" && (
            <div className="flex space-x-4 justify-center items-start mb-[28px]">
              <div className="flex-1 flex flex-col">
                <label
                  htmlFor="capitalGains"
                  className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2"
                >
                  Capital Gains Amount
                </label>
                <input
                  type="text"
                  id="capitalGains"
                  className="w-[90%] p-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm"
                  value={capitalGainsAmount}
                  readOnly
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label
                  htmlFor="discount"
                  className="text-gray-1 text-[15px] [font-family:'Inter-Bold',Helvetica] mb-2 item ml-8"
                >
                  Discount for Long Term Gains
                </label>

                <input
                  type="text"
                  id="discount"
                  className="w-[90%] p-3 bg-gray-100 rounded-md [font-family:'Inter-Bold',Helvetica] font-semibold text-sm items-end ml-8"
                  value={discountForLongTermGains}
                  readOnly
                />
              </div>
            </div>
          )}
          <div className="flex mb-[28px]">
            <div className="flex flex-col h-[97px] w-[44%] items-center justify-center gap-[8px] p-[8px] relative bg-[#ebf8f4] rounded-[8px]">
              <p className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-gray-1 text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Net Capital gains tax amount
              </p>
              <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] text-[#0fba83] font-bold text-textgreen-1 text-[24px] text-center tracking-[0] leading-[normal]">
                ${" "}
                {selectedButton === "long" || selectedButton === "short"
                  ? netCapitalGains
                  : 0}
              </div>
            </div>
            <div className="ml-[11%] flex flex-col h-[97px] w-[44%] items-center justify-center gap-[8px] p-[8px] relative bg-[#eaf1ff] rounded-[8px]">
              <p className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                The tax you need to pay*
              </p>
              <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] text-[#0141cf] font-bold text-primarydarkblue text-[24px] text-center tracking-[0] leading-[normal]">
                $ {getTaxRate(selectedIncome, netCapitalGains)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;

const getTaxRateText = (selectedIncome) => {
  // Add logic here to determine tax rate text based on selected income
  // You can use a switch or if-else statements

  switch (selectedIncome) {
    case "0-18200":
      return "0%";
    case "18,201-45,000":
      return "Nil+ 19% of excess over $18,200";
    case "45,001-120,001":
      return "$5,092+ 32.5% of excess over $45,000";
    case "120,001-180,000":
      return "$29,467+ 37% of excess over $120,000";
    case "180,001+":
      return "$51,667+ 45% of excess over $180,000";
    default:
      return "";
  }
};
const getTaxRate = (selectedIncome, netCapitalGains) => {
  switch (selectedIncome) {
    case "0-18200":
      return "0%";
    case "18,201-45,000":
      return 0.19 * netCapitalGains;
    case "45,001-120,001":
      return 0.325 * netCapitalGains;
    case "120,001-180,000":
      return 0.37 * netCapitalGains;
    case "180,001+":
      return 0.45 * netCapitalGains;
    default:
      return "";
  }
};
