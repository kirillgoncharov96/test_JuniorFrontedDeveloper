import getResource from "../service/requests";

const showContent = () => {
    const _url = "https://jsonplaceholder.typicode.com/posts",
          tableContent = document.querySelector(".table__data.content");
    
    getResource(_url)
    .then(res => createTableContent(res))
    .catch(error => console.log(error));

    
    const createTableContent = (response) => {
        response.map(item => {
            const line = document.createElement("tr");
            line.innerHTML = `
            <td class="userId" key='${item.id}'>${item.userId}</td>
            <td class="id" key='${item.id}'>${item.id}</td>
            <td class="title" key='${item.id}'>${item.title}</td>
            <td class="body" key='${item.id}'>${item.body}</td>
            `
            tableContent.appendChild(line);
        })
    };
    
}

export default showContent;