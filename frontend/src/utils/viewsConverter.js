const easyNumber = (value) =>
{
    if (isNaN(value))
    {
        // return "Invalid input";
        return "";
    }
    // value = Number(value).toFixed(2);
    value = Number(value)
    let letter = ''

    if (value >= 1000000000)
    {
        value = (value / 1000000000)
        letter = "B"
    }
    else if (value >= 1000000)
    {
        value = (value / 1000000)
        letter = "M"
    } else if (value >= 1000)
    {
        value = (value / 1000)
        letter = "K"
    }
    // return value.toFixed(2) + letter;
    return value.toFixed() + letter;
}

export default easyNumber;