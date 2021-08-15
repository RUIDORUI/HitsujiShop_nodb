function pageOut() {
    $(window).bind('unload', function() {
        $("body").hide();
        $("body").fadeOut(1000);
    });

}



function pwsVisible(i, t) {
    const togglePassword = document.querySelector(t);
    const inputPassword = document.querySelector(i);
    // const togglePassword = t
    // const inputPassword = i;


    togglePassword.addEventListener('click', function() {
        const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        inputPassword.setAttribute('type', type);
        this.classList.toggle('bi-eye-slash-fill');
    });
}

function checkSignIn(item) {
    $.ajax({
        type: 'POST',
        url: 'http://hitsujishop_test.com:6080/php/checkSignIn.php',
        success: function(data) {

            if (data == 'member') {
                $('.logo').after(` 
                <div class='nav_Menu'>
                    <a href='http://hitsujishop_test.com:6080/hitsuji%20copy.html' class='navMenu_Link' id='goods_Link'>Goods</a>
                    <a href='http://hitsujishop_test.com:6080/account.html' class='navMenu_Link' id='account_Link'>Account</a>
                    <a href='http://hitsujishop_test.com:6080/order.html' class='navMenu_Link' id='order_Link'>Order</a>
                    <a href='http://hitsujishop_test.com:6080/faq.html' class='navMenu_Link' id='faq_Link'>FAQ</a>
                    <a href='###' class='navMenu_Link' id='logout_Link' onclick='logOut()'>Log out</a>
                </div>`);
                selected_Color(item);
            } else if (data == 'administrator') {
                $('.logo').after(` 
                <div class='nav_Menu'>
                    <a href='http://hitsujishop_test.com:6080/hitsuji%20copy.html' class='navMenu_Link' id='goods_Link'>Goods</a>
                    <a href='http://hitsujishop_test.com:6080/account.html' class='navMenu_Link' id='account_Link'>Account</a>
                    <a href='http://hitsujishop_test.com:6080/order_List.html' class='navMenu_Link' id='order_Link'>Order</a>
                    <a href='http://hitsujishop_test.com:6080/faq.html' class='navMenu_Link' id='faq_Link'>FAQ</a>
                    <a href='###' class='navMenu_Link' id='logout_Link' onclick='logOut()'>Log out</a>
                </div>`);
                selected_Color(item);
            } else {
                $('.logo').after(` 
                <div class='nav_Menu'>
                    <a href='http://hitsujishop_test.com:6080/hitsuji%20copy.html' class='navMenu_Link' id='goods_Link'>Goods</a>
                    <a href='###'' class='navMenu_Link' id='signup_Link' onclick='showSignIn()'>SignIn/Up</a>
                    <a href='http://hitsujishop_test.com:6080/faq.html' class='navMenu_Link' id='faq_Link'>FAQ</a>
                </div>`);
                selected_Color(item);
            }
            console.log(data);
        },
        error: function(xhr) {
            alert(xhr.status);
        }

    })


}

function signIn() {
    $('.input_Error').fadeOut('slow');
    $('#signIn_Form').fadeOut('slow', function() {
        $(this).remove();

    });
    $('#signInForm_Wrapper').html(
        `<div id='signIn_Success'>
            <h1>
                Welecome Back<br>
                JOJO
            </h1>
        </div>`);
    $('#signIn_Success').fadeIn(3000, function() {
        $('#signInForm_Wrapper').fadeOut(1000, function() {
            window.location.href = 'http://ajax.edu.tw:6080/index.html';
        });
        console.log('123');
    });
}






function showSignIn() {
    $('.footer').after('<div id="signIn_Section"></div>');


    $('#signIn_Section').html(`
        <div id="signInForm_Wrapper">
            <form action="javascript:signIn()" id="signIn_Form">
                <h1>Sign In</h1>
                <h4>Please Fill Informations Below</h4>

                <div class="signInInput_Wrapper">
                    <div class='input_Error' id="signInName_Error">This Account Name is not exist</div>
                    <div class="signInInput_Field">
                        <h4>Account Name：</h4>
                        <input type="text" name="signIn_Account" id="signIn_Account" placeholder="Enter Your Name">
                        
                    </div>
                    <div class="signInInput_Field">
                        <h4>Password：</h4>
                        <input type="password" name="signIn_Password" id="signIn_Password" placeholder="Enter Your Password">
                        <i class="bi bi-eye-fill" id="toggle_Signin"></i>
                        <div class='input_Error' id="signInPassword_Error">Wrong Password</div>
                    </div>
                    <button class="signIn_Button" id="signin_Submit" type="submit">Confirm</button>
                    <a href="" class="signIn_Button" id="signIn_Forget">Forget Password?</a>
                </div>
                <div class="signIn_Create">
                    <h4>Don't Have a Account? <a href="http://ajax.edu.tw:6080/account.html" id="signIn_CreateLink">Create One.</a></h4>
                </div>

            </form>
        </div>`);
    console.log('signin');

    pwsVisible('#signIn_Password', '#toggle_Signin');
    $('#signInForm_Wrapper').fadeIn('slow');

    $('#signIn_Section').on('click', function(e) {
        if (e.target == this) {
            $(this).fadeOut(500, function() {
                $(this).remove();
            });


        }
    });
}

