<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "$lib/firebase.js";
    import { goto } from "$app/navigation"; // Import SvelteKit's goto function for navigation

    /**
     * @type {string | any[]}
     */
    let careers = [];

    onMount(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "careers"));
            careers = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        } catch (e) {
            console.error("Error fetching careers:", e);
        }
    });
</script>

<main>
    <div>
        <div class="careerscontainertop">
            {#if careers.length > 0}
                {#each careers as { title, category, schedule, location, description, id, snippet }}
                <div class="careerscontainer">
                            <span></span>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class="careerswrapper" on:click={() => goto(`/careers/${id}`)}>
                                <div class="careerssingle">
                                    <h1>{title}</h1>
                                </div>
                                <div class="careerssinglecontainer">
                                    <div class="careerssingle">
                                        <h2>Category:</h2>
                                        <p>{category}</p>
                                    </div>
                                    <div class="careerssingle">
                                        <h2>Schedule:</h2>
                                        <p>{schedule}</p>
                                    </div>
                                    <div class="careerssingle">
                                        <h2>Location: </h2>
                                        <p>{location}</p>
                                    </div>
                                </div>
                                <div class="careerssingle">
                                    <p>{snippet}</p>
                                </div>
                            </div>
                            <!-- <div class="actionbuttons">
                                    <button class="editbutton" on:click={() => goto(`/careers/${id}`)}>See Post</button>
                                </div> -->
                        </div>
                {/each}
            {:else}
                <p />
            {/if}
        </div>
    </div>
</main>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
        font-family: "Univers", sans-serif;
        box-sizing: border-box;
        /* overflow-x: hidden; */
    }

    h1 {
        font-size: 18px;
    }

    h2 {
        font-size: 16px;
    }

    main {
        color: #f2f2f2;
    }

    .careerscontainertop {
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        /* border: solid red 1px; */
        gap: 20px;
    }

    .careerscontainer {
        margin: auto;
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        width: 80%;
        /* border: green solid 1px; */
        cursor: pointer;
        gap: 10px;
    }

    .careerswrapper {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .careerssingle {
        display: flex;
        align-items: center;
    }

    .careerssinglecontainer {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    span{
        border: .5px #f2f2f2 solid;
        width: 100%;
        opacity: 20%;
    }

</style>
