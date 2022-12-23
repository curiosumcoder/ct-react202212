import * as Yup from "yup";

let productSchema = Yup.object().shape({
  productName: Yup.string()
    .max(64, "Must be 64 characters or less")
    .required("Required"),
  unitPrice: Yup.number().min(0,'Mayor a 0').required("Required"),
  quantityPerUnit: Yup.string()
    .max(32, "Must be 15 characters or less")
    .required("Required")
});

export default productSchema;