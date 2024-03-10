<script>
    import Navbartwo from '$lib/components/Navbartwo.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="mainbg">
    <Navbartwo/>
    <slot />
    <Footer />
</div>

<style>

:global(*) {
    margin: 0;
    padding: 0;
    font-family: "Univers", sans-serif;
    box-sizing: border-box;
  }

.mainbg {
    padding-top: 20px;
        width: 100%;
        height: auto;
        /* height: fit-content; */
        /* outline: 1px solid rgb(255, 0, 106); */
        background-color:hsla(355,11%,40%,1);
background-image:
radial-gradient(at 91% 100%, hsla(266,0%,0%,1) 0px, transparent 50%),
radial-gradient(at 32% 79%, hsla(351,11%,23%,1) 0px, transparent 50%),
radial-gradient(at 4% 96%, hsla(307,100%,0%,1) 0px, transparent 50%),
radial-gradient(at 77% 8%, hsla(269,1%,25%,0.29) 0px, transparent 50%),
radial-gradient(at 61% 7%, hsla(353,100%,0%,1) 0px, transparent 50%),
radial-gradient(at 62% 46%, hsla(269,1%,25%,0.45) 0px, transparent 50%),
radial-gradient(at 92% 58%, hsla(124,100%,0%,1) 0px, transparent 50%),
radial-gradient(at 3% 25%, hsla(209,100%,0%,1) 0px, transparent 50%),
radial-gradient(at 13% 59%, hsla(335,100%,0%,1) 0px, transparent 50%),
radial-gradient(at 32% 55%, hsla(283,100%,0%,1) 0px, transparent 50%),
radial-gradient(at 53% 58%, hsla(351,11%,23%,1) 0px, transparent 50%),
radial-gradient(at 11% 24%, hsla(265,0%,0%,1) 0px, transparent 50%);
/* background-image: url('/images/background/background3.webp'); */
 /* Prevent the background image from repeating */
 /* Center the background image */
 /* Use contain to prevent stretching */ 
}


</style>