/** 00:00:40
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split(".").join("[.]")
};