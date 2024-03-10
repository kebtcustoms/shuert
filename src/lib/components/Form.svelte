<script>
    // @ts-nocheck

    import { db } from "$lib/firebase.js";
    import { addDoc, collection } from "firebase/firestore";

    let firstName = "";
    let lastName = "";
    let companyName = "";
    let email = "";
    let phone = "";
    let comments = "";
    let quantity = "";
    let selectedProducts = [];
    let submissionSuccessful = false;

    export let products = [];
    export let productname="";

    function toggleProductSelection(product) {
        const index = selectedProducts.indexOf(product);
        if (index === -1) {
            selectedProducts = [...selectedProducts, product];
        } else {
            selectedProducts = selectedProducts.filter((p) => p !== product);
        }
    }

    async function handleSubmit() {
        try {
            const docRef = await addDoc(collection(db, "contacts"), {
                firstName,
                lastName,
                companyName,
                email,
                phone,
                comments,
                quantity,
            });
            console.log("Document written with ID: ", docRef.id);
            submissionSuccessful = true;
            setTimeout(resetForm, 2000);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function resetForm() {
        firstName = "";
        lastName = "";
        companyName = "";
        email = "";
        phone = "";
        comments = "";
        quantity = "";
        submissionSuccessful = false; // Hide the thank you animation
    }
</script>

<div class="contactmain">
    <div class="contacthero">
        <div class="contactheroleft">
           <h1>Request a {productname} Quote</h1>
        </div>
        <div class="contactheroright">
            We appreciate your interest in learning how Shuert Technologies can
            help you find the right packaging solution for your project. Please
            use the form below or call <strong class="boldnumber"
                >586-254-4590</strong
            > to discuss your needs with our team.
        </div>
    </div>

    <div class="contactcontainer">
        <div class="contactright">
            <form on:submit={handleSubmit} class="contactform" method="POST">
                <div class="inputcontainer">
                    <div>
                        <label for="firstname">First Name</label>
                        <input
                            name="first"
                            id="firstname"
                            type="text"
                            bind:value={firstName}
                        />
                    </div>
                    <div>
                        <label for="lastname">Last Name</label>
                        <input
                            name="last"
                            id="lastname"
                            type="text"
                            bind:value={lastName}
                            required
                        />
                    </div>

                    <div>
                        <label for="companyname">Company Name</label>
                        <input
                            name="company"
                            id="companyname"
                            type="text"
                            bind:value={companyName}
                            required
                        />
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            bind:value={email}
                            required
                        />
                    </div>

                    <div>
                        <label for="phone">Phone</label>
                        <input
                            name="phone"
                            id="Phone"
                            type="tel"
                            bind:value={phone}
                            required
                        />
                    </div>
                    <div>
                        <label for="quantity">Quantity</label>
                        <input
                            name="quantity"
                            id="quantity"
                            type="text"
                            bind:value={quantity}
                            required
                        />
                    </div>
                </div>

                <div class="productbuttonswrap">
                    <label for="products" id="products"
                        >Products of Interest</label
                    >
                    <div class="productbuttons">
                        {#each products as product}
                            <div class="productbuttoncont">
                                <button
                                    type="button"
                                    class:active={selectedProducts.includes(
                                        product,
                                    )}
                                    on:click={() =>
                                        toggleProductSelection(product)}
                                >
                                    <!-- <img class="product-svg" src={`${@html product.svg}`} alt="{product.name}" /> -->
                                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                                    <div
                                        class={selectedProducts.includes(
                                            product,
                                        )
                                            ? "active-svg"
                                            : "svg-container"}
                                    >
                                        <!-- <img src={product.svg} alt={product.name} class="product-svg" /> -->
                                        {@html product.svg}
                                    </div>
                                </button>
                                <div
                                    class="pcont {selectedProducts.includes(
                                        product,
                                    )
                                        ? 'active-text'
                                        : ''}"
                                >
                                    {product.name}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <label for="comments">Comments</label>
                <textarea name="body" id="comments" bind:value={comments}
                ></textarea>

                <button type="submit" class="contactbutton">Submit</button>
            </form>
            {#if submissionSuccessful}
                <div class="thankYouAnimation">
                    Thank you for your submission!
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .contactmain {
        margin: auto;
        display: flex;
        gap: 20px;
        width: 85%;
    }

    .contacthero {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .contactheroleft h1{
        font-size: 4em;
        line-height: 64px;
        color: #f2f2f2;
    }

    .contactheroright {
        width: 90%;
        font-size: 1.5em;
        color: #f2f2f2;
    }

    .boldnumber {
        position: relative;
        font-weight: bold;
        color: #ce0024;
    }

    .contactcontainer {
        display: flex;
        gap: 50px;
        width: 50%;
        margin: auto;
        /* outline: 1px solid blue; */
    }

    .contactright {
        position: relative;
        width: 100%;
        /* outline: 1px solid rgb(0, 255, 174); */
    }

    .contactform {
        padding: 50px;
        background-color: rgba(255, 255, 255, 0.047);
        border-radius: 25px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        width: 100%;
        border: #f2f2f21a solid 1px;

    }

    .inputcontainer {
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        width: 100%;
    }

    .inputcontainer > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .inputcontainer > div > input {
        width: 95%;
    }

    label {
        font-size: 1.5em;
        font-weight: 100;
        margin-bottom: -10px;
        padding-top: 20px;
        color: #f2f2f2;
    }

    input {
        border: none;
        padding: 16px;
        border-radius: 20px;
        font-size: 1em;
        width: 50%;
        background-color: rgba(255, 255, 255, 0.105);
        color: #f2f2f2;
    }

    input:focus {
        outline: none;
        border: #f2f2f21a solid 1px;
        padding: 15px;

    }

    ::input-placeholder {
        font-size: 1em; 
        
    }

    input:-webkit-autofill::first-line,
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        font-size: 1em !important;
        font-family: "Univers", sans-serif !important;
        font-weight: 200 !important;
        
    }

    .productbuttonswrap {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .productbuttons {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-left: -5px;
    }

    .productbuttoncont {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .productbuttoncont button {
        margin: 5px;
        height: 150px;
        width: 150px;
        background-color: #f2f2f229;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .productbuttoncont button.active {
        background-color: #ce002218;
        color: #ce0024;
    }
    .svg-container {
        transform: scale(50%);
        cursor: pointer;
        stroke: #f2f2f2;
        transition: stroke 0.3s ease;
    }

    .active-svg {
        stroke: #ce0024;
        transform: scale(50%);
        cursor: pointer;
        transition: stroke 0.3s ease;
    }

    .pcont {
        color: #f2f2f2;
    }

    .active-text {
        color: #ce0024;
        transition: color 0.3s ease;
    }

    textarea {
        border-radius: 20px;
        height: 200px;
        padding: 21px;
        font-size: 1em;
        background-color: rgba(128, 128, 128, 0.105);
        border: none;
        color: #f2f2f2;
    }

    textarea:focus {
        outline: none;
        border: #f2f2f21a solid 1px;
        padding: 20px;
    }


    .contactbutton {
    margin: auto;
    margin-top: 30px;
    background-color: transparent;
    color: #f2f2f2;
    position: relative;
    width: 200px;
    padding: 10px;
    font-size: 1.5em;
    font-weight: bold;
    border-radius: 15px;
    border: 1px solid #f2f2f2;
    transition: background-color 0.5s ease;
    cursor: pointer;
  }

  .contactbutton:hover {
    transition: background-color 0.5s ease;
    transition: border-color 0.1s ease;
    color: #f2f2f2;
    background-color: #ce0024;
    border: 1px solid #ce0024;
  }

    .thankYouAnimation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(56, 56, 56, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        font-weight: bold;
        color: white;
        opacity: 0;
        animation: fadeInOut 5s forwards;
        border-radius: 20px;
    }

    @keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            opacity: 0;
        }
    }

    @media only screen and (max-width: 1025px){
        .contactmain {
            flex-direction: column;
            gap: 40px;
        }

        .contacthero {
            width: 100%;
            gap: 20px;
        }

        .contactheroleft {
            width: 100%;
        }
        .contactheroright {
            width: 100%;
        }

        .contactcontainer {
            width: 100%
            
        }

        .contactheroleft h1 {
            font-size: 4em;
            line-height: 64px;
        }
    }

    @media only screen and (max-width: 376px) {
        .contactform {
            padding: 20px 20px 40px 20px;
        }

        .contactheroleft h1 {
            font-size: 4em;
            line-height: 64px;
        }


    .inputcontainer > div > input {
        width: 100%;
    }




    }
</style>