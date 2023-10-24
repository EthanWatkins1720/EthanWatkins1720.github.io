let toggle = false;

const displayMenu = () => {
    if (toggle == true) {
        document.getElementById("main-nav").style.display = "none";
        toggle = false;
    } else if (toggle == false) {
        document.getElementById("main-nav").style.display = "grid";
        toggle = true;
    }
}

const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if (response.status == 200) {
      result.innerHTML = "Email Successfully Sent";
    } else {
      result.innerHTML = "Sorry, your email was not sent.";
    }
  };

  const getEmailResult = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      return response;
    } catch (error) {
      console.log(error);
      document.getElementById("result").innerHTML =
        "Sorry your email couldn't be sent";
    }
  };

window.onload = () => {
    toggle = false;
    document.getElementById("burger").onclick = displayMenu;
    const submit = document.getElementById("submit-button");
    submit.onclick = showEmailResult;
}