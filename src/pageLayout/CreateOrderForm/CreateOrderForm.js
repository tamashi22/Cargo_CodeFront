import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { AppHeader } from "@/components/AppHeader";
import styles from "./CreateOrderForm.module.scss";
import { AppInput } from "@/components/ui/AppInput";
import { createOrder } from "@/redux/slices/users.slice";
import { createPayment } from "@/redux/slices/users.slice";

const CreateOrderForm = () => {
  const router = useRouter();
  const isOrderCreated = useSelector((state) => state.users.isOrderCreated);
  const isPaymentCreated = useSelector((state) => state.users.isPaymentCreated);
  const orderData = useSelector((state) => state.users.orderData);

  const paymentData = useSelector((state) => state.users.paymentData.url);
  console.log("orderData", orderData);
  console.log("paymentData", paymentData);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    // formState: { errors },
    reset,
  } = useForm({
    // defaultValues: {},
    // resolver: yupResolver(),
    // mode: "onChange",
  });

  const onFormSubmit = (data) => {
    data.price = parseInt(data.price);
    data.pickup_date = new Date(data.pickup_date).toISOString();
    data.delivery_date = new Date(data.delivery_date).toISOString();
    // console.log(data);

    dispatch(createOrder(data));
  };
  React.useEffect(() => {
    if (isOrderCreated) {
      //   localStorage.setItem("");
      dispatch(
        createPayment({
          from: orderData.pickup_location,
          to: orderData.destination,
          deliveryType: orderData.type,
          price: orderData.price,
          cancel_url: "http://localhost:3000/createOrder",
          success_url: "http://localhost:3000/orderAccepted",
        })
      );
    }
  }, [orderData, isOrderCreated]);

  React.useEffect(() => {
    if (isPaymentCreated) {
      router.push(paymentData);
    }
  }, [isPaymentCreated]);

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Create Order</h1>
          <form
            className={styles.formWrapper}
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <div className={styles.inputWrapper}>
              <AppInput
                className={styles.input}
                label="Pickup location"
                {...register("pickup_location")}
              />
              <AppInput
                className={styles.input}
                label="Destination"
                {...register("destination")}
              />
            </div>
            <div className={styles.inputWrapper}>
              <AppInput
                className={styles.input}
                label="Pickup date"
                type="datetime-local"
                {...register("pickup_date")}
              />
              <AppInput
                className={styles.input}
                label="Delivery date"
                type="datetime-local"
                {...register("delivery_date")}
              />
            </div>
            <div className={styles.inputWrapper}>
              <AppInput
                className={styles.input}
                label="Weight"
                {...register("weight")}
              />
              <AppInput
                className={styles.input}
                label="Type"
                {...register("type")}
              />
            </div>
            <div className={styles.inputWrapper}>
              <AppInput
                className={styles.input}
                label="Required Equipment"
                {...register("required_equipment")}
              />
              <AppInput
                className={styles.input}
                label="Special instructions"
                {...register("special_instructions")}
              />
            </div>
            <div className={styles.inputWrapper}>
              <AppInput
                className={styles.input}
                label="Price "
                type="number"
                {...register("price")}
              />
              <button className={styles.submitButton}>Create Order</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateOrderForm;
