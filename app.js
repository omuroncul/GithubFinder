
import Github from './github.js';
import UI from './ui.js';


const github = new Github();
const ui = new UI();

//! html'den gelenler
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const themeBtn = document.getElementById('theme-btn');
const body = document.querySelector('body');

//! olay izleyicileri
searchButton.addEventListener('click', getInput);

searchInput.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    getInput();
  }
});

themeBtn.addEventListener('click', changeTheme);

//! methodlar
function getInput() {
 
  if (searchInput.value !== '') {
    
    github.getUser(searchInput.value).then((data) => {
      
      if (data.profile.message === 'Not Found') {
        ui.showAlert(
          'Aradığınız Kullanıcı Bulunamadı',
          'alert-danger'
        );
      } else {
        ui.showAlert('Kullanıcı Başarıyla Bulundu', 'alert-success');
        
        ui.showProfile(data.profile);

       
        ui.showRepos(data.repos);
      }
    });

    return;
  }

 
  ui.showAlert('Form alanı boş olamaz', 'alert-info');
}

function changeTheme() {
 
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-bg-dark');

  
  if (body.classList.contains('bg-dark')) {
    themeBtn.innerText = 'Açık Mod';
  } else {
    themeBtn.innerText = 'Koyu Mod';
  }
}