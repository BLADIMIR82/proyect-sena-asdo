import React from "react";

const NoDataFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
      }}
    >
      <h1 className="text-xl">product not found!!</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoVXVSSgP1m1Ub3nAna0G2kY-Hqj2YJloyw&usqp=CAU" alt="MDN" />
    </div>
  );
};

export default NoDataFound;
