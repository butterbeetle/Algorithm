/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    
    for(const email of emails){
        const [local, domain] = email.split("@");

        let local_str = local.replaceAll(".","")
        const plus_index = local_str.indexOf("+");

        if(plus_index >= 0) local_str = local_str.slice(0,plus_index)

        set.add(`${local_str}@${domain}`)
    }
    
    return set.size
};