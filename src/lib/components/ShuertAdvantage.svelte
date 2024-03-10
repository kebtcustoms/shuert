<script>
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
</script>




<div class="sacontainer">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->

 

  <div class="shuertadvantage" on:click={toggleModal}>
    <div class="satext">
        <div class="satop"><h1>The</h1></div>
        
        <div class="sabottom">
            <h1>Shuert Advantage</h1>
        </div>
    </div>
    <div class="sasvg">
        <svg xmlns="http://www.w3.org/2000/svg" width="277" height="490" viewBox="0 0 277 490">
            <g id="Polygon_1" data-name="Polygon 1" transform="translate(277) rotate(90)" fill="#fff" opacity="0.15">
              <path d="M 488.8902893066406 276.5 L 1.109721064567566 276.5 L 245 0.7546643018722534 L 488.8902893066406 276.5 Z" stroke="none"/>
              <path d="M 245 1.5093994140625 L 2.219512939453125 276 L 487.7804870605469 276 L 245 1.5093994140625 M 245 0 L 490 277 L 0 277 L 245 0 Z" stroke="none" fill="#707070"/>
            </g>
          </svg>
    </div>
</div>

<div class="video-container-shadow"></div>
<div class="video-container-shadow1"></div>
<div class="video-container-shadow2"></div>
<div class="video-container-shadow3"></div>
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

      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      title="Custom Design"
      >
    </iframe>
  </div>
</div>
{/if}


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
  
<style>

  iframe {
    width: 960px;
      height: 540px;
  }

    .sacontainer {
        
        position: relative;
        height: 690px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 100px;
        margin-bottom: 100px;
        /* border: 1px solid pink; */
        
    }
        .shuertadvantage {
            cursor: pointer;
        margin: auto;
        display: flex;
        width: 100%;
        background-image: url(/images/shuertadvantage.png);
    background-position: center;
    background-size: cover;
        margin-top: 100px;
        margin-bottom: 100px;
        justify-content: center;
        align-items: center;
        height: 590px;
        /* border: red 1px solid; */
        /* height: fit-content; */
    }
    
    .satext {
        position: absolute;
        z-index: 2;
        /* height: fit-content; */
        /* margin-top: -30px; */
        font-size: 2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 85%;
        /* margin: auto; */
        /* top: 50%;
        left: 50%;
        transform: translate(-50%,-50%); */
        /* border: red 1px solid; */
    }
    
    .satop {
        /* margin-left: -500px; */
        color: #f2f2f2;
        font-weight: bold;
        /* border: rgb(0, 255, 238) 1px solid; */

    }

    .sabottom {
        color: #f2f2f2;
        font-weight: bold;
        margin-top: 10px;
        /* margin-right: -100px; */
        width: 85%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* align-items: center; */
        text-align: center;
        /* border: rgb(238, 255, 0) 1px solid; */
       
    }
    
    .sasvg {
        margin: auto;
        /* width: 20%; */
        transform: scale(70%);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: #ce0024 solid 1px; */
        
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

  .video-container-shadow1 {
    /* content: ""; */
    position: absolute;
    /* top: 625px; */
    top: -50px;
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
    position: absolute;
    /* top: 625px; */
    top: 50px;
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
  .video-container-shadow2 {
    /* content: ""; */
    position: absolute;
    /* top: 625px; */
    top: 540px;
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
  .video-container-shadow3 {
    position: absolute;
    /* top: 625px; */
    top: 640px;
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
    margin-top: -120px;
    /* margin-bottom: 90px; */

  }

  .clicktoview h3 {
    font-weight: 100;
  }

  .clicktoview svg {
    transform: rotate(180deg);
    width: 18px;
    margin-top: 2px;
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

        /* .sabottom {
            
            align-items: center;
        } */
    }

    @media (max-width: 426px) {
      iframe {
          width: 240px;
          height: 135px;
        }
    }

    @media only screen and (max-width: 376px) {
        

        .satext {
            font-size: 1.5em;

        }

        .sasvg {
            transform: scale(50%);

        }

    }
</style>