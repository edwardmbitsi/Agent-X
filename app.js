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
            <p><a class="waves-effect waves-light btn" href="#" style="color: black;">${product.profession}</a><a href="details.html"><button class="btn btn-primary" style="height: 30px; float: right;" type="button">More>></button></a>
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
                    var location = products.filter(product => product.location == 'Runda');
                }else if(selectedLocation == 2){
                    var location = products.filter(product => product.location == 'Karen');
                }else if(selectedLocation == 3){
                    var location = products.filter(product => product.location == 'Kilimani');
                }else if(selectedLocation == 4){
                    var location = products.filter(product => product.location == 'Kiambu Road');
                }else if(selectedLocation == 5){
                    var location = products.filter(product => product.location == 'Westlands');
                }else if(selectedLocation == 6){
                    var location = products.filter(product => product.location == 'Lavington');
                }else if(selectedLocation == 7){
                    var location = products.filter(product => product.location == 'Kitengela');
                }else if(selectedLocation == 8){
                    var location = products.filter(product => product.location == 'Spring Valley');
                }else if(selectedLocation == 9){
                    var location = products.filter(product => product.location == 'Muthaiga');
                }
                displayProducts(location);
            })
            $('#qualifications').on('change',function(){

                var selectedQualifications = this.value;
                
                if(selectedQualifications == 1){
                    var qualifications = products.filter(product => product.qualifications == 'Degree');
                }else if(selectedQualifications == 2){
                    var qualifications = products.filter(product => product.qualifications == 'Diploma');
                }else if(selectedQualifications == 3){
                    var qualifications = products.filter(product => product.qualifications == 'Certificate');
                }
                displayProducts(qualifications);
            })
            $('#profession').on('change',function(){

                var selectedProfession = this.value;
                
                if(selectedProfession == 1){
                    var profession = products.filter(product => product.profession == 'Doctor');
                }else if(selectedProfession == 2){
                    var profession = products.filter(product => product.profession == 'Nurse');
                }else if(selectedProfession == 3){
                    var profession = products.filter(product => product.profession == 'Sales');
                }else if(selectedProfession == 4){
                    var profession  = products.filter(product => product.profession == 'Maid');
                }else if(selectedProfession == 5){
                    var profession = products.filter(product => product.profession == 'Gardener');
                }else if(selectedProfession == 6){
                    var profession = products.filter(product => product.profession == 'Writer');
                }else if(selectedProfession == 7){
                    var profession = products.filter(product => product.profession == 'Artist');
                }else if(selectedProfession == 8){
                    var profession = products.filter(product => product.profession == 'Carpenter');
                }else if(selectedProfession == 9){
                    var profession = products.filter(product => product.profession == 'Driver');
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
              
