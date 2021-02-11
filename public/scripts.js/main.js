Vue.component('nav-bar', {

    template: `

    <ul class="nav justify-content-center py-2">
    <div>
  
    </div>
      <li class="nav-item">
        <a class="nav-link text-xl font-semibold active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-xl font-semibold" href="visit.html">Visit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-xl font-semibold" href="">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-xl font-semibold" href="#">Animals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-xl font-semibold" href="zooAtHome.html">Zoo at Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-xl font-semibold" href="#">Donate</a>
      </li>
    </ul>
  `,


    data() {

        return {

        }

    }

})



Vue.component('banner-img', {

    template: `

    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-bgimg1 lg:h-5/6 sm: h-3/6" style="background-image: url(./resources/carouse-img-1.jpg)">
        <div class="carousel-caption d-none d-md-block pb-40">
          <h1>{{title1}}</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      </div>
      <div class="carousel-item">
      <div class="carousel-bgimg2 lg:h-5/6 sm: h-3/6" style="background-image: url(./resources/carouse-image8.jpg)">
        <div class="carousel-caption d-none d-md-block">
        <h1>{{title2}}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
      </div>
      <div class="carousel-item">
      <div class="carousel-bgimg3 lg:h-5/6 sm: h-3/6" style="background-image: url(./resources/carouse-image6.jpg)">
        <div class="carousel-caption d-none d-md-block">
        <h1>{{title3}}</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>


  `,

    data() {

        return {

            title1: 'Welcome to Sharlock Zoo',
            title2: 'Welcome to Sharlock Zoo',
            title3: 'Welcome to Sharlock Zoo',

        }

    }

})


Vue.component('static-carousel-banner', {

    props: ['title', 'body'],

    template: `
        <div class="w-full lg:h-4/6 bg-black sm: h-3/6 bg-cover bg-center">
            <div class="carousel-caption d-none d-md-block pb-0" style="bottom: 30rem !important; background:rgb(0,0,0,0.2);">
                <h1>{{title}}</h1>
            <p>{{body}}</p>
      </div>
        
        </div>
    `
})

Vue.component('heading-title', {

    props: ['title'],

    template: `
    <h1 class="w-full text-3xl flex justify-center font-petite-caps">{{title}}</h1>
  `

})




Vue.component('image-box', {

    template: `
    <div class="rounded-lg max-w-sm mx-2 lg:w-96 h-80 mx-2 bg-cover bg-no-repeat bg-center sm: mb-2 sm: w-full">

    </div>
    
  `
})

Vue.component('image-box-with-title', {

    props: ['title'],

    template: `
    <div class="image-box-with-title  flex flex-column justify-end rounded-lg mx-2 w-96 h-80 mx-2 mt-2 bg-cover bg-no-repeat bg-center">
    <div class="aling-self-end p-1 mb-3 bg-white w-4/5">

        <h3 class="eventsTitle" style="">{{title}}</h3>
    </div>
    </div>
    
  `
})




Vue.component('content-box', {

    props: ['title', 'body', 'button'],

    template: `
  <div class="">
    <h1 class=" w-4/5 flex justify-center mt-2 center text-center">{{title}}</h1>
    <p class="flex justify-center p-3 text-center">{{body}}</p>
    <button class="center transition ease-in-out duration-700 bg-green-600 text-white font-bold p-2 rounded-md -bottom-5">
    {{button}}
  </button>

  </div>
`
})


Vue.component('content-box-button-border', {

    props: ['title', 'body', 'button'],

    template: `
  <div class="">
    <h1 class=" w-4/5 flex justify-center mt-2 center text-center">{{title}}</h1>
    <p class="flex justify-center p-3 text-center">{{body}}</p>
    <button class="center transition ease-in-out duration-700  text-white font-bold p-2 rounded-md -bottom-5 border border-solid">
    {{button}}
  </button>

  </div>
`
})






Vue.component('content-box-no-button', {

    props: ['title', 'body', 'button'],

    template: `
  <div class="">
    <h3 class="w-4/5 flex justify-center mt-2 center text-center">{{title}}</h3>
    <p class="flex justify-center p-3 text-center">{{body}}</p>
  </button>

  </div>

`
})


Vue.component('image-box-with-text', {

    props: ['title', 'body', 'button'],

    template: `
  <div class=" lg:w-1/3 lg:h-full relative mx-2 bg-cover bg-no-repeat bg-center supportusIMG sm: w-full h-auto sm:mb-28 ">
  <div class=" containerr rounded-md mx-2"
  <div class="absolute lg: -bottom-24 lg:left-14 lg:w-4/5 card-body rounded-md bg-green-700 sm: w-full sm:left-0 img-box-text">
  <h5 class="card-title flex justify-center text-white">{{title}}</h5>
  <p class="card-text text-center text-white">{{body}}</p>
  <a href="#" class="btn btn-primary center w-3/6  justify-center font-extrabold rounded-md " style="display:flex !important; font-weight:700; font-size:18px;" >{{button}}</a>
</div>
    </div>

  </div>
  `

})

