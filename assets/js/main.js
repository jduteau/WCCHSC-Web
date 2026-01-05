/**
* Template Name: TheEvent - v4.9.1
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.documentElement.scrollTop = 0;
function scrollToTop() {

  window.scrollTo(0, 0);

}



// Attach the scrollToTop function to the page load event

window.addEventListener('load', scrollToTop);

(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 20
      }
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Gallery Slider
     */
    new Swiper('.gallery-slider', {
      speed: 400,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    });
  
    /**
     * Initiate gallery lightbox 
     */
    const galleryLightbox = GLightbox({
      selector: '.gallery-lightbox'
    });
  
    /**
     * Buy tickets select the ticket type on click
     */
    on('show.bs.modal', '#buy-ticket-modal', function(event) {
      select('#buy-ticket-modal #ticket-type').value = event.relatedTarget.getAttribute('data-ticket-type')
    })
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()
  
  
  function hidemeals(){
    document.getElementById('meals').style.display ='none';
    partMeals_total();
    resetEntry();
  
  }
  
  function showmeals(){
    var pcount1=document.getElementById("No._of_participants").value*100;
    document.getElementById('meals').style.display = 'block';

    document.getElementById("foodNote1").value="";
    document.getElementById("count_message3").innerText=0 + ' / ' + pcount1;

  }
  
  function resetEntry(){
    document.getElementById("fridaySwitch").checked=false;
    document.getElementById("saturdaySwitch").checked=false;
    
    showFridayMeal();
    showSaturdayMeal();
  }
  
  function hidemeals1(){
    document.getElementById('meals1').style.display ='none';
    partMeals_total1();
    resetEntry1();
  
  }
  
  function showmeals1(){
    var pcount2=document.getElementById("No._of_participants1").value*100;
    document.getElementById('meals1').style.display = 'block';
    document.getElementById("foodNote2").value="";
    document.getElementById("count_message4").innerText=0 + ' / ' + pcount2;
  }
  
  function resetEntry1(){
    document.getElementById("fridaySwitch1").checked=false;
    document.getElementById("saturdaySwitch1").checked=false;
    
    showFridayMeal1();
    showSaturdayMeal1();
  } 
  
  //Participant form
  function customer_no(){
  
    var noOfParticipant=document.getElementById("No._of_participants").value;
    
  
    if(noOfParticipant>0)
    {
      document.getElementById('addcustomer').style.display = 'block';
      document.getElementById('formBtnLayout').className = 'd-block';
      document.getElementById('formBtnLayout').style.float= 'right';
      document.getElementById('formBtnLayout').classList.add('my-5');
      document.getElementById('formBtnLayout').classList.add('form-floating');   
  
      
      for(var i=0;i<noOfParticipant;i++)
      {
        var mytable =  document.getElementById("partDetail");  
          
        var txt=i+1;

        var inputDiv=document.createElement("div");
        inputDiv.classList.add("form-floating");
        inputDiv.classList.add("ms-2");
        inputDiv.classList.add("input-container");  
        inputDiv.id="div"+i;
        if(txt>=2){
          inputDiv.classList.add("mt-3");
        }     
    
        var fname = document.createElement("input");       
          
        fname.type = "text"; 
        fname.placeholder="Participant #"+txt;
       // fname.classList.add("pbody_fname");
        fname.classList.add("form-control");
        fname.name="stringArray[]";
        fname.id="name"+i;

        var label=document.createElement("label");

        label.classList.add("form-label");
        label.innerHTML="Participant #"+txt;
        label.htmlFor="stringArray[]";

        var errorIcon=document.createElement("i");
        
        errorIcon.ariaHidden="true";
        errorIcon.classList.add("fa");
        errorIcon.classList.add("fa-exclamation-circle");
        errorIcon.classList.add("error-icon");
        errorIcon.id="error-icon0"+i;
        
        inputDiv.appendChild(fname);
        inputDiv.appendChild(label);
        inputDiv.appendChild(errorIcon);
        mytable.appendChild(inputDiv);  
      }

      document.getElementById("addBtnLayout").style.display="none";
  
      document.getElementById("No._of_participants").setAttribute('readonly', true);
      
    }
    
  }
  
// Execute a function when the user presses enter key on the keyboard

