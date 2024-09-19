
document.getElementById('dice').addEventListener('click', () => {

  const getRandomIntNumberInrange = Math.floor(Math.random() * 6) + 1;
  document.getElementById('noppa').src = "images/" + getRandomIntNumberInrange + '.png';
})

