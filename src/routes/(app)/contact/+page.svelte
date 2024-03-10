<script>
// @ts-nocheck

    import { db } from '$lib/firebase.js';
    import { addDoc, collection } from 'firebase/firestore';
  
    let firstName = '';
    let lastName = '';
    let companyName = '';
    let email = '';
    let phone = '';
    let comments = '';
    let submissionSuccessful = false;
  
    async function handleSubmit() {
        try {
            const docRef = await addDoc(collection(db, 'contacts'), {
                firstName, lastName, companyName, email, phone, comments
            });
            console.log('Document written with ID: ', docRef.id);
            submissionSuccessful = true;
            setTimeout(resetForm, 2000); 
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    function resetForm() {
        firstName = '';
        lastName = '';
        companyName = '';
        email = '';
        phone = '';
        comments = '';
        submissionSuccessful = false;  // Hide the thank you animation
    }
  </script>
    <main class="contactmain">

        <div class="contacthero">
            <div class="contactheroleft">Contact Us <span class="boldtoday">Today</span></div>
            <div class="contactheroright">We appreciate your interest in learning how Shuert Technologies can help you find the right packaging solution for your project. Please use the form below or call <strong class="boldnumber">586-254-4590</strong> to discuss your needs with our team.</div>
        </div>
    
        <div class="contactcontainer">
            <div class="contactleft">
                <div class="contacttext">
                    <h1 class="pone">Headquarters and Production Facility</h1>
                    <p class="ptwo">6600 Dobry Road, Sterling Heights, MI 48314</p>
                    <p class="ptwo">586-254-4590</p>
                </div>
                <div class="contacttext">
                    <h1 class="pone">Fulfillment Center</h1>
                    <p class="ptwo">44650 Merrill Road, Sterling Heights, MI 48314</p>
                    <p class="ptwo">Shipping Hours: 8am EST - 5pm EST</p>
                </div>
                <div class="imagecontainer">

                    <img class="mapimage" src="/map.png" alt="Description">
                </div>
            </div>
            <div class="contactright">
                <form on:submit={handleSubmit} class="contactform" method="POST">
                    <label for="firstname">First Name</label>
                    <input name="first"id="firstname" type="text" bind:value={firstName} />
                    <label for="lastname">Last Name</label>
                    <input name="last" id="lastname" type="text" bind:value={lastName} required />
                    <label for="companyname">Company Name</label>
                    <input name="company" id="companyname" type="text" bind:value={companyName} required />
                    <label for="email">Email</label>
                    <input name="email" id="email" type="email" bind:value={email} required />
                    <label for="phone">Phone</label>
                    <input name="phone" id="Phone" type="tel" bind:value={phone} required />
                    <label for="comments">Comments</label>
                    <textarea name="body" id="comments" bind:value={comments} ></textarea>
                    <button type="submit" class="contactbutton">SUBMIT</button>
                </form>
                {#if submissionSuccessful}
                <div class="thankYouAnimation">Thank you for your submission!</div>
                {/if}
            </div>
        </div>
    </main>

  <style>
    @import url('/fonts.css');



    :global(*){
        margin: 0;
        padding: 0;
        font-family: "Univers", sans-serif;
        box-sizing: border-box;
    }

    .contacthero {
        width: 85%;
        margin: auto;
        display: flex;
        gap: 50px;
        margin-bottom: 70px;
        margin-top: 120px;
    }

    .contactheroleft {
        width: 50%;
        font-size: 7em;
        line-height: 1em;
        color: #f2f2f2;
        font-weight: bold;

    }

    .boldtoday {
        font-weight: bold;
    } 

    .contactheroright {
        width: 45%;
        /* display: flex; */
        margin: auto;
        font-size: 2em;
        color: #f2f2f2;
    }

    .boldnumber{
        position: relative;
        font-weight: bold;
        color: #CE0024;
    }

    .contactcontainer{
        display: flex;
        gap: 50px;
        width:85%;
        margin: auto;
        /* outline: 1px solid blue; */

    }

    .contactleft{
        display: flex;
        flex-direction: column;
        width: 55%;
        /* outline: 1px solid blue; */
    }

    .contacttext {
        margin-bottom: 20px;
    }

    .pone{
        font-size: 35px;
        font-weight: bold;
        color: #f2f2f2;
    }

    .ptwo{
        font-weight: 100;
        font-size: 24px;
        color: #f2f2f2;
    }

    .imagecontainer {
        flex: 1;
    }

    .mapimage {
        flex: 1;
        width: 100%;
        height: 100%;
        border-radius: 25px;
        /* margin-top: 20px;
        padding-bottom: 20px; */
        object-fit: cover;
        /* opacity: 0.9; */
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        border: #f2f2f21a solid 1px;
    }

    .contactright{
        position: relative;
        width: 50%;
        /* outline: 1px solid rgb(0, 255, 174); */
    }

    .contactform{
        padding: 50px;
        background-color: rgba(255, 255, 255, 0.047);
        border: #f2f2f21a solid 1px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    label{
        font-size: 1.5em;
        font-weight: 100;
        margin-bottom: -10px;
        padding-top: 20px;
        color: #f2f2f2;
    }

    input {
        border: none;
        padding: 15px;
        border-radius: 20px;
        font-size: 1em;
        background-color: rgba(255, 255, 255, 0.105);
        color: #f2f2f2;
    }

    input:focus{
        outline: none;
        border: #f2f2f21a solid 1px;

       
    }

    ::input-placeholder {
    font-size: 18px; /* Adjust to your preference */
}

    input:-webkit-autofill::first-line,
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {

    font-size: 18px !important;
    font-family: "Univers", sans-serif !important;
    font-weight: 200 !important;
}




    textarea {
        border-radius: 20px;
        height: 200px;
        padding: 20px;
        font-size: 18px;
        background-color: rgba(128, 128, 128, 0.105);
        border: none;
        color: #f2f2f2;
    }

    textarea:focus {
    /* outline: none; */
    outline: none;
    /* box-shadow: 0 0 10px rgba(235, 235, 235, 0.5); */
    border: #f2f2f21a solid 1px;

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
        0% { opacity: 0; }
        20% { opacity: 1; }
        80% { opacity: 1; }
        90% { opacity: 0.5; }
        100% { opacity: 0; }
    }


    @media (max-width: 950px) {
      .contacthero {
        flex-direction: column;
        margin-top: 80px;
      }

      .contactheroleft {
        width: 100%;
        text-align: center;
       display: flex;
       flex-direction: column;
      }

      .contactleft {
        width: 100%;
      }

      .imagecontainer {
        display: none;
      }

      .contactheroright {
        width: 100%;
        margin: auto;
        font-size: 2em;
        color: #f2f2f2;
        /* border: #CE0024 1px solid; */
    }

    .contacttext {
        padding-left: 0px;
        padding-right: 0px;
    }

    .contactright {
        width: 100%;
    }

    .contactcontainer {
        flex-direction: column;
    }
      
    }

    @media (max-width: 498px) {

      .contactform {
        padding-left: 10px;
        padding-right: 10px;
        margin: auto;
      }
      .contacthero {
        flex-direction: column;
        margin-top: 80px;
      }

      .contactheroleft {
        width: 100%;
        text-align: center;
        font-size: 5em;
      }

      .contactheroright {

        font-size: 1.8em;

    }
      
    }

    @media (max-width: 330px) {

      
      .contacthero {
        flex-direction: column;
        margin-top: 80px;
      }

      .contactheroleft {
        font-size: 4.5em;
      }

      .contactheroright {

        font-size: 1.5em;

    }
      
    }
  </style>