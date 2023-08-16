
const validatePhoneNumber = (value) => {
    const regex = /^01[3-9]\d{8}$/;
    return regex.test(value) || 'Please enter a valid Bangladeshi phone number';
};

export default validatePhoneNumber