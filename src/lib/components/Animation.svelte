<script>
    // @ts-nocheck
    import { onMount, onDestroy, tick } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

    export let productimage;
    export let component;
    export let producttitle;
    export let productdesc;
    // export let productsystem;

    //Animamation nation ------------------------------------------

    let herocanvas, context, detailsWrapper; // Define these variables outside so they are accessible throughout the script
    let trigger; // Variable to store the ScrollTrigger instance
    let frameCount = 24; // Ensure frameCount is defined
    let images = []; // Initialize the images array

    function loadImages() {
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `/images/${productimage}/${i}.png?${new Date().getTime()}`;
            img.onload = handleImageLoad; // Set up an onload handler for each image
            images.push(img);
        }
    }

    let loadedImageCount = 0;
    function handleImageLoad() {
        loadedImageCount++;
        console.log(`Image loaded: ${loadedImageCount}/${frameCount}`);
        if (loadedImageCount === frameCount) {
            console.log("Initializing animation");
            initializeAnimation(); // Only initialize the animation once all images are loaded
        }
    }
    function initializeAnimation() {
        killAnimation();
        console.log("Animation initialized");
        herocanvas = document.getElementById("hero-lightpass");
        context = herocanvas.getContext("2d");
        detailsWrapper = document.querySelector(".detailsWrapper");

        herocanvas.width = 1920;
        herocanvas.height = 1920;

        // for (let i = 1; i <= frameCount; i++) {
        //     const img = new Image();
        //     img.src = `/images/images/${i}.png?${new Date().getTime()}`;
        //     images.push(img);
        // }

        const loadInitialImage = () => {
            const initialImage = new Image();
            initialImage.src = `/images/${productimage}/1.png`;
            initialImage.onload = () => {
                context.drawImage(initialImage, 0, 0);
            };
        };

        loadInitialImage();

        const synchronizedElements = [
            { element: "#leftElement1", startFrame: 5, endFrame: 7 },
            { element: "#leftElement2", startFrame: 13, endFrame: 16 },
            { element: "#leftElement3", startFrame: 20, endFrame: 22 },
            // ... add more as needed
        ];

        const updateLeftElementsVisibility = (frameIndex) => {
            synchronizedElements.forEach((sync) => {
                const el = document.querySelector(sync.element);
                if (
                    frameIndex >= sync.startFrame &&
                    frameIndex <= sync.endFrame
                ) {
                    console.log(`Activating element: ${sync.element}`);
                    // el.classList.add("active");
                    el.style.opacity = "1";
                } else {
                    console.log(`Deactivating element: ${sync.element}`);
                    // el.classList.remove("active");
                    el.style.opacity = "0";
                }
            });
        };
        function animate() {
            const frameIndex = Math.round(
                ScrollTrigger.getById("galleryTrigger").progress *
                    (frameCount - 1),
            );
            // drawHotspots(frameIndex);
            requestAnimationFrame(animate);
        }

        trigger = ScrollTrigger.create({
            id: "galleryTrigger",
            trigger: ".gallery",
            start: "top top",
            end: () => `+=${herocanvas.height}`,
            // end: () => `+=${herocanvas.height}`,
            // pin: ".right",
            pin: true,
            pinSpacing: true,
            scrub: true,
            onUpdate: (self) => {
                const frameIndex = Math.round(self.progress * (frameCount - 1));
                context.clearRect(0, 0, herocanvas.width, herocanvas.height);
                context.drawImage(images[frameIndex], 0, 0);
                // updateLeftElementsVisibility(frameIndex);

                // drawHotspots(frameIndex);

                if (self.progress >= 1) {
                    // Animation ended, so hide detailsWrapper
                    // detailsWrapper.classList.add("hidden");
                    detailsWrapper.style.display = "none";
                } else {
                    // detailsWrapper.classList.remove("hidden");
                    detailsWrapper.style.display = "flex";
                }
            },
        });

        requestAnimationFrame(animate);
    }

    function killAnimation() {
        if (trigger) {
            trigger.kill();
        }
        ScrollTrigger.getAll().forEach((st) => st.kill());
        console.log("Animation killed");
        // Your existing code to clean up animations
    }

    afterNavigate(() => {
        // Svelte's tick function ensures we are on the next 'tick' after DOM updates
        // await tick();
        // Refresh ScrollTrigger after the new page content has rendered
        // ScrollTrigger.refresh();
        console.log("After navigate called");
        initializeAnimation();
    });

    onMount(() => {
        console.log("Component mounted");
        gsap.registerPlugin(ScrollTrigger);
        loadImages();
        // initializeAnimation();
    });

    onDestroy(() => {
        console.log("Component destroyed");
        killAnimation();
    });
</script>

<div class="gallery">
    <div class="left">
        <div class="lefttextcont">
            <div class="producttitlewrap">
                <div class="producttitle">
                    <h1>{producttitle}</h1>
                </div>
            </div>
            <div class="productdesc">
                <p>{@html productdesc}</p>
            </div>
            <svelte:component this={component} />
        </div>
        </div>
    <div class="right">
        <div class="canvasWrapper">
            <canvas id="hero-lightpass"></canvas>
        </div>
    </div>
    
