(function() {

  var form = document.querySelector(".gform");
  form.addEventListener("focus", function(e) {
    var target = e.target
    if (target.className == "order_field") {
      target.setAttribute("class", "order_field order_field_focused");
      target.parentNode.childNodes[3].setAttribute("class", "label_focus");

    }
  }, true);
  form.addEventListener("blur", function(e) {
    var target = e.target
    if (target.className == "order_field order_field_focused") {
      if (target.value.length == 0) {
        target.setAttribute("class", "order_field");
        target.parentNode.childNodes[3].setAttribute("class", "");
      } else {
        target.setAttribute("class", "order_field");
        target.parentNode.childNodes[3].setAttribute("class", "label_focus");
      }
    }
  }, true);

  function getFormData() {
    var elements = document.getElementById('gform').elements; // all form elements
    var fields = Object.keys(elements).map(function(k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) === pos && item;
    });
    var data = {};
    fields.forEach(function(k) {
      data[k] = elements[k].value;
      if (elements[k].type === 'checkbox') {
        data[k] = elements[k].checked;
        // special case for Edge's html collection
      } else if (elements[k].length) {
        for (var i = 0; i < elements[k].length; i++) {
          if (elements[k].item(i).checked) {
            data[k] = elements[k].item(i).value;
          }
        }
      }
    });
    return data;
  }

  var ajax = document.querySelector('.gform').onsubmit = function ajaxWithUIResponse(e) {
    e.preventDefault();
    var data = getFormData();
    var url = e.target.action; //
    document.querySelector('.form-wrapper').innerHTML = '<div class="loader"></div>'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      document.querySelector('.form-wrapper').innerHTML = '<div id="thankyou_message">Заявка отправлена</div>'
      document.getElementById('thankyou_message').style.display = 'block';
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  };

  function loaded() {
    //console.log('contact form submission handler loaded successfully');
    // bind to the submit event of our form
    var form = document.getElementById('gform');
    form.addEventListener("submit", ajax, false);
  }
  document.addEventListener('DOMContentLoaded', loaded, false);
})();
