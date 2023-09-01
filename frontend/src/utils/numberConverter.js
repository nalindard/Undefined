const easyNumber = (value) =>
{
    // check if the value is a valid number
    if (isNaN(value))
    {
        return "Invalid input";
    }
    // easyNumber the value to a fixed number of decimal places
    value = Number(value).toFixed(2);
    // check the magnitude of the value and divide by the appropriate power of 10
    if (value >= 1000000000)
    {
        value = (value / 1000000000) + "B";
    }
    else if (value >= 1000000)
    {
        value = (value / 1000000) + "M";
    } else if (value >= 1000)
    {
        value = (value / 1000) + "K";
    }
    return value;
}

export default easyNumber;