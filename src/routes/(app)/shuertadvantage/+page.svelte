<script>
  // @ts-nocheck

  import { onMount, onDestroy } from "svelte";
  import Swiper from "swiper";
  import { FreeMode } from "swiper/modules";
  // import Swiper styles
  import "swiper/css";
  import "swiper/css/free-mode";
  import EmailCapture from "$lib/components/EmailCapture.svelte";
  

  let swiperInstance;

  let isModalOpen = false;


  // Function to toggle the modal open and closed
  function toggleModal() {
    isModalOpen = !isModalOpen;
    // Whenever the modal state changes, add or remove the 'no-scroll' class
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      // document.body.style.paddingright = "15px";

    } else {
      document.body.style.overflow = "auto"
    }
  }

  onMount(() => {
    swiperInstance = new Swiper(".swiper", {
      // Install the FreeMode module
      modules: [FreeMode],
      slidesPerView: "auto",
      freeMode: true,
      freeModeMomentum: true,
      // You can add more Swiper options here
    });
  });

  // Optional: Clean up the swiper instance on component destruction
  onDestroy(() => {
    swiperInstance?.destroy(true, true);
  });
</script>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="shuertadvantage" on:click={toggleModal}>
  <div class="satext">
    <h1 class="satop">The Shuert</h1>
    <h1 class="sabottom">Advantage</h1>
  </div>
  <div class="sasvg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="277"
      height="490"
      viewBox="0 0 277 490"
    >
      <g
        id="Polygon_1"
        data-name="Polygon 1"
        transform="translate(277) rotate(90)"
        fill="#fff"
        opacity="0.15"
      >
        <path
          d="M 488.8902893066406 276.5 L 1.109721064567566 276.5 L 245 0.7546643018722534 L 488.8902893066406 276.5 Z"
          stroke="none"
        />
        <path
          d="M 245 1.5093994140625 L 2.219512939453125 276 L 487.7804870605469 276 L 245 1.5093994140625 M 245 0 L 490 277 L 0 277 L 245 0 Z"
          stroke="none"
          fill="#707070"
        />
      </g>
    </svg>
  </div>
