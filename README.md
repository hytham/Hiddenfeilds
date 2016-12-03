# Hiddenfeilds
A simple Types script/java scrip code that will preveint any automated spmware navigate and submit a request

# How it works
the code will loop throw any form group and append the a hidden div that have a text feild at the end, when the content of this feild is changed
it will deactivate the submit

# How to use it
please view the sample index.html for directions , at the buttom of the file befor the closeing body,
paste the folloing lines
window.onload=function()
{
    var x=new hiddenfeild();
           
    document.getElementById('firstname').value="test";
}

