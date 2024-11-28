document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('loanForm');
  
    
    form.addEventListener('submit', function(event) {
      
      event.preventDefault();
  

      cuotasmensuales();
    });
  });

function cuotasmensuales(){


    var m = parseFloat(document.getElementById('amount').value);
    var i = parseFloat(document.getElementById('interst').value);
    var t = parseFloat(document.getElementById('mes').value);

    var x = i/100/t;

    var y = (1+x)**t;

    var z = (m*x*y)/y-1;

    
    
    alert("Usted va a pagar: "+z+" durante: "+t+" meses" );

    const result=  document.getElementById("resultado");

    result.innerHTML = `<p> Monto a pagar mensual: S/. ${z.toFixed(2)} durante ${t} meses.</p>`;
}