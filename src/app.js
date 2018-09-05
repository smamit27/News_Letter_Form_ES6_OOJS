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
              <input type="text"  name="news-name" value= "${news.name}" />
          </div>
  
          <div class="news__inline-list">
              <label for="news-surname" class="news__inline-label">Surname</label>
              <input type="text" name="news-surname" value= "${news.surname}" />
          </div>
          <div class="news__inline-list">
              <label for="news-email" class="news__inline-label">Email address </label>
              <input type="text"  name="news-email" value= "${news.email}" /> 
          </div>
          <div class="news__inline-list news__remove" id="delete">
              <i class="fa fa-trash " ></i> Remove</div>`
          list.appendChild(row);
      }
      if(list.childNodes.length >= 5) {
        document.getElementById('news__inline').classList.add("news_hidden");
        document.getElementById('news__hide-message').classList.remove("news_hidden");
        
      }
  }

  //Delete News List
  deleteNewsList(target) {
    const list = document.getElementById('news__list');
    const ListCount = list.childNodes.length;
    if(ListCount <= 5) {
        document.getElementById('news__inline').classList.remove("news_hidden");
        document.getElementById('news__hide-message').classList.add("news_hidden");
    
    } 
    if (target.id === 'delete') {
        target.parentElement.remove();
    }
  }
  //send news details
  sendNewsList(data) {
      let newsListObj = {
          'name': data.name,
          'surname': data.surname,
          'email': data.email
      }
      console.log(JSON.stringify(newsListObj));
  }

  validateEmail() {
    const emailAddress = document.getElementById('email').value;
    if(emailAddress !=='') {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(emailAddress) == false) 
        {
            document.getElementById('news__validate-email').classList.remove("news_hidden"); 
            return false;
        }
        else {
            document.getElementById('news__validate-email').classList.add("news_hidden"); 
        }
        return true;
    }

}
validateName() {
    const name = document.getElementById('name').value;
    const reg =/^[a-zA-Z]+$/;
    if(name !== '') {        
        if (reg.test(name) == false) 
        {
            document.getElementById('news__validate-name').classList.remove("news_hidden");        
            return false;
        }
        else {
            document.getElementById('news__validate-name').classList.add("news_hidden");
        }
        return true;
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
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;
      const news = new News(name, surname, email);
      const newsDetail = new NewsList();
      if (email === '' ) {
        document.getElementById('news__validate-email').classList.remove("news_hidden");
      }
      else {
          newsDetail.addNewsToList(news);
          newsDetail.clearNewsField();
      }
      e.preventDefault();
  });
}

//Event Listner for Send Button
const newsSend = document.getElementById('news__send');
if(newsSend) {
    newsSend.addEventListener('click', (e) => {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const news = new News(name, surname, email);
        const newsDetail = new NewsList();  
        newsDetail.sendNewsList(news);
        newsDetail.clearNewsField();     
        e.preventDefault();
    });

}

//Event Listner for delete click
const newsList = document.getElementById('news__list');
newsList.addEventListener('click', (e) => {
  const newsDetail = new NewsList();
  newsDetail.deleteNewsList(e.target);
  e.preventDefault();
});

//Email Validation 
const newsEmail = document.getElementById('email');
if(newsEmail) {
    newsEmail.addEventListener('blur',(e) =>{
    const newsDetail = new NewsList();
    newsDetail.validateEmail();
    e.preventDefault();
    });
}

//Name Validation 
const newsName = document.getElementById('name');
if(newsName) {
newsName.addEventListener('blur',(e) => {
    const newsDetail = new NewsList();
    newsDetail.validateName();
    e.preventDefault();
    });
}


