$(function(){
    $("#appointment").submit(function(event){
        var nameInput = $('input#name').val();
        var emailInput = $('input#email').val();
        var addressInput = $('input#address').val();
        var address2Input = $('input#address2').val();
        var cityInput = $('input#city').val();
        var stateInput = $('input#state').val();
        var zipInput = $('input#zip').val();

        $('.name').text(nameInput);
        $('.email').text(emailInput);
        $('.address').text(addressInput);
        $('.address2').text(address2Input);
        $('.city').text(cityInput);
        $('.state').text(stateInput);
        $('.zip').text(zipInput);

        $('#appointment-text').show();
        event.preventDefault();
    });
});

