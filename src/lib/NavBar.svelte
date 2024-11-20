<nav>
    <div class="navbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="/">
                    <span class="nav-text">About Me</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/">
                    <span class="nav-text">Experience</span>
                </a>
            </li>
            <li class="nav-item ">
            <a class="nav-link active" href="#project_section">
                <span class="nav-text">Projects</span>
            </a>
            </li>
        </ul>
    </div>
</nav>

<style>
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        background: #4ECDC4;
    }
    .navbar-nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 0;
    }
    .nav-item{
        list-style: none;
    }
    .nav-text{
        color: #1F2937;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .nav-text:hover {
        color: #E5E7EB;
    }
    @media (max-width: 768px) {
        .nav-text{
            font-size: .8rem;
        }
    }
</style>