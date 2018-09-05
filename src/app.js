//Event Listening 
class News {
  constructor(name, surname, email) {
      this.name = name;
      this.surname = surname;
      this.email = email;
  }
}
class NewsList {

  addNewsToList(news) {
      const list = document.getElementById('news__list');
      if(list.childNodes.length <= 5){
          const row = document.createElement('div');
          row.innerHTML = `
          <div class="news__inline-list">
              <label for="news-list-name" class="news__inline-label">Name</label>
              <input type="text"  name="news-name" value= "${news.name}" placeholder="Samantha" />
          </div>
  
          <div class="news__inline-list">
              <label for="news-surname" class="news__inline-label">Surname</label>
              <input type="text" name="news-surname" value= "${news.surname}"  placeholder="Smith" />
          </div>
          <div class="news__inline-list">
              <label for="news-email" class="news__inline-label">Email address </label>
              <input type="text"  name="news-email" value= "${news.email}"  placeholder="Samantha@Smith.com"> 
          </div>
          <div class="news__inline-list news__remove" id="delete">
              <i class="fa fa-trash " ></i> Remove</div>`
          list.appendChild(row);
      }
      else{
          alert("We can not add more than 5 friend");
      }
  }

  //Delete News List
  deleteNewsList(target) {
      if (target.id === 'delete') {
          target.parentElement.remove();
      }
  }

  //Clear Input Field
  clearNewsField() {
      document.getElementById('name').value = '';
      document.getElementById('surname').value = '';
      document.getElementById('email').value = '';
  }

}
//Event Listner for Add click
const newsLetter = document.getElementById('news__letter');
if (newsLetter) {
  newsLetter.addEventListener('submit', (e) => {
      //get form value
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;

      //Instantiate News 
      const news = new News(name, surname, email);
      const newsDetail = new NewsList();


      if (name === '' || surname === '' || email === '') {
          alert("Please fill all values");
      }
      else {
          newsDetail.addNewsToList(news);

          newsDetail.clearNewsField();
      }
      e.preventDefault();
  });

}

//Event Listner for delete click
const newsList = document.getElementById('news__list')
newsList.addEventListener('click', (e) => {
  const newsDetail = new NewsList();
  newsDetail.deleteNewsList(e.target);
  e.preventDefault();
});
