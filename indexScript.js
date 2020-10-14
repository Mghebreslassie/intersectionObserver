
// const sectionOne = document.querySelector('.section');
// const options = {
//     root: null, // default is viewport
//     threshold: 0,// 0 - 1 amount to view
//     rootMargin: "-150px" // margin for root viewport
// };

// const observer = new IntersectionObserver((entries, observer)=>{
//     entries.forEach(entry =>{
        
//     })
// }, options)

// observer.observe(sectionOne)


// for multiple sections
const sectionOne = document.querySelector('.section');
const sections = document.querySelectorAll('.section');
const options = {
    root: null, // default is viewport
    threshold: 0,// 0 - 1 amount to view
    rootMargin: "-150px" // margin for root viewport
};

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.style.width = '50%';
        } else {
            entry.target.style.width = '100%';
        }
    })
}, options)

sections.forEach(section => {
    observer.observe(section);
})
