

interface MyFormData{
    name: string
    phone: number
    email: string
    description: string
    password: number
    gender: string
    check: boolean
    profession: string
    

}
let formList: MyFormData[] = [];


function handleForm(event: SubmitEvent) : void{
    event.preventDefault();
    // console.log(event);
    const form = event.target as HTMLFormElement
    const name = form.name1.value.trim()
    const email = form.email.value.trim()
    const description = form.description.value.trim()
    const phone = Number(form.phone.value.trim())
    const gender = form.gender.value
    const check = form.check.checked
    const profession = form.profession.value.trim()
    const password = form.password.value.trim()



    const formData: MyFormData = {
        name: name,
        email: email,
        description: description,
        password: password,
        gender: gender,
        phone: phone,
        check: check,
        profession: profession

    }

    formList.push(formData)
    console.log(formList)
    



}




