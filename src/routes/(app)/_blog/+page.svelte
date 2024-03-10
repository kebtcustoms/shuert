<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "$lib/firebase.js";
    import { goto } from "$app/navigation"; // Import SvelteKit's goto function for navigation

    /**
     * @type {string | any[]}
     */
    let blogs = [];
    let featuredBlog = null;
    let otherBlogs = [];
    let restOfBlogs = [];

    onMount(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            blogs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            if (blogs.length > 0) {
                featuredBlog = blogs[0];
                otherBlogs = blogs.slice(1, 4); // Get next 3 blogs
                restOfBlogs = blogs.slice(4, 10); // Get another 6 blogs
            }
        } catch (e) {
            console.error("Error fetching careers:", e);
        }
    });
</script>

<main>
    <div class="maincontainer">
        <div class="herocontainer">
            {#if featuredBlog}
                <div class="featuredblog">
                    <!-- Display featured blog -->
                    <h2>{featuredBlog.title}</h2>
                    <p>{featuredBlog.content}</p>
                </div>
            {/if}
            <div class="otherblogs">
                {#each otherBlogs as blog}
                    <div class="blog">
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </div>
                {/each}
            </div>
        </div>
        <div class="blogscontainer">
            <div class="restofblogs">
                {#each restOfBlogs as blog}
                    <div class="blog">
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    
</style>