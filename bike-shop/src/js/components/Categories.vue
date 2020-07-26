<template>
    <section>
        <div class="categories">
            <div v-for="(cat, index) in this.categoriesData.data" :key="index" class="categories__category">
                <section>
                    <div class="categories__fade"></div>
                    <h3 class="categories__title">{{ cat.title }}</h3>
                    <div class="categories__image">
                        <figure>
                            <img :src="cat.img" :alt="cat.alt" class="image">
                        </figure>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    import categories from '../../data/categories';

    export default {
        name: 'Categories',
        data() {
            return {
                categoriesData: [],
            };
        },
        created() {
            this.categoriesData = categories;
        },
    };
</script>
