let emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

var numUniqueEmails = function(emails) {
    let domains = emails.map(s=>{return s.substring(s.indexOf('@'))})
    console.log(domains)
    let localNames = emails.map(s=>{return s.includes("+") ? s.substring(0, s.indexOf("+")):s.substring(0, s.indexOf("@"))})
    console.log(localNames)
    let localNames2 = localNames.map(s=>{return s.includes(".")?s.replaceAll(".",""):s})
    let result = []
    for(let i = 0; i < localNames2.length; i++){
        result.push(localNames2[i]+domains[i])
    }
    let result2 = result.filter((item,
        index) => {return result.indexOf(item) === index});
    return result2.length
};


console.log(numUniqueEmails(emails))