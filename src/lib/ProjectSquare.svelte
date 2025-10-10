<script>
     let props = $props();
    let title = props.title;
    let description = props.description;
    let imageUrl = props.imageUrl;
    let githubUrl = props.githubUrl;
    let liveUrl = props.liveUrl;
    let techlist = props.techlist;
</script>

<div class="project-square">
    <div class="project-image">
        <img src={imageUrl} alt="{title} screenshot">
    </div>
    <div class="project-info">
        <h2 class="project-title">{title}</h2>
        <div class="project-tech">
            {#each techlist as tech}
                <span class="tech-item">{tech}</span>
            {/each}
        </div>
        <p class="project-description">{description}</p>
        <div class="project-links">
            {#if githubUrl}
                <a href="{githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
            {/if}
            {#if liveUrl}
                <a href="{liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo</a>
            {/if}
        </div>
    </div>
</div>

<style>
    .project-square {
        display: flex;
        flex-direction: column;
        border: 2px solid #4ECDC4;
        border-radius: 10px;
        width: 30%;
        overflow: hidden;
        margin: 1rem 0;
        background-color: #2D3748;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .project-image{
        height: 50%;
    }
    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .project-info {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .project-title {
        font-size: 1.5rem;
        color: #4ECDC4;
        margin-bottom: 0.5rem;
    }
    .project-tech {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }
    .tech-item {
        background-color: #4ECDC4;
        color: #1F2937;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        font-size: 0.9rem;
    }
    .project-description {
        font-size: 1rem;
        color: #E5E7EB;
        margin-bottom: 0.5rem;
    }
    .project-links a {
        margin-right: 1rem;
        color: #4ECDC4;
        text-decoration: none;
        font-weight: bold;
    }
    .project-links a:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        .project-square {
            flex-direction: column;
            width: 80%;
        }
        .project-title {
            font-size: 1.2rem;
        }
        .project-description {
            font-size: 0.9rem;
        }
        .tech-item {
            font-size: 0.8rem;
        }
    }
</style>