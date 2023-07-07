import React from "react";
import { useDispatch } from "react-redux";
import { changePaymentStatus } from "@/redux/slices/users.slice";
import { AppHeader } from "@/components/AppHeader";
function OrderAccepted() {
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    var orderId = localStorage.getItem("orerId");
  }

  console.log(orderId);
  React.useEffect(() => {
    if (orderId) {
      dispatch(changePaymentStatus(orderId));
    }
  }, [orderId]);
  return (
    <>
      <AppHeader />
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Order Paid
      </h1>
    </>
  );
}

export default OrderAccepted;
