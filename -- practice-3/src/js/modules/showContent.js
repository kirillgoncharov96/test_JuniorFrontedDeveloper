import getResource from "../service/requests";

const showContent = async () => {
    
    const _url = "https://jsonplaceholder.typicode.com/posts",
          tableContent = document.querySelector(".table__data.content"),
          searchInput = document.querySelector(".search"),
          tableBtn = document.querySelectorAll(".table__button");

          
    const data =  await getResource(_url).then(data => data).catch(error => console.log(error));

    const filterData = (input = '') => {
        return data.filter(item => item.body.includes(input) || item.title.includes(input));
    }

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        const activeBtn = [...tableBtn].find((button) => {
            return button.getAttribute('sort');
        });
        const sortAttrib = activeBtn ? activeBtn.getAttribute('sort') : null;
        const direction = sortAttrib === "desc" ? "asc" : "desc";
        const param = activeBtn ? activeBtn.id : null;
        
        if (value.length >= 3) {
            sortData(filterData(value), param, direction)
        } else {
            sortData(data, param, direction)
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
        
        tableContent.innerHTML = "";
        
        data.map((item) => {
           
            const row = onLoadLine(item);
            tableContent.appendChild(row);
        });
    };


    const sortData = (data, param, direction = "asc") => {
        if (!param) {
            createTableContent(data);
        }
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
    
    const resetBtn = (e) => {
        tableBtn.forEach((button) => {
            if (button !== e.target) {
                button.removeAttribute("sort");
            }
        });
    };
    

    tableBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
          resetBtn(e);
          const input = searchInput.value.toLowerCase();
          if (e.target.getAttribute("sort") == "desc") {
            sortData(filterData(input), e.target.id, "desc");
            e.target.setAttribute("sort", "asc");
          } else {
            sortData(filterData(input), e.target.id, "asc");
            e.target.setAttribute("sort", "desc");
          }
        });
    });

    createTableContent(data)

}


export default showContent;