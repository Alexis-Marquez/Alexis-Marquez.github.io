export function opacityScroll(node, options = { scrollFactor: 1, scrollOffset: 0 }) {
    let opacity = 0;

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const screenHeight = window.innerHeight;
        opacity =  Math.max(0, 1 - (scrollY - options.scrollOffset) / (screenHeight * options.scrollFactor));
        // if (scrollY < options.scrollOffset) {
        //     opacity = Math.min(1, (scrollY - options.scrollOffset + screenHeight * options.scrollFactor) / (screenHeight * options.scrollFactor));
        // }
        node.style.opacity = opacity;
    };
    window.addEventListener('scroll', handleScroll);

    return {
        destroy() {
            window.removeEventListener('scroll', handleScroll);
        }
    };
}