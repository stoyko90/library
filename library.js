        let myLibrary = [];
        const table = document.querySelector("table");

        function Book(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;                
        } 

        function addBookToLibrary() {
            if(document.getElementById("read").checked) {
                document.getElementById("read").value = "Yes";                
            }
            else {
                document.getElementById("read").value = "No";
            }
            const book = new Book(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector("#read").value);

            if (document.querySelector("#title").value !== "" && document.querySelector("#author").value !== "" && document.querySelector("#pages").value !== "") {
                myLibrary.push(book);
                printToTable(book);
            }
            Array.from(document.querySelectorAll(".text")).forEach(el => el.value="")
        }      
        
        function printToTable(item) {            
            const tableRow = document.createElement("tr");
            table.appendChild(tableRow);

            const titleC = document.createElement("td");
            tableRow.appendChild(titleC);
            titleC.innerHTML = item.title;

            const authorC = document.createElement("td");
            tableRow.appendChild(authorC);
            authorC.innerHTML = item.author;

            const pagesC = document.createElement("td");
            tableRow.appendChild(pagesC);
            pagesC.innerHTML = item.pages;

            const readC = document.createElement("td");
            tableRow.appendChild(readC);
            readC.innerHTML = item.read; 
            if(readC.innerHTML === "Yes") {
                readC.style.color = "black";
            }           
            else {
                readC.style.color = "red";
            }

            const removeC = document.createElement("td");
            tableRow.appendChild(removeC);
            const rbtn = document.createElement("button");
            removeC.appendChild(rbtn);
            rbtn.innerHTML = "Remove Book";

            const readStatus = document.createElement("td");
            tableRow.appendChild(readStatus);
            const readbtn = document.createElement("button");
            readStatus.appendChild(readbtn);
            readbtn.innerHTML = "Change Read Status";

            rbtn.addEventListener("click", function() {
                rbtn.setAttribute("data-index", myLibrary.indexOf(item));
                let idx = rbtn.getAttribute("data-index");
                myLibrary.splice(idx, 1);
                titleC.remove();
                authorC.remove();
                pagesC.remove();
                readC.remove();
                removeC.remove();
                readStatus.remove();
            });            

            readbtn.addEventListener("click", function(){
                if(item.read === "Yes") {
                    item.read = "No";
                    readC.innerHTML = "No"; 
                    readC.style.color = "red";                   
                }
                else {
                    item.read = "Yes";
                    readC.innerHTML = "Yes";
                    readC.style.color = "black";
                }
            });
                  
        }  
        const button = document.querySelector("#btn");

        button.addEventListener("click", function() {
            if(document.querySelector("#form1").hidden === true) {
                document.querySelector("#form1").hidden = false;
            }            
            else {
                document.querySelector("#form1").hidden = true;
            }
        });
      
        