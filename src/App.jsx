
import CryptoCalc from "./components/CryptoCalc";
import Header from "./components/Header";
export default function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-4">
        <CryptoCalc />
      </div>
    </>
  );
}
