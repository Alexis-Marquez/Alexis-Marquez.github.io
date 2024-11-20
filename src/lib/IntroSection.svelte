<div class="intro-main">
    <div class="text-part">
        <div class="intro-text">
            <span>
                Hi!<br>
                My name is
                Alexis Marquez,
                a Computer
                Science Student and Aspiring Developer
            </span>
        </div>
    </div>
    <div class="image-part">
        <img src="/logo.png" alt="Alexis Marquez logo, an icon of a mountain forming an A and an M">
    </div>
</div>

<style>
    .intro-main {
        display: flex;
        margin-top: 3rem;
        width: 100%;
    }
    .image-part {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text-part {
        width: 50%;
        padding: 0 1rem;
    }
    .intro-text {
        width: 100%;
        text-align: center;
        font-size: 4.5rem;
        position: relative;
    }
    .image-part img {
        width: 350px;
        height: 350px;
        object-fit: contain;
    }
    @media (max-width: 768px){
        .intro-text {
            font-size: 2rem;
        }
        .intro-main{
            flex-direction: column;
        }
        .text-part {
            width: 100%;
            padding: 0;
            margin-bottom: 2em;
        }
        .image-part{
            width: 100%;
        }
        .image-part img {
            width: 200px;
            height: 200px;
            object-fit: contain;
        }
    }
</style>