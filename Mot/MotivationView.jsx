import React from 'react';
import MotivationListItem from './MotivationListItem';

const motivationQuotes = [
  "The First Rule of Fight Club, is that you do not talk about Fight Club.",
  "It is only after we have lost everything that we are free to do anything. ",
  '''You are not your job, you’re not how much money you have in the bank. You are not the car you drive. You’re not the contents of your wallet.''',
  "Only after disaster can we be resurrected.",
  "Believe you can and you're halfway there.",
  "If you don’t claim your humanity you will become a statistic.",
  "I don’t want to die without any scars."
];

const MotivationView = () => {
  return (
    <div>
      {motivationQuotes.map((quote, index) => (
        <MotivationListItem key={index} quote={quote} />
      ))}
    </div>
  );
};

export default MotivationView;