<script>
  // @ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import Swiper from "swiper";
  import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
  import { fade } from "svelte/transition";
  import EmailCapture from "$lib/components/EmailCapture.svelte";

  // import { Pagination, Navigation} from "swiper";

  // Import Swiper styles

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  let swiperInstance;

  let services = [
    {
      id: 1,
      name: "Single Sheet Thermoforming",
      type: "<p>Single sheet thermoforming is a cost-effective process used to shape plastic sheets into durable material handling devices, such as pallets, by applying heat and pressure to mold them into the desired form. This method allows for the production of lightweight, yet robust products, tailored to meet the specific needs of industries requiring efficient and reliable storage and transportation solutions.</p>",
      h1: `<h2 style="font-size: 32px;">Single Sheet Thermoforming</h2>`,
      image: "/images/singlesheet.png",
      page: "/products/unipak",
      checked: false,
    },
    {
      id: 2,
      name: "Twin Sheet Thermoforming",
      type: "<p>Twin sheet thermoforming combines two plastic sheets simultaneously, fusing them together under heat and pressure to create hollow, yet exceptionally strong structures, ideal for manufacturing complex material handling devices like pallets. This innovative technique enhances durability and load capacity, offering superior performance for demanding logistics and storage applications.</p>",
      h1: `<h2 style="font-size: 32px;">Twin Sheet Thermoforming</h2>`,
      image: "/images/twinsheet.png",
      page: "/products/unipallet",
      checked: false,
    },
    {
      id: 3,
      name: "Injection Molding",
      type: "<p>Injection molding is a precise manufacturing process used to produce small, intricate components for our products, utilizing high pressure to inject molten plastic into molds. This method ensures uniformity, high-quality finishes, and the ability to handle complex shapes, making it ideal for creating durable and detailed parts essential for enhancing the functionality and performance of sleeve packs, pallets, and other material handling devices.</p>",
      h1: `<h2 style="font-size: 32px;">Injection Molding</h2>`,
      image: "/images/unidirectional.png",
      page: "/products/unidirectional",
      checked: false,
    },
  ];

  let selectedServiceId = services.length > 0 ? services[0].id : null;

  $: selectedService = services.find(service => service.id === selectedServiceId) || {};

  function selectService(serviceId) {
    selectedServiceId = serviceId;
  }

 
  onMount(() => {
    swiperInstance = new Swiper(".swiper", {
      effect: "coverflow",
      modules: [Navigation, Pagination, EffectCoverflow],
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 0,
      spaceBetween: 50,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        scale: 0.95,
        depth: 150,
        modifier: 2,
        slideShadows: false,
      },
      on: {
        init: () => {
          console.log("Swiper initialized");
        },
        slideChange: () => {
          console.log("Slide changed");
        },
      },
      // other swiper options
    });
  });

  onDestroy(() => {
    swiperInstance?.destroy(true, true);
  });

</script>

<div class="shuertherocont">
  <div class="satext">
    <h1 class="satop">We Invent</h1>
    <h1 class="sabottom">Solutions <strong class="littlestrong">®</strong></h1>
    <div class="taglinecont">
      <h2 class="tg">
        Providing Innovative Supply
      </h2>
      <h2 class="tg">Chain Solutions Since <strong class="tgtwo">1971</strong
        >
      </h2>
    </div>
    <div class="buttoncont">
      <button class="productsbutton" on:click={() => goto(`/products`)}
        >View Products</button
      >
    </div>
    <p></p>
  </div>
  <!-- <div class="video-container">
    <video autoplay loop muted playsinline>
      <source src="video/shuerthero.mp4" type="video/mp4" />
    </video>
  </div> -->

    <div class="video-container">
      <iframe 
      src="https://player.vimeo.com/video/921533151?autoplay=1&loop=1&muted=1&background=1&playsinline=1" 
      frameborder="0" 
      allow="autoplay; fullscreen" 
      allowfullscreen 
      playsinline
      style="object-fit: cover;"
      title="Shuert Hero"
      class="iframeclass"
    ></iframe>    </div>
    <div class="video-container-shadow"></div>
    <div class="video-container-shadow2"></div>
 
</div>
<svg width="0" height="0">
  <defs>
    <linearGradient id="fadeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" style="stop-color:rgba(0, 0, 0, 0);" />
      <stop offset="100%" style="stop-color:rgba(0, 0, 0, 1);" />
    </linearGradient>
    <mask id="fadeMask">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#fadeGradient)" />
    </mask>
  </defs>
