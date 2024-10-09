

function pointer(e){
  const ejeX = e.clientX;
  const ejeY = e.clientY + window.scrollY;

  console.log(`x= ${ejeX} y= ${ejeY}`)
  document.getElementById("pointer").style.background=`
              radial-gradient(
              600px at ${ejeX}px ${ejeY}px,
              rgba(35, 169, 146, 0.25),
              transparent 80%
            )`
}

document.addEventListener('mousemove',pointer);

// Main image with description 
const featuredImage = document.getElementById('featured-image');
const imageDescription = document.getElementById('image-description');

// all little images
const smallImages = document.querySelectorAll('.small-image');


smallImages.forEach(image => {
    image.addEventListener('click', () => {
        // change the image
        featuredImage.src = image.src;
        
        // change the descriotion acording the image selected
        imageDescription.textContent = image.getAttribute('data-description');
    });
});