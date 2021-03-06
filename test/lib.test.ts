import { buildCorpus } from '../src/functions/buildCorpus';
import { generateText } from '../src/functions/generateText';

const noChildren = `I hope that our few remaining friends
Give up on trying to save us
I hope we come out with a fail-safe plot
To piss off the dumb few that forgave us
I hope the fences we mended
Fall down beneath their own weight
And I hope we hang on past the last exit
I hope it's already too late
And I hope the junkyard a few blocks from here
Someday burns down
And I hope the rising black smoke carries me far away
And I never come back to this town again
In my life, I hope I lie
And tell everyone you were a good wife
And I hope you die
I hope we both die
I hope I cut myself shaving tomorrow
I hope it bleeds all day long
Our friends say it's darkest before the sun rises
We're pretty sure they're all wrong
I hope it stays dark forever
I hope the worst isn't over
And I hope you blink before I do
And I hope I never get sober
And I hope when you think of me years down the line
You can't find one good thing to say
And I'd hope that if I found the strength to walk out
You'd stay the hell out of my way
I am drowning
There is no sign of land
You are coming down with me
Hand in unlovable hand
And I hope you die
I hope we both die`;

test('Generate text without wordLimit', () => {
  const corpus = buildCorpus(noChildren);
  const text = generateText({
    corpus,
    startingPrefix: 'I hope',
  });

  console.log(text);

  expect(text).toBeTruthy();
  expect(text.split(' ')).toHaveLength(50);
  expect(text.split(' ')[0]).toBe('I');
  expect(text.split(' ')[1]).toBe('hope');
});

test('Generate text with wordLimit', () => {
  const corpus = buildCorpus(noChildren);
  const text = generateText({
    corpus,
    startingPrefix: 'I hope',
    wordLimit: 20,
  });

  console.log(text);

  expect(text).toBeTruthy();
  expect(text.split(' ')).toHaveLength(20);
  expect(text.split(' ')[0]).toBe('I');
  expect(text.split(' ')[1]).toBe('hope');
});
