import { Box, Button, Container, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useCart } from "./Cart.hook";
import { Edit } from "@mui/icons-material";
import { trimTextToWordLimit } from "@components/utils/textUtils";
import { Image } from "@components/image/index";
import Displayaddress from "../profile/utility/Displayaddress";
import { useEffect, useState } from "react";
import { Icart } from "@/store/reducers/cart/type";

const Checkout = () => {
  const {
    variable: { carts, paymentMethod, profile, actiontype, buydata },
    methods: { navigate, handleAddress, handlePaymentMethod, handleOrder },
  } = useCart();

  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 2000); // 2 seconds delay

    // return () => clearTimeout(timer); // Cleanup timer
  }, []);
  if (actiontype != "buy" && !carts?.list?.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          width: "100%", // Ensures the Box takes full width
          minHeight: "200px", // Adjust the height to fit your needs
        }}
      >
        <Typography> Cart not found</Typography>
      </Box>
    );
  }

  const renderProductDetails = (data: Icart) => {
    const deliveryCharges = data?.product?.delivery_charges ?? 0;
    const discountPrice = data?.product?.discount_price ?? 0;
    const price = data?.product?.price ?? 0;

    return (
      <Box
        key={data.product?.id}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 1,
          p: 1,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", borderRadius: 1, mt: 1 }}>
          <Image src={showImage ? data?.product?.image : ""} alt={"N/O"} sx={{ height: 60, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${data.id}`)} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ width: "100%" }}>
              {trimTextToWordLimit(data?.product?.title || "Unknown", 100)}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ p: 1, pt: 0 }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            {data?.color && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Color:
                </Typography>
                <Typography variant="body1">{data.color}</Typography>
              </Stack>
            )}
            {data?.size && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Size:
                </Typography>
                <Typography variant="body1">{data.size}</Typography>
              </Stack>
            )}
          </Box>
        </Box>
        <Typography variant="body1">Quantity: {data.quantity}</Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="body1">₹{discountPrice}</Typography>
          <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
            ₹{price}
          </Typography>
          {deliveryCharges > 0 && <Typography variant="body1">Delivery: ₹{deliveryCharges}</Typography>}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Total Amount
          </Typography>
          <Typography variant="body1">₹{(discountPrice + deliveryCharges) * data.quantity}</Typography>
        </Stack>
      </Box>
    );
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Check Out
      </Typography>

      {/*  Address */}
      <Box sx={{ borderRadius: 2, boxShadow: 1, p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Address
          </Typography>
          <IconButton onClick={handleAddress}>
            <Edit />
          </IconButton>
        </Box>
        {!profile?.address ? (
          <Typography variant="body1" color="error" sx={{ cursor: "pointer" }} onClick={handleAddress}>
            Add Address
          </Typography>
        ) : (
          <Displayaddress address={profile?.address} />
        )}
      </Box>

      {/*      Payment method */}
      <Box sx={{ borderRadius: 2, boxShadow: 1, p: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Payment method
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button variant={paymentMethod === "online" ? "outlined" : "text"} onClick={() => handlePaymentMethod("online")} fullWidth>
            Online Payment method
          </Button>
          <Button variant={paymentMethod === "cash" ? "outlined" : "text"} onClick={() => handlePaymentMethod("cash")} fullWidth>
            Cash on Delivery/Pay on Delivery
          </Button>
        </Box>
      </Box>

      {/*      Order Summary */}
      <Box sx={{ borderRadius: 2, boxShadow: 1, p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          Order Summary
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1">Discounted Price </Typography>
          <Typography variant="body1">₹{actiontype == "buy" ? buydata?.product?.discount_price * buydata.quantity : carts?.payment_details?.discount_price}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1">Delivery Charges </Typography>
          <Typography variant="body1"> ₹{actiontype == "buy" ? buydata?.product?.delivery_charges * buydata.quantity : carts?.payment_details?.delivery_charges}</Typography>
        </Stack>
        <Divider />
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Total Amount
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ₹{actiontype == "buy" ? buydata?.product?.discount_price * buydata.quantity + buydata?.product?.delivery_charges * buydata.quantity : carts?.payment_details?.totel}
          </Typography>
        </Stack>
      </Box>

      {/* list */}

      {actiontype === "buy" && buydata ? renderProductDetails(buydata) : carts?.list?.map((data) => renderProductDetails(data))}

      {/* { actiontype == "buy"?(
     <Box
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 1,
          // height: "100%",
          p: 1,
          // border: 1,
          width: "100%",
          // display: "flex",
        }}
      >
        <Box sx={{ display: "flex", borderRadius: 1, mt: 1 }}>
          {showImage && <Image src={buydata?.product?.image[0]} alt={"N/O"} sx={{ height: 60, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${buydata?.product?.id}`)} />}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ width: "100%" }}>
              {trimTextToWordLimit(buydata?.product?.title || "unkon", 100)}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ p: 1, pt: 0 }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            {buydata?.color && (
              <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Color :
                </Typography>
                <Typography variant="body1">{buydata?.color}</Typography>
              </Stack>
            )}
            {buydata?.size && (
              <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Size :
                </Typography>
                <Typography variant="body1">{buydata?.size}</Typography>
              </Stack>
            )}
          </Box>
        </Box>
        <Typography variant="body1">quantity: {buydata.quantity}</Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="body1">₹{buydata.product?.discount_price}</Typography>
          <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
            ₹{buydata.product?.price}
          </Typography>
          {buydata.product?.delivery_charges > 0 && <Typography variant="body1">Delivery: ₹{buydata.product?.delivery_Charges}</Typography>}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Total Amount
          </Typography>
          <Typography variant="body1">₹{(buydata.product?.discount_price + buydata.product?.delivery_charges) * buydata.quantity}</Typography>
        </Stack>
      </Box> ):
      {carts?.list?.map((data) => {
        const deliveryCharges = data?.product?.delivery_charges ?? 0; // Default to 0 if undefined
        const discountPrice = data?.product?.discount_price ?? 0;
        const price = data?.product?.price ?? 0;
        return (
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 1,
              // height: "100%",
              p: 1,
              // border: 1,
              width: "100%",
              // display: "flex",
            }}
          >
            <Box sx={{ display: "flex", borderRadius: 1, mt: 1 }}>
              <Image src={data?.product?.image} alt={"N/O"} sx={{ height: 60, cursor: "pointer", mr: 2 }} onClick={() => navigate(`/product_details/${data.id}`)} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ width: "100%" }}>
                  {trimTextToWordLimit(data?.product?.title || "unkon", 100)}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: 1, pt: 0 }}>
              <Box sx={{ display: "flex", gap: 3 }}>
                {data?.color && (
                  <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Color :
                    </Typography>
                    <Typography variant="body1">{data?.color}</Typography>
                  </Stack>
                )}
                {data?.size && (
                  <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Size :
                    </Typography>
                    <Typography variant="body1">{data?.size}</Typography>
                  </Stack>
                )}
              </Box>
            </Box>
            <Typography variant="body1">quantity: {data.quantity}</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
              <Typography variant="body1">₹{discountPrice}</Typography>
              <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#888" }}>
                ₹{price}
              </Typography>
              {deliveryCharges > 0 && <Typography variant="body1">Delivery: ₹{deliveryCharges}</Typography>}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Total Amount
              </Typography>
              <Typography variant="body1">₹{(discountPrice + deliveryCharges) * data.quantity}</Typography>
            </Stack>
          </Box>
        );
      })}
    } */}
      <Button variant="contained" onClick={handleOrder}>
        Place Order
      </Button>
    </Container>
  );
};

export default Checkout;
