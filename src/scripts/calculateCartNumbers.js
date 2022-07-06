export default function calculateCartNumbers (products=[]) {
    let subtotal = 0, shipping = 0, tax = 0, total = 0;// init vars
    for (const product of products) {
        subtotal += (product.price * product.quantity)
        shipping += product.quantity * 2// $2 per item
    }
    tax += (subtotal * 0.1)// tax is 10%
    total += (subtotal + shipping + tax)//total is sum of subtotal + shipping + tax
    return { subtotal, shipping, tax, total }
}