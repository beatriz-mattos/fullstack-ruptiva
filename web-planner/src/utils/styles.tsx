import styled from "styled-components";

export const TaskFormContainer = styled.form`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 8px;
    grid-auto-flow: column;
`

export const PlannerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    padding: 32px;
`
export const PlannerDayContainer = styled.div`
    border: 1px solid black;
    padding: 0 8px;
`