<template>
    <div class="mobile-nav is-invisible">
        <nav class="mobile-nav__menu">
            <div class="times">
                <font-awesome-icon icon="times" />
            </div>
            <ul>
                <li class="item">Home</li>
                <li class="item">Shop</li>
                <li class="item">About</li>
                <li class="item">Contact</li>
            </ul>
        </nav>
        <social-media v-bind:mobile="true"></social-media>
    </div>
</template>

<script>
    export default {
        name: 'mobile-nav',
    }
</script>
