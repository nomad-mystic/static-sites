<template>
    <div class="social-media" :class="{'social-media--is-mobile': mobile}">
        <h2 class="social-media__author">Keith Murphy</h2>
        <span class="social-media__spacer"> | </span>
        <ul class="social-media__icons">
            <li v-for="(icon, index) in this.socialIcons" :key="index">
                <a :href="icon.link" target="_blank">
                    <font-awesome-icon :icon="['fab', icon.type]" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'social-media',
        props: {
            mobile: {
                default: false,
                type: Boolean,
            },
        },
        data() {
            return {
                socialIcons: [],
            }
        },
        beforeMount() {
            this.socialIcons = [
                {
                    type: 'facebook',
                    link: 'https://github.com/nomad-mystic',
                },
                {
                    type: 'github',
                    link: 'https://github.com/nomad-mystic',
                },
                {
                    type: 'instagram',
                    link: 'https://github.com/nomad-mystic',
                },
                {
                    type: 'twitter',
                    link: 'https://github.com/nomad-mystic',
                },
            ];
        },
    }
</script>
