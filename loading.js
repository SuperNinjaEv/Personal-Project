const mainLoad = document.querySelector('main');
const bodyLoad = document.querySelector('body');
const pageLoad = {
    init: () => {
        fetchButton.addEventListener('click', pageLoad.load);
        console.log('page loaded');
    },
    load: () => {
        pageLoad.showLoading();
    },
    showLoading: () => {
        let li = document.createElement('li');
        li.textContent = 'Dogs Loading...';
        li.className = 'loading-list';
        mainLoad.after(li);
        setTimeout(() => {
            let loadMsg = document.querySelector('.loading-list');
            bodyLoad.removeChild(loadMsg)
        }, 500)
    }
}
pageLoad.init()