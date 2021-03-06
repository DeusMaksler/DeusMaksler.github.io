const buttonContainer = document.getElementsByClassName("week-btn-bar")[0]
const timetables = document.getElementsByClassName("timetable-contain")
for (let i = 0; i < timetables.length; i++) {
  let tt = timetables[i];
  let button = document.createElement('button');
  button.classList.add('btn', 'week-btn');
  button.addEventListener('click', () => {
    let hidden = tt.style.display ? tt.style.display === 'none' : true;
    for (let i = 0; i < timetables.length; i++) {
      timetables[i].style.display = 'none'
    }
    if (hidden) tt.style.display = 'block';
  })
  button.innerText = tt.dataset.buttonName;
  buttonContainer.appendChild(button);
}