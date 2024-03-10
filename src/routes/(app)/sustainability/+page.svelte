<script>
    import EmailCapture from "$lib/components/EmailCapture.svelte";


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


  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="shuertadvantage" on:click={toggleModal}>
    <div class="satext">
        <h1 class="satop">Sustainability</h1>
        <!-- <h1 class="sabottom">Design</h1> -->
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
      src="https://player.vimeo.com/video/921533250?autoplay=1&loop=1&playsinline=1"
      width="960"
      height="540"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      title="Custom Design"
      >
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







<!-- <h1 class="sustextheading">
    Pioneering a <strong class="sustextred">Sustainable</strong> Tomorrow
</h1> -->
<div class="sustextcontainer">
    <div class="sustextwrapper">
        <h1 class="sustextheading">
            Pioneering a <strong class="sustextred">Sustainable</strong> Tomorrow
        </h1>
        <p class="sustextright">
            Shuert Technologies leads the way in sustainable practices with its
            on-campus recycling center, boasting the capacity to process a
            staggering 150k lbs. of plastic daily. In a commendable move towards
            bolstering eco-friendliness, we offer our customers a material
            buyback program. This initiative underscores the sustainability
            advantages of HDPE. As a highly recyclable material, HDPE can be
            continuously repurposed without significant degradation in quality,
            presenting a pivotal solution to mounting environmental concerns. By
            incentivizing the collection and recycling of HDPE, Shuert
            Technologies not only showcases its commitment to environmental
            stewardship but also offers a practical avenue for consumers and
            businesses to participate in circular economic models.
        </p>
    </div>
    <div class="svgwrapper">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="679.227"
            height="639.379"
            viewBox="0 0 679.227 639.379"
        >
            <text
                id="_2_"
                data-name="2
                  "
                transform="translate(298 366.084)"
                fill="#f4f4f4"
                font-size="150"
                font-family="UniversLTStd-Bold, Univers LT Std"
                font-weight="700"
                opacity="0.1"
                ><tspan x="0" y="0">2</tspan><tspan x="0" y="181"></tspan></text
            >
            <g
                id="Group_434"
                data-name="Group 434"
                transform="translate(-780.397 -425.3)"
                opacity="0.1"
            >
                <path
                    id="Path_99"
                    data-name="Path 99"
                    d="M787.373,786.961l35.96-66.585L793.57,704.3c-.1-.055-.154-.1-.163-.1a1.183,1.183,0,0,1,.129-.794c.089-.159.124-.2.407-.245L922,682.029c.056-.009.087-.009.092-.011a.8.8,0,0,1,.212.283l52.7,118.173a.679.679,0,0,1-.021.75,1.31,1.31,0,0,1-.7.594.688.688,0,0,1-.155-.06L944.525,785.6,863.092,936.547A76.523,76.523,0,0,0,855.8,956.2l-8.009-13.4-1.416-2.361h0l-57.757-96.72A56.876,56.876,0,0,1,787.373,786.961Zm256.145,243.1a.443.443,0,0,1-.4.4H932.982a57.519,57.519,0,0,1-49.283-27.582l-.861-1.442a57.678,57.678,0,0,1-.387-54.446l29.226-54.173h131.438a.443.443,0,0,1,.4.4Z"
                    fill="#f4f4f4"
                />
                <path
                    id="Path_100"
                    data-name="Path 100"
                    d="M1236.28,749.882a3.427,3.427,0,0,1-.232-2.646,3.272,3.272,0,0,1,1.654-1.974L1354.6,686.086l.08-.042a3.275,3.275,0,0,1,4.343,1.438l54.036,99.943a56.691,56.691,0,0,1-1.249,55.823l-.015-.009-.1.161a57.51,57.51,0,0,1-48.477,27.434l-61.562-.015Zm80.5,252.57a56.843,56.843,0,0,1-49.359,27.992l-75.692-.044v33.806c0,.122-.012.188-.009.195a1.211,1.211,0,0,1-.781.278h-.006c-.205,0-.265-.023-.431-.243L1111.163,961.7c-.018-.023-.028-.039-.033-.044a.662.662,0,0,1,.128-.278l79.072-102.494a.653.653,0,0,1,.648-.333,1.264,1.264,0,0,1,.839.341.558.558,0,0,1,.023.173l-.17,33.726,11.051,0,160.495.038a76.424,76.424,0,0,0,20.711-2.9l-2.573,4.311-.3.5h0Z"
                    transform="translate(39.829)"
                    fill="#f4f4f4"
                />
                <path
                    id="Path_101"
                    data-name="Path 101"
                    d="M1269.538,453.345l43.178,66.162,31.837-17.405c.109-.059.172-.08.176-.085a1.363,1.363,0,0,1,.745.548c.134.2.151.3,0,.633l-52.147,120.488a1.249,1.249,0,0,1-.117.211.808.808,0,0,1-.283.016L1151.948,608.53a.648.648,0,0,1-.6-.331,1.345,1.345,0,0,1-.214-.9.773.773,0,0,1,.082-.048l31.908-17.274-97.014-148.336a77.935,77.935,0,0,0-14.39-16.335h143.616C1237.729,425.3,1258,435.8,1269.538,453.345ZM895.024,550.491,958.795,452.9c11.17-17.022,31.6-27.6,53.315-27.6v0c21.426,0,42.336,10.827,53.272,27.583l3.508,5.374h.027c6.283,9.583,19.981,30.516,31.084,47.489l-77.348,118.183a3.565,3.565,0,0,1-2.255,1.486,3.627,3.627,0,0,1-2.628-.4L896.1,554.949A3.1,3.1,0,0,1,895.024,550.491Z"
                    fill="#f4f4f4"
                />
            </g>
        </svg>
    </div>
