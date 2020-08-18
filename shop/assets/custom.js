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

 $(document).ready(function() {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function() {
      $(this).removeClass('coll-back');
      if ($('.accordion_body').is(':visible')) {
        $(".accordion_body").slideUp(300);
        $(".plusminus").text('+');
        $(this).removeClass('coll-back');
        $('.rmv-cls').removeClass('coll-back');
      }

      if($(this).next(".accordion_body").is(':visible')) {
        $(this).next(".accordion_body").slideUp(300);
        $(this).children(".plusminus").text('+');
        $(this).removeClass('coll-back');
      }else {
        $(this).next(".accordion_body").slideDown(300);
        $(this).children(".plusminus").text('');
        $(this).children(".plusminus").append('<hr class="hr-clc">');
        $(this).toggleClass('coll-back');
        $(this).addClass('rmv-cls');
      }
    });
  });
