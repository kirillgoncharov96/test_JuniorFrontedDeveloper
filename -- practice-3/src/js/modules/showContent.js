import getResource from "../service/requests";


const showContent = async () => {
    
    const _url = "https://jsonplaceholder.typicode.com/posts",
          tableContent = document.querySelector(".table__data.content"),
          searchInput = document.querySelector(".search"),
          tableBtn = document.querySelectorAll(".table__button");

          console.log(tableBtn)
          
    const data =  await getResource(_url).then(data => data).catch(error => console.log(error));
   
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        if (value.length >= 3) {
            createTableContent(
                data.filter(item => item.body.includes(value) || item.title.includes(value))
            );
        } else {
            createTableContent(data);
        }
    });


    const onLoadLine = (obj) => {
        
        const line = document.createElement("tr");
        const keys = Object.keys(obj);
        const values = Object.values(obj);

        keys.map((key) => {
            const cell = document.createElement("td");
            cell.setAttribute("key", values[1]);
            cell.setAttribute("class", key);
            cell.innerHTML = obj[key];
            line.appendChild(cell);
        });

        return line;
    };
    
    const createTableContent = (data) => {
        console.log(data)
        tableContent.innerHTML = "";
        
        data.map((item) => {
           
            const row = onLoadLine(item);
            tableContent.appendChild(row);
        });
    };


    const sortData = (data, param, direction = "asc") => {
        const sortedData =
          direction == "asc"
            ? [...data].sort(function (a, b) {
                if (a[param] < b[param]) {
                    return -1;
                }
                if (a[param] > b[param]) {
                    return 1;
                }
                return 0;
            })
            : [...data].sort(function (a, b) {
                if (a[param] > b[param]) {
                return -1;
                }
                if (a[param] < b[param]) {
                return 1;
                }
                return 0;
            });
    
        createTableContent(sortedData);
    };
    
    const resetBtn = (event) => {
        tableBtn.forEach((button) => {
            if (button !== event.target) {
                button.removeAttribute("sort");
            }
        });
    };
    

    tableBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
          resetBtn(e);
          if (e.target.getAttribute("sort") == "desc") {
            sortData(data, e.target.id, "desc");
            e.target.setAttribute("sort", "asc");
          } else {
            sortData(data, e.target.id, "asc");
            e.target.setAttribute("sort", "desc");
          }
        });
    });

    createTableContent(data)

}


export default showContent;