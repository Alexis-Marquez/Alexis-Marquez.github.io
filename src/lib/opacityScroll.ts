export function opacityScroll(node, options = { scrollFactor: 1, scrollOffset: 0 }) {
    let opacity = 1;
    let isVisible = false;

    const handleScroll = () => {
        if (!isVisible) return;

        const scrollY = window.scrollY;
        const screenHeight = window.innerHeight;

        opacity = Math.max(0, 1 - (scrollY - options.scrollOffset) / screenHeight * options.scrollFactor);

        node.style.opacity = opacity;
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                isVisible = entry.isIntersecting;
            });
        },
        {
            threshold: 0.5,
        }
    );

    observer.observe(node);
    window.addEventListener('scroll', handleScroll);

    return {
        destroy() {
            window.removeEventListener('scroll', handleScroll);
        }
    };
}