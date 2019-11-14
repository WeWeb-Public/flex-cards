<template>
    <div class="blog-cards" :style="customStyle">
        <!-- wwManager:start -->
        <wwSectionEditMenu :sectionCtrl="sectionCtrl" :options="openOptions"></wwSectionEditMenu>
        <!-- wwManager:end -->
        <wwObject class="background" :ww-object="section.data.background" ww-category="background"></wwObject>

        <!--TOP WWOBJS-->
        <div class="top-ww-objs">
            <wwLayoutColumn tag="div" ww-default="ww-image" :ww-list="section.data.topWwObjs" class="top-ww-obj" @ww-add="add(section.data.topWwObjs, $event)" @ww-remove="remove(section.data.topWwObjs, $event)">
                <wwObject v-for="topWwObj in section.data.topWwObjs" :key="topWwObj.uniqueId" :ww-object="topWwObj"></wwObject>
            </wwLayoutColumn>
        </div>

        <!--THUMBNAILS-->

        <div class="thumbnail-container">
            <div class="thumbnail" :class="[section.data.numberOfCards]" v-for="(thumbnail, index) in section.data.thumbnails" :key="thumbnail.uniqueId">
                <div class="shadow">
                    <div class="thumbnail-border">
                        <!-- wwManager:start -->
                        <wwContextMenu tag="div" class="contextmenu" v-if="sectionCtrl.getEditMode() == 'CONTENT'" @ww-add-before="addCardBefore(index)" @ww-add-after="addCardAfter(index)" @ww-remove="removeCard(index)">
                            <div class="wwi wwi-config"></div>
                        </wwContextMenu>
                        <!-- wwManager:end -->

                        <div class="content-container">
                            <div class="content-container">
                                <wwObject class="background" :ww-object="thumbnail.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                                <wwLayoutColumn tag="div" ww-default="ww-image" :ww-list="thumbnail.contents" class="content" @ww-add="add(thumbnail.contents, $event)" @ww-remove="remove(thumbnail.contents, $event)">
                                    <wwObject v-for="content in thumbnail.contents" :key="content.uniqueId" :ww-object="content"></wwObject>
                                </wwLayoutColumn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--BOTTOM WWOBJS-->
        <div class="bottom-ww-objs">
            <wwLayoutColumn tag="div" ww-default="ww-image" :ww-list="section.data.bottomWwObjs" class="top-ww-obj" @ww-add="add(section.data.bottomWwObjs, $event)" @ww-remove="remove(section.data.bottomWwObjs, $event)">
                <wwObject v-for="bottomWwObj in section.data.bottomWwObjs" :key="bottomWwObj.uniqueId" :ww-object="bottomWwObj"></wwObject>
            </wwLayoutColumn>
        </div>
    </div>
</template>

<script>

/* wwManager:start */
wwLib.wwPopups.addStory('BLOG_CARD_CONFIG', {
    title: {
        en: 'Cards config',
        fr: 'Configuration des cartes'
    },
    type: 'wwPopupForm',
    storyData: {
        fields: [
            {
                label: {
                    en: 'Number of cards per line:',
                    fr: 'Nombre de carte par ligne :'
                },
                type: 'select',
                key: 'numberOfCards',
                valueData: 'numberOfCards',
                options: {
                    type: 'text',
                    values: [
                        {
                            value: 'one',
                            text: {
                                en: 'one',
                                fr: 'une'
                            }
                        },
                        {
                            value: 'two',
                            text: {
                                en: 'two',
                                fr: 'deux'
                            }
                        },
                        {
                            value: 'three',
                            default: true,
                            text: {
                                en: 'three',
                                fr: 'trois'
                            }
                        },
                        {
                            value: 'four',
                            text: {
                                en: 'four',
                                fr: 'quatre'
                            }
                        },
                        {
                            value: 'five',
                            text: {
                                en: 'five',
                                fr: 'cinq'
                            }
                        },
                    ]
                }
            },
            {
                label: {
                    en: 'Shadow Color:',
                    fr: 'Couleur de l\'ombre :'
                },
                type: 'text',
                key: 'shadowColor',
                valueData: 'shadowColor',
                desc: {
                    en: 'Example: 0 10px 40px 0 rgba(113, 124, 137, 0.2)',
                    fr: 'Exemple : 0 10px 40px 0 rgba(113, 124, 137, 0.2)'
                }
            },
            {
                label: {
                    en: 'Border radius in px:',
                    fr: 'Arrondis des coins en px :'
                },
                type: 'text',
                key: 'cardBorderRadius',
                valueData: 'cardBorderRadius',
                desc: {
                    en: 'Edit card border radius',
                    fr: 'Changer la bordure des coins des cartes'
                }
            },
            {
                label: {
                    en: 'Space between cards in px:',
                    fr: 'Espace entre les cartes en px:'
                },
                type: 'text',
                key: 'spaceBetweenCards',
                valueData: 'spaceBetweenCards',
                desc: {
                    en: 'Example: 15',
                    fr: 'Exemple : 15'
                }
            },
            {
                label: {
                    en: 'Animation at hover:',
                    fr: 'Animer au passage de la souris :'
                },
                type: 'radio',
                key: 'animAtHover',
                valueData: 'animAtHover'
            },
            {
                label: {
                    en: 'Shadow Color After hover:',
                    fr: 'Couleur de l\'ombre après le hover:'
                },
                type: 'text',
                key: 'shadowColorAfter',
                valueData: 'shadowColorAfter',
                desc: {
                    en: 'Example: 0 16px 32px rgba(113, 124, 137, 0.4)',
                    fr: 'Exemple : 0 16px 32px rgba(113, 124, 137, 0.4)'
                }
            },
            {
                label: {
                    en: 'Number of pixels the card will scroll top:',
                    fr: 'Nombre de pixels dont la carte va se soulever:'
                },
                type: 'text',
                key: 'pixelsToScrollTop',
                valueData: 'pixelsToScrollTop',
                desc: {
                    en: 'Example: 10',
                    fr: 'Exemple : 10'
                }
            }
        ]
    },
    buttons: {
        NEXT: {
            text: {
                en: 'Ok',
                fr: 'Ok'
            },
            next: false
        }
    }
})

