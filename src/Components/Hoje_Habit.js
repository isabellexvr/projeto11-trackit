import styled from "styled-components";
import { FaCheckSquare } from 'react-icons/fa';
import axios from "axios";
import { useToken } from "../context/Token";

export default function Hoje_Habit({ children, habit, setCompletedHabits, completedHabits }) {
    const { token } = useToken()

    const config = { headers: { "Authorization": `Bearer ${token}` } }

    function checking() {

        if (completedHabits.some(ch => ch === habit)) {
            const newList = completedHabits.filter(ch => habit !== ch)
            setCompletedHabits(newList)
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`
                , habit.id, config)
                .then()
                .catch((err) => {
                    console.log(err.response.data)
                })
        } else {
            const newList = [...completedHabits, habit]
            setCompletedHabits(newList)
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`
                , habit.id, config)
                .then()
                .catch( (err) => {
                    console.log(err.response.data)
                })
        }
    }
    return (
        <>
            <HabitStyle data-identifier="today-infos">
                {children}
                <FaCheckSquare
                    data-identifier="done-habit-btn"
                    color={completedHabits.includes(habit) ? "#8FC549" : "#E7E7E7"}
                    onClick={checking}
                />
            </HabitStyle>
        </>
    )
}

const HabitStyle = styled.div`
    width: 92%;
    height: 94px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        width: 69px;
        height: 69px;
        color: ${props => props.color};
        margin-right: 13px;
    }
`;