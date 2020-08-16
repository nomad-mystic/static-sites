<template>
    <div class="main-nav">
        <div class="main-nav__mobile">
            <div class="bars">
                <font-awesome-icon icon="bars" />
            </div>
            <social-media v-bind:mobile="false"></social-media>
        </div>
        <nav class="main-nav__menu">
            <ul class="items">
                <li class="item"><a href="https://nomadslittlebrother.com/">Home</a></li>
                <li class="item"><a href="https://github.com/nomad-mystic" target="_blank">Shop</a></li>
                <li class="item"><a href="https://github.com/nomad-mystic" target="_blank">About</a></li>
                <li class="item"><a href="https://github.com/nomad-mystic" target="_blank">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'main-nav',
    };
</script>
