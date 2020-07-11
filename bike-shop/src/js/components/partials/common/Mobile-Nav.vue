<template>
    <div class="mobile-nav is-invisible">
        <div class="mobile-nav__times">
            <font-awesome-icon icon="times" />
        </div>
        <nav class="mobile-nav__menu">
            <ul>
                <li class="item">
                    <a href="#">Home</a>
                </li>
                <li class="item">
                    <a href="#">Shop</a>
                </li>
                <li class="item">
                    <a href="#">About</a>
                </li>
                <li class="item">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <social-media v-bind:mobile="true">
        </social-media>
    </div>
</template>

<script>
    export default {
        name: 'mobile-nav',
    }
</script>