/* wwManager:end */

export default {
    name: "__COMPONENT_NAME__",
    props: {
        sectionCtrl: Object
    },
    data() {
        return {
            maxThumbnailsPerLine: 4,
        }
    },
    computed: {
        section() {
            return this.sectionCtrl.get();
        },
        customStyle() {
            const shadowColorAfter = this.section.data.animAtHover ? this.section.data.shadowColorAfter : this.section.data.shadowColor;
            const pixelsToScrollTop = `-${this.section.data.animAtHover ? this.section.data.pixelsToScrollTop : '0'}px`;
            return {
                '--cardBorderRadius': `${this.section.data.cardBorderRadius}px`,
                '--shadowColor': this.section.data.shadowColor,
                '--shadowColorAfter': shadowColorAfter,
                '--pixelsToScrollTop': pixelsToScrollTop,
                '--spaceBetweenCards': `0 ${this.section.data.spaceBetweenCards}px`
            }
        }
    },
    methods: {
        initData() {
            let needUpdate = false;

            //Init objects
            if (!this.section.data.background) {
                this.section.data.background = wwLib.wwObject.getDefault({ type: 'ww-color', data: { color: 'white' } });
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.topWwObjs)) {
                this.section.data.topWwObjs = [];
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.bottomWwObjs)) {
                this.section.data.bottomWwObjs = [];
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.thumbnails)) {
                this.section.data.thumbnails = [];
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.thumbnails)) {
                this.section.data.thumbnails.push({
                    background: wwLib.wwObject.getDefault({ type: 'ww-color', data: { color: 'white' } }),
                    contents: []
                })
                needUpdate = true;
            }
            if (!this.section.data.shadowColor) {
                this.section.data.shadowColor = '0 10px 40px 0 rgba(113, 124, 137, 0.2)';
                needUpdate = true;
            }
            if (!this.section.data.shadowColorAfter) {
                this.section.data.shadowColorAfter = '0 16px 32px rgba(113, 124, 137, 0.4)';
                needUpdate = true;
            }
            if (!this.section.data.cardBorderRadius) {
                this.section.data.cardBorderRadius = '0';
                needUpdate = true;
            }
            if (!this.section.data.spaceBetweenCards) {
                this.section.data.spaceBetweenCards = '15';
                needUpdate = true;
            }
            if (!this.section.data.numberOfCards) {
                this.section.data.numberOfCards = 'three';
                needUpdate = true;
            }
            if (needUpdate) {
                this.sectionCtrl.update(this.section);
            }
        },
        init() {
            window.addEventListener("resize", this.isMobileOrPair);
        },
        isMobileOrPair(index) {
            let w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth,
                y = w.innerHeight || e.clientHeight || g.clientHeight;

            if (x < 769) {
                return 1
            } else if (index % 2) {
                return 1;
            } else {
                return 0
            }
        },

        /* wwManager:start */
        add(list, options) {
            list.splice(options.index, 0, options.wwObject);

            this.sectionCtrl.update(this.section);
        },
        remove(list, options) {
            list.splice(options.index, 1);

            this.sectionCtrl.update(this.section);
        },
        getNewCard() {
            const card = JSON.parse(JSON.stringify(this.section.data.thumbnails[0]))
            wwLib.wwUtils.changeUniqueIds(card)
            return card
        },
        addCardBefore(index) {
            const newCard = this.getNewCard()
            this.section.data.thumbnails.splice(index, 0, newCard);
            this.sectionCtrl.update(this.section);
        },
        addCardAfter(index) {
            const newCard = this.getNewCard()
            this.section.data.thumbnails.splice(index + 1, 0, newCard);
            this.sectionCtrl.update(this.section);
        },
        removeCard(index) {
            if (!this.section.data.thumbnails.length) {
                return;
            }
            this.section.data.thumbnails.splice(index, 1);

            this.sectionCtrl.update(this.section);
        },

        async openOptions() {
            let options = {
                firstPage: 'BLOG_CARD_CONFIG',
                data: {
                    numberOfCards: this.section.data.numberOfCards,
                    shadowColor: this.section.data.shadowColor,
                    cardBorderRadius: this.section.data.cardBorderRadius,
                    animAtHover: this.section.data.animAtHover,
                    shadowColorAfter: this.section.data.shadowColorAfter,
                    pixelsToScrollTop: this.section.data.pixelsToScrollTop,
                    spaceBetweenCards: this.section.data.spaceBetweenCards
                },
            }

            const result = await wwLib.wwPopups.open(options)
            console.log(result)
            let updateSection = false;
            if (result.numberOfCards) {
                this.section.data.numberOfCards = result.numberOfCards;
                updateSection = true;
            }

            if (result.shadowColor) {
                this.section.data.shadowColor = result.shadowColor;
                updateSection = true;
            }

            if (result.cardBorderRadius) {
                this.section.data.cardBorderRadius = result.cardBorderRadius;
                updateSection = true;
            }

            if (result.spaceBetweenCards) {
                this.section.data.spaceBetweenCards = result.spaceBetweenCards;
                updateSection = true;
            }

            if (typeof (result.animAtHover) != 'undefined') {
                this.section.data.animAtHover = result.animAtHover;
                updateSection = true;
            }

            if (result.shadowColorAfter) {
                this.section.data.shadowColorAfter = result.shadowColorAfter;
                updateSection = true;
            }

            if (result.pixelsToScrollTop) {
                this.section.data.pixelsToScrollTop = result.pixelsToScrollTop;
                updateSection = true;
            }

            if (updateSection) {
                this.sectionCtrl.update(this.section);
            }
        }
        /* wwManager:end */
    },
    created() {
        this.initData();
    },
    mounted: function () {
        this.init();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.setThumbnailsPerLine);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog-cards {
    position: relative;

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .top-ww-objs,
    .bottom-ww-objs {
        position: relative;

        .top-ww-obj,
        .bottom-ww-obj {
            position: relative;
        }
    }

    .thumbnail-container {
        position: relative;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 90%;
        margin-left: 5%;
        @media (min-width: 768px) {
            width: 80%;
            margin-left: 10%;
        }

        .thumbnail {
            flex-basis: 100%;
            position: relative;
            margin: 30px 0;
            min-height: 50px;
            transition: transform 0.4s ease-out;
            padding: var(--spaceBetweenCards);
            @media (min-width: 768px) {
                &.one {
                    flex-basis: 100%;
                }
                &.two {
                    flex-basis: 50%;
                }
                &.three {
                    flex-basis: 33.3333%;
                }
                &.four {
                    flex-basis: 25%;
                }
                &.five {
                    flex-basis: 20%;
                }
            }
            .shadow {
                height: 100%;
                transition: box-shadow 0.4s ease-out;
                border-radius: var(--cardBorderRadius);
                box-shadow: var(--shadowColor);
                .thumbnail-border {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    overflow: hidden;
                    border-radius: var(--cardBorderRadius);
                    width: 100%;
                    height: 100%;
                }
                &:hover {
                    box-shadow: var(--shadowColorAfter);
                }
            }
            &:hover {
                transform: translateY(var(--pixelsToScrollTop));
            }

            .content {
                position: relative;
            }

            .content-container {
                position: relative;
                width: 100%;
                height: 100%;
            }

            .image-container {
                position: relative;
                width: 100%;
                min-height: 200px;
                .background {
                    overflow: hidden;
                }
            }

            /* wwManager:start */
            .contextmenu {
                position: absolute;
                top: 0;
                left: 0;
                transform: translate(-50%, -50%);
                width: 30px;
                height: 30px;
                color: white;
                background-color: #ef811a;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                cursor: pointer;
                z-index: 1;
            }
            /* wwManager:end */
        }
    }
}

/* wwManager:start */
.ww-editing {
    .thumbnail-container {
        .thumbnail {
            &:hover {
                transform: none !important;
            }
        }
    }
}
/* wwManager:end */
</style>
