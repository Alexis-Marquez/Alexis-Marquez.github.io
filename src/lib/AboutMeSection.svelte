<script>
    import SkillsList from "./SkillsSection.svelte";
    import {opacityScroll} from "./opacityScroll.ts";
</script>

<div  id="about-me-section">
    <div class="about-me-section-header">
        <div class="About-me-section-title">
    <h1 class="about-me-title">About Me</h1>
        </div>
    </div>
    <div class="about-me-section-body">
        <div class="about-me-section-text">
            <p>I’m a computer science graduate passionate about building practical, reliable software that makes a difference. From security tools to personal finance apps and multiplayer games, I focus on creating projects that are intuitive, useful, and meaningful for people.</p>
            <p>I’m driven by curiosity, creativity, and a love for technology’s potential to solve real-world problems. Outside of coding, you’ll find me exploring music, art, storytelling, and history; always looking for fresh perspectives to bring into my work.</p>
            <p>Let’s connect and create something impactful together.</p>

        </div>
        <SkillsList></SkillsList>
    </div>
</div>

<style>
    #about-me-section {
        padding-top: 2vh;
        margin: auto;
        background: #1F2937;
       clip-path: polygon(0 10%, 50% 0, 100% 10%, 100% 100%, 0 100%);

    } 
    .about-me-title{
        font-size: 5rem;
        color: #4ECDC4;
        margin: 3vh;
    }
    .about-me-section-header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .about-me-section-text{
        width: 90%;
        margin: auto;
        text-align: center;
        font-size: 1.5rem;
        line-height: 2.2rem;
        max-width: 1200px;
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