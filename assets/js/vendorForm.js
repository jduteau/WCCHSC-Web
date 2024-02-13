document.documentElement.scrollTop = 0;

//Vendor registration
function hidemeals0(){
  document.getElementById('meals0').style.display ='none';
  meals_total();
  resetEntry0();
}

function showmeals0(){
  document.getElementById('meals0').style.display = 'block';
  document.getElementById("foodNote3").value="";
  document.getElementById("count_message").innerText=0 + ' / ' + 500;
}

function resetEntry0(){
  document.getElementById("fridaySwitch0").checked=false;
  document.getElementById("saturdaySwitch0").checked=false;
  
  showFridayMeal0();
  showSaturdayMeal0();
}

  function basic_total(x,y){
    
    if(x=="basic")
    {
          if(y=="plus")
        {
          document.getElementById("tbasic").value=parseInt(document.getElementById("tbasic").value)+1;
         
        }else if(y=="minus")
        {
          if(document.getElementById("tbasic").value!="0"){
            document.getElementById("tbasic").value=parseInt(document.getElementById("tbasic").value)-1;
          }
          
        }
  
    }else if(x=="tadd")
    {
          if(y=="plus")
        {
          document.getElementById("tadd").value=parseInt(document.getElementById("tadd").value)+1;
          
        }else if(y=="minus")
        {
          if(document.getElementById("tadd").value!="0")
          {document.getElementById("tadd").value=parseInt(document.getElementById("tadd").value)-1;
        }
      }
    }else if(x=="radd")
      {
          if(y=="plus")
          {
          document.getElementById("radd").value=parseInt(document.getElementById("radd").value)+1;
          }else if(y=="minus")
          {
            if(document.getElementById("radd").value!="0")
            {
              document.getElementById("radd").value=parseInt(document.getElementById("radd").value)-1;
            }
            
          }  
      }   
        meals_total();
      
  
  }
  
  function showFridayMeal0(){
  
    var cb=document.getElementById("fridaySwitch0");
    var fridayFood=document.getElementById("fridayFood0");
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
    
    meals_total();
  }
  
  function showSaturdayMeal0(){
  
    var cb=document.getElementById("saturdaySwitch0");
    var saturdayFood=document.getElementById("saturdayFood0");
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
    meals_total();
  }
  
  function meals(x,y,z){
    
      
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
  
    meals_total();
  }
  
  function meals_total(){
    var fri_total=0;
    var sat_total=0;
    var temp;
    var basic_total=parseInt(document.getElementById("tbasic").value)*150+parseInt(document.getElementById("tadd").value)*40+parseInt(document.getElementById("radd").value)*25;
    
    if(document.getElementById("meals0").style.display=="block"){
      fri_total=parseInt(document.getElementById("fri_b").value)*12+parseInt(document.getElementById("fri_l").value)*18+parseInt(document.getElementById("fri_d").value)*18;
      sat_total=parseInt(document.getElementById("sat_b").value)*12+parseInt(document.getElementById("sat_l").value)*18;
      temp=basic_total+fri_total+sat_total; 
    }else{
      temp=basic_total;
    }
    
    document.getElementById("gtotal").value="$"+temp+".00";
  }
  
  //Vendor Validation
  document.getElementById("vendorForm").addEventListener("submit", function(event) {
    
    var modal=document.getElementById("modal-content3");
    
    let errorCount3=0;
  
    let form3 = document.getElementById("vendorForm");
    
    let errormsg3="";

    //Error icon
    let errorIcon1=document.getElementById("error-icon1");
    let errorIcon2=document.getElementById("error-icon2");
    let errorIcon3=document.getElementById("error-icon3");
    let errorIcon4=document.getElementById("error-icon4");
    
    //For name field
    let name3=document.getElementById("fullname");
    var regName3 = /^[a-zA-Z]+ [a-zA-Z]+$/;
  
    if(!name3.value.match(regName3))
    {
              name3.classList.add("error");              
              errormsg3=errormsg3+"\n"+"• Please enter your full name";
              errorIcon1.style.display="block";
              errorCount3++;
    }else{
      name3.classList.remove("error"); 
      errorIcon1.style.display="none";
    }
  
    //For company
    let company=document.getElementById("company");
    var companyformat = /^[a-zA-Z ]+$/;
  
    if(!company.value.match(companyformat))
    {            
              company.classList.add("error");
              errormsg3=errormsg3+"\n"+"• Please enter your company name";
              errorCount3++;
              errorIcon2.style.display="block";
    }else{
      company.classList.remove("error"); 
      errorIcon2.style.display="none";
    }
  
    //For email
    let email3=document.getElementById("email3");
    var mailformat3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!email3.value.match(mailformat3))
    {
              email3.classList.add("error");
              errormsg3=errormsg3+"\n"+"• Please enter your email";
              errorCount3++;
              errorIcon3.style.display="block";
    }else{
      email3.classList.remove("error"); 
      errorIcon3.style.display="none";
    }
    
    //For contact number
    let contactno=document.getElementById("contactno");
    var contactnoformat = /^\d{10}$/;
  
    if(!contactno.value.match(contactnoformat))
    {            
              contactno.classList.add("error");
              errormsg3=errormsg3+"\n"+"• Please enter the contact number";
              errorCount3++;
              errorIcon4.style.display="block";
              
    }else{
      contactno.classList.remove("error"); 
      errorIcon4.style.display="none";
    }
  
    //For basic purchase
    let basic=document.getElementById("tbasic");
    let addTable=document.getElementById("tadd");
    let adRep=document.getElementById("radd");
  
    if(basic.value==0 && addTable.value==0 && adRep.value==0)
    {
      errormsg3=errormsg3+"\n"+"• Please enter your requirements for <span>stall</span>";
      errorCount3++;
    }
  
    //if no error then submit
    if(errorCount3>0){
      event.preventDefault(); // stop the form from submitting
  
      modal.classList.add("error");
      document.getElementById('errorContainer3').style.display="block";
      // Calculate the offset to center the targetDiv vertically

      document.getElementById("errorContainer3").scrollIntoView({behavior: 'smooth', block: "center"});

    
      document.getElementById('vendorForm').classList.add("fadeBackground");  
      document.getElementById("errorText3").innerHTML="<pre>"+errormsg3.bold()+"</pre>";      
      errorCount3=0;
      
      errormsg3="";
    }else{
      modal.classList.remove("error");
      form3.action="./assets/php/vendorsendmail.php";
     // window.stop; // stop the form from submitting
     // form3.submit();
    }
  
  });
  
  document.getElementById("errorBtn3").addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the event from propagating to the parent modal's close button
    document.getElementById('errorContainer3').style.display="none";
    document.getElementById('vendorForm').classList.remove("fadeBackground");
    document.getElementById("errorText3").innerHTML="";
  });
  
  function resetVendorForm(){
    document.getElementById("vendorForm").reset();
    resetEntry0();
    hidemeals0();
  
    document.getElementById("fullname").classList.remove("error");
    document.getElementById("company").classList.remove("error");
    document.getElementById("email3").classList.remove("error");
    document.getElementById("contactno").classList.remove("error");
    document.getElementById("modal-content3").classList.remove("error");

    document.getElementById("error-icon1").style.display="none";
    document.getElementById("error-icon2").style.display="none";
    document.getElementById("error-icon3").style.display="none";
    document.getElementById("error-icon4").style.display="none";

    document.getElementById('errorContainer3').style.display="none";
    document.getElementById('vendorForm').classList.remove("fadeBackground");
    document.getElementById("errorText3").innerHTML="";
  }

  document.getElementById("foodNote3").addEventListener('keypress', function(event){
        
      if(document.getElementById("foodNote3").value.length>500) 
      {
          event.preventDefault();
        }else{
          var text_length = document.getElementById("foodNote3").value.length;
          document.getElementById("count_message").innerText=text_length + ' / ' + 500;
        }
  });

  //Input change after error
  document.getElementById("fullname").addEventListener("input", function(event){
    document.getElementById("error-icon1").style.display="none";
    event.target.classList.remove("error");
    
  });

  document.getElementById("fullname").addEventListener("propertychange", function(event){
    document.getElementById("error-icon1").style.display="none";
    event.target.classList.remove("error");
    
  });

  document.getElementById("company").addEventListener("input", function(event){
    document.getElementById("error-icon2").style.display="none";
    event.target.classList.remove("error");
    
  });

  document.getElementById("company").addEventListener("propertychange", function(event){
    document.getElementById("error-icon2").style.display="none";
    event.target.classList.remove("error");
    
  });

  document.getElementById("email3").addEventListener("input", function(event){
    document.getElementById("error-icon3").style.display="none";
    event.target.classList.remove("error");
    
  });

  document.getElementById("email3").addEventListener("propertychange", function(event){
    document.getElementById("error-icon3").style.display="none";
    event.target.classList.remove("error");
    
  });

  document.getElementById("contactno").addEventListener("input", function(event){
    document.getElementById("error-icon4").style.display="none";
    event.target.classList.remove("error");
    
  });

  document.getElementById("contactno").addEventListener("propertychange", function(event){
    document.getElementById("error-icon4").style.display="none";
    event.target.classList.remove("error");
    
  });
 