function logOut() {
    window.location.href = 'http://ajax.edu.tw:6080/index.html';
}

function selected_Color(item) {
    $(`${item}`).addClass('selected');
    console.log('selected');
}

function showSuccessWindow(text, href) {
    $('.footer').after('<div id="signIn_Section"><div id="signInForm_Wrapper"></div></div>');
    $('#signInForm_Wrapper').html(
        `<div id='signIn_Success'>
        <h1>
          ${text}
        </h1>
    </div>`);
    $('#signIn_Success').fadeIn(3000, function() {
        $('#signInForm_Wrapper').fadeIn();
        $('#signInForm_Wrapper').fadeOut(1500, function() {
            window.location.href = `${href}`;
        });
        console.log('123');
    });

}

function cartScroll() {
    $(window).scroll(function() {
        let st = $(window).scrollTop(),
            wh = document.documentElement.scrollHeight;
        let cart = $('.cartWrapper');


        if (st > 0) {
            cart.addClass('cart_Animate');

            window.setTimeout(() => {
                cart.removeClass('cart_Animate');

            }, 1500)

        } else {

        }
    })


}

function show_Min_Cart() {
    $('body').on('click', '.show_Cart', function() {
        $('.footer').after('<div id="signIn_Section"><div id="signInForm_Wrapper"></div></div>');

        let data = `<div class='tableWrapper'>
        <h2 class='section_Title'>Cart List</h2>
        <table class='Cart_Table'>
            <thead>
                <tr class='table_Header_Row'>
                    <th class='table_Header'>Item Name</th>
                    <th class='table_Header'>Item Image</th>
                    <th class='table_Header'>Size</th>
                    <th class='table_Header'>Unit Price</th>
                    <th class='table_Header'>Quantity</th>
                    <th class='table_Header'>Subtotal</th>
                    <th class='table_Header'>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr class='table_Data_Row'>
                    <td class='table_Data'>Petal T-shirts(Black)</td>
                    <td class='table_Data'><img src='./shopImg/Item2/item2_1.jpg' alt=''></td>
                    <td class='table_Data'>M</td>
                    <td class='table_Data'>$790</td>
                    <td class='table_Data'>4</td>
                    <td class='table_Data'>$3160</td>
                    <td class='table_Data'><button class='delete_Cart' data-cartid='cart_00002' data-qty='4'>Delete</button></td>
                </tr>
                <tr class='table_Data_Row'>
                    <td class='table_Data'>Mask</td>
                    <td class='table_Data'><img src='./shopImg/Item7/Item7_1.jpg' alt=''></td>
                    <td class='table_Data'>nan</td>
                    <td class='table_Data'>$200</td>
                    <td class='table_Data'>1</td>
                    <td class='table_Data'>$200</td>
                    <td class='table_Data'><button class='delete_Cart' data-cartid='cart_00009' data-qty='1'>Delete</button></td>
                </tr>
                <tr class='table_Data_Row'>
                    <td class='table_Data'>Ghost Hoddie(Black)</td>
                    <td class='table_Data'><img src='./shopImg/Item4/Item4_1.jpg' alt=''></td>
                    <td class='table_Data'>M</td>
                    <td class='table_Data'>$1790</td>
                    <td class='table_Data'>2</td>
                    <td class='table_Data'>$3580</td>
                    <td class='table_Data'><button class='delete_Cart' data-cartid='cart_00006' data-qty='2'>Delete</button></td>
                </tr>
            </tbody>
    
            <tfoot>
                <tr>
                    <td class='CheckSection' colspan='7'>
                        <div class='total_Title'>Total: $6940</div>
    
                    </td>
    
    
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
    
                    <td>
                        <button class='checkout_Button' onclick='check_Cart_Signin()'>Check Out</button>
                    </td>
                </tr>
    
            </tfoot>
        </table>
    </div>`;
        $('#signInForm_Wrapper').append(data);
        let b = document.querySelector(".checkout_Button");

        b.setAttribute("onclick", "check_Cart_Signin()");


        $('#signInForm_Wrapper').css({
            'width': '80%'
        });
        $('#signInForm_Wrapper').fadeIn();

        $('#signIn_Section').on('click', function(e) {
            if (e.target == this) {
                $(this).fadeOut(500, function() {
                    $(this).remove();
                });


            }

        });




    });





}

function check_Cart_Signin() {
    location.href = 'http://ajax.edu.tw:6080/order_Check.html';
}

function cart_Total(a) {
    let t = parseInt(document.querySelector('#cart_Number').innerHTML);
    t = t + a;
    document.querySelector('#cart_Number').innerHTML = t;
    console.log('total：');

    $('#cart_Number').fadeOut();

    $('#cart_Number').fadeIn("slow");
}