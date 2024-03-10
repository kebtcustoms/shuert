<script>
// @ts-nocheck


    export let columns = [];
    export let data = [];
</script>


<div class="shuerthome">
    <h1>Specifications</h1>
    <div class="tablecontainer">
        <table>
            <thead>
                <tr>
                    {#each columns as column}
                        <th>{column}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each data as row}
                    <tr class="table-row">
                        {#each row as cell}
                            <td>{cell}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
        .shuerthome {
        margin: 50px auto;
        width: 85%;
        height: fit-content;
        color: #f2f2f2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* border: #2d4e86 solid 1px; */
        gap: 20px;
    }



    .tablecontainer {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        /* border: #a3ac97 1px solid; */
    }

    table {
        width: 100%; /* Adjust as per your requirement */
        border-collapse: collapse;
        border-spacing: 0;
    }

    th,
    td {
        text-align: center;
        padding: 10px; /* Adjust padding as needed */
    }

    tbody {
        border-radius: 10px;
    }

    .table-row:nth-child(odd) {
        background-color: rgba(255, 255, 255, 0.1);
    }
    .table-row:nth-child(even) {
        background-color: rgba(128, 128, 128, 0.1);
    }

    tbody tr:first-child td:first-child {
        border-top-left-radius: 10px;
    }

    tbody tr:first-child td:last-child {
        border-top-right-radius: 10px;
    }

    @media (max-width: 1921px) {
        
        .tablecontainer {
            overflow-x: auto;
        }
    }

    @media (max-width: 1025px) {
        .tablecontainer {
            overflow-x: auto;
        }

        /* .shuerthome {
            margin-top: 200px;
        } */
    }
</style>