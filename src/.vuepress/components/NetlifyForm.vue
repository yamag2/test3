<template>
<form name="contact" method="POST"
  data-netlify-honeypot="bot-field"
  data-netlify-recaptcha="true"
  data-netlify="true">
  <fieldset id="sign_up">
    <legend>Ç®ñ‚Ç¢çáÇÌÇπ</legend>
    <div>
      <label for="fullname">Ç®ñºëO</label>
      <input type="text" name="fullname" id="fullname"
       placeholder="Ç®ñºëOÇì¸óÕÇµÇƒÇ≠ÇæÇ≥Ç¢">
    </div>
    <input type="hidden" name="bot-field" />
  </fieldset>
  <div data-netlify-recaptcha="true"></div>
  <div >
    <input type="submit" value="ëóêM">
  </div>
</form>
</template>
