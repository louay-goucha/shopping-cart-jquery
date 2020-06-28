
$(document).ready(function() {
 
    var fadeTime = 300;
     
     
    $('.product-quantity input').change( function() {
      updateQuantity(this);
    });
     
    $('.product-removal button').click( function() {
      removeItem(this);
    });
    $('.like').click( function() {
        $(this).toggleClass('like red ');
      });
     
     
    function recalculateCart()
    {
      var subtotal = 0;
       
      $('.product').each(function () {
        subtotal += parseFloat($(this).children('.product-line-price').text());
      });
       var total=0;
      $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        $('.totals-value').fadeIn(fadeTime);
      });
    }
     
     
    function updateQuantity(quantityInput)
    {
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children('.product-price').text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;
       
      productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });  
    }
     
     
    function removeItem(removeButton)
    {
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }
     
    });
     
    