</svg>
<div class="swiper">
  <div class="swiper-wrapper">
    
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        class="image2"
        src="/images/propak.png"
        on:click={() => goto(`/products/propak`)}
      />
      
    </div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        class="image4"
        src="/images/unipallet.png"
        on:click={() => goto(`/products/unipallet`)}
      />
    </div>

    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        class="image4"
        src="/images/unidirectional.png"
        on:click={() => goto(`/products/unidirectional`)}
      />
    </div>

    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        class="image3"
        src="/images/yarnpak.png"
        on:click={() => goto(`/products/yarnpak`)}
      />
    </div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        class="image3"
        src="/images/reman2.png"
        on:click={() => goto(`/products/remanpak`)}
      />
    </div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->

        <img
          class="image5"
          src="/images/batterypak.png"
          on:click={() => goto(`/products/batterypak`)}
        />
      </div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->

        <img
          class="image5"
          src="/images/custom.png"
          on:click={() => goto(`/customdesign`)}
        />
      </div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->

        <img
          class="image5"
          src="/images/unicase.png"
          on:click={() => goto(`/products/unicase`)}
        />
      </div>
      
    <!-- </div> -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="swiper-slide">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
        <img
          class="image1"
          src="/images/unipak.png"
          on:click={() => goto(`/products/unipak`)}
        />
    </div>

  </div>

  <!-- <div class="swiper-pagination"></div> -->

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
<div class="clicktoview">
  
  <h3>Click to View</h3>
  <svg
  id="Group_515"
  data-name="Group 515"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="24.179"
  height="13.619"
  viewBox="0 0 24.179 13.619"
>
  <defs>
    <clipPath id="clip-path">
      <rect
        id="Rectangle_368"
        data-name="Rectangle 368"
        width="24.179"
        height="13.619"
        transform="translate(0 0)"
        fill="none"
      />
    </clipPath>
  </defs>
  <g id="Group_514" data-name="Group 514" clip-path="url(#clip-path)">
    <path
      id="Path_330"
      data-name="Path 330"
      d="M22.179,2,12.22,11.619h-.261L2,2"
      fill="none"
      stroke="#f2f2f2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
    />
  </g>
</svg>
</div>

<div class="servicestags">
  <h1 class="servicestagsh1">Leaders in Reusable Transport Manufacturing</h1>
  <p class="servicestagsp">
    Designed and Manufactured in America. Engineered for Global
    Logistics.
  </p>
