//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}


document.getElementById("year").innerHTML = new Date().getFullYear();



fetch('https://dummyjson.com/products/5')
.then(response => response.json())
.then(rawData => {
  const productPhotos = rawData.images;
  console.log('Product photos:', productPhotos);
  renderSlider(productPhotos, 'category1');

})
.catch(error => {
  console.log('Error fetching product data:', error);
});

fetch('https://dummyjson.com/products/7')
.then(response => response.json())
.then(rawData => {
  const productPhotos = rawData.images;
  console.log('Product photos:', productPhotos);
  renderSlider(productPhotos, 'category2');

})
.catch(error => {
  console.log('Error fetching product data:', error);
});

fetch('https://dummyjson.com/products/14')
.then(response => response.json())
.then(rawData => {
  const productPhotos = rawData.images;
  console.log('Product photos:', productPhotos);
  renderSlider(productPhotos, 'category3');

})
.catch(error => {
  console.log('Error fetching product data:', error);
});
fetch('https://dummyjson.com/products/19')
.then(response => response.json())
.then(rawData => {
  const productPhotos = rawData.images;
  console.log('Product photos:', productPhotos);
  renderSlider(productPhotos, 'category4');

})
.catch(error => {
  console.log('Error fetching product data:', error);
});

fetch('https://dummyjson.com/products/25')
.then(response => response.json())
.then(rawData => {
  const productPhotos = rawData.images;
  console.log('Product photos:', productPhotos);
  renderSlider(productPhotos, 'category5');

})
.catch(error => {
  console.log('Error fetching product data:', error);
});

fetch('https://dummyjson.com/products/28')
.then(response => response.json())
.then(rawData => {
  const productPhotos = rawData.images;
  console.log('Product photos:', productPhotos);
  renderSlider(productPhotos, 'category6');

})
.catch(error => {
  console.log('Error fetching product data:', error);
});




function renderSlider(photos,category) {
  photos.slice(1, 2).forEach((photos) => {
    const image = document.getElementById(category);
    image.src = photos;
  });
}

function myFunctionCallData(value) {
    fetch('https://dummyjson.com/products/category/'+value)
    .then(response => response.json())
    .then(rawData => {
    const products = rawData;
    const slider = document.getElementById('slider');
    document.getElementById('slider').innerHTML="";
    document.getElementById('product-title').innerHTML="";
    document.getElementById('product-description').innerHTML="";
    document.getElementById('product-price').innerHTML="";
    for(let i=0; i<=Object.keys(products).length;i++){
       for(let j=0; j<1;j++){
    console.log("For Loop:",products.products[i].images[j]);
    const image = document.createElement('img');
    image.src = products.products[i].images[j];
    image.setAttribute("id", products.products[i].id);
    image.addEventListener('click', () => myFunction(products.products[i].id));
    slider.appendChild(image);
}

}

})
.catch(error => {
console.log('Error fetching product data:', error);
});

}

function myFunction(imgs) {
      fetch('https://dummyjson.com/products/'+imgs)
      .then(response => response.json())
      .then(rawData => {
      const productPhotos = rawData.images;
      const title = document.getElementById('product-title');
      title.innerText = rawData.title;
      const description = document.getElementById('product-description');
      description.innerText = rawData.description;
      const price = document.getElementById('product-price');
      price.innerText = `$ ${rawData.price}`;
      document.getElementById('buy-btn').onclick = function alertOnclick(){
      alert(`${title.innerText} for ${price.innerText} has been added to your cart`);
      }

})
}
