<script>
    import { fly } from 'svelte/transition';
    import {tick} from "svelte";
  import ProjectSquare from "./ProjectSquare.svelte";
    let showPlanned = false;

    async function togglePlanned() {
        showPlanned = !showPlanned;

        if (showPlanned) {
            await tick();
            const section = document.getElementById("plannedProjectsSection")
            if (section) {
            section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    }
</script>

<div id="projects_section">
    <div class="projects-section-header">
        <h1 class="projects-title">Projects</h1>
    </div>
    <div class="projects-square-container">
        <ProjectSquare title="TRACE Tool" subtitle= "Fullstack Web Development" description="Capstone project for the Department of Defense: a penetration testing tool integrating AI-driven
reconnaissance, credential generation, and vulnerability scanning."
        techlist= {["Python", "JavaScript", "SvelteKit", "Neo4j", "Git", "FastAPI"]}
                        imageUrl = "./screenshots/budget.png"></ProjectSquare>
        <ProjectSquare title="Job Application Tracking Platform" subtitle="Fullstack Web Development" description="Full-stack job application tracking platform featuring user-specific data management, Dockerized services, and
automated CI/CD deployment."
                        techlist= {["Django", "PostgreSQL", "React", "TypeScript", "Docker", "Jenkins"]}
                        imageUrl = "./screenshots/apptrack.png"></ProjectSquare>
        <ProjectSquare title="ML Football Play Predictor" subtitle="Full Stack Web Development" description="Machine learning tool that predicts optimal football play calls from game situations using classification
algorithms and feature engineering"
                        techlist= {["JavaScript", "Node", "Express", "MongoDB"]}
                        imageUrl = "./screenshots/Places.png"></ProjectSquare>
    </div>
    <!-- <div class="plannedProjectsSectionButton">
    <button class="planned-projects" onclick={togglePlanned}>
        {showPlanned ? "Hide Planned Projects ⌃" : "Show Planned Projects ⌵"}
    </button>
    </div>
    {#if showPlanned}
        <div id="plannedProjectsSection" transition:fly="{{ y: 20, duration: 400 }}">
    <ProjectSection  title="Job Application tracker" subtitle="Full Stack Web Development" description={["Coming soon"]} tech= {["Python", "Flask", "SQL Lite", "SvelteKit"]} planned={true}>
    </ProjectSection>
        </div>
    {/if} -->
</div>

<style>
    #projects_section {
        background: #e5e7eb;
    }
    .projects-title {
        color: #163d3b;
        text-align: center;
    }
    .projects-title{
        font-size: 5rem;
        color: #184441;
        margin: 3vh;
    }
    .projects-section-header{
        display: flex;
        justify-content: flex-start;
    }
    .projects-square-container{
        display: flex;
        justify-content: space-evenly
    }
    
    @media (max-width: 768px){
        .projects-title{
            font-size: 1.5rem;
            margin: 1vh;
        }
        .projects-section-header{
            justify-content: center;
        }
        .projects-square-container{
            flex-direction: column;
            align-items: center;
        }

    }
</style>