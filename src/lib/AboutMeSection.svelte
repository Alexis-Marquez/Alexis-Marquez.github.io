<script>
    import SkillsList from "./SkillsSection.svelte";
    import {opacityScroll} from "./opacityScroll.ts";
</script>

<div use:opacityScroll={{ scrollFactor: 0.7, scrollOffset: window.innerHeight*1.5}} id="about-me-section">
    <hr class="sep-line">
    <div class="about-me-section-header">
    <h1 class="about-me-title">About Me</h1>
    </div>
    <div class="about-me-section-body">
        <div class="about-me-section-text">
            I’m a computer science student at the University of Texas at El Paso, graduating in May 2025.
            <br><br>
            I discovered my passion for coding in high school while competing in FTC robotics competitions, where I learned how to turn ideas into reality through teamwork and problem-solving. As a first-generation college student who has lived in two different countries, my journey has shaped my curiosity, resilience, and creativity in unique ways.
            <br><br>
            Beyond coding, I’m passionate about art—music, drawing, and storytelling—and I find history endlessly fascinating. These interests inspire my perspective on innovation and fuel my approach to solving challenges.
            <br><br>
            Feel free to explore my projects below, and don’t hesitate to reach out—I’m always excited to connect and create something meaningful together.


        </div>
        <SkillsList></SkillsList>
    </div>
</div>

<style>
    #about-me-section {
        width: 90%;
        margin: auto;
    }
    .sep-line {
        border: none;
        border-top: 3px solid #ffffff;
        width: 100%;
        margin: 0;
    }
    .about-me-title{
        font-size: 5rem;
        color: #4ECDC4;
        margin: 3vh;
    }
    .about-me-section-header{
        display: flex;
        justify-content: flex-end;
    }
    .about-me-section-text{
        width: 90%;
        margin: auto;
        text-align: center;
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        .about-me-title{
            font-size: 2rem;
        }
        .about-me-section-text{
            font-size: 1rem;
        }
    }
</style>