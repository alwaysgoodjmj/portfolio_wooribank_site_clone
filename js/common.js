// 메인 모달
document.addEventListener('DOMContentLoaded', () => {
    const btnSearch = document.querySelector('.btn-search');
    const searchPopup = document.querySelector('.search-container');
    const btnClose = document.querySelector('.btn-close');

    if (btnSearch && searchPopup && btnClose) {
        const openSearch = (e) => {
            e.preventDefault();
            searchPopup.classList.add('ON');
        };

        const closeSearch = () => {
            searchPopup.classList.remove('ON');
        };

        btnSearch.addEventListener('click', openSearch);
        btnClose.addEventListener('click', closeSearch);
    }
});