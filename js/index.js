// Your code goes here

const introImge = document.querySelector('.intro img');
introImge.addEventListener('mouseenter', (border)=> {
    introImge.style.borderRadius= ' 10px';
    highlight.style.transition = ' ease-in-out';
   
})

introImge.addEventListener('mouseleave', (noBorder)=> {
    introImge.style.borderRadius = ' 0px'
})
 

const highlight = document.querySelector('.intro h2');
highlight.addEventListener('mouseenter', (bgColor)=> {
    highlight.style.backgroundColor = 'orange';
    highlight.style.transition = ' ease-in-out';
})

highlight.addEventListener('mouseleave', (item)=> {
    highlight.style.backgroundColor = 'white';
})

const ImageContent = document.querySelector(".img-content img");
    ImageContent.addEventListener('dblclick',    (shadowEvent)=> {
        ImageContent.style.boxShadow = " 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        ImageContent.style.transition = ' ease-in-out';
    }  )

const Destination = document.querySelector(".content-destination h2");
    Destination.addEventListener("click", (b)=> {
        Destination.style.borderBottom = " 2px solid orange";
        Destination.style.paddingBottom = ' 1rem';
    })

const AdventureImage = document.querySelector(".img-fluid");
    window.addEventListener("resize", (change)=> {
        AdventureImage.src = "https://images.pexels.com/photos/2894948/pexels-photo-2894948.jpeg";
    })


    