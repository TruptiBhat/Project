

     
      function validate()
      {
		 var a=document.myForm.text_1.value; 
         var b=document.myForm.key.value; 
		 var x=a.toLowerCase();
		 var y=b.toLowerCase();
		
         if(x == "" )
         {
            alert( "Please provide your text!" );
            document.myForm.text_1.focus() ;
            return false;
         }
         
         if( y == "")
         {
            alert( "Please provide key!" );
            document.myForm.key.focus() ;
            return false;
         }
        
		 
 
           var z=x.split(y).length - 1;
		  alert("The key occurence:"+z );
      
         return( true );
      }
  