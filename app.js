$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 50);
});

// contact section
$('#form').submit(function(e){
    e.preventDefault();

     const nameInput = $('#name').val();
     const emailInput = $('#email').val();

     if(nameInput && emailInput){
        //  remove alert
        clearALert();
        //  create alert
        const p = document.createElement('p');
        // add class
        p.className = 'alert';
        // append text
        p.appendChild(document.createTextNode(`Thank you ${nameInput} for reaching out to us, we will get back to you as soon as possible.`))
        // get parent
        const searchContainer = document.querySelector('.searchContainer');
        // search box
        const search = document.querySelector('.search');
        // insert text
        searchContainer.insertBefore(p,search);
     }else{
         alert('Please fill in all the required fields');
     }
    //  clear input fields after submit
     $('#name').val('');
     $('#email').val('');

     setTimeout(()=>{
         clearALert();
     },4000);
});
// end of contact section
function clearALert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
        currentAlert.remove();
    }
}
const productItems = document.querySelector('.productItems');

function displayProducts(products){
    productItems.innerHTML = "";
    products.forEach((product)=>{
        productItems.innerHTML += `
        <div class="col-md-3">
        <div class="photo">
        <img
        src="${product.imgSrc}"
        class="card-img-top img-fluid"
        alt="..."
    />
        </div>
        <div class="footer">
            <p><a class="waves-effect waves-light btn" href="#" style="color: black;">${product.profession}</a><a href="tel:+254782089111"><button class="btn btn-primary" style="height: 30px; float: right; margin-top: 10px;" type="button">Contact</button></a>
            </p>
            <p class="txt3"style="color: black;"><i class="far fa-clock"></i>${product.qualifications} <a style="float: right;">${product.location}</a></p>  
        </div>
    </div>




                
        `
    })
}



            displayProducts(products);
           $('#location').on('change',function(){

                var selectedLocation = this.value;
                
                if(selectedLocation == 1){
                    var location = products.filter(product => product.location == 'Malindi Central');
                }else if(selectedLocation == 2){
                    var location = products.filter(product => product.location == 'Malindi South');
                }else if(selectedLocation == 3){
                    var location = products.filter(product => product.location == 'Malindi North');
                }else if(selectedLocation == 4){
                    var location = products.filter(product => product.location == 'Watamu');
                }else if(selectedLocation == 5){
                    var location = products.filter(product => product.location == 'Kilifi');
                }else if(selectedLocation == 6){
                    var location = products.filter(product => product.location == 'Chakama');
                }else if(selectedLocation == 7){
                    var location = products.filter(product => product.location == 'Langobaya');
                }else if(selectedLocation == 8){
                    var location = products.filter(product => product.location == 'Gede');
                }
                displayProducts(location);
            })
            $('#profession').on('change',function(){

                var selectedProfession = this.value;
                
                if(selectedProfession == 1){
                    var profession = products.filter(product => product.profession == 'Ready Title');
                }else if(selectedProfession == 2){
                    var profession = products.filter(product => product.profession == 'No Title');
                }
                displayProducts(profession);
            })
            
            
            $('#exampleModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget) // Button that triggered the modal
                var recipient = button.data('whatever') // Extract info from data-* attributes
                // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
                // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
                var modal = $(this)
                modal.find('.modal-title').text('New message to ' + recipient)
                modal.find('.modal-body input').val(recipient)
              })
              
