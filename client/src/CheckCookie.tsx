function checkCookie(cookie_id: string) {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(cookie_id))
        ?.split('=')[1];
}

export { checkCookie };