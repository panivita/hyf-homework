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
    return found.length / email.body.length > 0.6;
  }
  // Contain words like: Viagra, Offer, Free, Business Proposal
  checkSpamWords(email) {
    return /(Viagra|Offer|Free|Business Proposal)(?:$|\W)/i.test(
      `${email.subject} ${email.body}`
    );
  }
  // Subject only contains the string "Hello"
  checkSubjectContainsHello(email) {
    return /hello[\W\d]*$/i.test(email.subject);
  }
  // Email has exclamation points(?!?!?!)
  checkExclamationPoints(email) {
    return /[\W\d]{3}/g.test(`${email.subject} ${email.body}`);
  }
  isSpam(email) {
    return (
      this.checkUpperCaseRatio(email) ||
      this.checkSpamWords(email) ||
      this.checkSubjectContainsHello(email) ||
      this.checkExclamationPoints(email)
    );
  }
}

const emailFromOldFriend = new Email(
  "Hello old friend",
  "Long time no see, when should we hang out again?"
);
const emailSubjectHello = new Email(
  "hello!!!123",
  "Long time no see, when should we hang out again?"
);
const emailSpamWords = new Email(
  "viagra",
  "Long time no see, when should we hang out again? free"
);
const emailUpperCaseRatio = new Email(
  "Hello Dear Customer!",
  "LONG TIME No See, WHEN SHOULD We HANG Out AGAIN?"
);
const emailExclamationPoints = new Email(
  "Hello Dear Customer!!!",
  "Long time no see, when should we hang out again??!"
);
const spamDetector = new SpamDetector();

const writeToConsole = (email) => {
  const isSpam = spamDetector.isSpam(email);
  console.log(`Is spam: ${isSpam}`);
};

writeToConsole(emailFromOldFriend); // false
writeToConsole(emailSubjectHello); // true
writeToConsole(emailSpamWords); // true
writeToConsole(emailUpperCaseRatio); // true
writeToConsole(emailExclamationPoints); // true