</div>
<div class="servicespick">
  {#each services as service}
    <label class="label {service.id === selectedServiceId ? 'checked' : ''}">
      <input
        type="checkbox"
        name="serviceSelection"
        checked={service.id === selectedServiceId}
        on:change={() => selectService(service.id)} 
      />
      {service.name}
    </label>
  {/each}
</div>
<div class="shuerthome">
  {#if selectedService.id}
  {#key selectedServiceId}
  <div class="shleft"   > 
    <div>
      
    </div>  
    <img class="shleftimg" src={selectedService.image} alt={selectedService.name} in:fade={{ duration: 900}}>
    </div>

    <div class="shright" >
      <div class="servcontr" in:fade={{ duration: 900}}>    
        <h2 class="servcontrcont">{@html selectedService.h1 || ''}</h2>  
        <p>{@html selectedService.type || ''}</p>
        <div>
          <button class="productsbutton" on:click={() => goto(`/products`)}
            >View Products</button>
        </div>
      </div>
    </div>
 {/key}   
 {/if}   
</div>
<EmailCapture />



<style>
  /* @import 'swiper/swiper-bundle.min.css'; */
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: "Univers", sans-serif;
    box-sizing: border-box;
  }

  .shuertherocont {
    position: relative;
    margin: auto;
    display: flex;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.387);
    /* border-radius: 20px; */
    margin-bottom: 50px;
    margin-top: -20px;
    justify-content: center;
    align-items: center;
    height: 600px;
  }

  .video-container {
  position: relative;
  height: 600px; /* Adjust as needed */
  width: 100vw;
  overflow: hidden;
  z-index: 2;
  /* border: #30ce00 solid 1px; */
}

.video-container iframe {
  width: 200%;
  height: 200%;
  /* min-width: 150%;  */
  /* min-height: 700px;  */
  /* object-fit: cover; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}



  .video-container-shadow {
    content: "";
    position: absolute;
    top: 600px;
    width: 100%;
    height: 100px;
    z-index: 5;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgb(36, 32, 34)
    );
  }
  
  .video-container-shadow2 {
    content: "";
    position: absolute;
    top: 500px;
    width: 100%;
    height: 100px;
    z-index: 2;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgb(36, 32, 34)
    );
  }



  .satext {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 6;
    height: fit-content;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .satop {
    color: #f2f2f2;
    font-weight: bold;
    font-size: 7em;
    margin-bottom: -20px;
  }
  .sabottom {
    color: #f2f2f2;
    margin-top: -30px;
    font-size: 7em;
    margin-bottom: -30px;
  }

  .littlestrong {
    color: #f2f2f2;
    position: absolute;
    font-size: 20px;
    margin-top: 45px;
  }

  .taglinecont {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .tg {
    text-align: center;
    width: 100%;
    font-weight: 100;
    font-size: 2em;
    color: #f2f2f2;
  }

  .tgtwo {
    font-weight: 100;
    color: #f2f2f2;
  }


  .buttoncont {
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .productsbutton {
    background-color: transparent;
    color: #f2f2f2;
    margin-right: 10px;
    position: relative;
    justify-self: flex-end;
    padding: 10px 30px;
    font-size: 1em;
    font-weight: bold;

    border-radius: 15px;
    border: 1px solid #f2f2f2;
    transition: background-color 0.5s ease;
    transition: border-color 0.1s ease;
    cursor: pointer;
  }

  .productsbutton:hover {
    transition: background-color 0.5s ease;
    transition: border-color 0.1s ease;
    background-color: #f2f2f2;
    background-color: #ce0024;
    color: #f2f2f2;
    border: 1px solid #ce0024;
  }

  .swiper {
    margin-top: -100px;
    z-index: 5;
  }

  .swiper-wrapper {
    width: 200px;
  }

  .swiper-slide {
    height: 500px;
    width: 800px;
    /* background-color: white; */
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: grab;
  }


  .swiper-slide img{
    filter: none;
    transition: filter 0.3s;
    cursor: pointer;
  }


  .image1 {
    margin-top: -20px;
    height: 500px;
    user-select: none;
  }

  .image2 {
    margin-top: 0px;
    height: 550px;
    user-select: none;
  }


  .image3 {
    margin-top: 0px;
    height: 550px;
    user-select: none;
  }
  .image4 {
    margin-top: 0px;
    height: 350px;
    user-select: none;
  }
  .image5 {
    margin-top: 20px;
    height: 590px;
    user-select: none;
  }



  .swiper-button-prev,
  .swiper-button-next {
    color: #f2f2f2;
    margin-left: 20px;
    margin-right: 20px;
  }


  .clicktoview {
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: center;
    color: #f2f2f2;
    margin-top: 0px;
    align-items: center;
    gap: 7px;
  }

  .clicktoview h3 {
    font-weight: 100;
  }

  .clicktoview svg {
    transform: rotate(180deg);
    width: 18px;
    margin-top: 2px;
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    color: #f2f2f2;
    background-color: #f2f2f218;
    border-radius: 15px;
    padding: 10px 30px;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    font-size: 1em;
    cursor: pointer;
  }

  label.checked {
    background-color: #ce002218;
    color: #ce0024;
  }

  /* .tgsvg {
    position: absolute;
    right: 140px;
    margin-top: 65px;
  } */

  .servicestags {
    width: 85%;
    margin: auto;
    /* border: #ce0024 solid 1px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .servicestags h1{
    font-size: 2.5em;
    color: #f2f2f2;
  }
  .servicestagsp {
    display: flex;
    text-align: center;
    width: 50%;
    font-size: 2em;
    color: #f2f2f2e9;
    /* border: #ce0024 solid 1px; */
    align-items: center;
  }

  .servicespick {
    /* margin-top: 50px; */
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: center;
    /* border: 1px solid salmon; */
    gap: 10px;
    margin-top: 50px;
  }

  .shuerthome {
    margin: auto;
    margin-top: 50px;
    width: 85%;
    height: 600px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.047);
    display: flex;
    align-items: center;
    /* overflow-x: hidden; */
    border: #f2f2f21a solid 1px;
  }

  .shleft {
    width: 50%;
    /* background-color: #f2f2f24a; */
    height: 100%;
    border-radius: 15px;
    border: #f2f2f21a solid 1px;
    display: flex;
    justify-content: center;
  }

    /* @keyframes fadeInFromRight {
    0% {
      opacity: 0.5;
      transform: translateX(50px); 
    }
    100% {
      opacity: 1;
      transform: translateX(0); 
    }
  } */

  .shleftimg {
    width: 100%;
    /* height: auto; */
    object-fit: cover;
    border-radius: 15px;
    border: #f2f2f21a solid 1px;
    /* animation: fadeInFromRight 3s ease-out forwards; */
  }


  .shright {
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 80px; */
    /* border: solid 1px green; */
  }

  .servcontr {
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    
    text-align: left;
    align-items: left;
    color: #f2f2f2;
    /* font-size: 1em; */
    width: 80%;
    gap: 20px;
    /* border: solid 1px blue; */
  }

  .servcontr h2 {
  font-size: 1.5em !important;
}




 @media only screen and (max-width: 1921px) {
  .video-container iframe {
  width: 150%;
  height: 150%;
  /* min-width: 150%;  */
  /* min-height: 700px;  */
  /* object-fit: cover; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 }

  @media only screen and (max-width: 1180px) {


    .taglinecont {
      width: 80%;
    }

    .servicestags {
    width: 85%;
  }

  .servicestagsh1 {
    text-align: center;
  }
  .servicestagsp {
    width: 100%;
  }

  .servicespick {
    width: 85%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
  }

    .shuerthome {
      flex-direction: column;
      /* padding-bottom: 50px; */
      height: auto;
    }

    .shleft {
      width: 100%;
      
    }

    .shright {
      width: 100%;
      padding-top: 20px;
      padding-bottom: 30px;
      /* margin-bottom: 20px; */
    }

    .servcontr {
      align-items: center;
      width: 85%;
    }

    .servcontr h2 {
      text-align: center;
    }


  }



  @media only screen and (max-width: 1025px) {
    .video-container iframe {
  width: 200%;
  height: 150%;
    }

    .image1 {
    margin-top: -20px;
    height: 470px;
    user-select: none;
  }

  .image2 {
    margin-top: 0px;
    height: 440px;
    user-select: none;
  }



  .image3 {
    margin-top: 0px;
    height: 450px;
    user-select: none;
  }
  .image4 {
    margin-top: 0px;
    height: 270px;
    user-select: none;
  }
  .image5 {
    margin-top: 20px;
    height: 530px;
    user-select: none;
  }
  }


  @media (max-width: 568px) {
    .satext {
    gap: 40px;
  }

    .satop {

    font-size: 4em;

  }
  .sabottom {

    font-size: 4em;

  }

  .taglinecont h2 {
    font-size: 1.5em;
  }

  .littlestrong {
    color: #f2f2f2;
    position: absolute;
    font-size: 16px;
    margin-top: 20px;
  }
  }


  @media (max-width: 426px) {

    .video-container iframe {
  width: 300%;
  /* height: 200%; */
    }

    .satext {
    gap: 40px;
  }

    .satop {

    font-size: 4em;

  }
  .sabottom {

    font-size: 4em;

  }

  .taglinecont h2 {
    font-size: 1.5em;
  }

  .littlestrong {
    color: #f2f2f2;
    position: absolute;
    font-size: 16px;
    margin-top: 20px;
  }

  .image1 {
    margin-top: -20px;
    height: 370px;
    user-select: none;
  }

  .image2 {
    margin-top: 0px;
    height: 320px;
    user-select: none;
  }



  .image3 {
    margin-top: 0px;
    height: 380px;
    user-select: none;
  }
  .image4 {
    margin-top: 0px;
    height: 250px;
    user-select: none;
  }
  .image5 {
    margin-top: 20px;
    height: 380px;
    user-select: none;
  }

  /* .swiper-slide img {
    height: 350px;
  } */

  .swiper {
    margin-top: -200px;
    z-index: 5;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #f2f2f2;
    margin-left: 0px;
    margin-right: 00px;
  }

  .clicktoview {
    margin-top: -30px;
  }

  .servicestags {
    margin-top: 90px;
  }

  .servicestags h1{
    font-size: 2em;
    color: #f2f2f2;
  }
  .servicestagsp {
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 1.5em;
    color: #f2f2f2e9;
    /* border: #ce0024 solid 1px; */
    align-items: center;
  }
  }

</style>
