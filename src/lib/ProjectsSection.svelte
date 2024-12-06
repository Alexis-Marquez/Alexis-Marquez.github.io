<script>
    import ProjectSection from "./ProjectSection.svelte";
    import {opacityScroll} from "./opacityScroll.ts";
</script>

<div use:opacityScroll={{ scrollFactor: 2, scrollOffset: window.innerHeight*2}} id="projects_section">
    <div class="projects-section-header">
        <h1 class="projects-title">Projects</h1>
    </div>
    <div class="projects-section-content">
        <ProjectSection title="Budget tracker app - Fullstack web development" description={["Developed a full-stack web application using Springboot serving a REST API with React as the frontend", "Built and optimized CRUD functionality, creating an intuitive interface for seamless budgeting operations. ","Visualized budgeting data with React Vis, improving user experience by providing clear financial insights.", "Created a sleek and responsive UI with vanilla CSS, ensuring cross-platform compatibility and improved user interaction."]}
        tech= {["Java", "Springboot", "React", "MongoDB"]}></ProjectSection>
    </div>
    <div class="projects-section-content">
        <ProjectSection title="Omok Multiplayer Game - Desktop app development" description={["Developed a complete Omok game including single player and multiplayer game modes", "Developed an AI opponent with adaptive strategies to enhance gameplay difficulty, offering a competitive experience for users.",
 "Built local and wireless multiplayer functionality with Java TCP/IP sockets, enabling seamless cross-network gameplay.", "Designed an engaging GUI using Java’s swing library."]}
                        tech= {["Java", "Swing", "TCP/IP Sockets", "Git"]}></ProjectSection>
    </div>
    <div class="projects-section-content">
        <ProjectSection title="Places Review Website - Full Stack Web development" description={["Created a scalable full-stack web application with Node.js backend and a responsive vanilla HTML/CSS frontend, providing users with an intuitive review platform.", "Delivered complete CRUD functionality, enabling users to post reviews, upload images, and manage business listings efficiently.", "Implemented a modern UI and integrated MapBox API to enhance the user experience by allowing interactive business location mapping."]}
                        tech= {["JavaScript", "Node", "Express", "MongoDB"]}></ProjectSection>
    </div>

</div>

<style>
    #projects_section {
        width: 90%;
        margin: auto;
    }

    .projects-title, .projects-subtitle {
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

    @media (max-width: 768px){
        .projects-title{
            font-size: 1.5rem;
            margin: 1vh;
        }

    }
</style>