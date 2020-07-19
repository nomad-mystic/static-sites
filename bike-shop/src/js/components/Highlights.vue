<template>
    <section>
        <div class="highlights">
            <div class="highlights--control-left">
                <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
            </div>
            <section>
                <div class="highlights--cards">
                    <div v-for="(bike, index) in this.highlightsData.data" :key="index">
                        <section>
                            <div class="highlights--card">
                                <div class="image">
                                    <figure>
                                        <img :src="bike.img" :alt="bike.alt">
                                    </figure>
                                </div>
                                <div class="title">
                                    <h6>{{ bike.title }}</h6>
                                </div>
                                <div class="price">
                                    <p>{{ bike.price }}</p>
                                </div>
                                <div class="stars">
                                    <div class="star" :class="`is-${bike.stars}`">
                                        <div v-for="dex in 5" :key="dex">
                                            <font-awesome-icon :icon="['fas', 'star']" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <div class="highlights--control-right">
                <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
            </div>
        </div>
    </section>
</template>

<script>
    import highlightsData from '../../data/highlights';

    export default {
        name: 'Highlights',
        data() {
            return {
                highlightsData: [],
                numberOfStars: 5,
            };
        },
        created() {
            this.highlightsData = highlightsData;
        },
    };
</script>
