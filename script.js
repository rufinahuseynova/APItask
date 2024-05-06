const accessKey="IP3PI5ceG_Frd8CoEn1TIfLlELSeiAekOCD8zFpRq3s"

const formElm=document.querySelector("form");
const srcInput=document.querySelector("#search");
const srcResults=document.querySelector(".results");
const showMore=document.querySelector(".showmore");

let inputData="";
let page=1;
const images=[];
async function searchImages(){
    inputData=srcInput.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;
    const images=[...results]
    console.log({images});
    if(page===1){
        srcResults.innerHTML=""
    }
    results.map((result)=>{
const imageWrapper=document.createElement('div');
imageWrapper.classList.add("result");
const img=document.createElement("img");
img.src=result.urls.small;
img.alt=result.alt_description;
imageWrapper.appendChild(img);
srcResults.append(imageWrapper);

    });
    page++
    if(page>1){
        showMore.style.display="block"
    }
}
formElm.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})
formElm.addEventListener("click",()=>{
    searchImages();
});

showMore.addEventListener("click",()=>{
 searchImages()
})