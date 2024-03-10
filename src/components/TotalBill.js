import React from "react";

export default function TotalBill({ billAmount, totalTip, totalCost }) {
  return (
    <div>
      <h1 style={{font:"1rem", fontWeight:"bold"}}>
        Your total bill is {totalCost} ({billAmount} + {totalTip} tip)
      </h1>
    </div>
  );
}
