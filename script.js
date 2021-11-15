
document.getElementById("enter").addEventListener("click", function() {
    let postData = {};
    postData.url = document.getElementById('userinput').value
    console.log(postData)
    createUrlData(postData);
  });

const getUrlData = () => {
    axios.get('http://localhost:3000/url-shortner/BPTi7Vf')
    .then(response => {
     const users = response.data.data;
     console.log(`GET shortened url`, users);
   })
    .catch(error => console.error(error));
   };

const createUrlData = (postData) => {
    axios.post('http://localhost:3000/url-shortner', postData)
    .then(response => {
    const addedUser = response.data.data.uniqueLink;
    //console.log(`uniqueLink: `, addedUser);
    document.getElementById('completeurl').innerHTML += addedUser

    })
    .catch(error => console.error(error));
   };