<script>
  // @ts-nocheck

  import { onMount, onDestroy } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import ShuertAdvantage from "$lib/components/ShuertAdvantage.svelte";
  import Form from "$lib/components/Form.svelte";
  

  gsap.registerPlugin(ScrollTrigger);

  let progressBar;
  let processContainer;
  // let svgElements = [];
  // const svgChangeFrames = {
  //     icon1: 2,
  //     icon2: 12,
  //     icon3: 22,
  //     icon4: 55,
  //     icon5: 77,
  //     icon6: 97,

  // let showModal = false;
    let products = [
        {
            id: "Custom-Design",
            name: "Custom Design",
            svg: `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 238.38 40">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        // stroke: #d12539;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }
    </style>
  </defs>
  <g id="Custom">
    <path class="cls-1" d="M74.93,8.63c1.22-.3,1.33-1.44,1.33-1.44,0,0,.29-1.58.5-3.6.22-2.02,2.46-1.54,2.46-1.54h79.95s2.24-.48,2.46,1.54c.22,2.02.5,3.6.5,3.6,0,0,.11,1.15,1.33,1.44M74.93,8.63c-.18.04-.39.07-.62.07h-15.55s-1.22-.29-1.51-1.44-.72-4.03-.72-4.03c0,0,0-1.23-1.48-1.23H3.21s-.38-.07-.45.65-.72,5.47-.72,5.47c0,0-.14.43.14.58h1.37s.86,0,.93.86.36,5.76.36,5.76l1.08,21.09s.29,1.58,1.3,1.58h223.94c1.01,0,1.3-1.58,1.3-1.58l1.08-21.09s.29-4.9.36-5.76.93-.86.93-.86h1.37c.29-.14.14-.58.14-.58,0,0-.65-4.75-.72-5.47s-.45-.65-.45-.65h-51.85c-1.48,0-1.48,1.23-1.48,1.23,0,0-.43,2.88-.72,4.03-.29,1.15-1.51,1.44-1.51,1.44h-15.55c-.23,0-.44-.03-.62-.07"/>
  </g>
</svg>

`,
selected: false,
        },
    ];

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
    
    ScrollTrigger.create({
      trigger: processContainer,
      start: "top center",
      end: "bottom center",
      // scrub:true,

      // markers: true,
      // onUpdate: (self) => {
      //   progressBar.style.height = `${self.progress * processContainer.offsetHeight}px`;
      // }
      onUpdate: (self) => {
        // Calculate the current frame based on scroll progress
        const totalFrames = 100;
        const currentFrame = Math.round(self.progress * totalFrames);
        // Map the current frame to a specific height
        const height =
          (currentFrame / totalFrames) * processContainer.offsetHeight;
        progressBar.style.height = `${height}px`;
      },
    });

    
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    }
    // When the component is destroyed, make sure to clean up by removing the class
    return () => {
      document.body.classList.remove('no-scroll');
    };
 
  });

