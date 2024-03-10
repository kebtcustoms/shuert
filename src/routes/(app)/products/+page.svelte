<script>
  // @ts-nocheck

  let products = [
    {
      id: 1,
      name: "Uni-Pak",
      type: "Uni-Pak",
      industry: "Consumer Goods",
      image: "/images/unipak.png",
      page: "/products/unipak",
      checked: false,
    },
    {
      id: 2,
      name: "Uni-Pallet",
      type: "Uni-Pallet",
      industry: "Consumer Goods",
      image: "/images/unipallet.png",
      page: "/products/unipallet",
      checked: false,
    },
    {
      id: 3,
      name: "Uni-Directional Pallet",
      type: "Uni-Directional",
      industry: "Consumer Goods",
      image: "/images/unidirectional.png",
      page: "/products/unidirectional",
      checked: false,
    },
    {
      id: 4,
      name: "Uni-Case",
      type: "Uni-Case",
      industry: "Consumer Goods",
      image: "/images/unicase.png",
      page: "/products/unidirectional",
      checked: false,
    },
    {
      id: 5,
      name: "Uni-Rak",
      type: "Uni-Rak",
      industry: "Consumer Goods",
      image: "/images/unidirectional.png",
      page: "/products/unidirectional",
      checked: false,
    },
    {
      id: 6,
      name: "Yarn-Pak",
      type: "Yarn-Pak",
      industry: "Consumer Goods",
      image: "/images/yarnpak.png",
      page: "/products/yarnpak",
      checked: false,
    },
    {
      id: 7,
      name: "Pro-Pak",
      type: "Pro-Pak",
      industry: "Consumer Goods",
      image: "/images/propak.png",
      page: "/products/propak",
      checked: false,
    },
    {
      id: 8,
      name: "Reman-Pak",
      type: "Reman-Pak",
      industry: "Consumer Goods",
      image: "/images/reman2.png",
      page: "/products/remanpak",
      checked: false,
    },
    {
      id: 9,
      name: "Battery-Pak",
      type: "Battery-Pak",
      industry: "Consumer Goods",
      image: "/images/batterypak.png",
      page: "/products/batterypak",
      checked: false,
    },
    {
      id: 10,
      name: "Custom Design",
      type: "Custom Design",
      industry: "Consumer Goods",
      image: "/images/custom.png",
      page: "/customdesign",
      checked: false,
    },
  ];

  let selectedTypes = [];
  let selectedIndustries = [];

  $: filteredProducts = products.filter(
    (product) =>
      (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
      (selectedIndustries.length === 0 ||
        selectedIndustries.includes(product.industry)),
  );

  // @ts-nocheck
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import Swiper from "swiper";
  import { Navigation, Pagination } from "swiper/modules";
  // import { Pagination, Navigation} from "swiper";

  // Import Swiper styles

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  let swiperInstance;

  onMount(() => {
    swiperInstance = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      centeredSlides: true,
      slidesPerView: "1",
      initialSlide: 0,
      spaceBetween: 0,
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

<!-- <div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img
        class="image1"
        src="/images/unipak.png"
        on:click={() => goto(`/products/unipak`)}
      />
      <div class="s1text">
        <h1 class="s1title"><strong>Uni-Pak</strong> System</h1>
        <p class="s1para">
          Durable, reusable, twin-sheet thermoformed pallets and tops have a
          ten-year life expectancy ranging between 50 – 100 plus trips.
          Cost-effective, often paying for itself within six months.
          Personalized printing of sleeve and embossing of top and pallet is
          optional. Available in triple wall corrugated fiber-board sleeve or
          plastic sleeve.
        </p>
      </div>
    </div>
    <div class="swiper-slide">
      <img
        class="image3"
        src="/images/propak.png"
        on:click={() => goto(`/products/propak`)}
      />
    </div>
    <div class="swiper-slide">
      <img
        class="image2"
        src="/images/unipallet.png"
        on:click={() => goto(`/products/unipallet`)}
      />
    </div>

    <div class="swiper-slide">
      <img
        class="image4"
        src="/images/unidirectional.png"
        on:click={() => goto(`/products/unidirectional`)}
      />
    </div>

    <div class="swiper-slide">
      <img
        class="image5"
        src="/images/unicase.png"
        on:click={() => goto(`/products/unicase`)}
      />
    </div>
  </div>


  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div> -->

<div class="productpagetitle">
  <h1>Products</h1>
</div>
<div class="productoptions">
  <aside>
    <h2 class="asidetitle">Refine Your Search</h2>
    <div>
      <fieldset class="fieldset1">
        <legend class="legendtitle">Select a product type below</legend>
        <!-- <label class="label {products.checked ? 'checked' : ''}">
                <input type="checkbox" bind:group={selectedTypes} bind:checked={products.checked} value="Uni-Pak" />
                Uni-Pak
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Uni-Pallet"
                />
                Uni-Pallet
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Uni-Directional"
                />
                Uni-Directional
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Uni-Directional"
                />
                Uni-Case
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Uni-Directional"
                />
                Uni-Rak
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Yarn-Pak"
                />
                Yarn-Pak
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Pro-Pak"
                />
                Pro-Pak
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Reman-Pak"
                />
                Reman-Pak
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Battery-Pak"
                />
                Battery-Pak
            </label>
            <label class="label {products.checked ? 'checked' : ''}">
                <input
                    type="checkbox"
                    bind:group={selectedTypes}
                    bind:checked={products.checked}
                    value="Custom Design"
                />
                Custom Design
            </label> -->
        {#each products as product}
          <label class="label {product.checked ? 'checked' : ''}">
            <input type="checkbox" bind:checked={product.checked} bind:group={selectedTypes} value={product.type}/>
            {product.type}
          </label>
        {/each}
      </fieldset>

      <!-- <fieldset class="fieldset2">
            <legend>Industry</legend>
            <label>
                <input
                    type="checkbox"
                    bind:group={selectedIndustries}
                    value="Consumer Goods"
                />
                Consumer Goods
            </label>
        </fieldset> -->
    </div>
  </aside>

  <section class="productsection">
    {#each filteredProducts as product}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="productsectionoptions"
        on:click={() => goto(`${product.page}`)}
      >
        <h3>{product.name}</h3>

        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={product.image} class="productimage" />
      </div>
    {:else}
      <p>No products match your filters.</p>
    {/each}
  </section>
</div>

<style>

  
.productpagetitle {
  color: #f2f2f2;
  width: 85.5%;
  margin: auto;
  margin-top: 50px;
 
}

.productpagetitle h1 {
  font-size: 2.5em;
}

  .productoptions {
    margin: auto;
    margin-top: 20px;
    display: flex;
    width: 85.5%;
    gap: 50px;
    /* border: red solid 1px; */
    display: flex;
    flex-direction: column;
  }

  aside {
    color: white;
    border-radius: 25px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  fieldset {
    border: none;
    display: flex;
    flex-wrap: wrap;
  }

  .asidetitle {
    font-size: 2em;
  }

  .legendtitle {
    margin-bottom: 10px;
    font-size: 1em;
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    background-color: #f2f2f218;
    border-radius: 10px;
    padding: 10px 30px;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
  }

  label.checked {
    background-color: #ce002218;
    color: #ce0024;
  }

  .fieldset1 {
    display: flex;
    margin-top: 5px;
    font-size: 1em;
    gap: 20px;
  }

  .productsection {
    color: white;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  .productsectionoptions {
    padding: 5px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 380px;
    height: 380px;
    border: #f2f2f21a solid 1px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.047);
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  .productsectionoptions:hover {
    background-color: rgba(255, 255, 255, 0.108);
    transition: background-color 0.3s ease;
  }

  .productimage {
    margin: auto;
    max-height: 350px;
    max-width: 350px;
    /* align-items:center ; */
    /* border: red 1px solid; */
  }



  /* .swiper {
    width: 100%;
    margin-top: 0px;
  }

  .swiper-wrapper {
    width: 200px;
  }

  .swiper-slide {
    height: 350px;
    width: 800px;
    background-color: rgba(255, 255, 255, 0.22);
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;
  }

  .s1text {
    margin-top: 120px;
    z-index: 20;
    width: 70%;
    color: #f2f2f2;
    display: flex;
    justify-content: flex-end;
    cursor: grab;
  }

  .s1title {
    position: absolute;
    font-size: 130px;
    top: 40px;
    font-weight: bold;
  }

  .s1para {
    width: 50%;
    font-size: 1em;
  }

  .image1 {
    position: absolute;
    margin-top: 0px;
    left: 220px;
    height: 680px;
    user-select: none;
  }
  .swiper-slide > img {
    transition: filter 0.5s ease;
  }
  .swiper-slide > img:hover {
    filter: drop-shadow(1px 1px 7px rgba(255, 255, 255, 0.1))
      drop-shadow(-1px -1px 7px rgba(255, 255, 255, 0.1));
    transition: filter 0.5s ease;
    cursor: pointer;
  }

  .image2 {
    margin-top: 0px;
    height: 350px;
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
  } */


   @media (max-width: 768px){

    .productsection {
      width: 100%;
    }

    .fieldset1 {
    width: 85%;
  }
    .productsectionoptions {

    max-width: 100%;
    height: 380px;

  }
  .productimage {
    margin: auto;
    max-height: 350px;
    max-width: 400px;
    /* align-items:center ; */
    /* border: red 1px solid; */
  }
   }

   @media (max-width: 431px){

.productsection {
  width: 100%;
}

.fieldset1 {
width: 85%;

font-size: 0.8em;
}
.productsectionoptions {

width: 100%;
height: 380px;

}
.productimage {
margin: auto;
max-height: 350px;
max-width: 300px;
/* align-items:center ; */
/* border: red 1px solid; */
}
}

@media (max-width: 431px){
  .fieldset1 {
width: 100%;

font-size: 0.7em;
}

.productimage {
margin: auto;
max-height: 350px;
max-width: 250px;
/* align-items:center ; */
/* border: red 1px solid; */
}
}
</style>
