
document.addEventListener('DOMContentLoaded', () => {
    const dropDownItems = document.querySelectorAll('.js-dropdown');
    const btnQuick = document.querySelector('.btn-quick');
    const btnTrigger = document.querySelector('.btn-quick > a');
    const btnSearch = document.querySelector('.btn-search');
    const searchModal = document.querySelector('.search-container');
    const btnClose = document.querySelector('.btn-close');

    // gnb
    dropDownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            dropDownItems.forEach(el => el.classList.remove('ON'));
            item.classList.add('ON');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('ON');
        });
    });

    // quick-menu
    if (btnQuick && btnTrigger) {
        btnTrigger.addEventListener('click', (e) => {
            if (btnQuick.classList.contains('Active')) {
                btnQuick.classList.toggle('Active');
            } else {
                e.preventDefault();
                btnQuick.classList.add('Active');
            }
        });
    
        const subLink = btnQuick.querySelectorAll('.quick-sub > a');
        subLink.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    // 메인 검색 모달
    if (btnSearch && searchModal && btnClose) {
        const openSearch = (e) => {
            e.preventDefault();
            searchModal.classList.add('ON');
        };
        const closeSearch = () => {
            searchModal.classList.remove('ON');
        };

        btnSearch.addEventListener('click', openSearch);
        btnClose.addEventListener('click', closeSearch);
    }
});