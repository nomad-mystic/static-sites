<template>
    <header>
        <div class="header">
            <div class="header__container">
                <Logo></Logo>
                <main-nav></main-nav>
            </div>

            <mobile-nav></mobile-nav>
        </div>
    </header>
</template>

<script>
    import { isNil } from 'lodash';

    export default {
        name: 'app-header',
        methods: {
            /**
             * @description Open and close the mobile nav
             *
             * @return void
             */
            toggleMobileNav() {
                // DOM Elements
                const mainNavMobileElement = window.document.querySelector('.header .main-nav__mobile');
                const mobileNavElement = window.document.querySelector('.header .mobile-nav');
                const mobileNavCloseElement = window.document.querySelector('.header .mobile-nav__times');
                const appElement = window.document.getElementById('app');

                // Open the menu
                mainNavMobileElement.addEventListener('click', (event) => {
                    const target = event.target;

                    // Delegate the event
                    if (target && !isNil(target) && target.tagName === 'div' || target.tagName === 'svg' || target.tagName === 'path') {

                        mobileNavElement.classList.toggle('is-invisible');
                        appElement.style.overflow = '';

                    }
                }, false);

                // Close the menu
                mobileNavCloseElement.addEventListener('click', (event) => {
                    const target = event.target;

                    // Delegate the event
                    if (target && !isNil(target) && target.tagName === 'div' || target.tagName === 'svg' || target.tagName === 'path') {

                        mobileNavElement.classList.toggle('is-invisible');

                        // Do this so the doesn't expand the document the right
                        appElement.style.overflow = 'hidden';

                    }
                }, false);
            },
        },
        mounted() {
            window.addEventListener('DOMContentLoaded', this.toggleMobileNav);
        },
    }
</script>
