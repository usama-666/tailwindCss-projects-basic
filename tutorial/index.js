const cart = ["cell phone", "shirt", "cup", "bike"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return  proccedToPayment(orderId);
   
    })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  }).then(function () {

  })

  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    const orderId = "332211";
    if (validateOrder(cart)) {
      setTimeout(() => {
        console.log("order validated");
        resolve(orderId);
      }, 4000);
    } else {
      const err = new Error("Order not validated");
      // console.log(err);
      reject(err);
    }
  });
  return pr;
}

function validateOrder(cart) {
  return true;
}

function proccedToPayment(orderId) {
  const ptp = new Promise(function (resolve, reject) {
      resolve("payment successful");
  });
  return ptp;
}

function showOrderSummary() {
  const sos = new Promise(function (resolve, reject) {
    const detail = "You have purchased 4 items ";
    resolve(detail);
  });
  return sos;
}
