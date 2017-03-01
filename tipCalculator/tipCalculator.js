var tipAmt = 0;
var pplSharing = 0;
var billTotalAmt = 0;
var billAmt = 0;


// Calculate Tip Amount
function calculateTip () {
    
    billAmt = $("#billCost").val();
    if( $("#service").val() == $("#outstanding").val()) {
        tipAmt = billAmt * .30;
        billDivide(tipAmt);
    } else if ( $("#service").val() == $("#good").val()) {
        tipAmt = billAmt * .20;
        billDivide(tipAmt);
    } else if ( $("#service").val() == $("#okay").val()) {
        tipAmt = billAmt * .15;
        billDivide(tipAmt);
    } else if ( $("#service").val() == $("#bad").val()) {
        tipAmt = billAmt * .10;
        billDivide(tipAmt);
    } else if ( $("#service").val() == $("#terrible").val()) {
        tipAmt = billAmt * .05;
        billDivide(tipAmt);
    }
}


// Divide Total Bill by Amount of People Sharing
function billDivide(calculateTip){
    pplSharing = $("#peopleSharing").val();

    billTotalPp = billAmt / pplSharing;
    tipAmt = tipAmt / pplSharing;
    billTotalAmt = billTotalPp + tipAmt;

    console.log(tipAmt);
    console.log(billTotalPp);
    console.log(billTotalAmt);

    

// Append HTML String with Variables   

    var templateDisplay = '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center" id="tempDiv">'
    templateDisplay += '<h4>Tip Total</h4>'
    templateDisplay += '<h3>$' + Math.round(100*tipAmt)/100 + '</h3>'
    templateDisplay += '</div>'
    templateDisplay += '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">'
    templateDisplay += '<h4>Bill Total</h4>'
    templateDisplay += '<h3>$'+ Math.round(100*billTotalPp)/100 +'</h3>'
    templateDisplay += '</div>'
    templateDisplay += '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-center">'
    templateDisplay += '<h4>Bill + Tip</h4>'
    templateDisplay += '<h3>$' + Math.round(100*billTotalAmt)/100 + '</h3>'
    templateDisplay += '</div>'

    $('#infoDisplay').html(templateDisplay);
}


// Reset All Fields
function resetFields() {
    location.reload();
}

// Show Tip Amount and Total Bill


$(function(){

    $(".numInputs").on("keypress keyup blur",function (event) {
            //this.value = this.value.replace(/[^0-9\.]/g,'');
    $(this).val($(this).val().replace(/[^0-9\.]/g,''));
            if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

    $("#calculate").on("click", calculateTip);

    $("#reset").on("click", resetFields);
});

