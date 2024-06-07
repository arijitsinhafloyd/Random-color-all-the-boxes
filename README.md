# Random-color-all-the-boxes
A small program using Javascript, which color all the boxes randomly generating the color. I have used the Math.random(); functiuon here, which will generate all the ranodm numbers between 0 to 1. and by that we used a formula i.e,
                                var= 0+(Math.random()*255) 
                          suppose, Math.random() gives you 0.5
                          hence,  var= 0+(0.5*255)
                          which is,  var=127.5
      Now, to avoid the decimal I have used Math.ceil() function to the entire var calculation, Math.ceil() rounds off the value 
      to the nearest and closed number
                  Suppose, Math.ceil(4.22);
                  it will give, 5
                  Math.ceil(127.5) = 128

That's how my variable will work, and I have taken three variables which will give three randdom numbers form 0 to 255 and by using getRandomColor() function the `rgb(${var1}, ${var2}, ${var3})` will be returned.
                          