document.getElementById("No._of_participants").addEventListener("keypress", function(event) {

  // If the user presses the "Enter" key on the keyboard

  if (event.key === "Enter") {

    // Cancel the default action, if needed

    event.preventDefault();

    // Trigger the button element with a click

    customer_no();

  }

});

  function showFridayMeal(){
  
    var cb=document.getElementById("fridaySwitch");
    var fridayFood=document.getElementById("fridayFood");
    fridayFood.style.display = cb.checked ? "block" : "none";
  
    if(fridayFood.style.display=="block")
    {
      fridayFood.classList.add("d-flex");
      fridayFood.classList.add("justify-content-center");
      fridayFood.classList.add("align-items-center");
    }else{
      document.getElementById("fri_b").value=0;
      document.getElementById("fri_l").value=0;
      document.getElementById("fri_d").value=0;
  
      fridayFood.classList.remove("d-flex");
      fridayFood.classList.remove("justify-content-center");
      fridayFood.classList.remove("align-items-center");
    }
    
    partMeals_total();
  }
  
  function showSaturdayMeal(){
  
    var cb=document.getElementById("saturdaySwitch");
    var saturdayFood=document.getElementById("saturdayFood");
    saturdayFood.style.display = cb.checked ? "block" : "none";
  
    if(saturdayFood.style.display=="block")
    {
      saturdayFood.classList.add("d-flex");
      saturdayFood.classList.add("justify-content-center");
      saturdayFood.classList.add("align-items-center");
    }else{
      
      document.getElementById("sat_b").value=0;
      document.getElementById("sat_l").value=0;
      
      saturdayFood.classList.remove("d-flex");
      saturdayFood.classList.remove("justify-content-center");
      saturdayFood.classList.remove("align-items-center");
    }
  
    partMeals_total();
  }
  
  function counter_total1(x,y){
    
    if(x=="basic")
    {
          if(y=="plus")
        {
          document.getElementById("tbasic11").value=parseInt(document.getElementById("tbasic11").value)+1;
         
        }else if(y=="minus")
        {
          if(document.getElementById("tbasic11").value!="0"){
            document.getElementById("tbasic11").value=parseInt(document.getElementById("tbasic11").value)-1;
          }
          
        }
  
    }else if(x=="tadd")
    {
          if(y=="plus")
        {
          document.getElementById("cadd1").value=parseInt(document.getElementById("cadd1").value)+1;        
        }
        else if(y=="minus")
        {
          if(document.getElementById("cadd1").value!="0")
          {
            document.getElementById("cadd1").value=parseInt(document.getElementById("cadd1").value)-1;
          }
        }
        
    }
    else if(x=="radd")
    {
          if(y=="plus")
        {
          document.getElementById("cyadd1").value=parseInt(document.getElementById("cyadd1").value)+1;        
        }
        else if(y=="minus")
        {
          if(document.getElementById("cyadd1").value!="0")
          {
            document.getElementById("cyadd1").value=parseInt(document.getElementById("cyadd1").value)-1;        
          }
          
        }
        
    }
    partMeals_total();
    
  
  }
  
  function partMeals(x,y,z){
    
    if(x=="friday")
    {
          if(y=="breakfast")
          {
              if(z=="plus")
            {
              document.getElementById("fri_b").value=parseInt(document.getElementById("fri_b").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("fri_b").value!="0")
              {
                document.getElementById("fri_b").value=parseInt(document.getElementById("fri_b").value)-1;
              }
              
            }
          }else if(y=="lunch")
          {
              if(z=="plus")
            {
              document.getElementById("fri_l").value=parseInt(document.getElementById("fri_l").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("fri_l").value!="0")
              {
                document.getElementById("fri_l").value=parseInt(document.getElementById("fri_l").value)-1;
              }
              
            }
          }else if(y=="dinner")
          {
              if(z=="plus")
            {
              document.getElementById("fri_d").value=parseInt(document.getElementById("fri_d").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("fri_d").value!="0")
              {
                document.getElementById("fri_d").value=parseInt(document.getElementById("fri_d").value)-1;
              }
              
            }
          }
    }else if(x=="saturday")
    {
          if(y=="breakfast")
          {
              if(z=="plus")
            {
              document.getElementById("sat_b").value=parseInt(document.getElementById("sat_b").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("sat_b").value!="0")
              {
                document.getElementById("sat_b").value=parseInt(document.getElementById("sat_b").value)-1;
              }
              
            }
          }else if(y=="lunch")
          {
              if(z=="plus")
            {
              document.getElementById("sat_l").value=parseInt(document.getElementById("sat_l").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("sat_l").value!="0")
              {
                document.getElementById("sat_l").value=parseInt(document.getElementById("sat_l").value)-1;
              }
              
            }
          }
    }
  
    partMeals_total();
  }
  
  function partMeals_total()
  {
    var fri_total=0;
    var sat_total=0;
    var temp;
  
    var basic_total1=parseInt(document.getElementById("tbasic11").value)*100+parseInt(document.getElementById("cadd1").value)*140+parseInt(document.getElementById("cyadd1").value)*50;
    if(document.getElementById("meals").style.display=="block"){
      fri_total=parseInt(document.getElementById("fri_b").value)*14+parseInt(document.getElementById("fri_l").value)*21+parseInt(document.getElementById("fri_d").value)*22;
      sat_total=parseInt(document.getElementById("sat_b").value)*14+parseInt(document.getElementById("sat_l").value)*21;
      temp=fri_total+sat_total+basic_total1;
     
    }else{
      temp=basic_total1;
    }
           
    document.getElementById("gtotal").value="$"+temp+".00";
      
  }
  
  //Participants Validation
  document.getElementById("registrationForm").addEventListener("submit", function(e) {
    
    var modal=document.getElementById("modal-content1");

    let errorCount=0;
  
    let form = document.getElementById("registrationForm");
    
    let errormsg="";
  
    //Error icon
    let errorIcon1=document.getElementById("error-icon1");
    let errorIcon2=document.getElementById("error-icon2");
    let errorIcon3=document.getElementById("error-icon3");

   
    //For email field
    let email=document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!email.value.match(mailformat))
    {
              email.classList.add("error");
              errormsg=errormsg+"\n"+"• Please enter your email";
              errorIcon1.style.display="block";
              errorCount++;
    }else{
      email.classList.remove("error"); 
      errorIcon1.style.display="none";
    }
    
    //For city
    let city=document.getElementById("city");
    var cityformat = /^[a-zA-Z ]+$/;
  
    if(!city.value.match(cityformat))
    {            
              city.classList.add("error");
              errormsg=errormsg+"\n"+"• Please enter your city";
              errorIcon2.style.display="block";
              errorCount++;
    }else{
      city.classList.remove("error"); 
      errorIcon2.style.display="none";
    }
  
      //For contact number
      let contactno=document.getElementById("contactno");
      var contactnoformat = /^\d{10}$/;
    
      if(!contactno.value.match(contactnoformat))
      {            
                contactno.classList.add("error");
                errormsg=errormsg+"\n"+"• Please enter the contact number";
                errorCount++;
                errorIcon3.style.display="block";
                
      }else{
        contactno.classList.remove("error"); 
        errorIcon3.style.display="none";
      }
    
    
    //For registration
    let single=document.getElementById("tbasic11");
    let married=document.getElementById("cadd1");
    let youth=document.getElementById("cyadd1");
  
    if(single.value==0 && married.value==0 && youth.value==0)
    {
      errormsg=errormsg+"\n"+"• Please enter your registration type";
      errorCount++;
    }
  
    //if no error then submit
    if(errorCount>0){
    
      e.preventDefault(); // stop the form from submitting
      
      document.getElementById('errorContainer').style.display="block";
      modal.classList.add("error");
      document.getElementById("errorContainer").scrollIntoView({behavior: 'smooth', block: "center"});
      document.getElementById('registrationForm').classList.add("fadeBackground");
      document.getElementById("errorText").innerHTML="<pre>"+errormsg.bold()+"</pre>";
     
      errorCount=0;
      
      errormsg="";
    }else{
      modal.classList.remove("error");
      form.action="./assets/php/participantsendmail.php";
     // form.submit();
    }
  
  });  
  
  document.getElementById("errorBtn").addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the event from propagating to the parent modal's close button
    document.getElementById('errorContainer').style.display="none";
    document.getElementById('registrationForm').classList.remove("fadeBackground");
    document.getElementById("errorText").innerHTML="";
  });  
  
  function resetRegForm(){
    document.getElementById("registrationForm").reset();
    resetEntry();
    hidemeals();
    document.getElementById('addcustomer').style.display = 'none';
    document.getElementById("addBtnLayout").style.display="block";
    document.getElementById("partDetail").innerHTML="";
  
    document.getElementById("No._of_participants").removeAttribute('readonly');
    document.getElementById('formBtnLayout').style.display = 'none';
  
    document.getElementById("email").classList.remove("error");
    document.getElementById("city").classList.remove("error");
    document.getElementById("contactno").classList.remove("error");
    document.getElementById("modal-content1").classList.remove("error");

    document.getElementById("error-icon1").style.display="none";
    document.getElementById("error-icon2").style.display="none";
    document.getElementById("error-icon3").style.display="none";

    document.getElementById('errorContainer').style.display="none";
    document.getElementById('registrationForm').classList.remove("fadeBackground");
    document.getElementById("errorText").innerHTML="";
  }

  document.getElementById("foodNote1").addEventListener('keypress', function(event){
  
    var pcount1=document.getElementById("No._of_participants").value*100;

    if(document.getElementById("foodNote1").value.length>pcount1)
    {
      event.preventDefault();
    }else{
      var text_length2 = document.getElementById("foodNote1").value.length;
      document.getElementById("count_message3").innerText=text_length2 + ' / ' + pcount1;
    }
    
    
  });

  document.getElementById("email").addEventListener("input", function(event){

    document.getElementById("error-icon1").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("email").addEventListener("propertychange", function(event){

    document.getElementById("error-icon1").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("city").addEventListener("input", function(event){

    document.getElementById("error-icon2").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("city").addEventListener("propertychange", function(event){

    document.getElementById("error-icon2").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("contactno").addEventListener("input", function(event){

    document.getElementById("error-icon3").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("contactno").addEventListener("propertychange", function(event){

    document.getElementById("error-icon3").style.display="none";
    event.target.classList.remove("error");    

  });

  //PARTICIPANT + ACCOMMODATION
  function customer_no1(){
  
    var noOfParticipant=document.getElementById("No._of_participants1").value;
  
  
    if(noOfParticipant>0)
    {
      document.getElementById('addcustomer1').style.display = 'block';
      document.getElementById('formBtnLayout1').className = 'd-block';
      document.getElementById('formBtnLayout1').style.float= 'right';
      document.getElementById('formBtnLayout1').classList.add('my-5');
      document.getElementById('formBtnLayout1').classList.add('form-floating');   
    
     
      for(var i=0;i<noOfParticipant;i++)
      {
        var mytable =  document.getElementById("partDetail1");  
          
        var txt=i+1;
    
        var inputDiv=document.createElement("div");

        inputDiv.classList.add("form-floating");
        inputDiv.classList.add("ms-2");
        inputDiv.classList.add("input-container");  
        inputDiv.id="div"+i;

        if(txt>=2){
          inputDiv.classList.add("mt-3");
        }     
    
        var fname = document.createElement("input");       
       
        fname.type = "text"; 
        fname.placeholder="Participant #"+txt;
       // fname.classList.add("pbody_fname");
        fname.classList.add("form-control");
        fname.name="stringArray[]";
        fname.id="name"+i;

        var label=document.createElement("label");

        label.classList.add("form-label");
        label.innerHTML="Participant #"+txt;
        label.htmlFor="stringArray[]";

        var errorIcon=document.createElement("i");

        errorIcon.ariaHidden="true";
        errorIcon.classList.add("fa");
        errorIcon.classList.add("fa-exclamation-circle");
        errorIcon.classList.add("error-icon");
        errorIcon.id="error-icon00"+i;
     
        inputDiv.appendChild(fname);
        inputDiv.appendChild(label);
        inputDiv.appendChild(errorIcon);
        mytable.appendChild(inputDiv);  

      }
    
      document.getElementById("addBtnLayout1").style.display="none";
    
      document.getElementById("No._of_participants1").setAttribute('readonly', true);
    }
    
  }
  
  // Execute a function when the user presses enter key on the keyboard

  document.getElementById("No._of_participants1").addEventListener("keypress", function(event) {

    // If the user presses the "Enter" key on the keyboard

    if (event.key === "Enter") {

      // Cancel the default action, if needed

      event.preventDefault();

      // Trigger the button element with a click

      customer_no1();

    }

  });

 function showFridayMeal1(){
  
    var cb=document.getElementById("fridaySwitch1");
    var fridayFood=document.getElementById("fridayFood1");
    fridayFood.style.display = cb.checked ? "block" : "none";
  
    if(fridayFood.style.display=="block")
    {
      fridayFood.classList.add("d-flex");
      fridayFood.classList.add("justify-content-center");
      fridayFood.classList.add("align-items-center");
    }else{
      document.getElementById("fri_b1").value=0;
      document.getElementById("fri_l1").value=0;
      document.getElementById("fri_d1").value=0;
  
      fridayFood.classList.remove("d-flex");
      fridayFood.classList.remove("justify-content-center");
      fridayFood.classList.remove("align-items-center");
    }
    
    partMeals_total1();
  }
  
  function showSaturdayMeal1(){
  
    var cb=document.getElementById("saturdaySwitch1");
    var saturdayFood=document.getElementById("saturdayFood1");
    saturdayFood.style.display = cb.checked ? "block" : "none";
  
    if(saturdayFood.style.display=="block")
    {
      saturdayFood.classList.add("d-flex");
      saturdayFood.classList.add("justify-content-center");
      saturdayFood.classList.add("align-items-center");
    }else{
      document.getElementById("sat_b1").value=0;
      document.getElementById("sat_l1").value=0;
      
      saturdayFood.classList.remove("d-flex");
      saturdayFood.classList.remove("justify-content-center");
      saturdayFood.classList.remove("align-items-center");
    }
  
    partMeals_total1();
  }
  
  function counter_total(x,y){
    
    if(x=="basic")
    {
          if(y=="plus")
        {
          document.getElementById("tbasic1").value=parseInt(document.getElementById("tbasic1").value)+1;
         
        }else if(y=="minus")
        {
          if(document.getElementById("tbasic1").value!="0"){
            document.getElementById("tbasic1").value=parseInt(document.getElementById("tbasic1").value)-1;
          }
          
        }
  
    }else if(x=="tadd")
    {
          if(y=="plus")
        {
          document.getElementById("cadd").value=parseInt(document.getElementById("cadd").value)+1;        
        }
        else if(y=="minus")
        {
          if(document.getElementById("cadd").value!="0")
          {
            document.getElementById("cadd").value=parseInt(document.getElementById("cadd").value)-1;
          }
        }
        
    }
    else if(x=="radd")
    {
          if(y=="plus")
        {
          document.getElementById("cyadd").value=parseInt(document.getElementById("cyadd").value)+1;        
        }
        else if(y=="minus")
        {
          if(document.getElementById("cyadd").value!="0")
          {
            document.getElementById("cyadd").value=parseInt(document.getElementById("cyadd").value)-1;        
          }
          
        }
        
    }
    partMeals_total1();
    
  
  }
  
  function partMeals1(x,y,z){
    
    if(x=="friday")
    {
          if(y=="breakfast")
          {
              if(z=="plus")
            {
              document.getElementById("fri_b1").value=parseInt(document.getElementById("fri_b1").value)+1;
              
            }else if(z=="minus")
            {
              if(document.getElementById("fri_b1").value!="0")
              {
                document.getElementById("fri_b1").value=parseInt(document.getElementById("fri_b1").value)-1;
                
              }
              
            }
          }else if(y=="lunch")
          {
              if(z=="plus")
            {
              document.getElementById("fri_l1").value=parseInt(document.getElementById("fri_l1").value)+1;
              
            }else if(z=="minus")
            {
              if(document.getElementById("fri_l1").value!="0")
              {
                document.getElementById("fri_l1").value=parseInt(document.getElementById("fri_l1").value)-1;
                
              }
              
            }
          }else if(y=="dinner")
          {
              if(z=="plus")
            {
              document.getElementById("fri_d1").value=parseInt(document.getElementById("fri_d1").value)+1;
              
            }else if(z=="minus")
            {
              if(document.getElementById("fri_d1").value!="0")
              {
                document.getElementById("fri_d1").value=parseInt(document.getElementById("fri_d1").value)-1;
                
              }
              
            }
          }
    }else if(x=="saturday")
    {
          if(y=="breakfast")
          {
              if(z=="plus")
            {
              document.getElementById("sat_b1").value=parseInt(document.getElementById("sat_b1").value)+1;
              
            }else if(z=="minus")
            {
              if(document.getElementById("sat_b1").value!="0")
              {
                document.getElementById("sat_b1").value=parseInt(document.getElementById("sat_b1").value)-1;
                
              }
              
            }
          }else if(y=="lunch")
          {
              if(z=="plus")
            {
              document.getElementById("sat_l1").value=parseInt(document.getElementById("sat_l1").value)+1;
              
            }else if(z=="minus")
            {
              if(document.getElementById("sat_l1").value!="0")
              {
                document.getElementById("sat_l1").value=parseInt(document.getElementById("sat_l1").value)-1;
                
              }
              
            }
          }
    }
  
    partMeals_total1();
  }
  
  function partMeals_total1()
  {
    
      var fri_total=0;
      var sat_total=0;
      var temp;
  
      var basic_total=parseInt(document.getElementById("tbasic1").value)*100+parseInt(document.getElementById("cadd").value)*140+parseInt(document.getElementById("cyadd").value)*50;
      if(document.getElementById("meals1").style.display=="block"){
        fri_total=parseInt(document.getElementById("fri_b1").value)*14+parseInt(document.getElementById("fri_l1").value)*21+parseInt(document.getElementById("fri_d1").value)*22;
        sat_total=parseInt(document.getElementById("sat_b1").value)*14+parseInt(document.getElementById("sat_l1").value)*21;
        temp=basic_total+fri_total+sat_total;
       
      }else{
        temp=basic_total;
      }
      
      if(document.getElementById("accTotal").value=="")
      {
        document.getElementById("cgtotal1").value="$"+temp+".00";
      }else{
        var value=parseFloat(document.getElementById("accTotal").value);
        let finalValue = temp+value
  
        if(value%10==0){
          
          document.getElementById("cgtotal1").value="$"+finalValue+".00";
        }else{
          document.getElementById("cgtotal1").value="$"+(Math.round((finalValue) * 100) / 100).toFixed(2)
        }
        
      }
      
     
  }
   
  //Participants + Accommodation Validation
  document.getElementById("registrationAccForm").addEventListener("submit", function(e) {
   
    var modal=document.getElementById("modal-content2");

    let errorCount=0;
  
    let form = document.getElementById("registrationAccForm");
    
    let errormsg="";
  
    //Error icon
    let errorIcon4=document.getElementById("error-icon4");
    let errorIcon5=document.getElementById("error-icon5");
    let errorIcon6=document.getElementById("error-icon6");

    //For email field
    let email=document.getElementById("email2");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!email.value.match(mailformat))
    {
              email.classList.add("error");
              errormsg=errormsg+"\n"+"• Please enter your email";
              errorIcon4.style.display="block";
              errorCount++;
    }else{
      email.classList.remove("error");  
      errorIcon4.style.display="none";
    }
    
      //For contact number
      let contactno=document.getElementById("contactno2");
      var contactnoformat = /^\d{10}$/;
    
      if(!contactno.value.match(contactnoformat))
      {            
                contactno.classList.add("error");
                errormsg=errormsg+"\n"+"• Please enter the contact number";
                errorCount++;
                errorIcon6.style.display="block";
                
      }else{
        contactno.classList.remove("error"); 
        errorIcon6.style.display="none";
      }

    //For city
    let city=document.getElementById("city2");
    var cityformat = /^[a-zA-Z ]+$/;
  
    if(!city.value.match(cityformat))
    {            
              city.classList.add("error");
              errormsg=errormsg+"\n"+"• Please enter your city";
              errorIcon5.style.display="block";
              errorCount++;
    }else{
      city.classList.remove("error"); 
      errorIcon5.style.display="none";
    }
  
      //For registration
    let single=document.getElementById("tbasic1");
    let married=document.getElementById("cadd");
    let youth=document.getElementById("cyadd");
  
    if(single.value==0 && married.value==0 && youth.value==0)
    {
      errormsg=errormsg+"\n"+"• Please enter your registration type";
      errorCount++;
    }
  
    //For accommodation
    let acc=document.getElementById("accTotal");
    var accformat = /^\d+\.\d{2}$/;
    var accformat2 = /^\d{1,6}$/;
  
    if(!acc.value.match(accformat) && !acc.value.match(accformat2))
    {            
              acc.classList.add("error");
              errormsg=errormsg+"\n"+"• Please enter the accommodation charge";
              errorIcon5.style.display="block";
              errorCount++;
    }else{
      acc.classList.remove("error"); 
      errorIcon5.style.display="none";
    }
  
    //if no error then submit
    if(errorCount>0){
    
      e.preventDefault(); // stop the form from submitting

      document.getElementById('errorContainer2').style.display="block";
      modal.classList.add("error");
      document.getElementById("errorContainer2").scrollIntoView({behavior: 'smooth', block: "center"});
      document.getElementById('registrationAccForm').classList.add("fadeBackground");
      document.getElementById("errorText2").innerHTML="<pre>"+errormsg.bold()+"</pre>";
      
      errorCount=0;
     
      errormsg="";
    }else{
      modal.classList.remove("error");
      form.action="./assets/php/part+accsendmail.php";
     // form.submit();
    }
  
  });
  
  document.getElementById("errorBtn2").addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the event from propagating to the parent modal's close button
    document.getElementById('errorContainer2').style.display="none";
    document.getElementById('registrationAccForm').classList.remove("fadeBackground");
    document.getElementById("errorText2").innerHTML="";
  });

  function resetRegAccForm(){

    document.getElementById("registrationAccForm").reset();
    resetEntry1();
    hidemeals1();

    document.getElementById('addcustomer1').style.display = 'none';
    document.getElementById("addBtnLayout1").style.display="block";
    document.getElementById("partDetail1").innerHTML="";

    document.getElementById("No._of_participants1").removeAttribute('readonly');
    document.getElementById('formBtnLayout1').style.display = 'none';     

    document.getElementById("email2").classList.remove("error");
    document.getElementById("contactno2").classList.remove("error");
    document.getElementById("city2").classList.remove("error");
    document.getElementById("accTotal").classList.remove("error");
    document.getElementById("modal-content2").classList.remove("error");

    document.getElementById("error-icon4").style.display="none";
    document.getElementById("error-icon5").style.display="none";
    document.getElementById("error-icon6").style.display="none";

    document.getElementById('errorContainer2').style.display="none";
    document.getElementById('registrationAccForm').classList.remove("fadeBackground");
    document.getElementById("errorText2").innerHTML="";

  }

  document.getElementById("foodNote2").addEventListener('keypress', function(event){
    var pcount2=document.getElementById("No._of_participants1").value*100;

    if(document.getElementById("foodNote2").value.length>pcount2)
    {
      event.preventDefault();
    }else{
      var text_length2 = document.getElementById("foodNote2").value.length;
      document.getElementById("count_message4").innerText=text_length2 + ' / ' + pcount2;
    }
  });
  
  document.getElementById("email2").addEventListener("input", function(event){

    document.getElementById("error-icon4").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("email2").addEventListener("propertychange", function(event){

    document.getElementById("error-icon4").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("city2").addEventListener("input", function(event){

    document.getElementById("error-icon5").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("city2").addEventListener("propertychange", function(event){

    document.getElementById("error-icon5").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("contactno2").addEventListener("input", function(event){

    document.getElementById("error-icon6").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("contactno2").addEventListener("propertychange", function(event){

    document.getElementById("error-icon6").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("accTotal").addEventListener("input", function(event){

    document.getElementById("error-icon5").style.display="none";
    event.target.classList.remove("error");    

  });

  document.getElementById("accTotal").addEventListener("propertychange", function(event){

    document.getElementById("error-icon5").style.display="none";
    event.target.classList.remove("error");    

  });

  //Useful Link
  function usefulLink(x){
    if(x=="faq"){
      window.location.href = "/info_&_faq.html#faq";
    }else if(x=="register"){
      window.location.href = "/registration.html#register";
    }else if(x=="reg_container"){
      window.location.href = "/vendors_&_exhibitors.html#registration-container";
    }else if(x=="contactus"){
      window.location.href = "/info_&_faq.html#contactus";
    }else if(x=="venue"){
      window.location.href = "/index.html#venue";
    }else if(x=="schedule"){
      window.location.href = "/index.html#schedule";
    }
  
  }

  //Input change after error
  document.getElementById("email").addEventListener("input", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("email").addEventListener("propertychange", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("city").addEventListener("input", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("city").addEventListener("propertychange", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("email2").addEventListener("input", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("email2").addEventListener("propertychange", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("city2").addEventListener("input", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("city2").addEventListener("propertychange", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("accTotal").addEventListener("input", function(event){
    
    event.target.classList.remove("error");
    
  });

  document.getElementById("accTotal").addEventListener("propertychange", function(event){
    
    event.target.classList.remove("error");
    
  });





  