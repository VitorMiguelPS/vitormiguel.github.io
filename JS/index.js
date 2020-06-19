//Função responsável pelo hover do menu
function hoverMenu() {
  $('.item_menu').on('mouseenter', function (){
    $(this).find("div").css("display", "block");
  });
  $('.item_menu').on('mouseleave', function (){
    $(this).find("div").css("display", "none");
  });
}
hoverMenu();

//Aplicando slick na prateleira de produtos
function slickShelf(){
  $('.products-female').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
  })
}
slickShelf();

//Função responsável por exibir e esconder botão de compra na prateleira de produtos de acordo com hover
function btnShelf(){
  $('.product-item').on('mouseenter', function(){
    $(this).find("p").css("display", "flex");
  });
  $('.product-item').on('mouseleave', function(){
    $(this).find("p").css("display", "none");
  });
}
btnShelf();

//Estou forçando o botão de comprar ficar com display none ao final do loading da página
function forceBtn(){
  $(window).on("load", function(){
    $('.box-btn-comprar').trigger("mouseleave");
 });
}
forceBtn();
