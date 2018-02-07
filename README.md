# Blade Runner's Voight Kampff Test!

https://codepen.io/princez/full/WMQYWz/

## The user is interrogated

* This chat bot initiates the conversation and begins a sequence of questions to determine if you are or are not a replicant.
* The questions are pulled from actual questions used in the film.
* Any answer can be given but the interrogation is looking for key words from the film to identify the person as a replicant or not.
* After a limited number of questions a determination is made.

## Understanding the interrogation
* The chat bot is asking questions from the movie and examining responses for keywords that are linked to the responses given in the film.
* If a match to the keyword(s) is made the interrogation proceeds and the match is recorded.
* If a match is not made, depending on the response the chat bot will either continue or offer some commentary before eventually proceeding to the next question, and no match is recorded.
* When the list of questions has been answered the chat bot will present it's conclusion.
* I have also tried to add features to make the chat bot accessible to Assistive Technology, so that if you use the chat bot with a screen reader it will read the chat bot's responses as you proceed through the dialogue.

## The key words and questions:
* Chat bot initiates questioning by giving the reason for starting the test and asks the user if he/she is ready. Here the chat bot is looking for an indication that you would like to smoke by looking for the key word _smoke_ in your reply. This is the first match. Resposnses without the key work will generate a different response and eventually move to the first question.

* Cat Skin Wallet: The chat bot is looking for an indication that you would not accept this present, the key words are _would not_ or _wouldn't accept_. This is only the first half of the question, the user should also continue by adding they would call the police. key words here are some combination of _report_ and _police_.

* Butterfly Jar: The match for this question is some indication that the user will take the child to the doctor and is looking for _to_ followed somewhere by _doctor_.

* A Wasp: The match to this question is that the user would kill the wasp and is looking for the phrase _kill it_.

* If all of these questions are answered correctly the user is identified as a replicant by asking the user "Describe in single words only the good things that come into your mind about... your mother." This is a reference to a scene in the film when the identity of a replicant is revealed

* If the matches have not been made the chat bot criticizes the user for not having seen Blade Runner.

## conclusion
I learned a lot about how useful regular expressions can be. I wish I had had more time to apply more complicated regex searches of the text.

I would also like to have create more general functions to create the dialogue. Each block of question/answer is very similar and I know there are ways I could have been "DRY"er in my code. I also think this would have freed me up to create more questions, and more complicated interactions.

Something I wish I could have accomplished was to find a way to carry on the dialogue without relying so much on if/else statements. This chat has a very linear narrative and it would be interesting to see what other ways outside of if/else I could use to drive a more organic "chat". 
