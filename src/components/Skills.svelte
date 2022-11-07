<script> 
    let skills = [
        { 
            id: 1,
            name: 'HTML',

        }, 
        { 
            id: 2,
            name: 'CSS',

        }, 
        { 
            id: 3,
            name: 'JavaScript',

        }, 
        { 
            id: 4,
            name: 'Svelte',

        }, 
        { 
            id: 5,
            name: 'React',

        }, 
        { 
            id: 6,
            name: 'Node',

        }, 
        { 
            id: 7,
            name: 'MongoDB',

        }, 
        { 
            id: 8,
            name: 'Git',

        }, 
        { 
            id: 9,
            name: 'GitHub',

        }, 
        { 
            id: 10,
            name: 'Bootstrap',

        }, 
        { 
            id: 11,
            name: 'Materialize',

        }, 
        { 
            id: 12,
            name: 'Material UI',

        }, 
        { 
            id: 13,
            name: 'Sass',

        }, 
        { 
            id: 14,
            name: 'Styled Components',

        }, 
        { 
            id: 15,
            name: 'Redux',

        }, 
        { 
            id: 16,
            name: 'React Router',

        }, 
        { 
            id: 17,
            name: 'Express',

        }, 
        { 
            id: 18,
            name: 'Mongoose',

        }, 
        { 
            id: 19,
            name: 'Heroku',

        }, 
        { 
            id: 20,
            name: 'Netlify',

        }, 
        { 
            id: 21,
            name: 'Firebase',

        }, 
        { 
            id: 22,
            name: 'Jest',

        }, 
        { 
            id: 23,
            name: 'Enzyme',

        }, 
        { 
            id: 24,
            name: 'React Testing Library',

        }, 
        { 
            id: 25,
            name: 'React Hooks',

        }, 
        { 
            id: 26,
            name: 'React Context',

        }, 
        { 
            id: 27,
            name: 'React Redux',

        },
    ]
</script>

<style> 
.Skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1200px;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none; 
}


li {

    display: inline;
    margin: 0 0 0 0.4em;
}


</style>

<div class="Skills">
    <h3>Habilidades</h3>
    <ul>
        {#each skills as skill}
            <li>{skill.name}</li>
        {/each}
    </ul>


</div>