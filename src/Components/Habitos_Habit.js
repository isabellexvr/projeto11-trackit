import styled from "styled-components";
import { FaTrash } from 'react-icons/fa';
import axios from "axios";
import { useToken } from "../context/Token";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

export default function Habitos_Habit({ habits, setLoading }) {

    const { token } = useToken()

    function deleteHabit(id) {
        setLoading(true)
        const config = {
            headers: { "Authorization": "Bearer " + token }
        }
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            .then(() => {
                setLoading(false)
                alert("Hábito excluído com sucesso!")
            })
            .catch(err => {
                setLoading(false)
            })
    }

    return (
        <>
            {!habits && (
                <div> carregando...</div>
            )}
            {habits && (
                habits.map((habit, i) =>
                    <HabitStyle key={i} size={habit.name.length >= 17 ? "1.5" : "1"} data-identifier="habit-name">
                        <HabitContainer>
                            <HabitTitle>
                                {habit.name}
                            </HabitTitle>
                            <FaTrash data-identifier="delete-habit-btn" onClick={() => deleteHabit(habit.id)} />
                        </HabitContainer>
                        <WeekDaysContainer>
                            {weekDays.map((day, i) =>
                                <WeekDayButton selected={habit.days.includes(i)}>
                                    {day}
                                </WeekDayButton>
                            )}
                        </WeekDaysContainer>
                    </HabitStyle>
                )
            )}
        </>
    )
}

//18 => 2*91px

const HabitStyle = styled.div`
    width: 340px;
    height: ${props => props.size * 91}px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const HabitContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg {
            margin-right: 10px;
            color: #666666;
        }
`;

const HabitTitle = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-left: 15px;
    margin-top: 13px;
    margin-bottom: 8px;

`;

const WeekDayButton = styled.div`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: ${props => props.selected ? "white" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#DBDBDB" : "white"};
    margin-right: 4px;
`;

const WeekDaysContainer = styled.div`
    display: flex;
    margin-left: 14px;
`;