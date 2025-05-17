 document.addEventListener('DOMContentLoaded', function() {
    // Основание костра
    const fireBase = document.createElement('div');
    fireBase.className = 'fire-base';
    document.body.appendChild(fireBase);

    // Искры
    let sparkIntensity = 0;
    
    function createSpark() {
      sparkIntensity = Math.min(1, sparkIntensity + 0.05);
      if (Math.random() > (0.2 + sparkIntensity * 0.3)) {
        sparkIntensity = Math.max(0, sparkIntensity - 0.02);
        return;
      }
      sparkIntensity = Math.max(0, sparkIntensity - 0.1);
      
      const spark = document.createElement('div');
      spark.className = 'spark';
      
      const startX = (Math.random() * 150 - 75) + window.innerWidth/2;
      const duration = 1.8 + Math.random() * 1.5;
      const distance = 150 + Math.random() * 200;
      const drift = (Math.random() - 0.5) * 60;
      const hue = 25 + Math.random() * 15;
      const saturation = 80 + Math.random() * 20;
      const lightness = 50 + Math.random() * 20;
      
      spark.style.left = `${startX}px`;
      spark.style.bottom = '30px';
      spark.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      spark.style.boxShadow = `0 0 ${4 + Math.random() * 4}px ${1 + Math.random() * 2}px hsl(${hue}, ${saturation}%, ${lightness}%)`;
      spark.style.setProperty('--distance', `${distance}px`);
      spark.style.setProperty('--drift', drift);
      spark.style.animationDuration = `${duration}s`;
      spark.style.animationName = `spark-fly, sparkle`;
      spark.style.animationDuration = `${duration}s, ${0.5 + Math.random() * 0.7}s`;
      spark.style.animationIterationCount = `1, infinite`;
      
      document.body.appendChild(spark);
      
      setTimeout(() => {
        spark.remove();
      }, duration * 1000);
    }
    
    function sparkInterval() {
      createSpark();
      const baseInterval = 100 + Math.random() * 200;
      const intensityFactor = 1 - sparkIntensity * 0.5;
      setTimeout(sparkInterval, baseInterval * intensityFactor);
    }
    
    sparkInterval();
    
    setInterval(() => {
      sparkIntensity = 0.7 + Math.random() * 0.3;
    }, 5000 + Math.random() * 8000);

    // Вороны
    function createRaven() {
      if (Math.random() > 0.1) return; // Только 10% шанс появления
      
      const raven = document.createElement('div');
      raven.className = 'raven';
      
      const duration = 12 + Math.random() * 15; // 12-27 секунд
      const startY = 50 + Math.random() * (window.innerHeight * 0.6);
      const drift = (Math.random() - 0.5) * 100;
      const size = 0.8 + Math.random() * 0.7; // 0.8-1.5
      
      raven.style.setProperty('--start-y', `${startY}px`);
      raven.style.setProperty('--drift', `${drift}px`);
      raven.style.setProperty('--size', size);
      raven.style.animationDuration = `${duration}s`;
      
      document.body.appendChild(raven);
      
      setTimeout(() => {
        raven.remove();
      }, duration * 1000);
    }
    
    // Запускаем воронов с большими случайными интервалами
    function ravenInterval() {
      createRaven();
      setTimeout(ravenInterval, 8000 + Math.random() * 15000); // 8-23 секунды
    }
    
    ravenInterval();
  });


  // рандомные цитаты дона хуана

  document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
      "Воин принимает ответственность за все свои поступки, даже за самые незначительные.",
      "Путь воина - это нечто бесконечно большее, чем просто жизнь или смерть. Это бесконечное путешествие духа.",
      "Все пути одинаковы: они ведут в никуда. Но один путь имеет сердце, а другой - нет.",
      "Воин действует не потому, что ждет чего-то, а потому, что это соответствует его природе.",
      "Чтобы стать человеком знания, нужно быть воином, а не ноющим ребенком.",
      "Воин не имеет чести, гордости, жалости или страха. Воин безупречен.",
      "Видеть - значит осознавать, что мир не такой, каким мы его представляем.",
      "Обычный человек слишком озабочен любовью к людям, а воин - любовью к бесконечности.",
      "Воин делает все, что в его силах, и затем позволяет духу решать исход.",
      "Смерть - наш вечный спутник. Она всегда слева от нас, на расстоянии вытянутой руки.",
      "Безупречность - это делать все возможное из того, на что ты способен.",
      "Воин выбирает свой путь с открытыми глазами и идет по нему без сожалений.",
      "Человек знания живет действием, а не мыслью о действии.",
      "Свобода - это способность без сожалений покидать все, что у тебя есть.",
      "Воин принимает мир таким, какой он есть, и в то же время борется за то, чтобы изменить его."
    ];
    
    const tonalSection = document.querySelector('.tonal-quote');
    
    function showRandomQuote() {
      // Выбираем случайную цитату
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      // Добавляем цитату в блок
      tonalSection.textContent = randomQuote;
      
      // Показываем с анимацией
      setTimeout(() => {
        tonalSection.classList.add('show');
      }, 100);
      
      // Меняем цитату каждые 15 секунд
      setTimeout(() => {
        tonalSection.classList.remove('show');
        setTimeout(showRandomQuote, 1000);
      }, 15000);
    }
    
    // Первый запуск
    showRandomQuote();
  });




  // Модальное окно
   function openModal() {
    document.getElementById('modal').classList.add('active');
  }
  
  function closeModal() {
    document.getElementById('modal').classList.remove('active');
  }

  // Переключение между формами
document.querySelectorAll('.toggle-form').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const formToShow = this.getAttribute('data-form');
    
    document.querySelectorAll('.tonal-form').forEach(form => {
      form.classList.remove('active');
    });
    
    document.getElementById(formToShow + '-form').classList.add('active');
  });
});

// Анимация отправки формы
document.querySelectorAll('.tonal-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
      // Здесь можно добавить реальную логику отправки
      console.log('Форма отправлена');
    }, 200);
  });
});