function validate(){
    if (document.pizzaOrderForm.pizzaSize.selectedIndex == 0){
        alert("Please Select a Size");
        return false;
    }
    if(!(document.pizzaOrderForm.jalopeno.checked)){
        alert("Please add Jalapeno");
        return false;
    }
    if(document.pizzaOrderForm.comments.value == ""){
        alert("Please add Comments");
        return false;
    }
}