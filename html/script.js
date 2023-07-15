const version = '0.1.0';
const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', '<header><img src="../icon128.png"><h1>Spotify Short Cut</h1></header>');
body.insertAdjacentHTML('beforeend', `<footer><small>© 2023 <a href="https://github.com/yowashi-is-fish" target="_blank" rel="noopener noreferrer">YOWASHI</a> All Rights Reserved.</small><p class="slash">/</p><p class="version">Version : ${version}</p></footer>`);

document.addEventListener('DOMContentLoaded', function() {
  const languageButtonsContainer = document.getElementById('languageButtons');
  const langBack = document.getElementById('langBack');
  const list = document.getElementById('list');
  const each = document.getElementById('each');

  languageButtonsContainer.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('languageButton')) {
      const languageCode = target.dataset.languageCode;
      showLanguage(languageCode);
    }
  });

  langBack.addEventListener('click', function() {
    Each();
  });

  const languages = {
    da: document.getElementsByClassName('da')[0],
    de: document.getElementsByClassName('de')[0],
    en: document.getElementsByClassName('en')[0],
    es: document.getElementsByClassName('es')[0],
    fi: document.getElementsByClassName('fi')[0],
    fr: document.getElementsByClassName('fr')[0],
    ga: document.getElementsByClassName('ga')[0],
    hi: document.getElementsByClassName('hi')[0],
    id: document.getElementsByClassName('id')[0],
    it: document.getElementsByClassName('it')[0],
    ja: document.getElementsByClassName('ja')[0],
    mi: document.getElementsByClassName('mi')[0],
    ms: document.getElementsByClassName('ms')[0],
    nb: document.getElementsByClassName('nb')[0],
    nl: document.getElementsByClassName('nl')[0],
    pl: document.getElementsByClassName('pl')[0],
    pt: document.getElementsByClassName('pt')[0],
    sv: document.getElementsByClassName('sv')[0],
    tr: document.getElementsByClassName('tr')[0],
    zh: document.getElementsByClassName('zh')[0]
  };

  function showLanguage(languageCode) {
    list.style.display = 'none';
    each.style.display = 'block';

    for (const language in languages) {
      languages[language].style.display = language === languageCode ? 'block' : 'none';
    }
  }

  function Each() {
    list.style.display = 'block';
    each.style.display = 'none';
  }
});