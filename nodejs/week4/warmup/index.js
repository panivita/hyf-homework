// Create a class called Email. Email has two properties: subject and body.

class Email {
  constructor(subject, body) {
    this.subject = subject;
    this.body = body;
  }
}

// Create a class called SpamDetector. SpamDetector should have one method: isSpam(email)
// This function should return a boolean, indicating if the email is spam or not.

class SpamDetector {
  // Has more than 60% uppercase characters
  checkUpperCaseRatio(email) {
    const regex = /[A-Z]/g;
    const found = email.body.match(regex);
    const percentFound = (found.lenght * 100) / email.body.lenght;
    return percentFound > 60;
  }
  // Contain words like: Viagra, Offer, Free, Business Proposal
  checkSpamWords(email) {
    return /(Viagra|Offer|Free|Business Proposal)(?:$|\W)/i.test(
      email.subject + " " + email.body
    );
  }
  // Subject only contains the string "Hello"
  checkSubjectContainsHello(email) {
    return /hello[\W\d]*$/i.test(email.subject);
  }
  /*
  async checkGramma(email) {
    const response = await fetch("https://grammarbot.p.rapidapi.com/check", {
      method: "POST",
      headers: {
        "x-rapidapi-host": "grammarbot.p.rapidapi.com",
        "x-rapidapi-key": "6490c2a93fmsh09090ff369b463dp1ce112jsn32f9cc986921",
        "content-type": "application/x-www-form-urlencoded",
      },
      body: {
        language: "en-US",
        text: email.subject + " " + email.body,
      },
    });
    console.log(response);
    return !response.isValid;
  }
  async*/ isSpam(
    email
  ) {
    return (
      this.checkUpperCaseRatio(email) ||
      this.checkSpamWords(email) ||
      this.checkSubjectContainsHello(email)
      //||(await this.checkGramma(email))
    );
  }
}

const emailFromOldFriend = new Email(
  "Hello old friend",
  "Long time no see, when should we hang out again??"
);
const emailSubjectHello = new Email(
  "hello!!!123",
  "Long time no see, when should we hang out again??"
);
const emailSpamWords = new Email(
  "viagra",
  "Long time no see, when should we hang out again?? free"
);
const emailUpperCaseRatio = new Email(
  "HELLO DEAR CUSTOMER",
  "LONG TIME NO SEE, WHEN SHOULD WE HANG OUT AGAIN??"
);
const spamDetector = new SpamDetector();
const writeToConsole = (email) => {
  const isSpam = spamDetector.isSpam(email);
  console.log(`Is spam: ${isSpam}`);
};
writeToConsole(emailFromOldFriend); // false
writeToConsole(emailSubjectHello); // true
writeToConsole(emailSpamWords); // true
writeToConsole(emailUpperCaseRatio);
