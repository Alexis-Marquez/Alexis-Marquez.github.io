<script>
    import { onDestroy, onMount } from "svelte";

    let props = $props();
    let photos = props.photos;
    let isZoomed = $state(false);


    function toggleScale() {
        isZoomed = !isZoomed;
        console.log(isZoomed)
    }

    function closeZoom(event) {
        if (!event.target.closest(".carousel") && !event.target.closest(".image-button")) {
            isZoomed = false;
        }
    }

    onMount(() => {
        window.addEventListener("click", closeZoom);
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                isZoomed = false;
            }
        });
    });

    onDestroy(() => {
        window.removeEventListener("click", closeZoom);
        window.removeEventListener("keydown", closeZoom);
    });

    let slidesContainer;
    let prevButton, nextButton;
    function changeSlide(offset) {
        const activeSlide = slidesContainer.querySelector("[data-active]");
        let newIndex = [...slidesContainer.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slidesContainer.children.length - 1;
        if (newIndex >= slidesContainer.children.length) newIndex = 0;

        slidesContainer.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    }

    function handleClick(event) {
        const offset = event.currentTarget === nextButton ? 1 : -1;
        changeSlide(offset);
    }

</script>



<div class="carousel">
    <div aria-label="project screenshots carousel" class="project-screenshots-carousel {isZoomed ? 'zoomed' : ''}">
        <button  bind:this={prevButton} class="carousel-button prev" onclick={handleClick} aria-label="previous photo button"> <i class="fa-solid fa-chevron-left"></i></button>
        <button bind:this={nextButton} class="carousel-button next" onclick={handleClick}  aria-label="next photo button"> <i class="fa-solid fa-chevron-right"></i></button>
        <ul class="list-unstyled" bind:this={slidesContainer}>
            {#each photos as photo, i}
                {#if i === 0}
                    <li class="slide" data-active>
                        <img class="project-photo" src={photo} alt="project screenshot" />
                        <button class="image-button {isZoomed ? 'zoomed' : ''}" onclick={() => toggleScale()} aria-label="Zoom image"><i class="fa fa-search-plus"></i></button>
                    </li>
                {:else}
                    <li class="slide">
                        <img class="project-photo" src={photo} alt="project screenshot"/>
                        <button class="image-button {isZoomed ? 'zoomed' : ''}" onclick={() => toggleScale()} aria-label="Zoom image"><i class="fa fa-search-plus"></i></button>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</div>


<style>
    .project-screenshots-carousel{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        transition: transform 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out;
    }

    .project-screenshots-carousel.zoomed {
        position: relative;
        width: 160%;
        height: 120%;
        transform: translate(-60%, -10%) scale(1.2);
        z-index: 20;
    }

    .slide {
        position: absolute;
        inset: 0;
        opacity: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 200ms opacity ease-in-out;
        transition-delay: 200ms;
    }


    .slide[data-active]{
        opacity: 1;
        pointer-events: auto;
        z-index: 1;
        transition-delay: 0ms;
    }

    .project-photo {
        height: 100%;
        object-fit: cover;
        object-position: center;
        width: 100%;
        border-radius: 2.5%;
    }

    .carousel{
        width: 35%;
    }
    .carousel-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgb(255, 255, 255);
        border: none;
        color: #4aa6b0;
        font-size: 1.5rem;
        padding: 10px 15px;
        cursor: pointer;
        z-index: 10;
        border-radius: 50%;
        transition: background 0.3s ease-in-out;
    }

    .carousel-button:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    .carousel-button.prev {
        left: 10px;
    }

    .carousel-button.next {
        right: 10px;
    }

    .carousel-button:focus{
        outline: 1px solid black;
    }
    .image-button {
        position: absolute;
        background: rgba(0, 0, 0, 0);
        color: #4aa6b0;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background 0.5s ease-in-out;
        z-index: 10;
    }

    .image-button:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: scale(1.2);
    }

    .image-button.zoomed{
        display: none;
    }
    .list-unstyled{
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }
    @media (max-width: 768px)
    {
        .carousel{
            display: none;
        }
    }
</style>