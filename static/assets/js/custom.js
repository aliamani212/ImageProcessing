/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
!function (n) {
    "use strict";
    n((function () {
    })), n(window).on("load", (function () {
    }))
}(jQuery);

let portfolioModalLabel = $('#portfolioModalLabel'), portfolioModalShortDesc = $('#portfolioModalShortDesc'),
    portfolioModalTitle = $('#portfolioModalTitle'), portfolioModalDesc = $('#portfolioModalDesc'),
    portfolioModalImage = $('#portfolioModalImage');

function portfolioModal(title, short_desc, desc, image) {
    portfolioModalLabel.html(title);
    portfolioModalTitle.html(title);

    portfolioModalShortDesc.html(short_desc);
    portfolioModalDesc.html(desc);

    portfolioModalImage.attr('src', image);
}

const copyCode = () => {
    document.querySelectorAll(".btn_copy input").forEach(btn => {
        btn.addEventListener("click", function () {
            const htmlText = this.getAttribute("data-copy");

            // ساختن یک div موقت برای حذف تگ‌ها
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlText;

            // متن خام بدون تگ
            let plainText = tempDiv.innerText;

            // جایگزین کردن NBSP با اسپیس عادی
            plainText = plainText.replace(/\u00a0/g, " ");

            navigator.clipboard.writeText(plainText).then(() => {
                alert("✅ کپی شد:\n\n" + plainText);
            }).catch(err => {
                console.error("❌ خطا در کپی:", err);
            });
        });
    });
}