//Vendor + Accommodation registration
 
function hidemeals4(){
  document.getElementById('meals4').style.display ='none';
  meals_total1();
  resetEntry4();
}

function showmeals4(){
  document.getElementById('meals4').style.display = 'block';
  document.getElementById("foodNote4").value="";
  document.getElementById("count_message2").innerText=0 + ' / ' + 500;
}

function resetEntry4(){
  document.getElementById("fridaySwitch1").checked=false;
  document.getElementById("saturdaySwitch1").checked=false;
  
  showFridayMeal1();
  showSaturdayMeal1();
}

  function basic_total1(x,y){    

    if(x=="basic")
    {

          if(y=="plus")
        {
          document.getElementById("tbasic1").value=parseInt(document.getElementById("tbasic1").value)+1;
        }else if(y=="minus")
        {
          if(document.getElementById("tbasic1").value!="0")
          {
            document.getElementById("tbasic1").value=parseInt(document.getElementById("tbasic1").value)-1;
          }
        }

    }else if(x=="tadd")
    {

          if(y=="plus")
        {
          document.getElementById("tadd1").value=parseInt(document.getElementById("tadd1").value)+1;
        }else if(y=="minus")
        {
          if(document.getElementById("tadd1").value!="0")
          {
            document.getElementById("tadd1").value=parseInt(document.getElementById("tadd1").value)-1;
          }
      }

    }else if(x=="radd")
      {

          if(y=="plus")
          {
           document.getElementById("radd1").value=parseInt(document.getElementById("radd1").value)+1;
          }else if(y=="minus")
          {
            if(document.getElementById("radd1").value!="0")
            {
              document.getElementById("radd1").value=parseInt(document.getElementById("radd1").value)-1;
            }
          }  

      }   

        meals_total1();
  }

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

      document.getElementById("fri_b4").value=0;
      document.getElementById("fri_l4").value=0;
      document.getElementById("fri_d4").value=0;
 
      fridayFood.classList.remove("d-flex");
      fridayFood.classList.remove("justify-content-center");
      fridayFood.classList.remove("align-items-center");

    }
   
    meals_total1();

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
     
      document.getElementById("sat_b4").value=0;
      document.getElementById("sat_l4").value=0;
      
      saturdayFood.classList.remove("d-flex");
      saturdayFood.classList.remove("justify-content-center");
      saturdayFood.classList.remove("align-items-center");

    }

    meals_total1();

  }
 
  function meals1(x,y,z){
       
    if(x=="friday")
    {

          if(y=="breakfast")
          {

              if(z=="plus")
            {
              document.getElementById("fri_b4").value=parseInt(document.getElementById("fri_b4").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("fri_b4").value!="0")
              {
                document.getElementById("fri_b4").value=parseInt(document.getElementById("fri_b4").value)-1;
              }
            }

          }else if(y=="lunch")
          {

              if(z=="plus")
            {
              document.getElementById("fri_l4").value=parseInt(document.getElementById("fri_l4").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("fri_l4").value!="0")
              {
                document.getElementById("fri_l4").value=parseInt(document.getElementById("fri_l4").value)-1;
              }          
            }

          }else if(y=="dinner")

          {
              if(z=="plus")
            {
              document.getElementById("fri_d4").value=parseInt(document.getElementById("fri_d4").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("fri_d4").value!="0")
              {
                document.getElementById("fri_d4").value=parseInt(document.getElementById("fri_d4").value)-1;
              }
            }

          }

    }else if(x=="saturday")
    {

          if(y=="breakfast")
          {
              if(z=="plus")
            {
              document.getElementById("sat_b4").value=parseInt(document.getElementById("sat_b4").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("sat_b4").value!="0")
              {
                document.getElementById("sat_b4").value=parseInt(document.getElementById("sat_b4").value)-1;
              }
            }

          }else if(y=="lunch")
          {

              if(z=="plus")
            {
              document.getElementById("sat_l4").value=parseInt(document.getElementById("sat_l4").value)+1;
            }else if(z=="minus")
            {
              if(document.getElementById("sat_l4").value!="0")
              {
                document.getElementById("sat_l4").value=parseInt(document.getElementById("sat_l4").value)-1;
              }
            }
          }

    }

    meals_total1();

  }

  function meals_total1(){

    var fri_total=0;
    var sat_total=0;
    var temp;
    var basic_total=parseInt(document.getElementById("tbasic1").value)*150+parseInt(document.getElementById("tadd1").value)*40+parseInt(document.getElementById("radd1").value)*25;
   
    if(document.getElementById("meals4").style.display=="block"){

      fri_total=parseInt(document.getElementById("fri_b4").value)*12+parseInt(document.getElementById("fri_l4").value)*18+parseInt(document.getElementById("fri_d4").value)*18;
      sat_total=parseInt(document.getElementById("sat_b4").value)*12+parseInt(document.getElementById("sat_l4").value)*18;
      temp=basic_total+fri_total+sat_total; 

    }else{

      temp=basic_total;

    }    

    if(document.getElementById("accTotal1").value=="")
      {
        document.getElementById("gtotal1").value="$"+temp+".00";
      }else{
        var value=parseFloat(document.getElementById("accTotal1").value);

        if(value%10==0){
          document.getElementById("gtotal1").value="$"+(temp+value)+".00";
        }else{
          document.getElementById("gtotal1").value="$"+(Math.round((temp+value) * 100) / 100).toFixed(2)
        }       
      }

  }

  //Vendor + Accommodation Validation

  document.getElementById("vendorAccForm").addEventListener("submit", function(event) {
   
    var modal=document.getElementById("modal-content4");
    let errorCount4=0;
    let form4 = document.getElementById("vendorAccForm");
    let errormsg3="";

    //Error icon

    let errorIcon5=document.getElementById("error-icon5");
    let errorIcon6=document.getElementById("error-icon6");
    let errorIcon7=document.getElementById("error-icon7");
    let errorIcon8=document.getElementById("error-icon8");    
    let errorIcon9=document.getElementById("error-icon9");    

    //For name field

    let name3=document.getElementById("fullname1");
    var regName3 = /^[a-zA-Z]+ [a-zA-Z]+$/;
 
    if(!name3.value.match(regName3))
    {

              name3.classList.add("error");              
              errormsg3=errormsg3+"\n"+"• Please enter your full name";
              errorIcon5.style.display="block";
              errorCount4++;
    }else{

      name3.classList.remove("error"); 
      errorIcon5.style.display="none";

    }  

    //For company

    let company=document.getElementById("company1");
    var companyformat = /^[a-zA-Z ]+$/;
 
    if(!company.value.match(companyformat))
    {            

              company.classList.add("error");
              errormsg3=errormsg3+"\n"+"• Please enter your company name";
              errorCount4++;
              errorIcon6.style.display="block";

    }else{

      company.classList.remove("error"); 
      errorIcon6.style.display="none";

    }

    //For email

    let email3=document.getElementById("email4");
    var mailformat3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email3.value.match(mailformat3))
    {

              email3.classList.add("error");
              errormsg3=errormsg3+"\n"+"• Please enter your email";
              errorCount4++;
              errorIcon7.style.display="block";

    }else{

      email3.classList.remove("error"); 
      errorIcon7.style.display="none";

    }    

    //For contact number

    let contactno=document.getElementById("contactno1");
    var contactnoformat = /^\d{10}$/;

    if(!contactno.value.match(contactnoformat))
    {            

              contactno.classList.add("error");
              errormsg3=errormsg3+"\n"+"• Please enter the contact number";
              errorCount4++;
              errorIcon8.style.display="block";

    }else{

      contactno.classList.remove("error"); 
      errorIcon8.style.display="none";

    } 

    //For basic purchase

    let basic=document.getElementById("tbasic1");
    let addTable=document.getElementById("tadd1");
    let adRep=document.getElementById("radd1");

    if(basic.value==0 && addTable.value==0 && adRep.value==0)
    {
      errormsg3=errormsg3+"\n"+"• Please enter your requirements for <span>stall</span>";
      errorCount4++;

    }

     //For accommodation

     let acc=document.getElementById("accTotal1");
     var accformat = /^\d+\.\d{2}$/;
     var accformat2 = /^\d{1,6}$/;

     if(!acc.value.match(accformat) && !acc.value.match(accformat2))
      {            
                acc.classList.add("error");
                errormsg3=errormsg3+"\n"+"• Please enter the accommodation charge";
                errorIcon9.style.display="block";
                errorCount4++;
      }else{
        acc.classList.remove("error"); 
        errorIcon9.style.display="none";
      }
 
      //if no error then submit

    if(errorCount4>0){

      event.preventDefault(); // stop the form from submitting  

      modal.classList.add("error");

      document.getElementById('errorContainer4').style.display="block";

      // Calculate the offset to center the targetDiv vertically

      document.getElementById("errorContainer4").scrollIntoView({behavior: 'smooth', block: "center"});
      document.getElementById('vendorAccForm').classList.add("fadeBackground");  
      document.getElementById("errorText4").innerHTML="<pre>"+errormsg3.bold()+"</pre>";      

      errorCount4=0;
      errormsg3="";

    }else{

      modal.classList.remove("error");
      form4.action="./assets/php/vendoraccsendmail.php";

     // window.stop; // stop the form from submitting
     // form3.submit();

    }  

  });

  document.getElementById("errorBtn4").addEventListener('click', function (event) {

    event.stopPropagation(); // Stop the event from propagating to the parent modal's close button

    document.getElementById('errorContainer4').style.display="none";
    document.getElementById('vendorAccForm').classList.remove("fadeBackground");
    document.getElementById("errorText4").innerHTML="";

  });

  function resetVendorAccForm(){

    document.getElementById("vendorAccForm").reset();

    resetEntry4();  
    hidemeals4();

    document.getElementById("fullname1").classList.remove("error");
    document.getElementById("company1").classList.remove("error");
    document.getElementById("email4").classList.remove("error");
    document.getElementById("contactno1").classList.remove("error");
    document.getElementById("accTotal1").classList.remove("error");
    document.getElementById("modal-content4").classList.remove("error");

    document.getElementById("error-icon5").style.display="none";
    document.getElementById("error-icon6").style.display="none";
    document.getElementById("error-icon7").style.display="none";
    document.getElementById("error-icon8").style.display="none";
    document.getElementById("error-icon9").style.display="none";

    document.getElementById('errorContainer4').style.display="none";
    document.getElementById('vendorAccForm').classList.remove("fadeBackground");
    document.getElementById("errorText4").innerHTML="";

  }

  document.getElementById("foodNote4").addEventListener('keypress', function(event){

    if(document.getElementById("foodNote4").value.length>500) 
      {
          event.preventDefault();
        }else{
          var text_length = document.getElementById("foodNote4").value.length;
          document.getElementById("count_message2").innerText=text_length + ' / ' + 500;
        }

  });

  //Input change after error

  document.getElementById("fullname1").addEventListener("input", function(event){
    document.getElementById("error-icon5").style.display="none";
    event.target.classList.remove("error");
  });

  document.getElementById("fullname1").addEventListener("propertychange", function(event){
    document.getElementById("error-icon5").style.display="none";
    event.target.classList.remove("error");
  });

  document.getElementById("company1").addEventListener("input", function(event){
    document.getElementById("error-icon6").style.display="none";
    event.target.classList.remove("error");    
  });

  document.getElementById("company1").addEventListener("propertychange", function(event){
    document.getElementById("error-icon6").style.display="none";
    event.target.classList.remove("error");
  });

  document.getElementById("email4").addEventListener("input", function(event){
    document.getElementById("error-icon7").style.display="none";
    event.target.classList.remove("error");
  });

  document.getElementById("email4").addEventListener("propertychange", function(event){
    document.getElementById("error-icon7").style.display="none";
    event.target.classList.remove("error");
  });

  document.getElementById("contactno1").addEventListener("input", function(event){
    document.getElementById("error-icon8").style.display="none";
    event.target.classList.remove("error");
  });

  document.getElementById("contactno1").addEventListener("propertychange", function(event){
    document.getElementById("error-icon8").style.display="none";
    event.target.classList.remove("error");   
  });

  document.getElementById("accTotal1").addEventListener("input", function(event){
    document.getElementById("error-icon9").style.display="none";
    event.target.classList.remove("error");
  });

  document.getElementById("accTotal1").addEventListener("propertychange", function(event){
    document.getElementById("error-icon9").style.display="none";
    event.target.classList.remove("error");   
  });

 
  

  

