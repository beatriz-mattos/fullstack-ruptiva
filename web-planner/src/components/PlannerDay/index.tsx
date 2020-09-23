import * as React from 'react';
import { PlannerDayProps } from '../../pages/PlannerPage';
import { PlannerDayContainer } from "../../utils/styles";

export const PlannerDay = (props: PlannerDayProps) => {
  return (
    <PlannerDayContainer>
      <div>
      <p><strong>{props.dayName}</strong></p>
      </div>
      <div>
        {props.tasks.map((task) => {
          return <p key={task.id}>{task.text}</p>
        })}
      </div>
    </PlannerDayContainer>
  );
};
