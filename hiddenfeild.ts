class hiddenfeildi{
    // The main constructor
    // The main Constructor that will craete the text feilds and 
    // bind the on change event to it
   constructor(){
				
				for(var i=0;i<document.forms.length;i++)
                {
                    // Get the form  dom object
					var frm=document.forms[i];

                    // create a new div element and hide it
                    var div=document.createElement("div");
                    div.style.display='block';

                    // create a new text feild elemnt
					var v=document.createElement("input")
					v.setAttribute("type","text");
					v.setAttribute("id","firstname");
					v.setAttribute("value","");
                    
                    // Append both elements to the form
                    div.appendChild(v);
					frm.appendChild(div);

                    v.addEventListener("change",function(){
                        console.log("data was changed");
                    });

					
                }

				
			}

}
