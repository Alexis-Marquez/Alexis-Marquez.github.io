<script>
    import {onMount} from "svelte";
    import {opacityScroll} from "./opacityScroll";
    import ContactInfo from "./ContactInfo.svelte";

    const text = "Hi! \n My name is \n Alexis Marquez,\n Aspiring Software Developer"

    let displayText = '';

    let charIndex = 0;

    function type(){
        if(charIndex < text.length){
            displayText += text[charIndex];
            charIndex++;
            setTimeout(type, 100)
        }
    }
    onMount(()=>{
        type();
    });
</script>

<div class="intro-main" >
    <div class="text-part">
        <div class="intro-text">
            <span id="container">
                {displayText}
            </span>
        </div>
    </div>
    <div class="image-part">
        <img src="/logo.png" alt="Alexis Marquez logo, an icon of a mountain forming an A and an M">
        <ContactInfo></ContactInfo>
    </div>
    
</div>

<style>
    .intro-main {
        z-index: 100;
        display: flex;
        padding-top: 3vh;
        margin: 8vh auto 0;
        min-height: 74.5vh;
        transition: opacity 0.1s;
        position: relative;
        overflow: hidden;
        padding-bottom: 100px;
        clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
        background: #1F2937;
    }
 
    .image-part {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .text-part {
        width: 50%;
        padding: 0 1rem;
        z-index: -1;
    }
    .intro-text {
        width: 100%;
        text-align: center;
        font-size: 5rem;
        position: relative;
    }
    .image-part img {
        width: 375px;
        height: 375px;
        object-fit: contain;
    }
    #container{
        white-space: pre-wrap;
    }

    @media (max-width: 768px){
        .intro-text {
            font-size: 1.5rem;
        }
        .intro-main{
            flex-direction: column;
            margin-top: 6vh;
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