Vue.component('footer-bottom', {

    template: `
    
  <div class="footer h-auto w-full flex flex-row flex-wrap justify-center mt-5 pt-10 pb-3  bg-green-600 sm: pt-0">
  <div class="h-auto flex flex-row flex-wrap justify-around content-center w-full  float-left">
      <div class="logo w-48 h-auto">
      <img src="./resources/icons/logo.png" alt=""></div>
      <div class="socials lg:w-48 h-auto self-center sm: w-full">
          <h3 class="text-center text-white sm: p-2">Follow Us</h3>
          <div class="socialIcons center" style="width: 150px;">
              <div class="fb p-2 sm:">
                  <span class="material-icons" style="font-size:34px !important">
                      <img src="./resources/icons/facebook.png" alt="">
                      </span>
              </div>
              <div class="twitter p-2">
                  <span class="material-icons" style="font-size:34px !important">
                      <img src="./resources/icons/instagram.png" alt="">
                      </span>
              </div>
              <div class="instagram p-2">
                  <span class="material-icons" style="font-size:34px !important">
                      <img src="./resources/icons/twitter.png" alt="">
                      </span>
              </div>
          </div>
      </div>
      </div>
      <h5 class="text-center text-white sm: pt-4">Sherlock Zoo</h5>
      
  </div>

  `

})


Vue.component('price-table', {

    template: `
    <table class="table text-center">
    <thead class="table-dark">
        <tr>
            <th>Tickets</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Adult</td>
            <td>
            <input class="border-solid border-1 border-black text-center" type="number"  id="number" value="0" name="number"
            min="0" max="100">
            </td>
            <td>£21.99</td>
        </tr>
        <tr>
            <td>Child</td>
            <td>
            <input class="border-solid border-1 border-black text-center" type="number"  id="number" value="0" name="number"
            min="0" max="100">
            </td>
            <td>£15.99</td>
        </tr>
        <tr>
            <td>Age 2 and Under</td>
            <td>
            <input class="border-solid border-1 border-black text-center" type="number"  id="number" value="0" name="number"
            min="0" max="100">
            </td>
            <td>Free</td>
        </tr>
        <tr>
            <td>Concession</td>
            <td>
            <input class="border-solid border-1 border-black text-center" type="number"  id="number" value="0" name="number"
            min="0" max="100">
            </td>
            <td>£17.99</td>
        </tr>
        <tr>
            <td>Family</td>
            <td>
            <input class="border-solid border-1 border-black text-center" type="number"  id="number" value="0" name="number"
            min="0" max="100">
            </td>
            <td>£30.99</td>
        </tr>
    </tbody>
</table>
    `

})



// Vue.component('mobile-menu', {

//     template: `
    
//     <div v-show="isVisible" class="mobileMenu sm:w-full h-14 flex flex-row justify-end lg:hidden">
//     <h1 class="text-center w-3/4 center-no-flex mt-2 font-petite-caps">Sherlock Zoo</h1>
//     <span id="show-modal" @click="showModal = true" class="material-icons flex self-center"
//         style="font-size:2.5rem">
//         menu
//     </span>

//     </div> 
    
//     `,

//     data() {
//         return {
//             isVisible: true
//         }
//     },

//     methods: {
        
//         showModal(){

//             this.isVisible = true;
//         }
//     },

// })


// Vue.component('mobile-menu-modal', {

//     template: `
    
//     <div v-if="showModal" class="overlay">
//     <span class="material-icons right-3 fixed z-1 text-white" id="show-modal" @click="showModal = false" style="font-size: 2.5rem;
//         top: 10px;">
//         clear
//     </span>
//     <div class="flex flex-column items-center list-none h-3/4 place-content-center">
//         <li class="nav-item">
//             <a class="nav-link text-xl font-semibold active" aria-current="page" href="index.html">Home</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link text-xl font-semibold text-white" href="visit.html">Visit</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link text-xl font-semibold text-white" href="">Events</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link text-xl font-semibold text-white" href="#">Animals</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link text-xl font-semibold text-white" href="zooAtHome.html">Zoo at Home</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link text-xl font-semibold text-white" href="#">Donate</a>
//         </li>
//     </div>
// </div>

//     `,

//     // data:{

//     //     showModal: false
  
//     //   }
// })


let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        homePageTitleAnimals: 'Visit Our Animals',

        showModal: false

    }
})