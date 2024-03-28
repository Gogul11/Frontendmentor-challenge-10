const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;


function sign()
{
    const mail = document.getElementById('mail').value;
    if(regex.test(mail)){

        document.getElementById('next').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('span2').innerHTML =  mail;
    }
    else{

        document.getElementById('span1').style.display = 'block';
        document.getElementById('mail').style.borderColor = 'hsl(4, 100%, 67%)';
        document.getElementById('mail').style.backgroundColor = 'hsla(4, 100%, 67%,0.2)';
    }
}

function ignore()
{

    document.getElementById('mail').value = ' ';
    location.reload();

}