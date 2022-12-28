var qualified_link = document.querySelector('.qualifications');
var home_link = document.querySelector('.home');
var projects_link = document.querySelector('.projects');
var contact_link = document.querySelector('.contact');

/*****************************************************************************************/
var home_container = document.querySelector('.home_container');
var qualification_container = document.querySelector('.qualification_container');
var projects_container = document.querySelector('.projects_container');
var contact_container = document.querySelector('.contact_container');

/*****************************************************************************************/

qualified_link.addEventListener('click',function(){
    home_container.style.display = 'none';
    qualification_container.style.display = 'block';
    projects_container.style.display='none';
    contact_container.style.display='none';
});

home_link.addEventListener('click',function(){
    home_container.style.display = 'block';
    qualification_container.style.display = 'none';
    projects_container.style.display='none';
    contact_container.style.display='none';
});

projects_link.addEventListener('click',function(){
    home_container.style.display = 'none';
    qualification_container.style.display = 'none';
    projects_container.style.display='block';
    contact_container.style.display='none';
});

contact_link.addEventListener('click',function(){
    home_container.style.display = 'none';
    qualification_container.style.display = 'none';
    projects_container.style.display='none';
    contact_container.style.display='block';
});