export const validate=(name,email,password,isSignIn)=>{
    const isNameValid = name?.length>=3 
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const output= []
    if(isSignIn)
    {
        if (!isEmailValid) output[1]="Email ID is not valid";
    }
    else
    {
        if(!isNameValid)  output[0]="Name is not valid";
        if (!isEmailValid) output[1]="Email ID is not valid";
        if (!isPasswordValid) output[2]="Password should be combination of Capital letter, Small letter, Special character and Number.";
    }
    return output;
}