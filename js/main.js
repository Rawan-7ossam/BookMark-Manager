var siteName = document.getElementById("siteNameInput");
var websiteUrl = document.getElementById("websiteURLInput");

var siteArr = [];

if(localStorage.getItem("sites") != null){

    siteArr = JSON.parse(localStorage.getItem("sites"));
    displaySite();
}



function submitSite(){

    if(siteName.value == "" |  websiteUrl.value == "" ){
        alert("you should fill the site Name or the website URL")
    }else{
        var site = {
        name: siteName.value ,
        url: websiteUrl.value,
    }

    siteArr.push(site);
    siteName.value = "";
    websiteUrl.value = "";
    localStorage.setItem("sites" , JSON.stringify(siteArr));
    displaySite();
     siteName.classList.remove("valid");
      websiteUrl.classList.remove("valid");
    }
    
    
 
}

function displaySite(){

    var tableRows= "";
    for(var i = 0 ; i < siteArr.length ; i++){
        tableRows += `
            <tbody>
                    <tr>
                        <td>${i+1}</td>
                        <td>${siteArr[i].name}</td>
                        <td>
                            <button class="btn visit-btn text-white" onclick="visitSite(${i})"><i class="fa-solid fa-eye"></i> Visit</button>
                        </td>
                        <td>
                            <button class="btn delete-btn text-white" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button>
                        </td>
                    </tr>
                </tbody>
        `
    }

        document.getElementById("tbody").innerHTML=tableRows;
    
}

function deleteSite(siteIndex){
    siteArr.splice(siteIndex , 1);
    displaySite();
    localStorage.setItem("sites" , JSON.stringify(siteArr));
}


function visitSite(siteIndex){
    var site = siteArr[siteIndex];
    window.open(site.url);
}

function validateSiteName(){
    var regex = /^\w{3,30}$/;
    var myStr = siteName.value;

    if(regex.test(myStr)!=true){
        siteName.classList.add("is-invalid")
         siteName.classList.remove("valid")
        
    }else{
       siteName.classList.remove("is-invalid")
       siteName.classList.add("valid")
        
    }
}

function validateWebsiteURL(){
    var regex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/;
    var myStr = websiteUrl.value;

    if(regex.test(myStr)!=true){
        websiteUrl.classList.add("is-invalid")
        websiteUrl.classList.remove("valid")
        
    }else{
       websiteUrl.classList.remove("is-invalid")
       websiteUrl.classList.add("valid")
        
    }
}