const wrapper = document.querySelector('.live_wrapper1');
const ProductsData = [
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
];
const cards = ProductsData.map((card) => {
  return `
       <div class="live_card">
            <img src="${card.img}" alt="" class="live_card-img" />
            <div class="live__box">
              <h3>${card.title}</h3>
              <div>
                <p>${card.user}</p>
                <p>
                  Current Bid <br />
                  <b>${card.price}</b>
                </p>
              </div>
            </div>
          </div>
  `;
}).join('');
wrapper.innerHTML = cards;

const ProductsData2 = [
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
  {
    img: '/img/card-1.png',
    title: '3D soft curves',
    user: 'Esther howard',
    price: '0.85',
  },
];

const wrapper2 = document.querySelector('.live_wrapper2');
const cards2 = ProductsData2.map((card) => {
  return `
         <div class="live_card">
              <img src="${card.img}" alt="" class="live_card-img" />
              <div class="live__box">
                <h3>${card.title}</h3>
                <div>
                  <p>${card.user}</p>
                  <p>
                    Current Bid <br />
                    <b>${card.price}</b>
                  </p>
                </div>
              </div>
            </div>
    `;
}).join('');
wrapper2.innerHTML = cards2;

const modal = document.querySelector('.modal');
const openModal = document.querySelector('#open-btn');
const close = document.querySelector('.close');
openModal.onclick = () => {
  modal.classList.add('active');

  document
    .getElementById('telegramForm')
    .addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const token = 'direni_try'; // Замените на ваш токен
      const chat_id = '-4575918553'; // Замените на ваш chat_id
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      // Формируем сообщение
      const message = `Name: ${name}\nPhone: ${phone}`;

      const data = {
        chat_id: chat_id,
        text: message,
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            alert('Message sent!');
          } else {
            alert('Error sending message.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error sending message.');
        });
    });
};
close.onclick = () => {
  modal.classList.remove('active');
};


const theme = document.querySelector('#theme')
const body = document.querySelector('body')
theme.onclick.toggle('dark')