</div>
<EmailCapture />

<style>
  .shuertadvantage {
    margin: auto;
    display: flex;
    width: 100%;
    background-image: url(/images/sustain.png);
    background-position: center;
    background-size: cover;
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
        z-index: 2;
        height: fit-content;
        margin-top: -30px;
    }

    .satop {
        color: #f2f2f2;
        font-weight: bold;
        font-size: 100px;
    }
    /* .sabottom {
    color: #f2f2f2;
    margin-top: 90px;
    margin-left: -100px;
    font-size: 100px;
  } */

    .sasvg {
        margin: auto;
        width: 20%;
        transform: scale(70%);
        z-index: 1;
        /* display: flex; */
        /* justify-content: center;
        align-items: center; */
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

    .sustextcontainer {
        width: 85%;
        margin: auto;
        /* margin-top: 50px; */
        display: flex;
    }

    .sustextwrapper {
        display: flex;
        flex-direction: column;
        width: 50%;
        /* border: #ce0024 1px solid; */
        justify-content: center;
    }

    .sustextheading {
        font-size: 2em;
        color: #f2f2f2;
        text-align: left;
        width: 100%;
        /* margin: auto; */
        line-height: 1.5em;
    }


    .sustextred {
        color: #ce0024;
    }

    .sustextwrapper p {
        color: #f2f2f2;
        font-size: 1em;
        font-weight: 100;
        line-height: 1.5em;
        margin-top: 20px;
    }

    .svgwrapper {
        width: 50%;
        display: flex;
        align-items: flex-start;
        /* border: #f2f2f2 solid 1px; */

    }

    .svgwrapper svg {
        
        transform: scale(70%);
       
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

    @media (max-width: 995px) {
      .sustextcontainer {
        margin-top: 70px;
        flex-direction: column;
      }

      .sustextwrapper {
        width: 100%;
      }

      .sustextheading {
        text-align: center;
      }

      .svgwrapper {
        width: 100%;
        justify-content: center;
        margin-top: -50px;
        margin-bottom: -50px;
      }
    }


    @media (max-width: 664px) {
      .satop {
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
