<script>
    import SkillsList from "./SkillsSection.svelte";
    import {opacityScroll} from "./opacityScroll.ts";
</script>

<div use:opacityScroll={{ scrollFactor: 2, scrollOffset: window.innerHeight}} id="about-me-section">
    <hr class="sep-line">
    <div class="about-me-section-header">
    <h1 class="about-me-title">About Me</h1>
    </div>
    <div class="about-me-section-body">
        <div class="about-me-section-text">
            I’m a computer science student at the University of Texas at El Paso graduating in May 2025.<br>
            <br>
            I love tackling challenges, exploring new technologies, and turning ideas into reality through code. With every project, I strive to grow, improve, and make a difference. Let’s build something amazing together!
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
        font-size: 2rem;
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