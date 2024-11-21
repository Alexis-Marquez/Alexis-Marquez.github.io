<div class="skills-section">
    <h1 class="skills-title">My skills</h1>
    <div class="skills-lists">
        <div class="skills-listing">
        <h2 class="skills-subtitle">I'm proficient in:</h2>
        <ul class="skills-list">
            <li class="skills-list-item">Java</li>
            <li class="skills-list-item">JavaScript</li>
            <li class="skills-list-item">Python</li>
            <li class="skills-list-item">C</li>
            <li class="skills-list-item">MySQL</li>
        </ul>
        </div>
        <div class="skills-listing">
        <h2 class="skills-subtitle">I've built stuff using: </h2>
        <ul class="skills-list">
            <li class="skills-list-item">Svelte</li>
            <li class="skills-list-item">React</li>
            <li class="skills-list-item">Node.js</li>
            <li class="skills-list-item">Express</li>
            <li class="skills-list-item">JUnit</li>
        </ul>
        </div>
    </div>
</div>

<style>
    .skills-title, .skills-subtitle {
        color: #4ECDC4;
        text-align: center;
    }
    .skills-title{
        font-size: 3rem;
    }
    .skills-section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .skills-lists{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
    .skills-listing{
        display: flex;
        flex-direction: column;
    }
    .skills-list{
        margin: 0.5vh;
    }
    .skills-list-item, .skills-subtitle{
        font-size: 1.5rem;
        margin: 0.6vh;
    }
    @media (max-width: 768px){
        .skills-list-item, .skills-subtitle{
            font-size: 1rem;
        }
        .skills-title{
            font-size: 1.5rem;
        }
    }
</style>