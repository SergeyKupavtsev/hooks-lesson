import React, { useEffect, useRef, useState } from 'react';
import ForwardRefInput from './ForwardRefInput';

const UseRefHook = () => {
    const ref = useRef(null);
    const listRef = useRef(null);
    const inputRef = useRef(null);

    const [value, setValue] = useState("")
    const [isPlaying, setIsPlaying] = useState(false);
    const [isStart, setIsStart] = useState(false);
    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if (nextIsPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    function scrollToIndex(index) {
        const listNode = listRef.current;
        // This line assumes a particular DOM structure:
        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    const intervalRef = useRef(0);
    function handleStartClick() {
        const intervalId = setInterval(() => {
            console.log("Интервал работает");
        }, 300);
        intervalRef.current = intervalId;
    }

    function handleStopClick() {
        const intervalId = intervalRef.current;
        clearInterval(intervalId);
    }


    useEffect(() => {
        console.log("Что то отрендерилось");
    })
    useEffect(() => {
        console.log("Наш ref");
        console.log(inputRef.current);
    }, [inputRef])


    const focus = () => {
        inputRef.current.focus();
    }
    const blur = () => {
        inputRef.current.blur();
    }

    return (
        <div>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column" }}>
                <p>{isStart ? "Интервал запущен" : "Интервал на паузе"}</p>
                <button style={{ marginTop: 10, marginRight: 5, width: 100 }} onClick={handleStartClick}>Запуск</button>
                <button style={{ marginTop: 10, width: 100 }} onClick={handleStopClick}>Пауза</button>
            </div>
            <h3>Ввод данных</h3>
            {/* <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} /> */}

            <h3>Компонент input</h3>
            <ForwardRefInput value={value} setValue={setValue} ref={inputRef} />
            <br />
            <button style={{ marginTop: 10, marginRight: 5 }} onClick={focus}>Фокус на вводе</button>
            <button style={{ marginTop: 10 }} onClick={blur}>Убрать фокус</button>
            <>
                <nav style={{ marginTop: 20 }}>
                    <button onClick={() => scrollToIndex(0)}>
                        Tom
                    </button>
                    <button onClick={() => scrollToIndex(1)}>
                        Maru
                    </button>
                    <button onClick={() => scrollToIndex(2)}>
                        Jellylorum
                    </button>
                </nav>
                <div  >
                    <ul ref={listRef} >
                        <div style={{ width: 300, overflow: "scroll", display: "flex" }}>


                            <li style={{ marginRight: 20 }}>
                                <img
                                    src="https://placekitten.com/g/200/200"
                                    alt="Tom"
                                />
                            </li>
                            <li style={{ marginRight: 20 }}>
                                <img
                                    src="https://placekitten.com/g/300/200"
                                    alt="Maru"
                                />
                            </li>
                            <li style={{ marginRight: 20 }}>
                                <img
                                    src="https://placekitten.com/g/250/200"
                                    alt="Jellylorum"
                                />
                            </li>
                        </div>
                    </ul>
                </div>
            </>
            <div style={{ flexDirection: "column", display: "flex", justifyContent: "flex-start" }}>
                <button style={{ width: 200, marginTop: 20, marginBottom: 10 }} onClick={handleClick}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <video
                    width="250"
                    ref={ref}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source
                        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>


        </div>
    );
};

export default UseRefHook;