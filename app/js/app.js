// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import "slick-carousel"
import '../js/parallax.js-1.5.0/parallax.js'

document.addEventListener('DOMContentLoaded', () => {

    $('.slider-meet').slick({
        infinite: true,
        speed: 190,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.slider-get-involved').slick({
        infinite: true,
        speed: 190,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    // Canvas
    if ($('.canvas').length) {
        $(function() {

            let dinFont = "'din-2014', sans-serif";
            let color = "#f1f3f3";

            CanvasJS.addColorSet("csopt1",
                [
                    "#6B3267",
                    "#87BCD2",
                    "#f1f3f3"
                ]);

            var opt1 = new CanvasJS.Chart("cc1", {
                height: 225,
                animationEnabled: true,
                colorSet: "csopt1",
                title: {
                    text: "went to supporting persecuted christians",
                    verticalAlign: "bottom",
                    fontSize: 18,
                    fontFamily: dinFont
                },
                toolTip: {
                    fontFamily: dinFont,
                    fontColor: "#fff",
                    fontSize: "14",
                    backgroundColor: "#6B3267",
                    borderThickness: 0,
                    borderColor: "#6B3267",
                    cornerRadius: 6,
                    animationEnabled: false,
                    content: "<div style='max-width:350px;' class='wordwrap'>{legendText}</div>",
                    updated: function(e) {
                        if (e.content.contains(1)) {
                            $('.wordwrap').css({'background-color': '#87BCD2', 'border-radius': '6px'});
                        } else  if (e.content.contains(2)) {
                            $('.wordwrap').css({'background-color': '#6B3267', 'border-radius': '6px'});
                        } else if (e.content.contains(0)) {
                            $('.wordwrap').css('display', 'none');
                        }
                    },
                    dockInsidePlotArea: true,
                },
                subtitles: [{
                    text: null
                }, {
                    text: "91p",
                    fontSize: 34,
                    fontFamily: dinFont,
                    verticalAlign: "center",
                    dockInsidePlotArea: false,
                    backgroundColor: "#fff"
                }],
                data: [{
                    type: "doughnut",
                    startAngle: 280,
                    innerRadius: "60%",
                    showInLegend: false,
                    legendText: "{label}",
                    dataPoints: [{
                        y: 72,
                        legendText: "<div class='p-3'>72p funded vital projects to strengthen persecuted Christians worldwide</div>"
                    },
                        {
                            y: 19,
                            legendText: "<div class='p-3'>19p raised prayer advocacy and awareness for persecuted Christians</div>"
                        },
                        {
                            y: 9,
                            legendText: "<div class='p-3'>00p went to our running and operational costs</div>"
                        }
                    ]
                }, ]
            });
            opt1.render();

            CanvasJS.addColorSet("csopt2",
                [
                    "#f1f3f3",
                    "#f1f3f3",
                    "#3B4037"
                ]);

            var opt2 = new CanvasJS.Chart("cc2", {
                height: 225,
                animationEnabled: true,
                colorSet: "csopt2",
                title: {
                    text: "went to our running & operational costs",
                    verticalAlign: "bottom",
                    fontSize: 18,
                    fontFamily: dinFont
                },
                toolTip: {
                    fontFamily: dinFont,
                    fontColor: "#fff",
                    fontSize: "14",
                    backgroundColor: "#6B3267",
                    borderThickness: 0,
                    borderColor: "#6B3267",
                    cornerRadius: 6,
                    content: "<div style='max-width:350px;' class='wordwrap'>{legendText}</div>",
                    updated: function(e) {
                        if (e.content.contains(0) || e.content.contains(9)) {
                            $('.wordwrap').css('display', 'none');
                        }
                    },
                    dockInsidePlotArea: true,
                },
                subtitles: [{
                    text: null
                }, {
                    text: "9p",
                    fontSize: 34,
                    fontFamily: dinFont,
                    verticalAlign: "center",
                }],

                data: [{
                    type: "doughnut",
                    startAngle: 280,
                    innerRadius: "60%",
                    showInLegend: false,
                    legendText: "{label}",
                    dataPoints: [{
                        y: 72,
                        legendText: "<div class='p-3'>00p funded vital projects to strengthen persecuted Christians worldwide</div>"
                    },
                        {
                            y: 19,
                            legendText: "<div class='p-3'>00p raised prayer advocacy and awareness for persecuted Christians</div>"
                        },
                        {
                            y: 9,
                            legendText: "<div class='p-3'>9p went to our running and operational costs</div>"
                        },
                    ]
                }]
            });
            opt2.render();

            CanvasJS.addColorSet("csopt3",
                [
                    "#a684a3",
                    "#6B3267",
                    "#87BCD2",
                    "#885a85",
                    "#a684a3",
                    "#e1d6e0",
                    "#885a85",
                    "#e1d6e0",
                    "#6B3267",
                    "#885a85"
                ]);

            var opt3 = new CanvasJS.Chart("cc3", {
                height: 500,
                animationEnabled: true,
                toolTip: {
                    fontFamily: dinFont,
                    fontColor: "#6B3267",
                    fontSize: "12",
                    backgroundColor: "#E3E6E8",
                    borderThickness: 0,
                    borderColor: "#F6F7F8",
                    cornerRadius: 5,
                    animationEnabled: true,
                    content: "<div style='max-width:400px;' class='wordwrap quote'>{legendText}</div>"
                },
                colorSet: "csopt3",
                title: {
                    text: "How we used your donations to support persecuted Christians",
                    fontFamily: dinFont,
                    fontWeight: 800,
                    fontSize: 50,
                    verticalAlign: "top"
                },
                data: [{
                    indexLabelFontSize: 12,
                    indexLabelFontFamily: dinFont,
                    type: "pie",
                    valueFormatString: "#,##0##",
                    startAngle: 250,
                    showInLegend: false,
                    legendText: "{label}",
                    dataPoints: [{
                        y: 982000,
                        legendText: "<div class='p-3'><p class='h6 font-weight-bold'>Covid aid projects<br>£982k</p>Your donations enabled Open Doors partners to reach families in urgent need with vital food aid and medical care.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/nigeria2_annual_review_2021.gif' />", indexLabel: "Covid aid projects", exploded: true
                    },


                        {
                            y: 5600000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>Where most needed<br>£5.6 million</p>We ensured your gifts went to supporting the most persecuted believers with the practical and spiritual care they need to stand strong and keep sharing Jesus.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/mal_annual_review_2021.gif' />", indexLabel: "Where most needed"
                        },


                        {
                            y: 3200000,
                            legendText: "<img src='https://www.opendoorsuk.org/about/financial-review/ar-advocacy_annual_review_2021.gif' /><br<br><div class='p-3'><p class='h6 font-weight-bold'>Raising prayer, advocacy and awareness<br>£3.2 million</p>Our engagement with churches, parliamentarians and media continued to grow. Tens of thousands of people prayed for the persecuted church using our print and digital communications.<br><br><a href='#' target='_blank'>Read more</a>",  indexLabel: "Raising prayer, advocacy and awareness"
                        },


                        {
                            y: 566000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>World Watch List Top 10 country projects<br>£566k</p>Your gifts helped us provide Bibles, relief and medical aid, and access to safe houses to believers facing the most extreme persecution.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/nk_annual_review_2021.gif' />", indexLabel: "World Watch List Top 10 country projects", exploded: true
                        },
                        {
                            y: 358000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>Persecuted women projects<br>£358k</p>Your gifts empowered women targeted for their faith and gender, providing microloans and trauma care, and helping widows with food, housing and schooling costs.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/ethiopia_annual_review_2021.gif' />", indexLabel: "Persecuted women projects", exploded: true
                        },
                        {
                            y: 99000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>Secret believers projects <br>£99k</p>You helped us reach isolated believers from Muslim backgrounds with vital online encouragement and discipleship training, as well as practical support and relief aid.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/na_annual_review_2021.gif' />", indexLabel: "Secret believers projects", exploded: true
                        },

                        {
                            y: 613000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>India projects<br>£613k</p>Your support enabled our local partners to provide emergency aid, medical care, persecution survival training and legal training for persecuted Christians in India.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/india_annual_review_2021.gif' />",  indexLabel: "India projects", exploded: true
                        },


                        {
                            y: 855000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>Hope for the Middle East projects <br>£855k</p>You kept hope alive for Christians in the Middle East, helping our local partners provide relief aid, medical and trauma care, vocational training and loans, and spiritual support.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/iraq_annual_review_2021.gif' />",  indexLabel: "Hope for the Middle East projects", exploded: true
                        },


                        {
                            y: 895000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>Persecuted Children projects <br>£895k</p>You helped us provide children impacted by persecution with protection, provision, spiritual and trauma care, and a Christian education.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/colombia_annual_review_2021.gif' />",  indexLabel: "Persecuted Children projects", exploded: true
                        },

                        {
                            y: 982000,
                            legendText: "<div class='p-3'><p class='h6 font-weight-bold'>Special projects<br>£982k</p>Our special projects category reflects projects that are funded by large financial gifts as donated by individuals and churches who are in direct contact with one of our relationship managers.<br><br><a href='#' target='_blank'>Read more</a><br></div><img src='https://www.opendoorsuk.org/about/financial-review/nigeria-trauma_annual_review_2021.gif' />",  indexLabel: "Special projects", exploded: true
                        }
                    ]
                }]
            });
            opt3.render();

        });
    }




})
