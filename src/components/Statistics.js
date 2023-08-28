import { ListItem } from './Feedback.styled';
import { List } from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <List>
        <ListItem>Good: {good}</ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
        <ListItem>Total feedback: {total}</ListItem>
        <ListItem>Positive percentage: {positivePercentage}%</ListItem>
      </List>
    </div>
  );
};
