<script>
    // @ts-nocheck
    import ShuertAdvantage from "$lib/components/ShuertAdvantage.svelte";
    import Form from "$lib/components/Form.svelte";
    import Specs from "$lib/components/Specs.svelte";
    import Animation from "$lib/components/Animation.svelte";
    import Unidirectionaltext from "$lib/components/animationtext/Unidirectionaltext.svelte";
    import Spacer from "$lib/components/Spacer.svelte";


    let productimage = "unidirectional"


    let products = [
        {
            id: "uni-directional",
            name: "Uni-Directional",
            svg: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" height="33.09" viewBox="0 0 237.03 33.09">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        //stroke: #d12539;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }
    </style>
  </defs>
  <g id="Unidirectional">
    <path class="cls-1" d="M80.89,26.43h18.53c1.66,0,2.49-1.81,2.89-3.37.25-.97.37-1.97.37-2.97v-2.18s0-3.69,0-3.69c0,0,.48-5.67-5.92-5.67h-15.87s-4.11,0-4.11,0h-21.19c-6.4,0-5.92,5.67-5.92,5.67v5.87c0,1,.12,2,.37,2.97.41,1.56,1.23,3.37,2.89,3.37h27.96Z"/>
    <g id="Layer_23" data-name="Layer 23">
      <path class="cls-1" d="M118.53,2.46h114.77s.58,0,1.19,0,.54.56.54.56v.52s0,25.44,0,25.44c0,0,.06,2.11-1.45,2.11-1.51,0-9.81,0-9.81,0h-105.24s-.03,0-.03,0H3.45c-1.51,0-1.45-2.11-1.45-2.11V3.02s-.06-.56.54-.56,1.19-.46,1.19-.46h114.77l.03.46Z"/>
      <path class="cls-1" d="M156.14,26.43h-18.53c-1.66,0-2.49-1.81-2.89-3.37-.25-.97-.37-1.97-.37-2.97v-5.87s-.48-5.67,5.92-5.67h15.87s4.11,0,4.11,0h21.19c6.4,0,5.92,5.67,5.92,5.67v3.69s0,2.18,0,2.18c0,1-.12,2-.37,2.97-.41,1.56-1.23,3.37-2.89,3.37h-23.85s-4.11,0-4.11,0Z"/>
    </g>
  </g>
</svg>
`,
            selected: false,
        },
    ];

    const columns = [
        "Name",
        "Outside Dimensions",
        "Weight",
        "Load Capacity",
    ];
    const data = [
        ["800 x 1200", '48" x 40" x 6.5"', "22 lbs.", "2500 lbs."],
        ["600 x 800", '48" x 40" x 6.5"', "22 lbs.", "2500 lbs."],
        ["Display Pallet", '48" x 42" x 6.5"', "23.3 lbs.", "2500 lbs."],
    ];




    let producttitle = "Unidirectional Pallet"
    let productdesc = "Our Unidirectional Pallet is engineered to meet the dynamic demands of the European market, offering unparalleled strength without the weight and bulk of traditional wooden or metal pallets. This makes it an environmentally friendly option that also saves on shipping costs due to its lightweight nature. Fully compliant with European standards, each pallet is designed for consistent performance in appearance, weight, and dimensions, providing ease of integration into existing logistics systems."

</script>

<Animation {productimage} component={Unidirectionaltext} {producttitle}{productdesc}/>
<Spacer />
<Specs {columns}{data} />
<ShuertAdvantage />
<div style="margin-top: 100px;">

  <Form {products}/>
</div>

