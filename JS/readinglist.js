const opnReading = document.querySelector('#openReading')
const closeReading = document.querySelector('#closeRead');

opnReading.addEventListener('click', () => {
  document.getElementById("readingform").style.display = "block";
})

closeReading.addEventListener('click', () => {
  document.getElementById("readingform").style.display = "none";
})


const readForm = document.querySelector('.read-form');
const readInput = document.querySelector('.refinput');
const readItemsList = document.querySelector('.read-items');

let readingList = [];

readForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  let ref = readInput.value;
  let link = linkInput.value;
  let notes = readnotesInput.value;
  let tag = groupInput.value;
  
  addRef(ref, link, notes, tag);
  

});

function addRef(refName, link, notes, tag) {
  
  if (refName !== '') {

    const ref = {
      id: Date.now(),
      name: refName,
      links: link,
      note: notes,
      group: tag
    };

    readingList.push(ref);
    addToLocalStorage(readingList); 
    refInput.value = '';
  }
}

function renderRefs(readinglist) {
  readItemsList.innerHTML = '';
  readinglist.forEach(function(item) {
    const li = document.createElement('li');

    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);

    li.innerHTML = "<button class='open-button'>Open</button><button class='delete-button'>X</button><p class='items'><strong>" + item.name + "</strong></br>Notes: " + item.note + "</br>Group: " + item.tag + "</p>";
    readItemsList.append(li);
  });

}

function addToLocalStorage(readingList) {
  localStorage.setItem('readingList', JSON.stringify(readingList));

  renderRefs(readingList);
}


function getFromLocalStorage() {
  const reference = localStorage.getItem('readingList');
  
  if (reference) {

    readingList = JSON.parse(reference);
    renderRefs(readingList);
  }
}

function open(id) {
  readingList.forEach(function(item) {
    if (item.id == id) {
   
      window.open(item.links);
      
    }
  });

  addToLocalStorage(readingList);
}

function deleteRef(id) {

  readingList = readingList.filter(function(item) {
    return item.id != id;
  });
  
  
  addToLocalStorage(readingList);
}


getFromLocalStorage(readingList);

readItemsList.addEventListener('click', function(event) {
 
  if (event.target.classList.contains('open-button')) {
   
    open(event.target.parentElement.getAttribute('data-key'))

  }


  if (event.target.classList.contains('delete-button')) {
   
    deleteRef(event.target.parentElement.getAttribute('data-key'));

  }
});