
import { writable } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '$lib/firebase.js'; 


/** @type {import('svelte/store').Writable<import('firebase/auth').User | null>} */
export const user = writable(null);

onAuthStateChanged(auth, (userAuth) => {
    user.set(userAuth);
});
