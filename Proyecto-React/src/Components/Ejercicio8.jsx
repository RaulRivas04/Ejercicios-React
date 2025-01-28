import Joke from './Joke';

const Ejercicio8 = () => {
    // Datos en formato JSON
    const jokes = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit",
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#",
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                padding: "20px",
            }}
        >
            {/* Usamos map para renderizar cada chiste */}
            {jokes.map((joke) => (
                <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
            ))}
        </div>
    );
};

export default Ejercicio8;
