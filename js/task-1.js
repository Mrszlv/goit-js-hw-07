const allCategories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const allTitle = item.querySelector('h2').textContent;
    const allList = item.querySelectorAll('ul li').length;

    console.log(`Categories: ${allTitle}`);
    console.log(`Elements: ${allList}`);
});













