// let notyf = new Notyf({
//     types: [
//         {
//             type: 'success',
//             background: 'green',
//             duration: 40000000,
//             ripple: true,
//             icon: {
//                 className: 'fas fa-check-circle',
//                 tagName: 'i',
//                 text: ''
//             }
//         },
//         {
//             type: 'error',
//             background: 'red',
//             duration: 40000000,
//             ripple: true,
//             icon: {
//                 className: 'fas fa-times-circle',
//                 tagName: 'i',
//                 text: ''
//             }
//         }
//     ],
//     duration: 3000000,
//     background: 'red',
//     position: {
//         x: 'center',
//         y: 'bottom',
//     }
// });
const notyf = new Notyf();

let ms = document.querySelectorAll("message");
ms.forEach((item) => {
    let messageValue = item.getAttribute("message");
    if (item.getAttribute("type-error") === "error")
        notyf.error({
            message: messageValue,
            className: 'text-bg-danger',
            duration: 3000,
            icon: false,
            dismissible: true,
            position: {
                x: 'center',
                y: 'bottom',
            }
        })
    else
        notyf.success({
            message: messageValue,
            className: 'text-bg-success',
            duration: 3000,
            icon: false,
            dismissible: true,
            position: {
                x: 'center',
                y: 'bottom',
            }
        });

    item.remove();
})
;