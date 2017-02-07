window.addEventListener('load', function () {

  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

  // buttons
  var btn_login = document.getElementById('btn-login');
  var btn_logout = document.getElementById('btn-logout');
  var div_body = document.getElementById('div-body');
  // message
  var remote_message = document.getElementById('remote-message');

  btn_login.addEventListener('click', function () {
    lock.show();
  });

  btn_logout.addEventListener('click', function () {
    logout();
  });

  lock.on("authenticated", function (authResult) {
    lock.getProfile(authResult.idToken, function (error, profile) {
      if (error) {
        // Handle error
        return;
      }
      localStorage.setItem('id_token', authResult.idToken);
      // Display user information
      show_profile_info(profile);
      // Display remote api message
      show_api_message();
    });
  });

  //retrieve the profile:
  var retrieve_profile = function () {
    var id_token = localStorage.getItem('id_token');
    if (id_token) {
      lock.getProfile(id_token, function (err, profile) {
        if (err) {
          localStorage.removeItem('id_token');
          return;
        }
        // Display user information
        show_profile_info(profile);
        // Display remote api message
        show_api_message();
      });
    }
  };

  var show_profile_info = function (profile) {
    var avatar = document.getElementById('avatar');
    document.getElementById('nickname').textContent = profile.nickname;
    btn_login.style.display = "none";
    avatar.src = profile.picture;
    avatar.style.display = "block";
    btn_logout.style.display = "block";
    remote_message.style.display = "block";
    div_body.style.display = "block";
  };

  var logout = function () {
    localStorage.removeItem('id_token');
    window.location.href = "/";
  };

  var show_api_message = function (callback) {
    var params = {
      url: API_URL,
      method: 'GET',
      contentType: "application/json; charset=UTF-8"
    };
    return $.ajax(params).then(function (data, textStatus, jqXHR) {
      remote_message.innerText = 'Il codice da usare è: ' + data.code;
    }, function () {
      alert("Houston we have a problem!");
    });
  };

  $.ajaxSetup({
    'beforeSend': function (xhr) {
      if (localStorage.getItem("id_token")) {
        xhr.setRequestHeader("Authorization",
          "Bearer " + localStorage.getItem("id_token"));
      }
    }
  });


  retrieve_profile();

});