</div>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        font-family: "Univers", sans-serif;
        box-sizing: border-box;
    }

    .producttitle {
        position: absolute;
        color: #f2f2f2;
        width: 80%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        z-index: 0;
        /* -webkit-text-stroke: 2px #f2f2f2; */
        text-align: center;
    }

    .producttitle h1 {
        /* position: relative; */
        /* z-index: 3; */
        /* left: 50%; */

        line-height: 1em;
    }


    .gallery {
        display: flex;
        flex-direction: row-reverse;
        /* changed the above */
        /* outline: 1px solid red; */
        justify-content: center;
        align-content: center;
        width: 90%;
        margin: auto;
        /* padding-top: 100px; */
        margin-top: -20px;

        height: 100vh;
        /* margin-top: 100px; */
    }

    .right {
        /* flex: 1; */
        /* margin-top: 50px; */
        width: 50%;
        /* height: 3000px; */
        position: relative;
        /* padding-bottom: 0px; */
        /* height: 100vh; */
    }

    .canvasWrapper {
        top: 11.5%;
        position: relative;
        display: flex;
        justify-content: center;
        z-index: 2;
        /* align-items: center; */
    }

    /* .hotspotCanvas {
      position: absolute;
      top: 0;
      left: 20;

      z-index: 2;
  } */



    canvas {
        width: 90%;
        /* outline: 1px solid rgb(0, 255, 132); */
        align-self: center;
    }

    @media (max-width: 1921px) {
        .gallery {
            flex-direction: column-reverse;
            align-items: center;
            /* border: rgb(172, 135, 108) solid 1px; */
            margin-top: -20px;
            justify-content: center;
            height: 100vh;
        }

        /* .left,
      .right {
          flex: none;
      } */

        .right {
            position: relative;
            height: fit-content;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .canvasWrapper {
            top: 0;

            height: 100%;
            width: 100%;
            /* border: #a3ac97 solid 1px; */
        }

        canvas {
            width: 110%;
            /* border: #2d4e86 1px solid; */
        }

    }

    @media (max-width: 1921px) and (max-height: 1000px) {
        .right {
            width: 80%;
        }

        .canvasWrapper {
            width: 60%;
        }

        /* canvas {
          width: 100%;
      } */
    }

    @media (max-width: 1921px) {
        .gallery {
            display: flex;
            flex-direction: row-reverse;
            /* outline: 1px solid red; */
            justify-content: center;
            align-content: center;
            width: 100%;
            margin: auto;
            /* padding-top: 100px; */
            margin-top: -20px;
            height: 100vh;
            /* margin-top: 100px; */
        }

        .left {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* border: rebeccapurple 1px solid; */
        }

        .lefttextcont {
            /* border: wheat 1px solid; */
            width: 90%;
            margin: auto;
            justify-content: flex-start;
        }   

        .producttitlewrap {
            width: 100%;
        }

        .producttitle {
            position: relative;
            color: #f2f2f2;
            width: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            /* justify-content: flex-start; */
            z-index: 0;
            /* -webkit-text-stroke: 2px #f2f2f2; */
            text-align: left;
            margin-bottom: 30px;
        }
        /* .producttitletwo {
            display: none;
        } */


        .productdesc {
            color: #f2f2f2;
            text-align: left;
            width: 100%;
            margin: auto;
            display: flex;
            justify-content: flex-start;
        }

        .productdesc p{
            width: 89%;
        }

        .producttitle h1 {
            font-size: 5em;
        }

        .right {
            flex: 1;
            height: 100%;
            /* border: #59862d solid 1px; */
        }

        .canvasWrapper {
            width: 80%;
        }


    }



    @media (max-width: 1040px) {
        .gallery {
            display: flex;
            flex-direction: column-reverse;
            /* outline: 1px solid red; */
            justify-content: center;
            align-content: center;
            width: 100%;
            margin: auto;
            /* padding-top: 100px; */
            margin-top: -20px;
            height: 100vh;
            /* margin-top: 100px; */
            /* margin-bottom: 300px; */
            /* padding-bottom: 150px; */
        }



        /* .left {
            display: none;
        } */

        .left {
            width: 100%;

            align-items: center;
        }

        .lefttextcont {
            /* justify-content: center;
            align-items: center; */
            width: 80%;
            /* margin: auto; */
            margin: 0;
            /* border: 1px solid red; */
        }

        .producttitle{
            text-align: center;
        }
        .productdesc {
            display: flex;
            justify-content: center;
            /* width: 100%; */
            /* border: 1px solid blue; */
        }

        .right {
            width: 60%;
            margin-top: 150px;
            
        }

        /* .left {
            margin-bottom: 200px;
        } */

        .canvasWrapper {
            width: 100%;
        }

        .productdesc p{
            width: 100%;
            /* margin-bottom: 500px; */
        }


        /* .producttitlefour {
        position: absolute;
        color: transparent;
        -webkit-text-stroke: 1px #f2f2f237;
        z-index: 10;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        top: 60px;
        font-size: 50px;
    } */
    }
    @media (max-width: 600px) {
    .producttitle h1 {
            font-size: 4em;
        }

    }

    @media (max-width: 426px) {
        .right {
            width: 100%;
        }

        .canvasWrapper {
            width: 100%;
        }

        canvas {
            width: 100%;
        }
    }
</style>
