const optionsCard = {
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

export default {
    title: {
        en: 'Cards config',
        fr: 'Configuration des cartes'
    },
    type: 'wwPopupForm',
    storyData: {
        fields: [
            {
                label: {
                    en: '(Big screen) Number of cards per line:',
                    fr: '(Grand écran) Nombre de carte par ligne :'
                },
                type: 'select',
                key: 'numberOfCards',
                valueData: 'numberOfCards',
                options: optionsCard
            },
            {
                label: {
                    en: '(Laptop) Number of cards per line:',
                    fr: '(Ordinateur) Nombre de carte par ligne :'
                },
                type: 'select',
                key: 'numberOfCardsLaptop',
                valueData: 'numberOfCardsLaptop',
                options: optionsCard
            },
            {
                label: {
                    en: '(Tablet) Number of cards per line:',
                    fr: '(Tablette) Nombre de carte par ligne :'
                },
                type: 'select',
                key: 'numberOfCardsTablet',
                valueData: 'numberOfCardsTablet',
                options: optionsCard
            },
            {
                label: {
                    en: '(Phone) Number of cards per line:',
                    fr: '(Téléphone) Nombre de carte par ligne :'
                },
                type: 'select',
                key: 'numberOfCardsPhone',
                valueData: 'numberOfCardsPhone',
                options: optionsCard
            },
            {
                label: {
                    en: 'Fit card height with content:',
                    fr: 'Adapter la hauteur de la carte au contenu :'
                },
                type: 'radio',
                key: 'isCardFitContent',
                valueData: 'isCardFitContent'
            },
            {
                label: {
                    en: 'Shadow Color:',
                    fr: 'Couleur de l\'ombre :'
                },
                type: 'shadow',
                key: 'shadowColor',
                valueData: 'shadowColor',
                // desc: {
                //     en: 'Example: 0 10px 40px 0 rgba(113, 124, 137, 0.2)',
                //     fr: 'Exemple : 0 10px 40px 0 rgba(113, 124, 137, 0.2)'
                // }
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
                type: 'shadow',
                key: 'shadowColorAfter',
                valueData: 'shadowColorAfter',
                // desc: {
                //     en: 'Example: 0 16px 32px rgba(113, 124, 137, 0.4)',
                //     fr: 'Exemple : 0 16px 32px rgba(113, 124, 137, 0.4)'
                // }
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
}