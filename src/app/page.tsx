'use client'
import React from "react";
import './global.css'
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {enterCommand, selectCommands, selectInput, updateInput} from "@/store/commandsSlice";

function Home() {
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
                    {command}
                </div>
            ))}
            <div className="input__container">
                <div className="input__text">
                    User ~
                </div>
                <input className='input' type="text" onKeyDown={enterCommandHandle} onChange={(e) => dispatch(updateInput(e.target.value))}
                       value={inputCommand}/>
            </div>
        </section>
    );
}

export default Home