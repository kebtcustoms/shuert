<script>
        import { db } from "$lib/firebase.js";
    import { addDoc, collection } from "firebase/firestore";
    async function handleSubmit() {
        try {
            const docRef = await addDoc(collection(db, "contacts"), {

                email,
  
            });
            console.log("Document written with ID: ", docRef.id);
            submissionSuccessful = true;
            setTimeout(resetForm, 2000);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function resetForm() {
        email = "";
        submissionSuccessful = false; // Hide the thank you animation
    }

    let email = "";
    let submissionSuccessful = false;
</script>

<div class="newslettercont">
    <div class="leftemail">
        <div class="leftemailcont">
            <h2>Join Our Newsletter</h2>
            <p>Stay updated with the latest trends, products, and news in the reusable transport packaging industry.</p>
        </div>
    </div>
    <div class="rightemail">
        <label for="email">Email</label>
        <div>
            <input
                name="email"
                id="email"
                type="email"
                bind:value={email}
                required
            />
        </div>
        <div>

            <button type="submit" class="emailbutton" on:click={handleSubmit}>Submit</button>
        </div>
    </div>
</div>

<style>
    .newslettercont {
        
        width: 100%;
        display: flex;
        height: 250px;
        /* border: 1px red solid; */
        margin: auto;
        margin-top: 50px;
        padding-top: 20px;
        padding-bottom: 50px;
        margin-bottom: -70px;
        background-color: #f2f2f207;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        border: #f2f2f21a solid 1px;
    }

    .leftemail{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        /* justify-self: flex-end; */
        /* border: 1px saddlebrown solid; */
    }

    .leftemailcont {
        width: 85%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* margin: auto; */
        right: 0;
        justify-content: center;
        /* border: #ce0024 solid 1px; */
        color: #f2f2f2;
        gap: 20px;
        /* justify-self: flex-end; */

    }

    .rightemail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;
        gap: 20px;
        
    }

    .rightemail label {
        font-size: 1.5em;
        font-weight: 100;
        color: #f2f2f2;

    }

    input {
        border: none;
        padding: 16px;
        border-radius: 20px;
        font-size: 1em;
        width: 85%;
        background-color: rgba(255, 255, 255, 0.105);
    }

    input:focus {
        outline: none;
        border: #f2f2f21a solid 1px;
        padding: 15px;

    }

    ::input-placeholder {
        font-size: 1rem; 
        
    }

    .emailbutton {
    background-color: transparent;
    color: #f2f2f2;
    margin-right: 10px;
    position: relative;
    justify-self: flex-end;
    /* width: 200px; */
    padding: 10px 30px;
    font-size: 1em;
    font-weight: bold;

    border-radius: 15px;
    /* border: salmon solid 1px; */
    /* background: none; */
    /* margin: auto; */
    /* margin-top: 30px; */
    border: 1px solid #f2f2f2;
    transition: background-color 0.5s ease;
    transition: border-color 0.1s ease;
    cursor: pointer;
  }

  .emailbutton:hover {
    transition: background-color 0.5s ease;
    transition: border-color 0.1s ease;
    /* color: black; */
    background-color: #f2f2f2;
    background-color: #ce0024;
    color: #f2f2f2;
    border: 1px solid #ce0024;
  }

  @media (max-width: 796px) {
    .newslettercont {
        flex-direction: column;
        gap: 20px;
        /* padding-top: 100px; */
        margin-bottom: -80px;
        padding-top: 20px;
        padding-bottom: 50px;
        height: fit-content;
    }

    .leftemail {
        width: 100%;
        justify-content: center;
    }

    .rightemail {
        justify-content: center;
        /* align-items: flex-start; */
        width: 85%;
        margin: auto;
        /* height: 200px; */
    }

    input{
        width: 100%;
    }

  }
</style>