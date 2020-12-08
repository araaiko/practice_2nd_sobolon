// smooth scroll
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function () {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 600;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
});

// Google Form
let form = jQuery('#js-form')

form.submit(function (e) {
    jQuery.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                // 送信に成功したときの処理 
                form.slideUp()
                jQuery('#js-success').slideDown()
            },
            200: function () {
                // 送信に失敗したときの処理 
                form.slideUp()
                jQuery('#js-error').slideDown()
            }
        }
    });
    return false;
});

// Contact
// 入力欄が埋まったら、送信ボタンの色が反転＆有効になる
let submit = jQuery('#js-submit')

jQuery('#js-form input, #js-form textarea').on('change', function () {
    if (
        jQuery('#js-form input[type="text"]').val() !== "" && // inputタグのvalue(値=.val())が空ではない（!== ""）時で、かつ（&&）
        jQuery('#js-form input[type="email"]').val() !== "" &&
        // jQuery('#js-form input[name="entry.1097290105"]:checked').val() !== "" && // 法人個人のラジオボタン
        jQuery('#js-form textarea').val() !== "" &&
        jQuery('#js-form input[name="entry.978374073"]').prop('checked') === true // プライバシーポリシーのチェックボタン
    ) {
        // 全て入力された時
        submit.prop('disabled', false) // ボタン有効に
        submit.addClass('-active')
    } else {
        // 入力されていない時
        submit.prop('disabled', true) // ボタン無効に
        submit.removeClass('-active')
    };
    return false;
});

// jQuery('#js-form input, #js-form textarea').on('change', function () {
//     if (
//         jQuery('#js-form input[type="text"]').val() !== "" && // inputタグのvalue(値=.val())が空ではない（!== ""）時で、かつ（&&）
//         jQuery('#js-form input[type="email"]').val() !== "" &&
//         jQuery('#js-form input[name="entry.1097290105"]').prop('checked') === true && // 法人個人のラジオボタン
//         jQuery('#js-form textarea').val() !== "" &&
//         jQuery('#js-form input[name="entry.978374073"]').prop('checked') === true // プライバシーポリシーのチェックボタン
//     ) {
//         submit.addClass('-active')
//     } else {
//         submit.removeClass('-active')
//     };
//     return false;
// });

