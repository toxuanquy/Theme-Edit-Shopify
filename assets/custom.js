/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

jQuery(function() {
    //section blog news
    const count = $('.c-blogNew__countBox');
    const slickElement = $('.js-sliderBlog');

    slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        if (!slick.$dots) {
            return;
        }
        const i = (currentSlide ? currentSlide : 0) + 1;
        count.html(i + ' <span class="c-blogNew__counter"></span> ' + (slick.$dots[0].children.length));
    });

    slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: true,
        autoplay: true,
        nextArrow: '<span class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="4.769" height="7.558" viewBox="0 0 4.769 7.558"><path id="Path_182" data-name="Path 182" d="M396.4,104.525l-3.284,3.284-3.284-3.284" transform="translate(-104.03 396.9) rotate(-90)" fill="none" stroke="#222" stroke-width="1.4"/></svg></span>',
        prevArrow: '<span class="prev-arrow"><svg class="" xmlns="http://www.w3.org/2000/svg" width="4.769" height="7.558" viewBox="0 0 4.769 7.558"><path id="Path_183" data-name="Path 183" d="M396.4,104.525l-3.284,3.284-3.284-3.284" transform="translate(108.799 -389.342) rotate(90)" fill="none" stroke="#222" stroke-width="1.4"/></svg></span>',
        appendArrows: '.c-blogNew__arrow'
    });

    //show menu footer
    $('.js-showMenuMobile').click(function() {
        if ($(window).width() <= 1139) {
            $(this).toggleClass('is-show');
            if ($('.js-showMenuMobile').hasClass('is-show')) {
                $(this).parent().find('.Linklist--inner').slideDown();
            } else {
                $(this).parent().find('.Linklist--inner').slideUp();
            }
        }
    })

    //dropdown filter collection
    if ($('.CollectionFilters').length > -1) {
        $('.CollectionFilters .Collapsible__Button').click(function() {
            if ($(this).hasClass('is-active')) {
                $(this).parent().find('.Collapsible__Inner').slideUp();
                $(this).removeClass('is-active');
            } else {
                $(this).parent().find('.Collapsible__Inner').slideDown();
                $(this).addClass('is-active');
            }
        })
    }
    // Giftship 
    if ($('.template-product').length > -1) {
        var checkExitApp = setInterval(function() {
            var $item = $('#gsAppContainer');
            if ($item.length) {
                clearInterval(checkExitApp);
                var htmlInput = "<div class='gs__Title'><input type='checkbox' id='gift_ship' name='ギフト包装'><label for='gift_ship'>ギフト包装(+500円)</label></div>";
                $(htmlInput).prependTo('#gsAppContainer');
                var htmlImg = "<img src='https://cdn.shopify.com/s/files/1/0552/2620/4211/files/gift-banner.jpg?v=1648029263' alt='Gift'>";
                $(htmlImg).prependTo('#gsAppContainer .gs__wrapper');
                setTimeout(function() {
                    $('.gs__Title label').click(function() {
                        $(this).parent().parent().find('.gs__wrapper').slideToggle();
                        setTimeout(function() {
                            if ($('#gift_ship').is(':checked')) {
                                $('<input type="hidden" name="properties[Gift]" value="ギフト包装(+500円)" class="propertiesGift">').prependTo($('form.ProductForm'))
                            } else {
                                $('.propertiesGift').remove();
                            }
                        }, 0)
                    })
                }, 300)
            }
        }, 100);
    }
    // click dropdown filter
    //   try{
    //     FilterApi.afterCall = function(filter) {
    //       setTimeout(function() {
    //         $('.Pagination__NavItem.Link').on('click', function(){
    //           $('html, body').animate({
    //             scrollTop: $('.CollectionMain').offset().top - 100
    //           }, 1000);
    //         })
    //       }, 0);

    //       if(filter.event_type == 'collection'){
    //         location.reload();
    //       }

    //     }
    //   }catch(err){
    //     //console.log(err);
    //   }


    var checkExistInstagram = setInterval(function() {
        var $item = $('.instafeed-lightbox');
        if ($item.length) {
            clearInterval(checkExistInstagram);
            $("#insta-feed").after('<div class="SectionFooter sp"><a href="https://www.instagram.com/kiu.worldparty/" target="_blank" class="Button Button--primary">@kiu.worldparty</a></div>');
        }
    }, 100); // check every 100ms

    // check safari
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('body').addClass('u-safari');
    }
});