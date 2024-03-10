<script>
    import { auth } from '$lib/firebase.js';  // Adjust path to your firebase.js file
    import { signOut } from 'firebase/auth';
    import { goto } from '$app/navigation';
  
    async function handleSignOut() {
      try {
        await signOut(auth);
        console.log('User signed out');
        goto('/login');  // Navigate to login page
      } catch (error) {
        // @ts-ignore
        console.error('Sign-out error:', error.message);
      }
    }
  </script>


      <button on:click={handleSignOut}>Sign Out</button>


  <style>


    button{
        background: none;
        border: none;
        margin-right: 20px;
    }


  </style>