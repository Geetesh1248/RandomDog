let url="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");

async function getimg(){
    try{
        let res= await axios.get(url);
        return res.data.message;
    }
    catch(e){
        console.log(e);
    }
}

btn.addEventListener("click",async()=>{
    let link = await getimg();
    let img = document.querySelector("img");
    img.setAttribute("src",link);
});