export const validate = (data, type) => {

    const errors = [];

    if (type === "signup") {

        if (!data.name.trim()) {
            errors.name = "!نام خود را وارد کنید";
        } else {
            delete errors.name;
        }

        if (!data.email) {
            errors.email = "!ایمیل خود را وارد کنید";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "ایمیل وارد شده نامعتبر است";
        } else {
            delete errors.email;
        }

        if (!data.password) {
            errors.password = "!رمز عبور خود را وارد کنید";
        } else if (data.password.length < 6) {
            errors.password = "!رمز عبور شما باید حداقل شش حرف باشد";
        } else {
            delete errors.password;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "!رمز عبور خود را تایید کنید"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "!رمز های عبور با هم تطابق ندارند"
        } else {
            delete errors.confirmPassword;
        }

    }

    if (type === "login") {

        if (!data.name.trim()) {
            errors.name = "!نام خود را وارد کنید";
        } else {
            delete errors.name;
        }

        if (!data.password) {
            errors.password = "!رمز عبور خود را وارد کنید";
        } else if (data.password.length < 6) {
            errors.password = "!رمز عبور شما باید حداقل شش حرف باشد";
        } else {
            delete errors.password;
        }

    }
    
    if (type === "newsletter") {

        if (!data.email) {
            errors.email= "!ایمیل خود را وارد کنید"
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "!ایمیل شما نامعتبر است"
        } else {
            delete errors.email;
        }

    }

    if (type === "order") {

        if (!data.fabricType.trim()) {
            errors.fabricType = "!نوع پارچه در زمان و قیمت تاثیرگذار است";
        } else {
            delete errors.fabricType;
        }

        if (!data.typeOfClothing.trim()) {
            errors.typeOfClothing = "!مدل لباس در زمان و قیمت تاثیرگذار است";
        } else {
            delete errors.typeOfClothing;
        }

    }

    
    return errors;
    
}