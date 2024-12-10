let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Added to cart!');
  });
});
s
// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      this.reset(); // Reset form setelah submit
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
  