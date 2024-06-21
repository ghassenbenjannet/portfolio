<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8"/>
    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title><xsl:value-of select="portfolio/title"/></title>
                <link rel="stylesheet" href="assets/css/styles.css"/>
            </head>
            <body>
                <header class="header" id="header">
                    <nav class="nav container">
                        <a href="#" class="nav__logo">Ghassen BJ</a>
                        <div class="nav__menu" id="nav-menu">
                            <ul class="nav__list">
                                <li><a href="#home" class="nav__link active-link"><xsl:value-of select="portfolio/nav/home"/></a></li>
                                <li><a href="#work" class="nav__link"><xsl:value-of select="portfolio/nav/work"/></a></li>
                                <li><a href="#info" class="nav__link"><xsl:value-of select="portfolio/nav/info"/></a></li>
                                <li><a href="#services" class="nav__link"><xsl:value-of select="portfolio/nav/services"/></a></li>
                                <li><a href="#contact" class="nav__link"><xsl:value-of select="portfolio/nav/contact"/></a></li>
                            </ul>
                            <div class="language-bar">
                                <ul>
                                    <li><a href="?lang=fr" class="flag-icon flag-icon-fr"></a></li>
                                    <li><a href="?lang=en" class="flag-icon flag-icon-gb"></a></li>
                                    <li><a href="?lang=ar" class="flag-icon flag-icon-sa"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="nav__toggle" id="nav-toggle">
                            <i class="ri-menu-line"></i>
                        </div>
                    </nav>
                </header>
                <main class="main">
                    <section class="home section" id="home">
                        <div class="home__container container grid">
                            <img src="assets/img/home-perfil.png" alt="image" class="home__img"/>
                            <div class="home__data">
                                <h1 class="home__name"><xsl:value-of select="portfolio/home/name"/></h1>
                                <h3 class="home__profession"><xsl:value-of select="portfolio/home/profession"/></h3>
                            </div>
                            <a href="#work" class="home__scroll">
                                <div class="home__scroll-box">
                                    <i class="ri-arrow-down-line"></i>
                                </div>
                                <span class="home__scroll-text">Recent Works</span>
                            </a>
                        </div>
                    </section>
                    <section class="work section" id="work">
                        <h2 class="section__title"><xsl:value-of select="portfolio/work/title"/></h2>
                        <!-- More work section content -->
                    </section>
                    <section class="info section" id="info">
                        <h2 class="section__title"><xsl:value-of select="portfolio/info/title"/></h2>
                        <div class="info__container container grid">
                            <div class="info__data">
                                <h3 class="info__title"><xsl:value-of select="portfolio/info/about/title"/></h3>
                                <p class="info__description"><xsl:value-of select="portfolio/info/about/description"/></p>
                                <a href="#" class="button"><xsl:value-of select="portfolio/info/about/button"/></a>
                            </div>
                            <div class="info__experience">
                                <h3 class="info__title"><xsl:value-of select="portfolio/info/experience/title"/></h3>
                                <xsl:for-each select="portfolio/info/experience/companies/company">
                                    <div class="info__company">
                                        <h4 class="info__company-name"><xsl:value-of select="name"/></h4>
                                        <span class="info__company-role"><xsl:value-of select="role"/></span>
                                        <span class="info__company-date"><xsl:value-of select="date"/></span>
                                        <p class="info__company-description"><xsl:value-of select="description"/></p>
                                    </div>
                                </xsl:for-each>
                            </div>
                            <div class="info__skills">
                                <h3 class="info__title"><xsl:value-of select="portfolio/info/skills/title"/></h3>
                                <ul class="info__skills-list">
                                    <xsl:for-each select="portfolio/info/skills/list/skill">
                                        <li class="info__skills-item"><xsl:value-of select="."/></li>
                                    </xsl:for-each>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="services section" id="services">
                        <h2 class="section__title"><xsl:value-of select="portfolio/services/title"/></h2>
                        <div class="services__container container grid">
                            <xsl:for-each select="portfolio/services/list/service">
                                <div class="services__content">
                                    <h3 class="services__title"><xsl:value-of select="name"/></h3>
                                    <p class="services__description"><xsl:value-of select="description"/></p>
                                </div>
                            </xsl:for-each>
                        </div>
                    </section>
                    <section class="contact section" id="contact">
                        <h2 class="section__title"><xsl:value-of select="portfolio/contact/title"/></h2>
                        <div class="contact__container container grid">
                            <form action="#" class="contact__form">
                                <div class="contact__form-group">
                                    <input type="text" class="contact__form-input" placeholder="<xsl:value-of select='portfolio/contact/form/name'/>">
                                    <input type="email" class="contact__form-input" placeholder="<xsl:value-of select='portfolio/contact/form/email'/>">
                                </div>
                                <textarea class="contact__form-input" placeholder="<xsl:value-of select='portfolio/contact/form/message'/>"></textarea>
                                <button class="button"><xsl:value-of select="portfolio/contact/form/send"/></button>
                            </form>
                            <div class="contact__social">
                                <a href="#" class="contact__social-link"><xsl:value-of select="portfolio/contact/social/facebook"/></a>
                                <a href="#" class="contact__social-link"><xsl:value-of select="portfolio/contact/social/instagram"/></a>
                                <a href="#" class="contact__social-link"><xsl:value-of select="portfolio/contact/social/linkedin"/></a>
                            </div>
                        </div>
                    </section>
                </main>
                <footer class="footer">
                    <p><xsl:value-of select="portfolio/footer/copy"/></p>
                </footer>
            </body>
                <script src="assets/js/scrollreveal.min.js"></script>

            <!--=============== EMAIL JS ===============-->
            <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

            <!--=============== MAIN JS ===============-->
            <script src="assets/js/main.js"></script>
            <script src="assets/js/lang.js"></script>
        </html>
    </xsl:template>
</xsl:stylesheet>
