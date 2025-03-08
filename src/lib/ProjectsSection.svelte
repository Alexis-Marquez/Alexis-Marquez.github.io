<script>
    import ProjectSection from "./ProjectSection.svelte";
    import {opacityScroll} from "./opacityScroll.ts";
    import { fly } from 'svelte/transition';
    import {tick} from "svelte";
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

<div use:opacityScroll={{ scrollFactor: 0.7, scrollOffset: window.innerHeight*3}} id="projects_section">
    <div class="projects-section-header">
        <h1 class="projects-title">Projects</h1>
    </div>
    <div class="projects-section-content">
        <ProjectSection title="Budget Tracker App" subtitle= "Fullstack Web Development" description={["Developed a full-stack web application using Springboot serving a REST API with React as the frontend", "Built and optimized CRUD functionality, creating an intuitive interface for seamless budgeting operations. ","Visualized budgeting data with React Vis, improving user experience by providing clear financial insights.", "Created a sleek and responsive UI with vanilla CSS, ensuring cross-platform compatibility and improved user interaction."]}
        tech= {["Java", "Springboot", "React", "MongoDB"]}></ProjectSection>
    </div>
    <div class="projects-section-content">
        <ProjectSection title="Omok Multiplayer Game" subtitle="Desktop App Development" description={["Developed a complete Omok game including single player and multiplayer game modes", "Developed an AI opponent with adaptive strategies to enhance gameplay difficulty, offering a competitive experience for users.",
 "Built local and wireless multiplayer functionality with Java TCP/IP sockets, enabling seamless cross-network gameplay.", "Designed an engaging GUI using Java’s swing library."]}
                        tech= {["Java", "Swing", "TCP/IP Sockets", "Git"]}></ProjectSection>
    </div>
    <div class="projects-section-content">
        <ProjectSection title="Places Review Website" subtitle="Full Stack Web Development" description={["Created a scalable full-stack web application with Node.js backend and a responsive vanilla HTML/CSS frontend, providing users with an intuitive review platform.", "Delivered complete CRUD functionality, enabling users to post reviews, upload images, and manage business listings efficiently.", "Implemented a modern UI and integrated MapBox API to enhance the user experience by allowing interactive business location mapping."]}
                        tech= {["JavaScript", "Node", "Express", "MongoDB"]}></ProjectSection>
    </div>
    <div class="plannedProjectsSectionButton">
    <button class="planned-projects" onclick={togglePlanned}>
        {showPlanned ? "Hide Planned Projects ⌃" : "Show Planned Projects ⌵"}
    </button>
    </div>
    {#if showPlanned}
        <div id="plannedProjectsSection" transition:fly="{{ y: 20, duration: 400 }}">
    <ProjectSection  title="Job Application tracker" subtitle="Full Stack Web Development" description={["Coming soon"]} tech= {["Python", "Django", "SQL Lite", "SvelteKit"]}>
    </ProjectSection>
        </div>
    {/if}
</div>

<style>
    #projects_section {
        width: 90%;
        margin: auto;
    }
    .projects-title {
        color: #4ECDC4;
        text-align: center;
    }
    .projects-title{
        font-size: 5rem;
        color: #4ECDC4;
        margin: 3vh;
    }
    .projects-section-header{
        display: flex;
        justify-content: flex-start;
    }
    .planned-projects{
        color: #4ECDC4;
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: xx-large;
        background: transparent;
        border: none;
    }
    .planned-projects:hover {
        color: #e5e7eb;
    }
    .plannedProjectsSectionButton{
        display: flex;
        justify-content: center;
    }
    @media (max-width: 768px){
        .projects-title{
            font-size: 1.5rem;
            margin: 1vh;
        }

    }
</style>