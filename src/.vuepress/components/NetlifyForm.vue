<template>
<form name="contact" method="POST"
  data-netlify-honeypot="bot-field"
  data-netlify-recaptcha="true"
  data-netlify="true">
  <fieldset id="sign_up">
    <legend>CONTACT US!</legend>
    <div>
      <label for="fullname">Ur Name</label>
      <input type="text" name="fullname" id="fullname"
       placeholder="Input Ur Name">
    </div>
    <input type="hidden" name="bot-field" />
  </fieldset>
  <div data-netlify-recaptcha="true"></div>
  <div >
    <input type="submit" value="Send">
  </div>
</form>
</template>