</div>
{#if isModalOpen}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="modal" on:click={toggleModal}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-content" on:click|stopPropagation>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span class="close-modal" on:click={toggleModal}>&times;</span>
    <iframe
      src="https://player.vimeo.com/video/921532817?autoplay=1&loop=1&playsinline=1"
      width="960"
      height="540"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      title="The Shuert Advantage"
      playsinline>
    </iframe>
  </div>
</div>
{/if}
<div class="video-container-shadow1"></div>
<div class="video-container-shadow"></div>

<div class="clicktoview">
  <h3>Click to View Video</h3>
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

<!-- <div class="historytitle">
  <h1>History of Innovation</h1>
</div>
<div class="swipercont">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="timetop">
          <span class="centerline"></span>
          <div class="timecard">
            <span class="redstick"></span>
            <span class="redball"></span>
            <h3>1971</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisf sicing elit. Modi,
              ipsam.
            </p>
          </div>
          <div class="timecard">
            <span class="redstick"></span>
            <span class="redball"></span>
            <h3>1976</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisf icing elit. Modi,
              ipsam.
            </p>
          </div>
          <div class="timecard">
            <span class="redstick"></span>
            <span class="redball"></span>
            <h3>1986</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adip isici ng elit. Modi,
              ipsam.
            </p>
          </div>
          <div class="timecard">
            <span class="redstick"></span>
            <span class="redball"></span>
            <h3>1990/1991</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur ad ipisici ng elit. Modi,
              ipsam.
            </p>
          </div>
          <div class="timecard">
            <span class="redstick"></span>
            <span class="redball"></span>
            <h3>2014/2015</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              ipsam.
            </p>
          </div>
        </div>
        <div class="timebottom">
          <div class="timecard">
            <span class="redstickbot"></span>
            <span class="redballbot"></span>
            <h3>1974</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adi pisici ng elit. Modi,
              ipsam.
            </p>
          </div>

          <div class="timecard">
            <span class="redstickbot"></span>
            <span class="redballbot"></span>
            <h3>1981</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adi pisic ing elit. Modi,
              ipsam.
            </p>
          </div>

          <div class="timecard">
            <span class="redstickbot"></span>
            <span class="redballbot"></span>
            <h3>1988</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adi pisici g elit. Modi,
              ipsam.
            </p>
          </div>

          <div class="timecard">
            <span class="redstickbot"></span>
            <span class="redballbot"></span>
            <h3>1996</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur ad ipisic ing elit. Modi,
              ipsam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->
<div class="corevaluestitle">
  <h1>Our Core Values</h1>
</div>
<div class="valuesparent">
  <div class="valuesimage">
    <img src="/images/reman.png" alt="reman">
  </div>
  
  <div class="valuescont">
    <div class="valuesleft">
      <p>01</p>
      <h3>Our Customers</h3>
    </div>
    <div class="valuesright">
      <p>
        Listen to the needs of our customers and deliver the highest-quality
        products and customer service through relationships that are built on
        trust,honesty and integrity
      </p>
    </div>
    <span class="whiteline"></span>
  </div>
  <div class="valuescont">
    <div class="valuesleft">
      <p>02</p>
      <h3>Our People</h3>
    </div>
    <div class="valuesright">
      <p>
        Our employees are the key to our success. Investing in our people and
        processes allows us to create an environment of learning to promote and
        encourage the personal and professional growth of our employees.
      </p>
    </div>
    <span class="whiteline"></span>
  </div>
  <div class="valuescont">
    <div class="valuesleft">
      <p>03</p>
      <h3>Our Community</h3>
    </div>
    <div class="valuesright">
      <p>
        We are committed to giving back to the communities in which we live,
        work and serve.
      </p>
    </div>
    <span class="whiteline"></span>
  </div>
  <div class="valuescont">
    <div class="valuesleft">
      <p>04</p>
      <h3>Our Environment</h3>
    </div>
    <div class="valuesright">
      <p>
        Shuert Technologies as a citizen in the global environment is dedicated
        to protecting human health, natural resources and the global environment
      </p>
    </div>

  </div>
</div>
<EmailCapture />
<style>
  .shuertadvantage {
    margin: auto;
    display: flex;
    width: 100%;
    background-image: url(/images/shuertadvantage2.png);
    background-position: center;
    justify-content: center;
    align-items: center;
    height: 590px;
    z-index: 1;
    cursor: pointer;

  }


  .video-container-shadow1 {
    content: "";
    position: absolute;
    /* top: 625px; */
    top: 510px;
    width: 100%;
    height: 100px;
    z-index: 5;
    /* background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgb(37, 32, 34)
    ); */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgb(36, 32, 34)
    );
    /* border: #ce0024 1px solid; */
  }
  .video-container-shadow {
    content: "";
    position: absolute;
    /* top: 625px; */
    top: 610px;
    width: 100%;
    height: 100px;
    z-index: 5;
    /* background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgb(37, 32, 34)
    ); */
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgb(36, 32, 34)
    );
    /* border: #ce0024 1px solid; */
  }

  .satext {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    height: fit-content;
    width: 100%;
    /* margin-top: -30px; */
  }

  .satop {
    color: #f2f2f2;
    font-weight: bold;
    font-size: 100px;
    /* border: 1px solid red; */
    align-self: center;
    margin-right: 50px;
  }
  .sabottom {
    color: #f2f2f2;
    /* margin-top: 90px; */
    /* margin-left: -100px; */
    font-size: 100px;
    /* border: 1px solid blue; */
    align-self: center;
    margin-left: 50px;
  }

  .sasvg {
    margin: auto;
    width: 20%;
    transform: scale(70%);
    z-index: 1;
  }


  .modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(36, 31, 31, 0.758);
    justify-content: center;
    align-items: center;
    z-index: 100;

  }



  .modal-content {
    background: #fff;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 0px;
    border-radius: 4px;
    margin: auto;
  }



  .close-modal {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    font-size: 56px;
    color: white;
  }

  .clicktoview {
    position: relative;
    /* top: 600px; */
    
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: center;
    color: #f2f2f2;
    margin-top: 0px;
    align-items: center;
    gap: 7px;
    z-index: 7;
    margin-top: 20px;
    margin-bottom: 90px;

  }

  .clicktoview h3 {
    font-weight: 100;
  }

  .clicktoview svg {
    transform: rotate(180deg);
    width: 18px;
    margin-top: 2px;
  }


  /* .historytitle {
    width: 85%;
    margin: auto;
    margin-bottom: 50px;
  }

  .historytitle h1 {
    font-size: 2.5em;
    color: #f2f2f2;
    text-align: center;
  } */


  /* .swipercont {
    overflow-x: hidden;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: 100px;
  }

  .swiper-slide {
    width: 2500px;
    height: auto; 
    color: #f2f2f2;
    display: flex;
    flex-direction: column;
    gap: 51px;
  }

  .timetop {
    position: relative;
    display: flex;
    gap: 50px;
  }

  .centerline {
    position: absolute;
    height: 1px;
    width: 2000px;
    background-color: #ce0024;
    top: 276px;
    left: 100px;
  }

  .timebottom {
    position: relative;
    margin-left: 200px;
    display: flex;
    gap: 50px;
  }

  .timecard {
    position: relative;
    width: 400px;
    height: 250px;
    background-color: #f2f2f207;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .timecard p {
    width: 85%;
  }

  .redstick {
    position: absolute;
    height: 25px;
    width: 1px;
    background-color: #ce0024;
    bottom: -25px;
  }
  .redball {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: #ce0024;
    bottom: -31px;
    border-radius: 25px;
  }
  .redstickbot {
    position: absolute;
    height: 25px;
    width: 1px;
    background-color: #ce0024;
    top: -25px;
  }
  .redballbot {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: #ce0024;
    top: -29px;
    border-radius: 25px;
  } */

  .corevaluestitle {
    margin-top: 50px;
    margin-bottom: 150px;
  }

  .corevaluestitle h1 {
    font-size: 2.5em;
    color: #f2f2f2;
    text-align: center;
  }

  .valuesparent {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin-bottom: 200px;
  }

  .valuesimage {
    width: 500px;
    height: 250px;
    position: absolute;
    left: 25%;
    top: -110px;
    z-index: 95;
  }

  .valuesimage img {
    height: auto;
    width: 100%;
    
  }

  .valuescont {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: auto;
    align-items: center;
    
  }

  .valuesleft {
    width: 30%;
    display: flex;
    gap: 10px;
  }

  .valuesleft p{
    color: #ce0024;
  }

  .valuesleft h3{
    color: #f2f2f2;
    font-size: 1em;
    font-weight: 100;
  }

  .valuesright {
    width: 30%;
  }

  .valuesright p {
    color: #f2f2f2;
  }

  .whiteline {
    position: absolute;
    height: 1px;
    width: 100%;
    /* margin: auto; */
    background-color: #f2f2f20a;
    bottom: -40px;
    /* left: 20; */
    z-index: 1;
  }

  @media only screen and (max-width: 1025px) {
        iframe {
          width: 480px;
          height: 270px;
        }
        .satext {
            font-size: 1.9em;

        }

        .satop {
            margin-left: 0px;

        }

        .valuesimage {
          width: 45%;
          top: 5%;
          left: 20%;
        }

        /* .sabottom {
            
            align-items: center;
        } */
    }

    @media (max-width: 774px) {
      .valuesimage {
      display: none;
        }

        .valuesright {
          width: 60%;
        }
    }

    @media (max-width: 664px) {
      .satop {
          font-size: 64px;
        }
      .sabottom {
          font-size: 64px;
        }
    }

    @media (max-width: 426px) {
      iframe {
          width: 240px;
          height: 135px;
        }

        .satop {
          font-size: 48px;
        }
        .sabottom {
          font-size: 48px;
        }

       
    }

    @media only screen and (max-width: 376px) {
        

        .satext {
            font-size: 1.5em;

        }

        .sabottom {
          font-size: 1.5em;
        }

        .sasvg {
            transform: scale(50%);

        }
      }

      @media (max-width: 340px) {
        .valuescont {
    width: 90%;
    
  }
    }
</style>
