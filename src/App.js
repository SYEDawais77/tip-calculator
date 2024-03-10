import { useState } from "react";
import Bill from "./components/Bill";
import CustomTip from "./components/CustomTip";
import TotalBill from "./components/TotalBill";
import Reset from "./components/Reset";
function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [yourFriendTip, setYourFriendTip] = useState(0);

  
    const percentage = (yourTip + yourFriendTip) / 2
    const totalTip = (percentage * billAmount)/100;
    const  totalCost = billAmount + totalTip;
    



  function handleOnChangeBillAmount(e) {
    if (e.target.value >= 0) {
      setBillAmount(Number(e.target.value));
    }
  }
  
  
  



  function handleReset() {
    setYourTip(0);
    setYourFriendTip(0);
    setBillAmount(0);
  }

  return (
    <div className="card">
      <Bill
        billAmount={billAmount}
        onChangeBillAmount={handleOnChangeBillAmount}
      />
      <CustomTip
        value={yourTip}
        onChange={setYourTip}
      >
        <p>How did you like the Service?</p>
      </CustomTip>
      <CustomTip
        value={yourFriendTip}
        onChange={setYourFriendTip}
      >
        <p>How did you like the Service?</p>
      </CustomTip>
      <TotalBill billAmount={billAmount}  totalTip={totalTip} totalCost={totalCost}  />
      {(billAmount > 0 || yourTip > 0 || yourFriendTip > 0) && (
        <Reset handleReset={handleReset} />
      )}
    </div>
  );
}

export default App;
