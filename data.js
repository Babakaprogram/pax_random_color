const data=["fleet","delhi","listing","somethink","ordered_list","odding","evening","mobile","airline"];


// document.write("<h2>Hello World!</h2><p>Have a nice day!</p>");


function generateRandomColor()  //this code was copy paste by google
{
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math. random() * maxVal;
    randomNumber = Math. floor(randomNumber);
    randomNumber = randomNumber. toString(16);
    let randColor = randomNumber. padStart(6, 0);
    return `#${randColor. toUpperCase()}`;
}

// below 18-34 line code logic was by myself by trail
let c=0;
data.forEach((e)=>{
    let color='#eeeeee';
    if(c%2!=0)
    {
        color=generateRandomColor();
        document.write(`<ol style="background-color:${color}"><li>${e}</li></ol>`);
    }
    else
    {
        document.write(`<ol ><li>${e}</li></ol>`);
    }
    
    
    // document.write(`<ol style="background-color:${color}"><li>${e}</li></ol>`);
    c++;
})


// console.log("hi");
// for(let i=0;i<data.length;i++)
// {
//     let color=generateRandomColor();
//     console.log(color);
    
//     document.write(`<ol style="background-color:${color}"><li>${e}</li></ol>`);
// }