'use client'
import React from "react";
import './global.css'
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {enterCommand, selectCommands, selectInput, updateInput} from "@/store/slices/commandsSlice";
import {selectUserId, selectUserName} from "@/store/slices/userSlice";

function Home() {
    const userName = useAppSelector(selectUserName)
    const userId = useAppSelector(selectUserId)

    const commands = useAppSelector(selectCommands)
    const inputCommand = useAppSelector(selectInput)
    const dispatch = useAppDispatch();
    const enterCommandHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(enterCommand(inputCommand))
            dispatch(updateInput(''))
        }
    }

    return (
        <section className='commands__container'>
            {commands.map((command, index) => (
                <div className='command' key={`command_${index}`}>
                    {userName}|{userId} ~ % {command}
                </div>
            ))}
            <div className="input__container">
                <div className="input__text">
                    {userName}|{userId} ~ %
                </div>
                <input className='input' type="text" onKeyDown={enterCommandHandle} onChange={(e) => dispatch(updateInput(e.target.value))}
                       value={inputCommand} />
            </div>
        </section>
    );
}

export default Home