</script>


  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="shuertadvantage" on:click={toggleModal}>
    <div class="satext">
      <h1 class="satop">Custom</h1>
      <h1 class="sabottom">Design</h1>
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
          src="https://player.vimeo.com/video/921532971?autoplay=1&loop=1&playsinline=1"
          width="940"
          height="540"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          title="Custom Design"
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
  
  <div class="custextcontainer">
    <div class="custextwrapper">
      <h1 class="custextleft">
        Commitment to <strong class="custextred">Excellence</strong> in Custom Design
      </h1>
      <p class="custextright">
        At Shuert Technologies, we recognize the indispensable role of custom
        design in propelling the industry forward. It's our commitment to
        innovation and excellence that has enabled us to set the benchmark in the
        field of packaging design, testing, and prototyping. With several team
        members boasting over 25 years of service at Shuert Technologies, we are
        fortunate to have a reservoir of experience and knowledge. By employing
        tools such as 3D CAD, precision CNC machining, and other proprietary
        technologies, we ensure accuracy, efficiency, and unparalleled quality in
        our development process.
      </p>
    </div>
  </div>
  
  
  <!-- <div class="processtitle">
    <h1>Our Process</h1>
  </div>
  <div bind:this={processContainer} class="processcontainer">
    <div class="processsections">
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Concept</h1>
          <p>
            Shuert Technologies takes on the challenge of creating the best
            transport packaging solution for your product. They conduct density,
            cost, and payback analyses to tailor a packaging solution unique to
            the customer’s needs.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Design</h1>
          <p>
            With an understanding of the customer's requirements, Shuert's
            experienced design and engineering team will create a 3D concept.
            Specializing in thermoformed material handling products, they tailor
            their designs to take advantage of the thermoforming process.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Prototype</h1>
          <p>
            Once the concept is approved, Shuert creates a wood pattern to
            fabricate prototype parts. They examine the prototypes' form, fit, and
            function at their testing facility. On-site refinements can be made,
            and multiple iterations created before validating the design and
            progressing to production tooling and manufacturing.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Production Tooling</h1>
          <p>
            Upon prototype approval, Shuert fabricates aluminum production tooling
            using the vast expertise of its team. Collaborative input ensures
            high-quality standards in crafting the tool with high-grade materials,
            pushing boundaries while maintaining excellence.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Material Selection</h1>
          <p>
            Material selection is crucial for strength, longevity, durability, and
            environmental responsibility. Shuert uses premium High Molecular
            Weight, High-Density Polyethylene (HDPE-HMW) for all its products.
            Thermoforming HDPE-HMW provides a stronger, lighter product with a
            lower carbon footprint than injection-grade materials.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Extrusion</h1>
          <p>
            Shuert’s controlled in-house extrusion process begins with melting and
            blending polymers into a homogeneous blend, which is then sized,
            cooled, and cut into sheets. This step is pivotal in maintaining
            quality control over the thermoforming process.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Twin Sheet Thermoforming</h1>
          <p>
            The twin sheet thermoforming process involves heating and molding two
            plastic sheets bonded together to create a robust structure with
            unmatched strength and durability, utilizing less material and
            resulting in a lighter product with a reduced environmental impact.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
      <div class="process-step">
        <div class="processtextcontainer">
          <h1>Finishing & Assembly</h1>
          <p>
            Shuert Technologies utilizes automation and robotics for secondary and
            auxiliary processes. Shuert creates custom processes for each product
            internally to ensure product quality while minimizing the use of
            valuable resources.
          </p>
        </div>
        <div class="processimagecontainer">
          <div class="processimagewrapper">
            <img src="/images/unipallet.png" alt="unipak" />
          </div>
        </div>
      </div>
    </div>
    <div class="progress-bar" bind:this={progressBar}></div>
    <div class="progress-barbg"></div>
    <div class="icons">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon1"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon2"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon3"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon4"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon5"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon6"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon6"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="111"
        height="111"
        viewBox="0 0 111 111"
        id="icon6"
      >
        <g
          id="Ellipse_70"
          data-name="Ellipse 70"
          fill="#600011"
          stroke="#ce0024"
          stroke-width="5"
        >
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none" />
          <circle cx="55.5" cy="55.5" r="53" fill="none" />
        </g>
        <g
          id="Group_513"
          data-name="Group 513"
          transform="translate(67.927 -2314.099)"
        >
          <path
            id="Path_60"
            data-name="Path 60"
            d="M23.038,2349.979a1.762,1.762,0,0,0-1.708-1.328H18.176l-.7-1.231a1,1,0,0,0-.876-.42H15.079a.976.976,0,0,0-.893.453l-.575,1.2H-10.176l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2H-38.591l-.7-1.231a1,1,0,0,0-.876-.42h-1.525a.977.977,0,0,0-.893.453l-.575,1.2h-3.462a1.761,1.761,0,0,0-1.755,1.617,1.757,1.757,0,0,0-.627,1.347v1.9H24.146v-1.9A1.762,1.762,0,0,0,23.038,2349.979Z"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <path
            id="Path_61"
            data-name="Path 61"
            d="M-49,2929v3.146a.939.939,0,0,0,.62.886h0l.62,4.963H-33.8l.62-4.963h13.153l.62,4.963H-5.447l.62-4.963h12.9L8.7,2938H22.657l.62-4.963H23.26a.886.886,0,0,0,.886-.886V2929Z"
            transform="translate(0 -545.892)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
          <rect
            id="Rectangle_219"
            data-name="Rectangle 219"
            width="71.041"
            height="29.76"
            transform="translate(-48.04 2353.4)"
            fill="none"
            stroke="#ce0024"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          />
        </g>
      </svg>
    </div>
  </div>
  <div style="margin-top: 800px;"></div> -->
  
  <ShuertAdvantage />
  <div style="margin-top: 100px;">

    <Form {products}/>
  </div>


