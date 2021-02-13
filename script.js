{
    
    const callback = (entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) entry.target.removeAttribute("style");
            else entry.target.setAttribute("style", "transform: scale(1.3) translateY(-3vw);");
        });
    };
    
    const options = {
        threshold: 0.25
    }
    
    const observer = new IntersectionObserver(callback, options);
    
    document.querySelectorAll(".shape").forEach(shape => observer.observe(shape));
    
}