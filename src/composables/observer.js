

export default function intersectionObserver(el){

    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('active')
                observer.disconnect()
            }else{
                entry.target.classList.remove('active')
            }
        })
    });
    observer.observe(el)
}