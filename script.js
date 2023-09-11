(() => {
  window.addEventListener("popstate", function (event) {
    // Log the state data to the console
      const hashUrl = document.location.hash.replace("#", "");
      document.querySelectorAll(".example-project").forEach((el) => {
        el.style.display = "none";
      });
      document.getElementById(hashUrl).style.display = "grid";
  });

})();


// example1
(
  () => {
    const circle = document.getElementById("circle");

    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            console.log(`${item.target} is visible`);
            item.target.style.backgroundColor = 'blue'
          } else {
            console.log(`${item.target} is not visible`);
            item.target.style.backgroundColor = "yellowgreen";
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(circle);
  }
)();


// example2 
(() => {
  const squares = document.querySelectorAll('.square')

  const observer = new IntersectionObserver((squares) => {
    squares.forEach(square => {
      if(square.isIntersecting) {
        square.target.classList.add('square-visible')
      } else {
        square.target.classList.remove("square-visible");
      }
    })
  })

  squares.forEach(square => {
    observer.observe(square)
  })
})();


// infinity scroll
(() => {
  const list = document.querySelector(".infinity-list");

  const loadListItems = (number) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Array(number).fill('A list item'))
      }, 1000);
    }).then(data => {
      const html = data.map(item => `<li> ${item} </li>`)
      list.innerHTML += html.join('');
    })
  }

  loadListItems(10)
  

  const loadElm = document.querySelector(".load-more");
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio <= 0) return;
    loadListItems(10)
  })    
  observer.observe(loadElm)

  document.querySelector('.un-observe').addEventListener('click', () => {
    observer.unobserve(loadElm)
  })

  document.querySelector('.re-observe').addEventListener('click', () => {
    observer.observe(loadElm)
  })

})()
