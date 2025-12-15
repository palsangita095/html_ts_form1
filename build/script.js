"use strict";
// // console.log("Madhumita")
let formList = [];
function handleForm(event) {
    event.preventDefault();
    // console.log(event);
    const form = event.target;
    const name = form.name1.value.trim();
    const email = form.email.value.trim();
    const description = form.description.value.trim();
    const phone = Number(form.phone.value.trim());
    const gender = form.gender.value;
    const check = form.check.checked;
    const profession = form.profession.value.trim();
    const password = form.password.value.trim();
    const formData = {
        name: name,
        email: email,
        description: description,
        password: password,
        gender: gender,
        phone: phone,
        check: check,
        profession: profession
    };
    let isValid = true;
    if (!name) {
        isValid = false;
        alert("name should be valid");
    }
    if (!email) {
        isValid = false;
        alert("email sholud be valid");
    }
    if (!description) {
        isValid = false;
        alert("description should be valid");
    }
    if (!password) {
        isValid = false;
        alert("password should be valid");
    }
    if (!gender) {
        isValid = false;
        alert("gender should be valid");
    }
    if (!phone) {
        isValid = false;
        alert("phone should be valid");
    }
    if (!check) {
        isValid = false;
        alert("check should be valid");
    }
    if (!profession) {
        isValid = false;
        alert("profession should be valid");
    }
    if (!isValid)
        return;
    formList.push(formData);
    console.log(formList);
}
//# sourceMappingURL=script.js.map