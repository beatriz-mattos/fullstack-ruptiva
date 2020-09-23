import React, { useEffect, useState } from 'react';
import { PlannerDay } from '../../components/PlannerDay';
import { TaskForm } from '../../components/TaskForm/index';
import { PlannerContainer } from '../../utils/styles';
import { Task } from '../../model/Task';
import { api } from '../../services/api';

export interface PlannerDayProps {
  dayName: string;
  tasks: Task[];
  //updateTasks: 
};

export const PlannerPage: React.FC<PlannerDayProps> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // const tasks: Task[] = [
  //   {
  //     text: 'Comer batata',
  //     day: 'Terça',
  //     id: '234gh32h534645k6787ç9',
  //   },
  //   {
  //     text: 'Estudar',
  //     day: 'Quarta',
  //     id: '234gh32h534645k678710',
  //   },
  // ];

  const getTasks = () => {
    api.get('/').then((response) => {
      setTasks(response.data);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const filterTasksByDay = (day: string) => {
    return tasks.filter((task) => {
      return task.day === day;
    });
  };

  return (
    <div>
      <h3>Planner Page</h3>
      {/* jogar no taskform -> updateTasks={getTasks} */}
      <TaskForm />
      <PlannerContainer>
        <PlannerDay dayName={'Domingo'} tasks={filterTasksByDay('Domingo')} />
        <PlannerDay dayName={'Segunda'} tasks={filterTasksByDay('Segunda')} />
        <PlannerDay dayName={'Terça'} tasks={filterTasksByDay('Terça')} />
        <PlannerDay dayName={'Quarta'} tasks={filterTasksByDay('Quarta')} />
        <PlannerDay dayName={'Quinta'} tasks={filterTasksByDay('Quinta')} />
        <PlannerDay dayName={'Sexta'} tasks={filterTasksByDay('Sexta')} />
        <PlannerDay dayName={'Sábado'} tasks={filterTasksByDay('Sábado')} />
      </PlannerContainer>
    </div>
  );
};
