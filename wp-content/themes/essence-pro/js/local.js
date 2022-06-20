( function( $ )
{ 
    // alert( $( 'input:radio[name=amountRadio]:checked' ).val() );
    
    // $( 'input:radio[name=amountRadio]' ).click
    // ( 
    //     function()
    //     {
    //         alert( $( 'input:radio[name=amountRadio]:checked' ).val() );
    //     }
    // );

    $( document ).ready(
        function()
        {
            $( "#amount" ).blur
            (
                function()
                {
                    $( "#amount" ).formatCurrency()
                }
            )
        }
    );

    $.validator.addMethod(
        "creditcardexpiration", 
        function( value, element, params )
        {
            var minMonth = new Date().getMonth() + 1;
            var minYear = new Date().getFullYear();
            var month = parseInt( $( params.month ).val(), 10 );
            var year = parseInt( $( params.year ).val(), 10 );
            
            return ( year > minYear || ( year === minYear && month >= minMonth ) );
        }, 
        "Please enter a valid expiration date."
    );
    
    $( document ).ready(
        $( "#donateViaAuthorizeNet" ).validate
        (
            {
                rules:
                {
                    amount:
                    {   
                        required: true,
                        currency: [ "$", false ]
                        //required: "input:radio[name=amountRadio]:checked"
                    },
                    firstName:
                    {
                        required: true
                    },
                    lastName:
                    {
                        required: true
                    },
                    emailAddress:
                    {
                        required: true,
                        email: true
                    },
                    phone:
                    {
                        required: true,
                        phoneUS: true
                    },
                    address1:
                    {
                        required: true
                    },
                    city:
                    {
                        required: true
                    },
                    state:
                    {
                        required: true,
                        stateUS:
                        { 
                            caseSensitive: false,
                            includeTerritories: true,
                            includeMilitary: true
                        }
                    },
                    zip:
                    {
                        required: true,
                        zipcodeUS: true
                    },
                    employer:
                    {
                        required: "#employed:checked"
                    },
                    occupation:
                    {
                        required: "#employed:checked"
                    },
                    cardNumber:
                    {
                        required: true,
                        creditcard: true
                    },
                    expirationMonth:
                    {
                        required: true,
                        creditcardexpiration:
                        {
                            month: "#expirationMonth",
                            year: "#expirationYear"
                        }
                    },
                    CVV2:
                    {
                        required: true,
                        number: true
                    }
                },
                messages:
                {
                    amount:
                    {   
                        required: "Please enter a donation amount.",
                        currency: "Please enter a valid donation amount."
                        //required: "input:radio[name=amountRadio]:checked"
                    },
                    firstName:
                    {
                        required: "Please enter a first name.",
                    },
                    lastName:
                    {
                        required: "Please enter a last name.",
                    },
                    emailAddress:
                    {
                        required: "Please enter an email address.",
                        email: "Please enter a valid email address."
                    },
                    phone:
                    {
                        required: "Please enter a phone number.",
                        phoneUS:  "Please enter a valid phone number."
                    },
                    address1:
                    {
                        required: "Please enter a mailing address."
                    },
                    city:
                    {
                        required: "Please enter a city."    
                    },
                    state:
                    {
                        required: "Please enter a state.",
                        stateUS: "Please enter a valid US state, US territory, or US military post."
                    },
                    zip:
                    {
                        required: "Please enter a ZIP code.",
                        zipcodeUS: "Please enter a valid ZIP code."
                    },
                    employer:
                    {
                        required: "Please enter an employer name."
                    },
                    occupation:
                    {
                        required: "Please enter your occupation title."
                    },
                    cardNumber:
                    {
                        required: "Please enter a credit card number.",
                        creditcard: "Please enter a valid credit card number."
                    },
                    expirationMonth:
                    {
                        required: "Please select a card expiration date."
                    },
                    CVV2:
                    {
                        required: "Please enter a card verification value.",
                        number: "Please enter a valid card verification value."
                    }
                }
            }
        )
    )
    //$( "input[ type |= 'radio'" ).checkboxradio();
}( jQuery ) );