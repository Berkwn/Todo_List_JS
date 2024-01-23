const input=document.getElementById("todoInput")
const btn=document.getElementById("btnOnay")
const contentDiv=document.getElementById("contentdiv")
const inputDiv=document.getElementById('inputDiv')
const body=document.body;


changeTheme=()=>{

    body.classList.toggle('darkmode')

}


let calculate = 0;
btn.addEventListener('click',e);
function e(){

    if(input.value!=""){

        calculate++;
        const add=document.createElement("input")
      
        add.setAttribute("readonly","readonly")
        add.classList.add("input")
        
        add.value= calculate + ")"+ input.value
        add.style.color="black"
        add.innerText= calculate + ")" +input.value
        // add.innerText=input.value
        contentDiv.append(add)

        const deletebutton=document.createElement('div')
        deletebutton.classList.add("deletebutton")
        deletebutton.innerHTML="del"
        deletebutton.style.color="white"
        deletebutton.style.marginLeft="5px"
        deletebutton.style.cursor="pointer"
        contentDiv.append(deletebutton)


        deletebutton.addEventListener("click",e=>{
            calculate--;
            add.remove()
            deletebutton.remove()
            editButton.remove()
        })


        


        const editButton=document.createElement('div')
        editButton.classList.add("editbutton")
        contentDiv.append(editButton)
        editButton.innerText="Edit"
        editButton.style.cursor="pointer"
        editButton.style.margin="2px"


        editButton.addEventListener("click",e=>{

            
            
                add.toggleAttribute("readonly")
            

            
         

            
            
            
        })
        
        input.value=""









      
    }
}




      
    
    
   

    













