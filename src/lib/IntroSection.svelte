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
        width: 90%;
        margin: 16vh auto 8vh;
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
        z-index: -1;
    }
    .intro-text {
        width: 100%;
        text-align: center;
        font-size: 4.5rem;
        position: relative;
    }
    .image-part img {
        width: 375px;
        height: 375px;
        object-fit: contain;
    }
    @media (max-width: 768px){
        .intro-text {
            font-size: 1.5rem;
        }
        .intro-main{
            flex-direction: column;
            margin: 4rem auto;
        }
        .image-part img{
            width: 150px;
            height: 150px;
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