let xhr = new XMLHttpRequest();
let url = './news.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
    let news = xhr.response.news;
    let newsDiv = document.getElementById('news');

    news.forEach((notice) => {
        let noticeDiv = document.createElement('div')
        noticeDiv.classList.add('notice')

        let title = document.createElement('h2')
        title.textContent = notice.title

        let content = document.createElement('p')
        content.textContent = notice.content

        noticeDiv.appendChild(title)
        noticeDiv.appendChild(content)
        newsDiv.appendChild(noticeDiv)
    })
}
xhr.send()