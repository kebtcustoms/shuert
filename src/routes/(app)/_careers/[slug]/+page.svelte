<script>
  // @ts-nocheck

  import { db } from "$lib/firebase";
  import { doc, getDoc, addDoc, collection } from "firebase/firestore";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { uploadResume } from "$lib/firebaseStorage"; // Adjust import path as necessary
  import { goto } from "$app/navigation"; // Import SvelteKit's goto function for navigation



  export let data;

  let file;
  let doctitle;
  let slug;
  let uploadedFileUrl = "";
  $: slug = $page.params.slug;

  let firstName = "";
  let lastName = "";
  let career = "";
  let email = "";
  let phone = "";
  let comments = "";
  let submissionSuccessful = false;

  onMount(async () => {
    if (slug) {
      const docRef = doc(db, "careers", slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        data = docSnap.data();
        console.log(data.title);
      } else {
        console.log("No such document!");
      }
    }
  });

  const handleFileChange = (event) => {
    file = event.target.files[0];
    doctitle = slug;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // @ts-ignore
    if (file) {
      try {
        uploadedFileUrl = await uploadResume(file, doctitle);
        console.log("File uploaded successfully:", uploadedFileUrl);
        career = data.title
        document.getElementById("uploadedFileUrl").value = uploadedFileUrl;
        
        // const docRef = await addDoc(collection(db, 'applicants'), {
        //         firstName, lastName, career, email, phone, comments, uploadedFileUrl
        //     });

        const careerDocRef = doc(db, 'careers', slug);
            const applicantsSubcollectionRef = collection(careerDocRef, 'applicants');

            const docRef = await addDoc(applicantsSubcollectionRef, {
                firstName, lastName, career, email, phone, comments, uploadedFileUrl
            });


        console.log('Document written with ID: ', docRef.id);
        event.target.submit();
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
</script>

  <div class="maincontainer">

    <div class="titlecontainer">
      
        <h1>{data.title}</h1>
      
      <div class="jobdetails">

        <h2>{data.category}</h2>
        <h2>{data.schedule}</h2>
        <h2>{data.location}</h2>
      </div>


      <p>{data.description}</p>


    </div>
    
    <div class="careersformcontainer">
  
      <form on:submit={handleSubmit} method="POST" class="careersform">
        <!-- <form method="POST"> -->
        <div class="inputcontainer">
          
          
          <div>
            <label for="firstname">First Name</label>
            <input name="first" id="firstname" type="text" bind:value={firstName} />
          </div>

          <div class="inputright">
            <label for="lastname">Last Name</label>
            <input name="last" id="lastname" type="text" bind:value={lastName} />
          </div>

          <div>
            <label for="phone">Phone</label>
            <input name="phone" id="Phone" type="tel" bind:value={phone} />
          </div>


          
          <div>
            <label for="email" class="inputright">Email</label>
            <input name="to" type="email" id="email" bind:value={email} />
          </div>

          <div>
            <label for="career">Career</label>
            <input name="subject" type="text" id="career" value={data.title} readonly />
          </div>

        </div>
        <label for="comments">Comments</label>
        <textarea id="comments" name="body" rows="6" bind:value={comments} />
        <input type="file" on:change={handleFileChange} accept=".pdf,.doc,.docx" />
        <input name="fileUrl" id="uploadedFileUrl" value={uploadedFileUrl} type="hidden"/>
        <button type="submit" class="submitbutton">Submit Application</button>
      </form>
    </div>
  </div>

<style>
    :global(*){
        margin: 0;
        padding: 0;
        font-family: "Univers", sans-serif;
        box-sizing: border-box;
    }


    .maincontainer{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
    }

    .titlecontainer {
      margin: 20px auto;
      width: 85%;
    }

    h1{
      color: #f2f2f2;
    }

    h2{
      color: #f2f2f2;
      font-weight: 200;
      
    }

    p{
      color: #f2f2f2;
      font-size: 16px;
    }

    .jobdetails {
      margin: 20px auto;
    }

    .careersformcontainer{
        margin: auto;
        position: relative;
        width: 85%;
        margin-top: 20px;
        margin-bottom: 50px;
        /* display: flex; */
        
        /* outline: 1px solid rgb(0, 255, 174); */
    }

    .careersform{
        /* margin: auto; */
        padding: 30px;
        background-color: rgba(128, 128, 128, 0.105);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        color: #f2f2f2;
    }

    .inputcontainer {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: -18px;
    }

    .inputcontainer > div {
      /* flex-basis: 50%; */
      /* flex: 48%; */
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .inputcontainer > div > input {
      width: 95%;
    }

    /* .inputcontainer > div:nth-child(even) {
    margin-right: -30px;
} */


    label{
        font-size: 16px;
        font-weight: 100;
        margin-bottom: -10px;
        padding-top: 20px;
        color: #f2f2f2;
    }

    input {
        border: none;
        padding: 10px;
        border-radius: 15px;
        font-size: 16px;
    }

    input:focus{
        outline: none;
        box-shadow: 0 0 10px rgba(235, 235, 235, 0.5);
       
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
        border: none;
        border-radius: 20px;
        height: 200px;
        padding: 20px;
        font-size: 18px;
        width: 100%;
    }

    textarea:focus{
        outline: none;
        box-shadow: 0 0 10px rgba(235, 235, 235, 0.5);
       
    }

    .submitbutton{
        width: 250px;
        padding: 10px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 15px;
        border: none;
        /* background: none; */
        margin: auto;
        margin-bottom: 10px;
    }
</style>
