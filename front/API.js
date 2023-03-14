

let Mood_Book_Name = localStorage.getItem('MoodBookName')
console.log(Mood_Book_Name)




let query = Mood_Book_Name;







const Search = async (bookname) => {



    let url = "";
    
    url = `https://www.googleapis.com/books/v1/volumes?q=${bookname}&key=AIzaSyCP0ypoLabRbZxyaSERiMJq9RwqZ7idmNQ&maxResults=30`;


    const aa = await fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            


            if (data["items"].length != 0) {

                for (let i = 0; i <= data["items"].length; i++) {
                    try {


                        let Author = data["items"][i]["volumeInfo"]["authors"];
                    
                        let publisheddate = data["items"][i]["volumeInfo"]["publishedDate"];
                        let thumbnail = data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"];
                        

                        let dataInfo = `<div class="author">
                        <img src="${thumbnail}" alt="">
                    <h1 class="Author">${Author}</h1>
                    <p class="pdate">${publisheddate}</p>
                    
                    </div>`

                        
                        
                        document.getElementById("Book_detail").innerHTML += dataInfo;
                        

                        

                    }
                    
                    catch (err) {
                        console.log(err);
                        throw err
                    }

                }

            }
        }
        )
        .catch(err => console.log(err))
        .finally(() => localStorage.clear());

    console.log(aa);
}

Search(query)