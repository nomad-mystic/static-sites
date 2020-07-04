<template>
    <div class="social-media" :class="{'is-mobile': mobile}">
        <h2 class="social-media__author">Keith Murphy |</h2>
        <ul class="social-media__icons">
            <li>
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fab', 'github']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fab', 'twitter']" />
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
            }
        }
    }
</script>
