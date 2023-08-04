let SalarioBruto= 0;
let dependentes = 0;
let inss = 0 ;
let irrf = 0 ;
let salarioLiquido = 0 ;
let aliquotaIrrf = 0 ;
let baseCalculo = 0 ;

function calcSl() {
    salarioBruto = document.getElementById('salario-bruto').value ;
    dependentes = document.getElementById('dependentes').value ;
    
    if (salarioBruto <= 1320) {
        inss = salarioBruto * 0.075 ;
    }
    else if (salarioBruto <= 2571.29){
        inss = (salarioBruto - 1320.01) * 0.09 + 99 ;
    }
    else if (salarioBruto <= 3856.94){
        inss = (salarioBruto - 2571.30) * 0.12 + 99 + 112.6161 ;
    }
    else if (salarioBruto <= 7507.49){
        inss = (salarioBruto - 3856.95) * 0.14 + 99 + 112.6161 + 154.278 ;
    }
    else {
        inss = 876.9711 ;
    }
    //inserir o valor do inss na tah com id de "inss"// 
    
 
    baseCalculo = salarioBruto - inss - (189.59 * dependentes);

    if (baseCalculo <= 2112){
        irrf = 0
        aliquotaIrrf = "0%"
    }
    else if(baseCalculo <= 2826.65){
        irrf = baseCalculo * 0.075 - 158.40 ;
        aliquotaIrrf = "7.5%"
    }

    else if (baseCalculo <= 3751.05){
        irrf = baseCalculo * 0.15 - 370.40;
        aliquotaIrrf = "15%"
    }
    else if (baseCalculo <= 4664.68){
        irrf = baseCalculo * 0.225 - 651.73;
        aliquotaIrrf = "22.5%"
    }
    else {
        irrf = baseCalculo * 0.275 - 884.96;
        aliquotaIrrf = "27.5%"
    }

    salarioLiquido = baseCalculo - irrf

    document.getElementById('irrf').innerHTML = "R$ " + irrf.toFixed(2);
    document.getElementById('inss').innerHTML = "R$ " + inss.toFixed(2);
    document.getElementById('salario-liquido').innerHTML = "R$ " + salarioLiquido.toFixed(2);
    document.getElementById('aliquota-irrf').innerHTML = aliquotaIrrf;
}