function addToCart(productName, price) {
    alert(`${productName} has been added to your cart for $${price}.`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});
