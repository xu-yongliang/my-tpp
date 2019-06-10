export default async function (path, opt) {

    let url = ' https://easy-mock.com/mock/5cfdc11c4540a473108b2c8c' + path;
    let options = Object.assign({
        method: 'GET',
    }, opt);
    try {
        const response = await fetch(url, options);
        const {data, status} = await response.json();

        if (status === 0) {
            return data;
        } else {
        }
    } catch (e) {

    }

}