<style>
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: "Univers", sans-serif;
    box-sizing: border-box;
  }

  .shuertadvantage {
    margin: auto;
    display: flex;
    width: 100%;
    background-image: url(/images/customdesign.png);
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
    z-index: 2;
    /* border: #ce0024 solid 1px; */
    height: fit-content;
    margin-top: -30px;
  }

  .satop {
    color: #f2f2f2;
    font-weight: 100;
    font-size: 100px;
    font-weight: bold;
  }
  .sabottom {
    color: #f2f2f2;
    margin-top: 90px;
    margin-left: -100px;
    font-size: 100px;
  }

  .sasvg {
    margin: auto;
    width: 20%;
    transform: scale(70%);
    z-index: 9;
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
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4px;
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
  }

  .clicktoview h3 {
    font-weight: 100;
  }

  .clicktoview svg {
    transform: rotate(180deg);
    width: 18px;
    margin-top: 2px;
  }

  .custextcontainer {
    width: 100%;
    margin-top: 110px;
    margin-bottom: 90px;
  }

  .custextwrapper {
    width: 85%;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .custextleft {
    width: 50%;
    font-size: 2em;
    color: #f2f2f2;
    font-weight: bold;
  }

  .custextright {
    width: 50%;
    color: #f2f2f2;
    font-size: 1em;
    font-weight: 100;
    line-height: 1.5em;
  }

  .custextred {
    color: #ce0024;
  }

  /* Animation */

  /* .processcontainer {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: auto;
    height: 5050px;
  }

  .processsections {
    position: absolute;
    color: #f2f2f2;
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 100%;
    z-index: 50;
  }

  .process-step {
    display: flex;
    flex-direction: column;
    height: 711px;
    color: #f2f2f2;
    gap: 20px;
    width: 100%;
    margin: auto;
  }

  .process-step:nth-child(odd) {
    padding-right: 150px;
  }

  .process-step:nth-child(even) {
    align-items: flex-end;
    padding-left: 150px;
  }

  .processtextcontainer {
    margin-top: 40px;
    text-align: right;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }

  .processtextcontainer p {
    text-align: left;
    width: 80%;
    align-self: flex-end;
  }

  .processimagecontainer {
    width: 50%;
    height: 500px;
    display: flex;
  }

  .process-step:nth-child(even) .processtextcontainer {
    align-items: flex-start;
  }

  .process-step:nth-child(even) .processtextcontainer p {
    align-self: flex-start;
  }

  .processimagewrapper {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: #f2f2f221;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .progress-bar {
    margin-top: 0px;
    position: absolute;
    top: 0;
    left: 50%;
    width: 5px;
    height: 0px;
    background-color: #ce0024;
    z-index: 10;
    margin-left: -3px;
  }
  .progress-barbg {
    margin-left: -3px;
    margin-top: 0px;
    position: absolute;
    top: 0;
    left: 50%;
    width: 5px;
    height: 100%;
    background-color: #60001296;
    z-index: 9;
  }

  .icons {
    position: absolute;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 600px;
    z-index: 11;
  } */

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
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

      .custextcontainer {
    margin-bottom: -50px;
    margin-top: 70px;
    /* margin-bottom: 20px; */
  }
      .custextwrapper {
        gap: 30px;
        flex-direction: column;
      }

      .custextleft {
    width: 100%;

  }

  .custextright {
    width: 100%;

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



        .sasvg {
            transform: scale(50%);

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

</style>
