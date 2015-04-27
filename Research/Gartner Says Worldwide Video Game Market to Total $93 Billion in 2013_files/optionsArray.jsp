
























   var compositeOptions = '<option value="">Select a Gartner site</option>' +

   
   
                          '<optgroup label="Gartner Websites"></optgroup>' +
                          '<option value="/technology/home.jsp">&nbsp;&nbsp;Gartner.com</option>' +
   

                          '<option value="http://www.gartner.co.jp">&nbsp;&nbsp;Gartner Japan</option>' +
                          '<optgroup label="Other Gartner Websites"></optgroup>' +
                          '<option value="/5_about/news/notices/i508.jsp">&nbsp;&nbsp;Gartner Accessibility Website</option>';

   function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
   }

   function OptionsArray() { this.writeOptionsArray = writeOptionsArray; }

   function writeOptionsArray() {
      document.write(compositeOptions);
   }
 
   function homepageJumper(prodSelect) {
      var selectedProduct = prodSelect.options[prodSelect.selectedIndex].value;
      var gartnercomUrl = 'http://www.gartner.com/?expHomePage=wcw';
      if (selectedProduct != null && "" != selectedProduct) {
         if(isNumber(selectedProduct)) {
            var productSwitchUrl = 'http://my.gartner.com/portal/server.pt?gr=ci&product=' + selectedProduct;
            window.location = productSwitchUrl;
         } else {
            window.location = selectedProduct;
         }
      }
      prodSelect.selectedIndex = 0;
   }