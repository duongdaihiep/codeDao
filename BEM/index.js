function toast({ title = '', messenger = '', type = '', duration = 0 }) {
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div');
    const icons = {
      success: 'fa-regular fa-circle-check',
      info: 'fa-solid fa-circle-info',
      warn: 'fa-solid fa-triangle-exclamation',
      error: 'fa-solid fa-triangle-exclamation',
    };
    toast.classList.add('toast', `toast--${type}`);
    const delay=(duration/1000).toFixed(2);
    const delay2=1;
    toast.style.animation=`sliderInLeft ease 0.5s, fadeOut linear ${delay2}s ${delay}s forwards`;
    toast.innerHTML = `
      <div class="toast__icon toast__icon--${type}">
        <i class="${icons[type]}"></i>
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">${messenger}</p>
      </div>
      <div class="toast__close">
        <i class="fa-sharp fa-solid fa-xmark"></i>
      </div>
    `;
    main.appendChild(toast);
    // auto remove toast 
    const removeToastId = setTimeout(function(){
      main.removeChild(toast);
    },duration+delay2)
    // remove toast 
    toast.onclick= function(e){
      if (e.target.closest('.toast__close')){
        main.removeChild(toast);
        clearTimeout(removeToastId);
      }
    }
  }
}
function showSuccessToast(){
  toast({
    title: 'Thành công!',
    messenger: 'Bạn đã đăng kí thành công!',
    type: 'success',
    duration: 10000,
  });

}
function showErrorToast(){
  toast({
    title: 'Thất bại!',
    messenger: 'Đăng kí thất bại, vui lòng liên hệ quản trị viên!',
    type: 'error',
    duration: 10000,
  });
}
// toast({
//   title: 'Success',
//   messenger: 'Bạn đã đăng kí thành công',
//   type: 'success',
//   duration: 3000,
// });
