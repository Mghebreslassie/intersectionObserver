
// const sectionOne = document.querySelector('.section');
// const options = {
//     root: null, // default is viewport
//     threshold: 0,// 0 - 1 amount to view
//     rootMargin: "-150px" // margin for root viewport
// };

// const observer = new IntersectionObserver((entries, observer)=>{
//     entries.forEach(entry =>{
//         let text = document.querySelector('.thick-text');
//         let text2 = document.querySelector('.thin-text');
//         let text3 = document.querySelector('.para-text');
//         if (entry.isIntersecting) {
//             text.classList.add('show');
//             text.classList.remove('up-high');
//             text2.classList.add('show');
//             text2.classList.remove('down-low');
//             text3.classList.add('show');
//             text3.classList.remove('from-right');
//         };
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
        console.log('results', entry.target.id, entry.isIntersecting)
        if (entry.target.id === '3' && entry.isIntersecting) {
            let image = document.querySelector('#haikyuu');
            image.classList.add('show');
            image.classList.remove('hide');
        }
        let text = document.querySelector('.thick-text');
        let text2 = document.querySelector('.thin-text');
        let text3 = document.querySelector('.para-text');
        if (entry.target.id === '1' && entry.isIntersecting) {
            text.classList.add('show');
            text.classList.remove('up-high');
            text2.classList.add('show');
            text2.classList.remove('down-low');
            text3.classList.add('show');
            text3.classList.remove('from-right');
        }
        //observer.observe(entry.target) when you want to stop checking something.
    })
}, options)

sections.forEach(section => {
    observer.observe(section);
})


function changeProgress(){
    let x = document.querySelector('#bar');
    x.style.width = '80%';
}