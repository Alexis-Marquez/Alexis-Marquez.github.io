<script>
    let props = $props();
    let list = props.description;
    let techList = props.tech;
</script>

<div id="project_section">
    <div class="project-header">
    <h1 class="project-title">{props.title}</h1>
    <h1 class="project-subtitle">{props.subtitle}</h1>
    </div>
    <hr class="sep-line">
    <ul class="project-tech">
        {#each techList as tech}
            <li class="tech-text">{tech}</li>
        {/each}
    </ul>
    <ul class="project-description">
        {#each list as des}
            <li class="description-text">{des}</li>
            {/each}
    </ul>
</div>

<style>
    .project-header {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .project-subtitle {
        color: #4ECDC4;
    }
    .project-title{
        font-size: 2rem;
    }
    .project-subtitle{
        font-size: 1.6rem;
        margin: 1rem;
    }
    .sep-line {
        border: none;
        border-top: 3px solid #4ECDC4;;
        width: 100%;
        margin: 0;
    }
    .project-tech{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        padding: 0;
    }
    .tech-text::before {
        content: '-';
        margin-right: 8px;
    }
    .tech-text{
        font-size: 1.5rem;
        font-weight: bold;
        color: #4ECDC4;
    }
    .project-description{
        line-height: 2rem;
    }
    .description-text{
        font-size: 1.2rem;
    }
    @media (max-width: 768px) {
        .description-text, .tech-text {
            font-size: 0.8rem;
        }
        .project-title{
            font-size: 1.2rem;
        }
    }
</style>