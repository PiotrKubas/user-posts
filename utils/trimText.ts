export const trimText = (title: string, length = 50) => {
    if (length < 5 || title.length < length) {
        return title;
    } else {
        return title.substring(0, length - 1) + '...';
    }
};
