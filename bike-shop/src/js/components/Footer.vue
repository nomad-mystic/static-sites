<template>
    <footer>
        <div class="footer">
            <div class="footer__logo-container">
                <div class="footer__logo">
                    <section>
                        <Logo></Logo>
                    </section>
                </div>
            </div>
            <div class="footer__nav-social-copyright-container">
                <div class="footer__nav">
                    <section>
                        <main-nav></main-nav>
                    </section>
                </div>
                <div class="footer__social-media">
                    <section>
                        <social-media></social-media>
                    </section>
                </div>
                <div class="footer__copyright">
                    <p>&copy; Keith Murphy | Nomadmystics@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'app-footer'
    }
</script>
