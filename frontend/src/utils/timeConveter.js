const secondsToTime = (seconds) =>
{
    if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0)
    {
        return '00:00';
    }

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainder = Math.floor(seconds % 60);

    if (hours < 1)
    {
        let output = ('0' + minutes).slice(-2) + ':' + ('0' + remainder).slice(-2);
        return output;
    } else
    {
        let output = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + remainder).slice(-2);
        return output;
    }
}

export default secondsToTime;