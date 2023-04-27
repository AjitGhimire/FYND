<template>
    <footer>
      <nav>
        <h3>About</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Stored</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </nav>
      <nav>
        <h3>Helps</h3>
        <ul>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Cancel & Return</a></li>
        </ul>
      </nav>
      <nav>
        <h3>Policy</h3>
        <ul align>
          <li><a href="#">Return Policy</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Term of use</a></li>
        </ul>
      </nav>

      <nav>
        <h3>Social</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </nav>
      
      <nav class="col_social">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.251681066311!2d87.34166231498583!3d26.99058718309413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4fca1970a827%3A0x8ca09acf0773e264!2sDKT%20GHIMIRE%20TOLE!5e0!3m2!1sen!2sin!4v1676199815574!5m2!1sen!2sin" width="350" height="170" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </nav>
      <p><b>&copy; 2023 By Ajit Ghimire (FYND)</b></p>
    </footer>
  </template>
  
  <script>
export default {
  name: 'FooterPage'
}
</script>
<style>
footer {
  margin-top: 1%;
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  border:1px solid black;
  text-decoration: none;
}
nav {
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
}
 
 a{
  text-decoration: none;
  color:rgb(0, 0, 0);
  font-size: 17px;
 }

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-bottom: 10px;
  text-decoration: none;
}
nav li a:hover{
  background-color:rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

nav li:last-child {
  margin-bottom: 0;
}

h3 {
  margin-bottom: 10px;
  font-size: 20px;
}

p {
  margin-top: 20px;
}
.col_social{
    float: right;
    border: 1px solid black;   
}


</style>
