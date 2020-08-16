<template>
    <div class="mobile-nav is-invisible">
        <div class="mobile-nav__times">
            <font-awesome-icon icon="times" />
        </div>
        <nav class="mobile-nav__menu">
            <ul>
                <li class="item">
                    <a href="https://nomadslittlebrother.com/">Home</a>
                </li>
                <li class="item">
                    <a href="https://github.com/nomad-mystic" target="_blank">Shop</a>
                </li>
                <li class="item">
                    <a href="https://github.com/nomad-mystic" target="_blank">About</a>
                </li>
                <li class="item">
                    <a href="https://github.com/nomad-mystic" target="_blank">Contact</a>
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
