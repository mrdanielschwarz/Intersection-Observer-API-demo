{
    
    const callback = (entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) entry.target.removeAttribute("style");
            else entry.target.setAttribute("style", "border: 5vw solid black;");
        });
    };
    
    const options = {
        threshold: 1
    }
    
    const observer = new IntersectionObserver(callback, options);
    
    document.querySelectorAll(".shape").forEach(shape => observer.observe(shape));
    
}