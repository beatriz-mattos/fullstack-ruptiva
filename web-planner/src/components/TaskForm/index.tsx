import * as React from 'react';
import { FormEvent } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { PlannerDayProps } from '../../pages/PlannerPage';
import { TaskFormContainer } from "../../utils/styles";
import { api } from "../../services/api";

export const TaskForm = (props: PlannerDayProps) => {
    const [newTaskText, onChangeTaskText] = useInputValue("");
    const [newTaskDay, onChangeTaskDay] = useInputValue("");

    const onSubmitTaskForm = (e: any) => {
        e.preventDefault();
    const body = { "text": newTaskText, "day": newTaskDay };

    api.post("/create", body).then((response: any) => {
        console.log(response);
        props.updateTasks();
    });

        console.log(newTaskText);
        console.log(newTaskDay);
    };

    return ( 
        <TaskFormContainer onSubmit={onSubmitTaskForm}>
            <input type="text" placeholder="Nova tarefa" value={newTaskText} onChange={onChangeTaskText}/>
            <select value={newTaskDay} onChange={onChangeTaskDay}>
                <option value="dom">Domingo</option>
                <option value="seg">Segunda</option>
                <option value="ter">Terça</option>
                <option value="qua">Quarta</option>
                <option value="qui">Quinta</option>
                <option value="sex">Sexta</option>
                <option value="sab">Sábado</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </TaskFormContainer>
    );
};