'use client'
import './global.css'
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {decrement, increment, selectCount} from "@/store/countSlice";

function Home() {
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch();

    return (
        <section className='main'>
            <div className="title">
                {count}
            </div>
            <button className='link' onClick={() => dispatch(increment())}>
                +
            </button>
            <button className='link' onClick={() => dispatch(decrement())}>
                -
            </button>
        </section>
    );
}

export default Home