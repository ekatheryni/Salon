$(function () {
    $(document).foundation();

    $('.about-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.main-info').offset().top - 90
            },
            'slow');
    });
    $('.services-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.services').offset().top - 90
            },
            'slow');
    });
    $('.photo-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.gallery').offset().top - 90
            },
            'slow');
    });
    $('.contacts-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.contacts').offset().top - 90
            },
            'slow');
    });
    $('.res-click').click(function () {
        $('html,body').animate({
                scrollTop: $('.results').offset().top - 90
            },
            'slow');
    });


    function backendPost(url, data, callback) {
        $.ajax({
            url: API_URL + url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
                callback(null, data);
            },
            error: function () {
                callback(new Error("Ajax Failed"));
            }
        })
    }

    var createOrder = function (order_info, callback) {
        backendPost("/api/create-order/", order_info, callback);
    };

    function orderService(nameI, phoneI, addressI) {
        var order = {
            name: nameI,
            phone: phoneI,
            address: addressI,
            money: totalprice
        };

        API.createOrder(order, function (err, data) {
            if (err) {
                alert("Order failed. Please, try again");
            } else {
                LiqPayCheckout.init({
                    data: data.data,
                    signature: data.signature,
                    embedTo: "#liqpay",
                    mode: "popup" // embed || popup
                }).on("liqpay.callback", function (data) {
                    console.log(data.status);
                    console.log(data);
                }).on("liqpay.ready", function (data) {
                    // ready
                }).on("liqpay.close", function (data) {
                    // close
                });
            }
        });

    }

});