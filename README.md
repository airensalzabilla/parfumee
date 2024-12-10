<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parfume</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Header Section -->
  <header>
    <div class="container">
      <h1>Parfume</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="cart">
        🛒 Cart (<span id="cart-count">10</span>)
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero">
    <div class="hero-content">
      <h2>Your Signature Scent Awaits</h2>
      <p>Discover artisanal fragrances crafted just for you.</p>
      <a href="#products" class="btn">Shop Now</a>
    </div>
  </section>

  <!-- Products Section -->
  <section id="products">
    <div class="container">
      <h2>Our Products</h2>
      <div class="product-grid">
        <!-- Product 1 -->
        <div class="product" data-name="Rose Elegance" data-price="55">
          <img src="../foto/rosee.jpg" alt="Rose Elegance">
          <h3>Rose Elegance</h3>
          <p>A delicate blend of roses and jasmine. <strong>$45</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <!-- Product 2 -->
        <div class="product" data-name="Amber Mystique" data-price="55">
          <img src="../foto/amber.jpeg" alt="Amber Mystique">
          <h3>Amber Mystique</h3>
          <p>Warm amber with a hint of cinnamon. <strong>$55</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <!-- Product 3 -->
        <div class="product" data-name="Vanilla Whisper" data-price="55">
          <img src="../foto/vanilawisper.jpeg" alt="Vanilla Whisper">
          <h3>Vanilla Whisper</h3>
          <p>Soft vanilla with sandalwood. <strong>$50</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <!-- Product 4 -->
        <div class="product" data-name="Citrus Bloom" data-price="40">
          <img src="../foto/citrus.jpeg" alt="Citrus Bloom">
          <h3>Citrus Bloom</h3>
          <p>A fresh citrus aroma with hints of orange and lemon. <strong>$40</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <!-- Product 5 -->
        <div class="product" data-name="Midnight Noir" data-price="60">
          <img src="../foto/midnight.jpeg" alt="Midnight Noir">
          <h3>Midnight Noir</h3>
          <p>A bold mix of dark chocolate and patchouli. <strong>$60</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <!-- Product 6 -->
        <div class="product" data-name="Ocean Breeze" data-price="48">
          <img src="../foto/ocean.jpeg" alt="Ocean Breeze">
          <h3>Ocean Breeze</h3>
          <p>A refreshing marine scent with a touch of sea salt. <strong>$48</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <!-- Product 7 -->
        <div class="product" data-name="Floral Fantasy" data-price="42">
          <img src="../foto/floral.jpeg" alt="Floral Fantasy">
          <h3>Floral Fantasy</h3>
          <p>A vibrant bouquet of garden flowers. <strong>$42</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <!-- Product 8 -->
        <div class="product" data-name="Sandalwood Serenity" data-price="53">
          <img src="../foto/sandalwoold.jpeg" alt="Sandalwood Serenity">
          <h3>Sandalwood Serenity</h3>
          <p>A calming mix of sandalwood and vanilla. <strong>$53</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us. We’d love to hear from you!</p>
      <form id="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit" class="btn">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <p>&copy; 2024 Parfum Aesthetic. All rights reserved.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

