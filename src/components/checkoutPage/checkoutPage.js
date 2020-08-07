import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";

const steps = ["Shipping address", "Payment details", "Review your order"];
// const { formId, formField } = checkoutFormModel;
function getStepContent(step) {
  switch (step) {
    case 0:
      return "Shipping address";
    case 1:
      return "Payment details";
    case 2:
      return "Review Order";
    default:
      return <div> Not Found</div>;
  }
}
function checkoutPage() {
  return <div></div>;
}

export default checkoutPage;
