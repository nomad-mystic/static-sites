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
                <li class="item"><a href="#">Home</a></li>
                <li class="item"><a href="#">Shop</a></li>
                <li class="item"><a href="#">About</a></li>
                <li class="item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'main-nav',
    };
</script>
