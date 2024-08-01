function checkOrder(available, ordered) {
    if (available < ordered) {
        console.log("Your order is too large, we don’t have enough goods.")
    }
    else if (ordered == 0) {
        console.log("Your order is empty.");
    }
    else if (available >= ordered) {
        console.log("Your order is accepted.");
    }
}

checkOrder(600, 850);
checkOrder(600, 0);
checkOrder(600, 400);