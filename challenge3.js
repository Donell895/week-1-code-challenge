function deductionRate(grosspay){
    let deduction=0
    if(grosspay<=5999){
      deduction=150 
    }else if (grosspay>=6000 && grosspay<=7999){
        deduction=300

    }else if (grosspay>=8000 && grosspay<=11999){
        deduction=400
    }else if (grosspay>=12000 && grosspay<=14999){
        deduction=500

    }else if (grosspay>=15000 && grosspay<=19999){
        deduction=600
    }  else if (grosspay>=20000 && grosspay<=24999){
        deduction=750
    }else if (grosspay>=25000 && grosspay<=29999){
        deduction=850

    }else if (grosspay>=30000 && grosspay<=34999){
        deduction=900
    }else if (grosspay>=35000&& grosspay<=39999){
        deduction=950

    }else if (grosspay>=40000 && grosspay<=44999){
        deduction=1000
    }else if (grosspay>=45000 && grosspay<=49999){
        deduction=1100

    }else if (grosspay>=50000 && grosspay<=59999){
        deduction=1200
    }  else if (grosspay>=60000 && grosspay<=69999){
        deduction=1300
    }else if (grosspay>=70000 && grosspay<=79999){
        deduction=1400

    }else if (grosspay>=80000 && grosspay<=89999){
        deduction=1500
    }else  if(grosspay>=90000 && grosspay<=99999) {
        deduction=1600
    }else{
        deduction=1700


        return deduction
    }
//NSSF
functionpensionablePay(pay) 
    if (pay<=6000){
        return pay * 0.06
    }else if (pay >=0.001 && pay <=18000){
        return pay *0.06
    }

    }


    

    
    




    
